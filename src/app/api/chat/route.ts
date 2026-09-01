import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { serviceCategories, productizedServices, lifecycle, contact, faqs } from "@/lib/site-data";

type ChatMessage = { role: "user" | "assistant"; content: string };

function buildSystemPrompt(): string {
  const services = serviceCategories
    .map((c) => `- ${c.name}: ${c.description} Includes: ${c.items.join(", ")}.`)
    .join("\n");
  const offers = productizedServices
    .map(
      (s) =>
        `- ${s.name} (${s.timeline}) — for ${s.audience}. Problem it solves: ${s.problem} Bangladesh price: ${s.priceBDT}. International price: ${s.priceUSD}.`
    )
    .join("\n");
  const process = lifecycle.map((l, i) => `${i + 1}. ${l.step} — ${l.detail}`).join("\n");
  const faqText = faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n");

  return `You are the website chat assistant for Zents Tech, a small, founder-led AI Systems & Business Automation studio based in Dhaka, Bangladesh, serving both Bangladeshi and international clients.

Ground rules — follow these strictly:
- Only use the facts listed below. Never invent client names, case studies, team size, or numbers that aren't given here.
- Zents Tech is a new, two-person, founder-led studio with no large team and no published case studies yet. If asked about team size, clients, or track record, say so plainly rather than implying more scale than exists.
- Keep answers short, direct, and honest. This brand deliberately avoids hype language like "cutting-edge AI technology" or "industry-leading" — match that tone.
- If a question isn't covered by the facts below, say you don't have that answer and point them to email or WhatsApp.
- Never quote a price that isn't in the "Productized offers" list below.

Services:
${services}

Productized offers (fixed-scope, priced):
${offers}

How an engagement typically moves, step by step:
${process}

Contact: email ${contact.email}, WhatsApp ${contact.whatsappNumber} (${contact.whatsappHref}). Based in Dhaka, Bangladesh. Typical response time: within one business day.

Questions already answered on the site's FAQ:
${faqText}`;
}

function fallbackAnswer(message: string): string {
  const normalized = message.toLowerCase();
  let best: { score: number; a: string } | null = null;

  for (const f of faqs) {
    const words = f.q.toLowerCase().split(/\W+/).filter((w) => w.length > 3);
    const score = words.filter((w) => normalized.includes(w)).length;
    if (score > 0 && (!best || score > best.score)) {
      best = { score, a: f.a };
    }
  }

  if (best) return best.a;

  return `I don't have a pre-written answer for that yet. Email ${contact.email} or WhatsApp ${contact.whatsappNumber} and a real person will reply within one business day.`;
}

export async function POST(request: Request) {
  let body: { messages?: ChatMessage[] };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const messages = body.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "messages is required." }, { status: 400 });
  }

  const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");
  if (!lastUserMessage?.content?.trim()) {
    return NextResponse.json({ error: "Empty message." }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;

  // No key configured yet — answer from the fixed FAQ list instead of
  // pretending to be an LLM. Swap in ANTHROPIC_API_KEY later and this
  // route switches to real model calls with no other code changes.
  if (!apiKey) {
    return NextResponse.json({ reply: fallbackAnswer(lastUserMessage.content), mode: "fallback" });
  }

  try {
    const anthropic = new Anthropic({ apiKey });
    const response = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 400,
      system: buildSystemPrompt(),
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    });

    const text = response.content.map((block) => (block.type === "text" ? block.text : "")).join("");

    return NextResponse.json({ reply: text || fallbackAnswer(lastUserMessage.content), mode: "ai" });
  } catch (error) {
    console.error("[chat] Anthropic API error", error);
    return NextResponse.json({ reply: fallbackAnswer(lastUserMessage.content), mode: "fallback" });
  }
}
