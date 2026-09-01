import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Bot, Workflow, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { CategoryFlow } from "@/components/category-flow";
import { serviceCategories, pillarColorClasses } from "@/lib/site-data";

const categoryIcons = { Bot, Workflow, Code2 };

const heroImages: Record<string, string> = {
  "ai-systems": "/images/code-screen.jpg",
  "business-automation": "/images/dashboard-metrics.jpg",
  "software-engineering": "/images/about-workspace.jpg",
};

const detailCopy: Record<string, { intro: string; itemDetails: string[] }> = {
  "ai-systems": {
    intro:
      "Most “AI features” are a chatbot bolted onto a website that can't actually do anything. An AI System here is wired into your real tools — it reads a message, checks your actual data, and takes action or hands off cleanly when it can't.",
    itemDetails: [
      "An agent that follows the same steps a person would — check a status, update a record, send a reply — without needing a human for every step.",
      "A support or sales agent that answers from your real policies and pricing, not a generic script.",
      "A knowledge assistant (RAG) that answers from your actual documents — SOPs, pricing sheets, policies — instead of guessing.",
      "A voice receptionist that answers calls and books, routes, or logs them when no one's free to pick up.",
    ],
  },
  "business-automation": {
    intro:
      "The bottleneck usually isn't one tool — it's the manual step between two tools that already exist. Business Automation closes that gap so a lead, order, or ticket moves on its own instead of waiting for someone to copy it over.",
    itemDetails: [
      "Automation that watches your CRM and your other tools and keeps them in sync, without someone doing it by hand.",
      "A lead that comes in on WhatsApp, a form, or an ad gets logged and routed the moment it arrives — not at end of day.",
      "Your tools connected directly through their APIs, so data moves between them without a spreadsheet in the middle.",
      "The repetitive parts of marketing and ops — follow-ups, reminders, reporting — running on a schedule instead of a to-do list.",
    ],
  },
  "software-engineering": {
    intro:
      "Sometimes the workflow has genuinely outgrown what a no-code tool or off-the-shelf SaaS can do. That's when we build the actual software — scoped tightly to the one problem, not a speculative platform.",
    itemDetails: [
      "An internal tool or dashboard built around how your team actually works, not how a generic SaaS assumes you work.",
      "A small, real product when the same internal tool has now been built for a third client in the same niche.",
      "A customer-facing web app when the workflow needs its own interface, not just an internal one.",
      "The APIs and architecture underneath — built to hold up once an automation or agent is already live and depended on.",
    ],
  },
};

export function generateStaticParams() {
  return serviceCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/systems/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const cat = serviceCategories.find((c) => c.slug === slug);
  if (!cat) return {};
  return {
    title: cat.name,
    description: cat.description,
  };
}

export default async function SystemDetailPage({ params }: PageProps<"/systems/[slug]">) {
  const { slug } = await params;
  const cat = serviceCategories.find((c) => c.slug === slug);
  if (!cat) notFound();

  const Icon = categoryIcons[cat.icon];
  const colors = pillarColorClasses[cat.color];
  const copy = detailCopy[cat.slug];
  const otherCategories = serviceCategories.filter((c) => c.slug !== cat.slug);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container-page grid items-start gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <Reveal>
            <Link
              href="/systems"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" /> All systems
            </Link>
            <div className={`mt-5 flex size-12 items-center justify-center rounded-full ${colors.badge}`}>
              <Icon className="size-6" strokeWidth={1.75} />
            </div>
            <span className="eyebrow mt-4 block">{cat.tag}</span>
            <h1 className="mt-2 text-balance font-display text-5xl font-extrabold tracking-tighter md:text-6xl">
              {cat.name}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{copy.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" nativeButton={false} render={<Link href="/contact" />}>
                Get an Audit
                <ArrowRight className="size-4" />
              </Button>
              <Button size="lg" variant="outline" nativeButton={false} render={<Link href="/systems" />}>
                See pricing &amp; full architecture
              </Button>
            </div>
          </Reveal>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-[0_1px_2px_rgba(18,22,28,0.04),0_16px_40px_-12px_rgba(18,22,28,0.35)]">
            <Image src={heroImages[cat.slug]} alt="" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="border-b border-border">
        <div className="container-page py-16 md:py-20">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">What&rsquo;s included</span>
            <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              {cat.items.length} things this actually covers.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {cat.items.map((item, i) => (
              <Reveal key={item} delay={i * 0.06} className="flex gap-4">
                <div
                  className={`flex size-9 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold ${colors.badge}`}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display text-base font-bold">{item}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{copy.itemDetails[i]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visualization */}
      <section className="border-b border-border bg-muted/30">
        <div className="container-page py-16 md:py-20">
          <Reveal className="text-center">
            <span className="eyebrow">How it connects</span>
            <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              {cat.name} as a flow, not a feature list.
            </h2>
          </Reveal>
          <div className="mt-14">
            <CategoryFlow items={cat.items} color={cat.color} />
          </div>
        </div>
      </section>

      {/* Margin / entry / recurring */}
      <section className="border-b border-border">
        <div className="container-page py-16 md:py-20">
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-lg border border-border p-5">
              <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">Margin</p>
              <p className="mt-2 text-sm">{cat.margin}</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">Entry point</p>
              <p className="mt-2 text-sm">{cat.entry}</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">Recurring</p>
              <p className="mt-2 text-sm">{cat.recurring}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other systems */}
      <section>
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <span className="eyebrow">Other systems</span>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight md:text-3xl">
              The other two pieces.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {otherCategories.map((c) => {
              const OtherIcon = categoryIcons[c.icon];
              const otherColors = pillarColorClasses[c.color];
              return (
                <Link
                  key={c.slug}
                  href={`/systems/${c.slug}`}
                  className="group rounded-xl border border-border p-5 transition-colors hover:border-primary/40"
                >
                  <div className={`flex size-10 items-center justify-center rounded-full ${otherColors.badge}`}>
                    <OtherIcon className="size-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold transition-colors group-hover:text-primary">
                    {c.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
