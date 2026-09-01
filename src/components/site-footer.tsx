import Link from "next/link";
import { Logo } from "@/components/logo";
import { nav } from "@/lib/site-data";

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
                <a href="mailto:hello@zentstech.com" className="hover:text-foreground">
                  hello@zentstech.com
                </a>
              </li>
              <li>Dhaka, Bangladesh</li>
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
