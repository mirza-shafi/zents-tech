import type { Metadata } from "next";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Zents Tech collects, uses, and protects information from visitors to zentstech.com.",
};

export default function PrivacyPage() {
  return (
    <section>
      <div className="container-page max-w-3xl py-16 md:py-20">
        <span className="eyebrow">Legal</span>
        <h1 className="mt-3 text-balance font-display text-4xl font-extrabold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-3 font-mono text-xs text-muted-foreground">
          Last updated: September 1, 2026
        </p>

        <div className="prose-legal mt-10 flex flex-col gap-8 text-[15px] leading-relaxed text-foreground/90">
          <div>
            <p>
              This policy explains what information Zents Tech (&ldquo;we,&rdquo;
              &ldquo;us&rdquo;) collects through zentstech.com, why we collect it,
              and what you can do about it. Zents Tech is based in Dhaka,
              Bangladesh. This site is a marketing website — it does not run
              user accounts, logins, or payments. If you engage us for a
              project, the handling of any data related to that project is
              governed separately by the agreement (statement of work,
              contract) we sign with you, not by this page.
            </p>
          </div>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              1. Information we collect
            </h2>
            <ul className="mt-3 flex flex-col gap-2 pl-5 list-disc">
              <li>
                <strong>Information you give us directly</strong> — your name,
                email address, company (optional), and whatever you write in
                the message field when you submit the contact form, or
                whatever you send us by email or WhatsApp.
              </li>
              <li>
                <strong>Basic, anonymous site-usage data</strong> — which pages
                are visited and roughly how much traffic the site gets, via
                Vercel Analytics (see Section 3). This does not use tracking
                cookies and is not tied to your name or email.
              </li>
            </ul>
            <p className="mt-3">
              We do not collect payment details, government ID numbers, or
              other sensitive personal data through this website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              2. How we use it
            </h2>
            <ul className="mt-3 flex flex-col gap-2 pl-5 list-disc">
              <li>To respond to your inquiry or Audit request.</li>
              <li>To understand which pages are useful and which aren&rsquo;t, in aggregate.</li>
              <li>To keep a record of past inquiries so we don&rsquo;t lose track of a conversation.</li>
            </ul>
            <p className="mt-3">
              We do not sell your information, and we do not use it for
              advertising or share it with third parties for their own
              marketing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              3. Third-party services this site relies on
            </h2>
            <ul className="mt-3 flex flex-col gap-2 pl-5 list-disc">
              <li>
                <strong>Vercel</strong> — hosts this website and provides
                cookie-less analytics (page views and general traffic
                patterns, not individual tracking).
              </li>
              <li>
                <strong>Google Fonts</strong> — loads the typefaces used on
                this site.
              </li>
              <li>
                <strong>WhatsApp and Facebook</strong> — if you contact us
                through the WhatsApp or Facebook links in the footer, that
                conversation is subject to WhatsApp&rsquo;s and Meta&rsquo;s
                own privacy policies, not this one.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              4. How long we keep it
            </h2>
            <p className="mt-3">
              We keep contact form submissions and email correspondence for as
              long as it&rsquo;s relevant to a potential or ongoing
              engagement, and delete or anonymize it after that unless we&rsquo;re
              required to keep it longer (for example, for accounting
              records related to a paid engagement).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              5. Your choices
            </h2>
            <p className="mt-3">
              You can ask us what information we hold about you, ask us to
              correct it, or ask us to delete it, by emailing{" "}
              <a href={`mailto:${contact.email}`} className="text-primary underline underline-offset-2">
                {contact.email}
              </a>
              . We&rsquo;ll respond within a reasonable time.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              6. International visitors
            </h2>
            <p className="mt-3">
              We&rsquo;re based in Bangladesh, and our hosting provider
              (Vercel) operates infrastructure globally. If you&rsquo;re
              contacting us from outside Bangladesh, your information may be
              processed on servers outside your own country. We handle it
              with the same care described in this policy regardless of
              where it&rsquo;s processed.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              7. Children
            </h2>
            <p className="mt-3">
              This site is intended for businesses and is not directed at
              children. We don&rsquo;t knowingly collect information from
              anyone under 16.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              8. Changes to this policy
            </h2>
            <p className="mt-3">
              If this policy changes, we&rsquo;ll update the date at the top
              of this page. Material changes will be reflected here before
              they take effect.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              9. Contact
            </h2>
            <p className="mt-3">
              Questions about this policy: email{" "}
              <a href={`mailto:${contact.email}`} className="text-primary underline underline-offset-2">
                {contact.email}
              </a>{" "}
              or message us on{" "}
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2"
              >
                WhatsApp
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
