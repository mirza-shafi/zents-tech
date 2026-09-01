import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Zents Tech is hiring early. No fixed job postings yet — here's what an early hire actually gets, what we're looking for, and how to apply.",
};

const reasons = [
  {
    title: "Real ownership, from day one",
    body: "You won't be the fifth engineer on someone else's project. On a two-service company, you own a system end-to-end — from the client conversation to what actually ships.",
  },
  {
    title: "Work that spans two markets",
    body: "One week it's automating a Dhaka real estate agency's WhatsApp leads. The next it's an AI support agent for a US e-commerce brand. Real variety, not one vertical, one stack, forever.",
  },
  {
    title: "Ship in weeks, not quarters",
    body: "Small team, almost no layers. What you build goes in front of a real client fast — you see the outcome, not just the ticket status.",
  },
  {
    title: "Grow as the company grows",
    body: "The service architecture, the positioning, even how the team is structured — it's all still being written. An early hire shapes more of that than they would anywhere bigger.",
  },
];

const expectations = [
  {
    title: "Pay that's fair for the stage",
    body: "Competitive for a Dhaka-based studio at this point, with a clear, direct path to more as revenue grows — not a vague promise or equity instead of salary.",
  },
  {
    title: "Flexible, remote-friendly work",
    body: "Most work is async by necessity — clients are in Bangladesh and abroad. Occasional in-person time in Dhaka when it's useful, not mandatory desk time.",
  },
  {
    title: "Direct access to the founder",
    body: "No management layers between you and the person setting direction. Disagreements get resolved in a conversation, not a ticket queue.",
  },
  {
    title: "Specifics discussed directly",
    body: "We're small enough that compensation, scope, and growth get talked through as real conversations — not buried in a generic policy document we don't have yet.",
  },
];

const values = [
  { title: "Ship scoped work", body: "Fixed scope, fixed timeline, agreed before you start — internally, the same as with clients." },
  { title: "Say the hard thing early", body: "A risk flagged in week one is a fix. The same risk found in week four is a fire." },
  { title: "Own the outcome", body: "Not just the ticket — if the system doesn't work for the client, that's still your problem to help solve." },
  { title: "Two focuses, not eight", body: "AI Systems and Business Automation. We turn down work that doesn't fit rather than spread the team thin." },
];

const roles = [
  {
    title: "Automation & Backend Engineers",
    body: "Comfortable wiring APIs, workflow tools (n8n/Make-style thinking, not necessarily the specific tool), and CRMs together into something that doesn't break when a third-party API changes.",
  },
  {
    title: "AI-minded Developers",
    body: "Have actually built something with an LLM — an agent, a RAG pipeline, a chatbot that does real work — not just used ChatGPT to write code faster.",
  },
  {
    title: "Full-Stack Engineers",
    body: "React/Next.js and comfortable owning a feature from database to UI. We build real internal tools and software, not just landing pages.",
  },
];

const process = [
  { step: "Send your resume, and something real you've built", body: "A repo, a shipped project, an automation you're proud of — that tells us more than a cover letter." },
  { step: "A direct conversation", body: "With the founder, not a recruiter reading from a script. We'll talk about what you've built and what you'd actually want to work on here." },
  { step: "A small paid trial task", body: "On real or realistic work, if it looks like a fit both ways. Scoped and paid — the same standard we hold client work to." },
];

export default function CareerPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page grid items-start gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <Reveal>
            <span className="eyebrow">Career</span>
            <h1 className="mt-3 max-w-2xl text-balance font-display text-5xl font-extrabold tracking-tighter md:text-6xl">
              Build the systems, not just ship the work.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Zents Tech is small on purpose right now, which means an early
              hire gets real ownership instead of a seat in a big org chart. No
              fixed job postings below — this page explains who we want to
              hear from and how to actually reach us.
            </p>
          </Reveal>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-[0_1px_2px_rgba(18,22,28,0.04),0_16px_40px_-12px_rgba(18,22,28,0.35)]">
            <Image src="/images/code-screen.jpg" alt="" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              Why join this early
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08}>
                <Card>
                  <CardContent>
                    <h3 className="font-display text-base font-bold">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30">
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              What you can expect
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              We&rsquo;d rather tell you plainly what&rsquo;s actually true at
              this stage than list perks we don&rsquo;t have.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {expectations.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08}>
                <Card>
                  <CardContent>
                    <h3 className="font-display text-base font-bold">{e.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              How we work
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-display text-sm font-bold">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30">
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              Who we want to hear from
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              No fixed openings right now — these are the kinds of people we&rsquo;d
              want to talk to whenever the next hire happens.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08}>
                <Card>
                  <CardContent>
                    <h3 className="font-display text-base font-bold">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              How it actually works
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-col gap-8">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08} className="flex gap-5">
                <span className="font-mono text-sm text-muted-foreground/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold">{p.step}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-page py-16 text-center md:py-20">
          <Reveal>
            <h2 className="mx-auto max-w-xl text-balance font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              No portal, no forms that go nowhere — just email us.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              Send your resume and a link to something you&rsquo;ve built to{" "}
              <a href={`mailto:${contact.email}`} className="text-primary underline underline-offset-2">
                {contact.email}
              </a>{" "}
              with &ldquo;Career&rdquo; in the subject, plus a couple of lines
              on what you&rsquo;d actually want to work on here.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                size="lg"
                nativeButton={false}
                render={<a href={`mailto:${contact.email}?subject=Career%20at%20Zents%20Tech`} />}
              >
                Email your resume
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
