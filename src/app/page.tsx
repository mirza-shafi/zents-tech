import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Bot, Workflow, Code2, Globe, Target, Activity, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { Workflow3DSection } from "@/components/workflow-3d-section";
import { TechMarquee } from "@/components/tech-marquee";
import { serviceCategories, lifecycle, pillarColorClasses } from "@/lib/site-data";

const categoryIcons = { Bot, Workflow, Code2 };

export default function Home() {
  return (
    <>
      {/* Hero — full-bleed background photo with a slow left-right drift */}
      <section className="relative flex min-h-[620px] items-center overflow-hidden border-b border-border md:min-h-[680px]">
        <Image
          src="/images/hero-workspace.jpg"
          alt=""
          fill
          priority
          className="hero-bg-pan object-cover object-[70%_50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="container-page relative grid gap-10 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
          <Reveal>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#5eead4]">
              AI Systems &amp; Business Automation
            </span>
            <h1 className="mt-4 text-balance font-display text-5xl font-extrabold leading-[1.05] tracking-tighter text-white md:text-6xl">
              Most of your team&rsquo;s day is spent on work a system could do instead.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              We build the AI agents, automations, and internal software that
              take that work off their plate — wired into the tools you
              already use, and monitored so they keep working after we ship.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" nativeButton={false} render={<Link href="/contact" />}>
                Get an Automation &amp; AI Readiness Audit
                <ArrowRight className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<Link href="/process" />}
                className="border-white/30 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
              >
                See how we work
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="self-start">
            <div className="relative overflow-hidden rounded-xl border border-white/15 bg-black/35 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.5)] backdrop-blur-md">
              <div className="space-y-4 p-6">
                <div className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#5eead4]">
                  Where the hours actually go
                </div>
                {[
                  "Answering the same support question for the hundredth time",
                  "Copying a lead from WhatsApp into a spreadsheet, manually",
                  "Chasing three tools to find one customer's order status",
                  "Re-typing the same quote or invoice by hand",
                ].map((line) => (
                  <div key={line} className="flex items-start gap-3">
                    <div className="mt-2 size-1.5 shrink-0 rounded-full bg-red-400" />
                    <p className="text-sm leading-relaxed text-white/90">{line}</p>
                  </div>
                ))}
                <p className="border-t border-white/15 pt-4 text-sm text-white/70">
                  Every one of these is a system, not a hire.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Founding note — honest, no fabricated trust signals */}
      <section className="border-b border-border bg-muted/40">
        <div className="container-page py-10">
          <Reveal>
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Zents Tech is a new, founder-led studio</span>{" "}
              based in Dhaka, building AI systems and automation for a small
              number of Bangladeshi and international businesses at a time. We&rsquo;d
              rather earn the right to publish case studies than claim numbers we
              can&rsquo;t show you yet.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Signature visual: manual task -> AI/automation -> your tools -> outcome */}
      <section className="border-b border-border">
        <div className="container-page py-16">
          <Reveal className="text-center">
            <span className="eyebrow">How the work actually changes</span>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Same task. Different shape.
            </h2>
          </Reveal>
          <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl border border-border bg-muted/20 px-6 py-8 sm:px-8 sm:py-10">
            <Workflow3DSection />
          </div>
        </div>
      </section>

      {/* Systems overview */}
      <section id="systems" className="border-b border-border">
        <div className="container-page py-20">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">What we build</span>
            <h2 className="mt-3 text-balance font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Three systems, not eight services.
            </h2>
            <p className="mt-4 text-muted-foreground">
              AI Systems and Business Automation are the front door.
              Software Engineering is what holds them together once a
              workflow outgrows an off-the-shelf tool.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {serviceCategories.map((cat, i) => {
              const Icon = categoryIcons[cat.icon];
              const colors = pillarColorClasses[cat.color];
              return (
                <Reveal key={cat.name} delay={i * 0.08}>
                  <Card className="flex h-full flex-col">
                    <CardContent className="flex flex-1 flex-col">
                      <div className={`flex size-11 items-center justify-center rounded-full ${colors.badge}`}>
                        <Icon className="size-5" strokeWidth={1.75} />
                      </div>
                      <span className="eyebrow mt-4">{cat.tag}</span>
                      <h3 className="mt-2 font-display text-xl font-bold">{cat.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {cat.description}
                      </p>
                      <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                        {cat.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className={`mt-0.5 size-4 shrink-0 ${colors.icon}`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-8">
            <Button variant="outline" nativeButton={false} render={<Link href="/systems" />}>
              See the full system architecture &amp; pricing
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Tech stack — real tools, named, not "proprietary AI technology" */}
      <section className="border-b border-border bg-[var(--footer-bg)] py-20">
        <div className="container-page">
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="text-balance font-display text-4xl font-extrabold tracking-tight text-[var(--footer-fg)] md:text-5xl">
              Yes! <span className="font-medium">Here&rsquo;s the stack we actually build with.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[var(--footer-muted)]">
              No &ldquo;proprietary AI technology&rdquo; — the real tools,
              named, behind everything we ship.
            </p>
          </Reveal>
        </div>
        <div className="mt-14">
          <TechMarquee />
        </div>
      </section>

      {/* How we work */}
      <section className="border-b border-border bg-muted/30">
        <div className="container-page py-20">
          <Reveal>
            <span className="eyebrow">How we work</span>
            <h2 className="mt-3 max-w-xl text-balance font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              From a diagnostic to a system you rely on.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lifecycle.map((stage, i) => (
              <Reveal key={stage.step} delay={(i % 3) * 0.08} className="flex gap-4">
                <span className="font-mono text-sm text-muted-foreground/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold">{stage.step}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {stage.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-b border-border">
        <div className="container-page py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <Reveal>
              <span className="eyebrow">Why Zents Tech</span>
              <h2 className="mt-3 text-balance font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                Engineering-led, not tool-reseller-led.
              </h2>
              <p className="mt-4 text-muted-foreground">
                We name the actual stack we build on and the actual
                integrations we connect — not &ldquo;cutting-edge AI
                technology.&rdquo; Every system we ship comes with monitoring,
                because automations break quietly when a third-party API
                changes, and someone has to notice before your customer does.
              </p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Globe, cls: "bg-accent text-primary", title: "Dual-market delivery", desc: "Priced and built for both Bangladeshi and international clients." },
                { icon: Target, cls: "bg-violet-tint text-violet", title: "Scoped, not open-ended", desc: "Every engagement starts fixed-fee and time-boxed." },
                { icon: Activity, cls: "bg-brass-tint text-brass", title: "Monitored after launch", desc: "A retainer, not a handoff, on everything we build." },
                { icon: Layers, cls: "bg-good-tint text-good", title: "Two focuses, not eight", desc: "AI systems and automation — software when it's needed." },
              ].map(({ icon: Icon, cls, title, desc }, i) => (
                <Reveal key={title} delay={i * 0.08} className="rounded-lg border border-border p-4">
                  <div className={`flex size-8 items-center justify-center rounded-full ${cls}`}>
                    <Icon className="size-4" strokeWidth={1.75} />
                  </div>
                  <h4 className="mt-3 font-display text-sm font-bold">{title}</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join the team */}
      <section className="border-b border-border bg-[var(--footer-bg)]">
        <div className="container-page grid items-center gap-10 py-16 md:grid-cols-2 md:py-20">
          <Reveal>
            <h2 className="text-balance font-display text-4xl font-extrabold tracking-tight text-[var(--footer-fg)] md:text-5xl">
              Join Our Team
            </h2>
            <p className="mt-4 max-w-md text-[var(--footer-muted)]">
              We&rsquo;re small on purpose, but always open to talented
              people who want real ownership — not a seat in a big org
              chart.
            </p>
            <div className="mt-8">
              <Button size="lg" nativeButton={false} render={<Link href="/career" />}>
                Visit Career
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </Reveal>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <Image src="/images/join-team-office.jpg" alt="" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="container-page py-20 text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-balance font-display text-4xl font-extrabold tracking-tight md:text-5xl">
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
          </Reveal>
        </div>
      </section>
    </>
  );
}
