import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { serviceCategories, productizedServices } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "AI Systems, Business Automation, and Software Engineering — the systems Zents Tech builds, and what each one costs.",
};

export default function SystemsPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page py-16 md:py-20">
          <span className="eyebrow">Systems</span>
          <h1 className="mt-3 max-w-2xl text-balance font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            Three systems. One diagnostic to get into any of them.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            We don&rsquo;t sell a menu of eight unrelated services. We build
            AI Systems and Business Automation as the core of the business,
            with Software Engineering underneath to hold them together.
          </p>
        </div>
      </section>

      {/* Categories detail */}
      <section className="border-b border-border">
        <div className="container-page space-y-6 py-16 md:py-20">
          {serviceCategories.map((cat) => (
            <Card key={cat.name}>
              <CardContent className="grid gap-8 md:grid-cols-[1fr_1fr]">
                <div>
                  <span className="eyebrow">{cat.tag}</span>
                  <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight">
                    {cat.name}
                  </h2>
                  <p className="mt-3 text-muted-foreground">{cat.description}</p>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-center gap-3 rounded-lg bg-muted/40 p-5">
                  <p className="text-xs font-mono uppercase tracking-wide text-muted-foreground">
                    Margin
                  </p>
                  <p className="text-sm">{cat.margin}</p>
                  <p className="mt-2 text-xs font-mono uppercase tracking-wide text-muted-foreground">
                    Entry point
                  </p>
                  <p className="text-sm">{cat.entry}</p>
                  <p className="mt-2 text-xs font-mono uppercase tracking-wide text-muted-foreground">
                    Recurring
                  </p>
                  <p className="text-sm">{cat.recurring}</p>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Diagnostics */}
          <Card className="border-primary/40">
            <CardContent className="grid gap-8 md:grid-cols-[1fr_1fr]">
              <div>
                <span className="eyebrow">The wedge</span>
                <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight">
                  Diagnostics
                </h2>
                <p className="mt-3 text-muted-foreground">
                  An AI &amp; Automation Readiness Audit or Systems
                  Architecture Review — the lowest-friction way to find out
                  what&rsquo;s actually worth automating before committing to
                  a build.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-2 rounded-lg bg-primary/10 p-5">
                <p className="text-sm">
                  Every engagement can start here: a scoped, fixed-price
                  diagnostic that ends in a prioritized roadmap — not a build
                  commitment.
                </p>
                <Button asChild className="mt-2 w-fit">
                  <Link href="/contact">
                    Get an Audit <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Productized services */}
      <section>
        <div className="container-page py-16 md:py-20">
          <span className="eyebrow">Productized services</span>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Scoped offers, priced for Bangladesh and international clients.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Each one is fixed-scope enough to quote in a single call. Ranges
            reflect the client&rsquo;s market, not a different level of
            effort.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {productizedServices.map((svc) => (
              <Card key={svc.name}>
                <CardContent>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-lg font-bold">{svc.name}</h3>
                    <span className="shrink-0 rounded-full bg-muted px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                      {svc.timeline}
                    </span>
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-wide text-primary">
                    {svc.audience}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{svc.problem}</p>
                  <div className="mt-4 flex flex-col gap-1 border-t border-border pt-4 font-mono text-xs">
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">Bangladesh</span>
                      <span className="text-right text-foreground">{svc.priceBDT}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">International</span>
                      <span className="text-right text-foreground">{svc.priceUSD}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Talk through what fits your business
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
