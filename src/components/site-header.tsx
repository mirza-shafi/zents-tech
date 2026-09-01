"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Bot, Workflow, Code2, ArrowRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { nav, serviceCategories, lifecycle, pillarColorClasses } from "@/lib/site-data";
import { slugify } from "@/lib/utils";

const categoryIcons = { Bot, Workflow, Code2 };

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/75 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="container-page flex h-16 items-center justify-between">
        <Logo />

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground data-[popup-open]:text-foreground">
                Systems
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[340px] p-1">
                  {serviceCategories.map((cat) => {
                    const Icon = categoryIcons[cat.icon];
                    const colors = pillarColorClasses[cat.color];
                    return (
                      <NavigationMenuLink
                        key={cat.slug}
                        render={<Link href={`/systems#${cat.slug}`} />}
                        className="items-start gap-3"
                      >
                        <div className={`mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full ${colors.badge}`}>
                          <Icon className="size-4" strokeWidth={1.75} />
                        </div>
                        <div>
                          <div className="font-display text-sm font-bold text-foreground">{cat.name}</div>
                          <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                            {cat.tag}
                          </p>
                        </div>
                      </NavigationMenuLink>
                    );
                  })}
                  <NavigationMenuLink
                    render={<Link href="/systems" />}
                    className="mt-1 justify-between border-t border-border pt-2.5 text-sm font-medium text-primary"
                  >
                    See full architecture &amp; pricing
                    <ArrowRight className="size-3.5" />
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground data-[popup-open]:text-foreground">
                Process
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[300px] p-1">
                  {lifecycle.map((stage, i) => (
                    <NavigationMenuLink
                      key={stage.step}
                      render={<Link href={`/process#${slugify(stage.step)}`} />}
                      className="items-start gap-3"
                    >
                      <span className="mt-0.5 font-mono text-[11px] text-muted-foreground/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{stage.step}</div>
                        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                          {stage.detail}
                        </p>
                      </div>
                    </NavigationMenuLink>
                  ))}
                  <NavigationMenuLink
                    render={<Link href="/process" />}
                    className="mt-1 justify-between border-t border-border pt-2.5 text-sm font-medium text-primary"
                  >
                    See the full process
                    <ArrowRight className="size-3.5" />
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {nav
              .filter((item) => item.href !== "/systems" && item.href !== "/process")
              .map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    render={<Link href={item.href} />}
                    className="text-sm font-medium text-muted-foreground"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:block">
          <Button size="sm" nativeButton={false} render={<Link href="/contact" />}>
            Get an Audit
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu" />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2.5 text-base font-medium text-foreground hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                className="mt-3"
                nativeButton={false} render={<Link href="/contact" onClick={() => setOpen(false)} />}
              >
                Get an Audit
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
