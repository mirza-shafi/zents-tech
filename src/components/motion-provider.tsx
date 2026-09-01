"use client";

import { LazyMotion } from "motion/react";

const loadFeatures = () => import("@/lib/motion-features").then((res) => res.default);

/**
 * Gates the whole app on Motion's on-demand feature bundle (~4.6kb to
 * start) instead of the full library. `strict` means every animated
 * element must use `m.*`, not `motion.*`, so bundle savings can't be
 * accidentally undone elsewhere in the app.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}
