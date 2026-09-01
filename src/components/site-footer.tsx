import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Logo } from "@/components/logo";
import { nav, legalNav, contact, serviceCategories } from "@/lib/site-data";

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.5 21v-8.06h2.7l.4-3.14h-3.1V7.83c0-.91.25-1.53 1.56-1.53h1.67V3.5A22.6 22.6 0 0 0 13.9 3.3c-2.4 0-4.05 1.47-4.05 4.16v2.34H7.13v3.14h2.72V21h3.65Z" />
    </svg>
  );
}

const categoryTagline: Record<string, string> = {
  "ai-systems": "Agents & assistants",
  "business-automation": "Workflows & integrations",
  "software-engineering": "Internal tools & apps",
};

const bottomLinks = [...nav, ...legalNav];

export function SiteFooter() {
  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--footer-fg)]">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[0.85fr_0.85fr_1.3fr] md:gap-12 md:py-16">
        {/* Brand */}
        <div className="md:border-r md:pr-12" style={{ borderColor: "var(--footer-border)" }}>
          <Logo variant="dark" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--footer-muted)]">
            AI systems and business automation for companies in Bangladesh
            and abroad. We build the systems the business runs on.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex size-9 items-center justify-center rounded-full bg-[var(--footer-accent)] text-[var(--footer-bg)] transition-opacity hover:opacity-85"
            >
              <MessageCircle className="size-4" />
            </a>
            <a
              href={contact.facebookHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zents Tech on Facebook"
              className="flex size-9 items-center justify-center rounded-full bg-[var(--footer-accent)] text-[var(--footer-bg)] transition-opacity hover:opacity-85"
            >
              <FacebookIcon className="size-4" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="md:border-r md:pr-12" style={{ borderColor: "var(--footer-border)" }}>
          <div className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--footer-accent)]">
            What we build
          </div>
          <div className="mt-3 flex flex-col">
            {serviceCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/systems/${cat.slug}`}
                className="group border-b py-3.5 first:pt-0 last:border-b-0"
                style={{ borderColor: "var(--footer-border)" }}
              >
                <span className="block font-display text-sm font-bold text-[var(--footer-fg)] transition-colors group-hover:text-[var(--footer-accent)]">
                  {cat.name}
                </span>
                <span className="mt-0.5 block text-xs text-[var(--footer-muted)]">
                  {categoryTagline[cat.slug]}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Let's talk */}
        <div className="flex flex-col justify-center">
          <Link href="/contact" className="group block">
            <span className="block font-display text-7xl leading-[0.82] font-extrabold uppercase tracking-tighter text-[var(--footer-fg)] transition-colors group-hover:text-[var(--footer-accent)] sm:text-8xl lg:text-9xl">
              Let&rsquo;s
              <br />
              Talk
            </span>
          </Link>
          <a
            href={`mailto:${contact.email}`}
            className="mt-6 text-sm text-[var(--footer-muted)] transition-colors hover:text-[var(--footer-fg)]"
          >
            {contact.email}
          </a>
          <p className="mt-1 text-sm text-[var(--footer-muted)]">Dhaka, Bangladesh</p>
        </div>
      </div>

      <div className="border-t py-5" style={{ borderColor: "var(--footer-border)" }}>
        <p className="container-page text-center font-mono text-xs uppercase tracking-[0.14em] text-[var(--footer-muted)]">
          AI Systems &amp; Business Automation
        </p>
      </div>

      <div className="border-t py-6" style={{ borderColor: "var(--footer-border)" }}>
        <div className="container-page flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="font-mono text-xs text-[var(--footer-muted)]">
            © {new Date().getFullYear()} Zents Tech. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {bottomLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-mono text-xs uppercase tracking-wide text-[var(--footer-muted)] transition-colors hover:text-[var(--footer-fg)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
