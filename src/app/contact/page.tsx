import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get an AI & Automation Readiness Audit, or talk through what you'd want Zents Tech to build.",
};

export default function ContactPage() {
  return (
    <section>
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1fr_1fr] md:py-20">
        <div>
          <span className="eyebrow">Contact</span>
          <h1 className="mt-3 text-balance font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            Tell us what&rsquo;s manual today.
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            Most first conversations turn into a scoped Audit — a short,
            fixed-price look at one process, with a clear answer on whether a
            system is worth building for it.
          </p>

          <Card className="mt-10">
            <CardContent className="space-y-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-wide text-muted-foreground">
                  Email
                </p>
                <a href="mailto:hello@zentstech.com" className="text-sm font-medium hover:text-primary">
                  hello@zentstech.com
                </a>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wide text-muted-foreground">
                  Based in
                </p>
                <p className="text-sm font-medium">Dhaka, Bangladesh — working with clients everywhere</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wide text-muted-foreground">
                  Response time
                </p>
                <p className="text-sm font-medium">Within one business day</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
