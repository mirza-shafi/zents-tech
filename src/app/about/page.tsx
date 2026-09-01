import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zents Tech is a Dhaka-based studio building AI systems and business automation for a small number of clients at a time.",
};

const principles = [
  {
    title: "Systems, not stunts",
    body: "A demo that impresses in a meeting and a system that survives production are different things. We build for the second one.",
  },
  {
    title: "Scoped, not open-ended",
    body: "Every engagement has a fixed price and a fixed timeline before it starts. No hourly ambiguity, no scope that quietly grows.",
  },
  {
    title: "Monitored, not handed off",
    body: "Automations break quietly when a third-party API changes. We stay attached to what we build, on a retainer, so we notice first.",
  },
  {
    title: "Two focuses, not eight",
    body: "AI systems and business automation are the business. Software engineering exists to support them, not to compete for attention with them.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page py-16 md:py-20">
          <span className="eyebrow">About</span>
          <h1 className="mt-3 max-w-2xl text-balance font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            A small studio, on purpose.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Zents Tech is a founder-led technology studio based in Dhaka,
            building AI systems and automation for a deliberately small
            number of clients at a time — Bangladeshi SMEs and international
            businesses, side by side.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page grid gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight">
              Why we started here
            </h2>
            <p className="mt-4 text-muted-foreground">
              Bangladesh&rsquo;s small and mid-sized businesses run almost
              entirely on manual process — most use at least one digital
              tool, but very few run anything as advanced as a proper CRM or
              ERP. At the same time, the same manual bottlenecks (support
              queues, lead follow-up, disconnected tools) show up in
              e-commerce and service businesses everywhere else in the world.
            </p>
            <p className="mt-4 text-muted-foreground">
              We build for both, from Dhaka: local businesses that need a
              first real system, and international businesses that need the
              same engineering discipline at a fair price.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight">
              Where we are today
            </h2>
            <p className="mt-4 text-muted-foreground">
              We&rsquo;re early. We&rsquo;d rather say that plainly than
              inflate it — no fabricated client counts, no vanity metrics. We
              take on a small number of engagements at a time, on purpose,
              because the systems we build have to actually keep working
              after we hand them over.
            </p>
            <p className="mt-4 text-muted-foreground">
              As we deliver, we publish real outcomes with real numbers —
              nothing else goes on this site.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container-page py-16 md:py-20">
          <h2 className="font-display text-2xl font-extrabold tracking-tight">
            What we believe
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {principles.map((p) => (
              <Card key={p.title}>
                <CardContent>
                  <h3 className="font-display text-base font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Button size="lg" render={<Link href="/contact" />}>
              Get in touch
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
