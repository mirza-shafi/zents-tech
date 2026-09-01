"use client";

import { m, useReducedMotion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "span";
};

/**
 * A restrained fade-and-rise on scroll into view — the site's one
 * scroll-entrance pattern, reused everywhere (headings, cards, list
 * items) instead of inventing a different effect per section, so the
 * whole site moves the same way. `delay` staggers siblings in a grid.
 * Renders statically (no motion at all) under reduced motion.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const Tag = as === "span" ? m.span : m.div;

  if (shouldReduceMotion) {
    const Static = as === "span" ? "span" : "div";
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
