import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Logo } from "@/components/logo";
import { nav, legalNav, contact } from "@/lib/site-data";

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.5 21v-8.06h2.7l.4-3.14h-3.1V7.83c0-.91.25-1.53 1.56-1.53h1.67V3.5A22.6 22.6 0 0 0 13.9 3.3c-2.4 0-4.05 1.47-4.05 4.16v2.34H7.13v3.14h2.72V21h3.65Z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--footer-fg)]">
      <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Logo variant="dark" />
          <p className="mt-4 text-sm leading-relaxed text-[var(--footer-muted)]">
            AI systems and business automation for companies in Bangladesh and
            abroad. We build the systems the business runs on.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex size-9 items-center justify-center rounded-md border transition-colors"
              style={{ borderColor: "var(--footer-border)", color: "var(--footer-muted)" }}
            >
              <MessageCircle className="size-4" />
            </a>
            <a
              href={contact.facebookHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zents Tech on Facebook"
              className="flex size-9 items-center justify-center rounded-md border transition-colors"
              style={{ borderColor: "var(--footer-border)", color: "var(--footer-muted)" }}
            >
              <FacebookIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-8">
          <div>
            <div className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--footer-accent)]">
              Site
            </div>
            <ul className="mt-3 flex flex-col gap-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--footer-muted)] transition-colors hover:text-[var(--footer-fg)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--footer-accent)]">
              Contact
            </div>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-[var(--footer-muted)]">
              <li>
                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-[var(--footer-fg)]">
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--footer-fg)]"
                >
                  WhatsApp: {contact.whatsappNumber}
                </a>
              </li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--footer-accent)]">
              Legal
            </div>
            <ul className="mt-3 flex flex-col gap-2">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--footer-muted)] transition-colors hover:text-[var(--footer-fg)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t py-6" style={{ borderColor: "var(--footer-border)" }}>
        <p className="container-page font-mono text-xs text-[var(--footer-muted)]">
          © {new Date().getFullYear()} Zents Tech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
