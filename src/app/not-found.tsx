import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

const links = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center">
      <Reveal as="div" className="container-page py-16 text-center">
        <span className="font-mono text-sm text-muted-foreground">404</span>
        <h1 className="mt-3 text-balance font-display text-4xl font-extrabold tracking-tight md:text-5xl">
          This page doesn&rsquo;t exist — a broken link, most likely.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Not a system failure this time, just a wrong turn. Here&rsquo;s where
          you probably meant to go.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {links.map((link) => (
            <Button key={link.href} variant="outline" nativeButton={false} render={<Link href={link.href} />}>
              {link.label}
            </Button>
          ))}
        </div>
        <div className="mt-6">
          <Button size="lg" nativeButton={false} render={<Link href="/" />}>
            Back to homepage
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
