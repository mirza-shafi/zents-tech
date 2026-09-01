"use client";

import { m, useReducedMotion } from "motion/react";

type Step = {
  slug: string;
  step: string;
  detail: string;
  points: string[];
};

const ACTIVE = { backgroundColor: "#0f766e", borderColor: "#0f766e", color: "#ffffff" };
const IDLE = { backgroundColor: "#f6f8fb", borderColor: "#e2e7ef", color: "#5b6472" };

export function ProcessTimeline({ steps }: { steps: Step[] }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative">
      <div className="absolute top-0 bottom-0 left-[15px] hidden w-px bg-border md:block" />
      {!shouldReduceMotion && (
        <m.div
          className="absolute top-0 left-[15px] hidden w-px origin-top bg-primary md:block"
          style={{ height: "100%" }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      )}

      <div className="flex flex-col gap-10">
        {steps.map((s, i) => (
          <div key={s.step} id={s.slug} className="relative flex scroll-mt-24 gap-6 md:gap-8">
            <m.div
              className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-semibold"
              initial={shouldReduceMotion ? ACTIVE : IDLE}
              whileInView={ACTIVE}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              {i + 1}
            </m.div>
            <m.div
              className="pb-2"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="font-display text-xl font-bold">{s.step}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{s.detail}</p>
              <ul className="mt-3 flex flex-col gap-1.5">
                {s.points.map((line) => (
                  <li
                    key={line}
                    className="text-sm leading-relaxed text-foreground/80 before:mr-2 before:text-primary before:content-['—']"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </m.div>
          </div>
        ))}
      </div>
    </div>
  );
}
