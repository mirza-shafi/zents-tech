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
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            AI systems and business automation for companies in Bangladesh and
            abroad. We build the systems the business runs on.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <MessageCircle className="size-4" />
            </a>
            <a
              href={contact.facebookHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zents Tech on Facebook"
              className="flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <FacebookIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-8">
          <div>
            <div className="eyebrow mb-3">Site</div>
            <ul className="flex flex-col gap-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-3">Contact</div>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-foreground">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                  WhatsApp: {contact.whatsappNumber}
                </a>
              </li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-3">Legal</div>
            <ul className="flex flex-col gap-2">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6">
        <p className="container-page font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Zents Tech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
