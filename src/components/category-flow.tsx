"use client";

import { Fragment } from "react";
import { m, useReducedMotion } from "motion/react";
import { pillarColorClasses, type ServiceCategory } from "@/lib/site-data";

const ACTIVE_STYLE: Record<ServiceCategory["color"], { backgroundColor: string; borderColor: string; color: string }> = {
  teal: { backgroundColor: "#0f766e", borderColor: "#0f766e", color: "#ffffff" },
  violet: { backgroundColor: "#4338ca", borderColor: "#4338ca", color: "#ffffff" },
  brass: { backgroundColor: "#b1650f", borderColor: "#b1650f", color: "#ffffff" },
};

const IDLE_STYLE = { backgroundColor: "#f6f8fb", borderColor: "#e2e7ef", color: "#5b6472" };

/**
 * A connected step-flow built directly from a category's own real
 * feature list — a visualization of "here's how these pieces connect,"
 * not a fabricated workflow narrative. Nodes light up in sequence and
 * the line draws in as it scrolls into view; skipped under reduced
 * motion, where everything just renders in its final, active state.
 */
export function CategoryFlow({ items, color }: { items: string[]; color: ServiceCategory["color"] }) {
  const colors = pillarColorClasses[color];
  const shouldReduceMotion = useReducedMotion();
  const active = ACTIVE_STYLE[color];

  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 sm:flex-row sm:items-start sm:gap-0">
      {items.map((item, i) => (
        <Fragment key={item}>
          <div className="flex flex-col items-center text-center sm:w-40">
            <m.div
              className="flex size-16 shrink-0 items-center justify-center rounded-full border-2 font-mono text-xl font-bold shadow-[0_4px_14px_-4px_rgba(18,22,28,0.15)]"
              initial={shouldReduceMotion ? active : IDLE_STYLE}
              whileInView={active}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              {i + 1}
            </m.div>
            <p className={`mt-4 text-lg leading-snug font-bold ${colors.icon}`}>{item}</p>
          </div>
          {i < items.length - 1 && (
            <div className="relative hidden flex-1 sm:mt-8 sm:block">
              <div className="h-px w-full bg-border" />
              {!shouldReduceMotion && (
                <m.div
                  className="absolute inset-0 h-px w-full origin-left"
                  style={{ backgroundColor: active.backgroundColor }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.25, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
