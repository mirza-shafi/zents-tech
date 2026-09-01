import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { lifecycle } from "@/lib/site-data";
import { slugify } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How an engagement with Zents Tech moves from a diagnostic to a monitored system, and eventually a product.",
};

const detail: Record<string, string[]> = {
  Audit: [
    "We map one process end-to-end — the tools, the handoffs, the manual steps.",
    "You get a prioritized list of what's worth automating and what isn't.",
    "One costed quick-win is included, so the audit pays for itself immediately.",
  ],
  "Quick Win": [
    "A small, contained automation — usually the one flagged in the audit.",
    "Ships in days, not weeks, so trust is built before a larger invoice.",
  ],
  "Automation / AI System": [
    "The core build: an agent, a workflow, or an integration live in production.",
    "Fixed scope, fixed price, agreed up front — no open-ended hours.",
  ],
  Software: [
    "Where a workflow has outgrown any off-the-shelf tool, we build the internal software to hold it.",
    "Only ever proposed once an automation or agent is already live and proven.",
  ],
  "Monthly Support": [
    "Automations break quietly when a third-party API changes — this is where we catch it before your customer does.",
    "A monthly retainer, not a support ticket queue.",
  ],
  Product: [
    "When we've built a similar internal tool for a third client in the same niche, we productize it.",
    "This is the actual path from agency to product company — not a speculative platform built in advance.",
  ],
};

export default function ProcessPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <span className="eyebrow">Process</span>
            <h1 className="mt-3 max-w-2xl text-balance font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              The path from a diagnostic to a system you don&rsquo;t think about.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Most clients don&rsquo;t start with a six-figure automation
              project. They start with a question — and the path from there is
              deliberately gradual.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container-page py-16 md:py-20">
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-[15px] hidden w-px bg-border md:block" />
            <div className="flex flex-col gap-10">
              {lifecycle.map((stage, i) => (
                <div
                  key={stage.step}
                  id={slugify(stage.step)}
                  className="relative flex scroll-mt-24 gap-6 md:gap-8"
                >
                  <div className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-primary bg-background font-mono text-xs font-semibold text-primary">
                    {i + 1}
                  </div>
                  <div className="pb-2">
                    <h2 className="font-display text-xl font-bold">{stage.step}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{stage.detail}</p>
                    <ul className="mt-3 flex flex-col gap-1.5">
                      {detail[stage.step]?.map((line) => (
                        <li
                          key={line}
                          className="text-sm leading-relaxed text-foreground/80 before:mr-2 before:text-primary before:content-['—']"
                        >
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <Button size="lg" nativeButton={false} render={<Link href="/contact" />}>
              Start with an Audit
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
