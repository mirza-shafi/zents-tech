import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { ProcessTimeline } from "@/components/process-timeline";
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

const steps = lifecycle.map((stage) => ({
  slug: slugify(stage.step),
  step: stage.step,
  detail: stage.detail,
  points: detail[stage.step] ?? [],
}));

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
          <ProcessTimeline steps={steps} />

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
