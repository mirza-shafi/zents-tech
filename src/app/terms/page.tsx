import type { Metadata } from "next";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of zentstech.com.",
};

export default function TermsPage() {
  return (
    <section>
      <div className="container-page max-w-3xl py-16 md:py-20">
        <span className="eyebrow">Legal</span>
        <h1 className="mt-3 text-balance font-display text-4xl font-extrabold tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-3 font-mono text-xs text-muted-foreground">
          Last updated: September 1, 2026
        </p>

        <div className="prose-legal mt-10 flex flex-col gap-8 text-[15px] leading-relaxed text-foreground/90">
          <p>
            These terms govern your use of zentstech.com (&ldquo;the
            site&rdquo;), operated by Zents Tech, based in Dhaka, Bangladesh.
            By using this site, you agree to them. These terms cover the
            website only — they are not the contract for any project. If we
            take on your project, that engagement is governed by a separate,
            signed agreement (a proposal, statement of work, or contract)
            that we&rsquo;ll agree with you directly, and its terms take
            precedence over this page for that engagement.
          </p>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              1. What this site is
            </h2>
            <p className="mt-3">
              This is a marketing and informational website. It describes our
              services, approach, and indicative pricing, and lets you get in
              touch. It does not create accounts, process payments, or form a
              contract by itself — submitting the contact form or an Audit
              request is the start of a conversation, not a binding
              purchase.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              2. Pricing and service descriptions
            </h2>
            <p className="mt-3">
              Prices, timelines, and scope shown on this site (including on
              the Systems page) are indicative ranges meant to help you
              understand what a typical engagement looks like. They are not
              a quote for your specific situation. The actual price, scope,
              and timeline for any engagement are set out in a written
              proposal or contract before work begins.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              3. Intellectual property
            </h2>
            <p className="mt-3">
              The Zents Tech name, logo, and the content of this site (text,
              design, and code) belong to Zents Tech unless otherwise noted.
              You&rsquo;re welcome to link to this site or quote it with
              attribution; you may not copy the design, logo, or wholesale
              site content for your own commercial use.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              4. Acceptable use
            </h2>
            <p className="mt-3">
              Please don&rsquo;t use this site to attempt unauthorized access
              to our systems, submit the contact form for spam or automated
              abuse, or misrepresent who you are when reaching out.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              5. Third-party links
            </h2>
            <p className="mt-3">
              This site links to WhatsApp and Facebook. Once you leave
              zentstech.com through one of those links, you&rsquo;re subject
              to that platform&rsquo;s own terms, and we&rsquo;re not
              responsible for their content or practices.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              6. No warranty on the website itself
            </h2>
            <p className="mt-3">
              We keep this site up to date as best we can, but it&rsquo;s
              provided &ldquo;as is,&rdquo; without warranty that it will be
              error-free or uninterrupted. This doesn&rsquo;t affect the
              quality commitments we make separately in a signed project
              agreement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              7. Limitation of liability
            </h2>
            <p className="mt-3">
              To the extent permitted by law, Zents Tech isn&rsquo;t liable
              for indirect or consequential loss arising from your use of
              this website. This limitation doesn&rsquo;t apply to
              obligations we take on in a separate signed project agreement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              8. Governing law
            </h2>
            <p className="mt-3">
              These terms are governed by the laws of Bangladesh, without
              regard to conflict-of-law principles.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              9. Changes to these terms
            </h2>
            <p className="mt-3">
              We may update these terms as the site changes. The date at the
              top of this page reflects the last update.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              10. Contact
            </h2>
            <p className="mt-3">
              Questions about these terms: email{" "}
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
