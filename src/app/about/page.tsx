import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";

function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.4 8.75h3.47V21H3.4V8.75Zm6.02 0h3.33v1.68h.05c.46-.88 1.6-1.8 3.3-1.8 3.53 0 4.18 2.32 4.18 5.35V21h-3.47v-6.26c0-1.5-.03-3.42-2.08-3.42-2.09 0-2.41 1.63-2.41 3.31V21h-3.47V8.75Z" />
    </svg>
  );
}

const founders = [
  {
    name: "Mirza Md. Shafi Uddin",
    title: "Founder",
    role: "AI & Software Engineer",
    photo: "/images/shafi-founder.jpg",
    bio: "Builds RAG pipelines, autonomous AI agents, and n8n-based automation for clients since 2024 — the same work Zents Tech now runs as a company rather than a freelance practice.",
    linkedin: "https://www.linkedin.com/in/mirza-shafi/",
    website: "https://mirzashafi.com/",
  },
  {
    name: "Shoeb Mahfuz",
    title: "Co-founder",
    role: "Network & Cybersecurity Enthusiast",
    photo: "/images/arnob-cofounder.png",
    bio: "Brings the network and security lens to Zents Tech — the person asking whether an automation is resilient and locked down, not just working, before it ships to a client.",
    linkedin: "https://www.linkedin.com/in/shoebmahfuz/",
  },
];

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
        <div className="container-page grid items-center gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <Reveal>
            <span className="eyebrow">About</span>
            <h1 className="mt-3 max-w-2xl text-balance font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              A small studio, on purpose.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Zents Tech is a technology studio based in Dhaka, founded by
              Shafi and Shoeb, building AI systems and automation for a
              deliberately small number of clients at a time — Bangladeshi
              SMEs and international businesses, side by side.
            </p>
          </Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl shadow-[0_1px_2px_rgba(18,22,28,0.04),0_16px_40px_-12px_rgba(18,22,28,0.35)] md:aspect-[3/4]">
            <Image
              src="/images/about-workspace.jpg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
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

      <section className="border-b border-border">
        <div className="container-page py-16 md:py-20">
          <h2 className="font-display text-2xl font-extrabold tracking-tight">
            Founders
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {founders.map((person) => (
              <Card key={person.name}>
                <CardContent className="flex gap-5">
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-full border border-border">
                    <Image
                      src={person.photo}
                      alt={`${person.name}, ${person.title} at Zents Tech`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold">{person.name}</h3>
                    <p className="text-xs font-medium uppercase tracking-wide text-primary">
                      {person.title}
                    </p>
                    <p className="mt-1 text-xs font-medium text-muted-foreground">
                      {person.role}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {person.bio}
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${person.name} on LinkedIn`}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        <LinkedinIcon className="size-4" />
                      </a>
                      {person.website && (
                        <a
                          href={person.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${person.name}'s website`}
                          className="text-muted-foreground transition-colors hover:text-primary"
                        >
                          <Globe className="size-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
            <Button size="lg" nativeButton={false} render={<Link href="/contact" />}>
              Get in touch
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
