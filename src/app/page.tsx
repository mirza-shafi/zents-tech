import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Bot, Workflow, Code2, FileSearch, Globe, Target, Activity, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { Workflow3DSection } from "@/components/workflow-3d-section";
import { TechMarquee } from "@/components/tech-marquee";
import { serviceCategories, lifecycle, pillarColorClasses } from "@/lib/site-data";

const categoryIcons = { Bot, Workflow, Code2 };

const capabilities = [
  {
    icon: Bot,
    title: "AI Systems",
    desc: "Agents and assistants wired into how your business actually operates, not a chatbot bolted onto a website.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    desc: "The workflows and integrations that connect the tools you already run, so nothing falls through a spreadsheet.",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    desc: "Internal tools and dashboards for when no off-the-shelf software fits how you actually work.",
  },
  {
    icon: FileSearch,
    title: "Diagnostics",
    desc: "A scoped, fixed-price audit that tells you what's actually worth automating before you commit to a build.",
  },
  {
    icon: Activity,
    title: "Monthly Support",
    desc: "Monitoring and fixing what breaks when a third-party API changes, before your customer notices.",
  },
];

const capabilityPhotos = [
  "/images/code-screen.jpg",
  "/images/dashboard-metrics.jpg",
  "/images/about-workspace.jpg",
  "/images/join-team-office.jpg",
];

// Interleaved checkerboard order: text, photo, text, photo, ... — five
// capabilities, four photos slotted between them.
const capabilityCells: ({ kind: "text"; cap: (typeof capabilities)[number] } | { kind: "photo"; src: string })[] =
  capabilities.flatMap((cap, i) =>
    i < capabilityPhotos.length
      ? [{ kind: "text" as const, cap }, { kind: "photo" as const, src: capabilityPhotos[i] }]
      : [{ kind: "text" as const, cap }]
  );

export default function Home() {
  return (
    <>
      {/* Hero — light collage of the real founders, no fabricated stats */}
      <section className="relative overflow-hidden border-b border-border bg-hero-glow">
        <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_35%,black,transparent)]" />
        <div className="container-page relative grid items-center gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <Reveal>
            <span className="eyebrow">AI Systems &amp; Business Automation</span>
            <h1 className="mt-4 text-balance font-display text-5xl font-extrabold leading-[1.05] tracking-tighter md:text-6xl">
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
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[340px]">
              <div className="absolute inset-x-0 bottom-0 aspect-[4/3] w-[82%] overflow-hidden rounded-2xl shadow-[0_20px_50px_-15px_rgba(18,22,28,0.35)]">
                <Image
                  src="/images/hero-workspace.jpg"
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 768px) 280px, 60vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute top-0 right-0 aspect-square w-[52%] overflow-hidden rounded-2xl border-4 border-background shadow-[0_20px_50px_-15px_rgba(18,22,28,0.35)]">
                <Image
                  src="/images/code-screen.jpg"
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 768px) 180px, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute top-[42%] left-0 -translate-x-[15%] rounded-xl border border-border bg-card px-4 py-3 text-center shadow-[0_12px_30px_-10px_rgba(18,22,28,0.25)]">
                <p className="font-display text-lg font-extrabold text-primary">Founder-led</p>
                <p className="text-xs text-muted-foreground">2 founders, one focus</p>
              </div>
              <div className="absolute right-[6%] -bottom-5 rounded-xl border border-border bg-card px-4 py-3 text-center shadow-[0_12px_30px_-10px_rgba(18,22,28,0.25)]">
                <p className="font-display text-lg font-extrabold text-primary">Dhaka, BD</p>
                <p className="text-xs text-muted-foreground">Built for BD &amp; global clients</p>
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

      {/* Core capabilities — checkerboard of the 5 real things we do, with photos woven in */}
      <section className="border-b border-border">
        <div className="container-page py-16">
          <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">Core capabilities</span>
              <h2 className="mt-3 max-w-lg text-balance font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                Five ways we take work off your plate.
              </h2>
            </div>
            <Link
              href="/services"
              className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Explore all services <ArrowRight className="size-4" />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {capabilityCells.map((cell, i) =>
              cell.kind === "text" ? (
                <Reveal key={cell.cap.title} delay={(i % 6) * 0.06}>
                  <cell.cap.icon className="size-9 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-xl font-bold">{cell.cap.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cell.cap.desc}</p>
                </Reveal>
              ) : (
                <Reveal key={cell.src} delay={(i % 6) * 0.06} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image src={cell.src} alt="" fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
                </Reveal>
              )
            )}
          </div>
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

      {/* Services overview */}
      <section id="services" className="border-b border-border">
        <div className="container-page py-20">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">What we build</span>
            <h2 className="mt-3 text-balance font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Three services. Not a sprawling menu.
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
                  <Link href={`/services/${cat.slug}`} className="group block h-full">
                    <Card className="flex h-full flex-col transition-colors group-hover:border-primary/40">
                      <CardContent className="flex flex-1 flex-col">
                        <div className={`flex size-11 items-center justify-center rounded-full ${colors.badge}`}>
                          <Icon className="size-5" strokeWidth={1.75} />
                        </div>
                        <span className="eyebrow mt-4">{cat.tag}</span>
                        <h3 className="mt-2 font-display text-xl font-bold transition-colors group-hover:text-primary">
                          {cat.name}
                        </h3>
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
                        <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-primary">
                          See details <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-8">
            <Button variant="outline" nativeButton={false} render={<Link href="/services" />}>
              See the full service breakdown &amp; pricing
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
            <Image
              src="/images/join-team-office.jpg"
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
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
