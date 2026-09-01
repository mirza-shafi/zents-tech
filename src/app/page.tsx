import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { serviceCategories, lifecycle } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container-page grid gap-10 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
          <div>
            <span className="eyebrow">AI Systems &amp; Business Automation</span>
            <h1 className="mt-4 text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl">
              Most of your team&rsquo;s day is spent on work a system could do instead.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We build the AI agents, automations, and internal software that
              take that work off their plate — wired into the tools you
              already use, and monitored so they keep working after we ship.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" nativeButton={false} render={<Link href="/contact" />}>
                Get an Automation &amp; AI Readiness Audit
                <ArrowRight className="size-4" />
              </Button>
              <Button size="lg" variant="outline" nativeButton={false} render={<Link href="/process" />}>
                See how we work
              </Button>
            </div>
          </div>

          <Card className="self-start bg-card/60">
            <CardContent className="space-y-4">
              <div className="eyebrow">Where the hours actually go</div>
              {[
                "Answering the same support question for the hundredth time",
                "Copying a lead from WhatsApp into a spreadsheet, manually",
                "Chasing three tools to find one customer's order status",
                "Re-typing the same quote or invoice by hand",
              ].map((line) => (
                <div key={line} className="flex items-start gap-3">
                  <div className="mt-2 size-1.5 shrink-0 rounded-full bg-destructive" />
                  <p className="text-sm leading-relaxed text-foreground/90">{line}</p>
                </div>
              ))}
              <p className="border-t border-border pt-4 text-sm text-muted-foreground">
                Every one of these is a system, not a hire.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Founding note — honest, no fabricated trust signals */}
      <section className="border-b border-border bg-muted/40">
        <div className="container-page py-10">
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Zents Tech is a new, founder-led studio</span>{" "}
            based in Dhaka, building AI systems and automation for a small
            number of Bangladeshi and international businesses at a time. We&rsquo;d
            rather earn the right to publish case studies than claim numbers we
            can&rsquo;t show you yet.
          </p>
        </div>
      </section>

      {/* Systems overview */}
      <section id="systems" className="border-b border-border">
        <div className="container-page py-20">
          <div className="max-w-2xl">
            <span className="eyebrow">What we build</span>
            <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              Three systems, not eight services.
            </h2>
            <p className="mt-4 text-muted-foreground">
              AI Systems and Business Automation are the front door.
              Software Engineering is what holds them together once a
              workflow outgrows an off-the-shelf tool.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {serviceCategories.map((cat) => (
              <Card key={cat.name} className="flex flex-col">
                <CardContent className="flex flex-1 flex-col">
                  <span className="eyebrow">{cat.tag}</span>
                  <h3 className="mt-2 font-display text-xl font-bold">{cat.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>
                  <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <Button variant="outline" nativeButton={false} render={<Link href="/systems" />}>
              See the full system architecture &amp; pricing
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="border-b border-border bg-muted/30">
        <div className="container-page py-20">
          <span className="eyebrow">How we work</span>
          <h2 className="mt-3 max-w-xl text-balance font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            From a diagnostic to a system you rely on.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lifecycle.map((stage, i) => (
              <div key={stage.step} className="flex gap-4">
                <span className="font-mono text-sm text-muted-foreground/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold">{stage.step}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {stage.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-b border-border">
        <div className="container-page py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <span className="eyebrow">Why Zents Tech</span>
              <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight">
                Engineering-led, not tool-reseller-led.
              </h2>
              <p className="mt-4 text-muted-foreground">
                We name the actual stack we build on and the actual
                integrations we connect — not &ldquo;cutting-edge AI
                technology.&rdquo; Every system we ship comes with monitoring,
                because automations break quietly when a third-party API
                changes, and someone has to notice before your customer does.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Dual-market delivery", "Priced and built for both Bangladeshi and international clients."],
                ["Scoped, not open-ended", "Every engagement starts fixed-fee and time-boxed."],
                ["Monitored after launch", "A retainer, not a handoff, on everything we build."],
                ["Two focuses, not eight", "AI systems and automation — software when it's needed."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-lg border border-border p-4">
                  <h4 className="font-display text-sm font-bold">{title}</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="container-page py-20 text-center">
          <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Start with a 20-minute systems review.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            We&rsquo;ll look at one manual process in your business and tell
            you honestly whether a system is worth building for it.
          </p>
          <div className="mt-8">
            <Button size="lg" nativeButton={false} render={<Link href="/contact" />}>
              Book a systems review
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
