import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { contact, faqs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get an AI & Automation Readiness Audit, or talk through what you'd want Zents Tech to build. We reply personally within one business day.",
};

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.5 21v-8.06h2.7l.4-3.14h-3.1V7.83c0-.91.25-1.53 1.56-1.53h1.67V3.5A22.6 22.6 0 0 0 13.9 3.3c-2.4 0-4.05 1.47-4.05 4.16v2.34H7.13v3.14h2.72V21h3.65Z" />
    </svg>
  );
}

const methods = [
  {
    icon: Mail,
    cls: "bg-accent text-primary",
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: MessageCircle,
    cls: "bg-good-tint text-good",
    label: "WhatsApp",
    value: contact.whatsappNumber,
    href: contact.whatsappHref,
  },
  {
    icon: FacebookIcon,
    cls: "bg-violet-tint text-violet",
    label: "Facebook",
    value: "Message us directly",
    href: contact.facebookHref,
  },
  {
    icon: MapPin,
    cls: "bg-brass-tint text-brass",
    label: "Based in",
    value: "Dhaka, Bangladesh",
    href: undefined,
  },
];

const nextSteps = [
  { title: "You reach out", detail: "Form, email, or WhatsApp — whichever's easiest. Tell us one manual process that's bothering you." },
  { title: "We reply personally", detail: "Within one business day, from an actual person who read what you wrote — not an autoresponder." },
  { title: "We scope an Audit", detail: "If it looks like a fit, the next step is usually a short, fixed-price Readiness Audit, not a sales pitch." },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-hero-glow">
        <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-[0.55] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        <div className="container-page relative grid items-start gap-12 py-16 md:grid-cols-[1fr_1fr] md:py-20">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h1 className="mt-3 text-balance font-display text-5xl font-extrabold tracking-tighter md:text-6xl">
              Tell us what&rsquo;s manual today.
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              Most first conversations turn into a scoped Audit — a short,
              fixed-price look at one process, with a clear answer on whether a
              system is worth building for it.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {methods.map((m) => {
                const Icon = m.icon;
                const content = (
                  <>
                    <div className={`flex size-9 items-center justify-center rounded-full ${m.cls}`}>
                      <Icon className="size-4" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wide text-muted-foreground">
                        {m.label}
                      </p>
                      <p className="text-sm font-medium">{m.value}</p>
                    </div>
                  </>
                );
                return m.href ? (
                  <a
                    key={m.label}
                    href={m.href}
                    target={m.href.startsWith("http") ? "_blank" : undefined}
                    rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:border-primary/40"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={m.label} className="flex items-start gap-3 rounded-lg border border-border bg-card p-3">
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="size-4 text-primary" />
              Response time: within one business day
            </div>
          </Reveal>

          <Card>
            <CardContent>
              <ContactForm />
              <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                No auto-replies, no sales queue — a real person reads this and
                writes back within one business day.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <span className="eyebrow">What happens next</span>
            <h2 className="mt-3 max-w-xl text-balance font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              No portal, no queue — just a conversation.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {nextSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08} className="flex gap-4">
                <span className="font-mono text-sm text-muted-foreground/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-page max-w-2xl py-16 md:py-20">
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              Before you write in
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion className="mt-8">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={String(i)}>
                  <AccordionTrigger className="text-base font-semibold">{faq.q}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  );
}
