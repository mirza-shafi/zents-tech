import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileSearch, Wrench, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Zents Tech publishes case studies as real engagements complete, with real numbers. Nothing here is placeholder or invented.",
};

const format = [
  {
    icon: FileSearch,
    cls: "bg-accent text-primary",
    title: "The problem",
    body: "What was manual, slow, or breaking before we got involved — in the client's own words, not ours.",
  },
  {
    icon: Wrench,
    cls: "bg-violet-tint text-violet",
    title: "What we built",
    body: "The actual system, agent, or automation shipped — named tools, real scope, no vague 'AI solution' language.",
  },
  {
    icon: TrendingUp,
    cls: "bg-good-tint text-good",
    title: "The outcome",
    body: "A real number — hours saved, tickets resolved, leads recovered — or we don't publish it at all.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <span className="eyebrow">Case Studies</span>
            <h1 className="mt-3 max-w-2xl text-balance font-display text-5xl font-extrabold tracking-tighter md:text-6xl">
              Nothing published here yet — on purpose.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We&rsquo;d rather show you an empty page than a page full of
              invented numbers. As real engagements complete, they get
              published here — with the client&rsquo;s name (when they&rsquo;re
              comfortable being named) and a real result, not a projection.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30">
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <span className="eyebrow">What goes here</span>
            <h2 className="mt-3 max-w-xl text-balance font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              The format every case study will follow.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {format.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title} delay={i * 0.08}>
                  <Card>
                    <CardContent>
                      <div className={`flex size-10 items-center justify-center rounded-full ${f.cls}`}>
                        <Icon className="size-5" strokeWidth={1.75} />
                      </div>
                      <h3 className="mt-4 font-display text-base font-bold">{f.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="container-page py-16 text-center md:py-20">
          <Reveal>
            <h2 className="mx-auto max-w-xl text-balance font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Want to be the first one on this page?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              Early clients get more attention, not less — you&rsquo;d be one of
              a handful of engagements, not client #400.
            </p>
            <div className="mt-8 flex justify-center">
              <Button size="lg" nativeButton={false} render={<Link href="/contact" />}>
                Start with an Audit
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
