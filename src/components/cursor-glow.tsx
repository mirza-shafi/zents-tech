"use client";

import { useEffect, useRef } from "react";

type CursorGlowProps = {
  /** "r, g, b" — no rgb() wrapper */
  color?: string;
  size?: number;
  opacity?: number;
  blendMode?: "normal" | "screen";
  className?: string;
};

/**
 * Renders inside a `relative overflow-hidden` parent. Tracks the pointer
 * within that parent and eases a soft radial glow toward it — a no-op on
 * touch devices and under prefers-reduced-motion, since there's no
 * persistent cursor to react to either way.
 */
export function CursorGlow({
  color = "45, 212, 191",
  size = 600,
  opacity = 0.3,
  blendMode = "normal",
  className = "",
}: CursorGlowProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduceMotion) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let active = false;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
      if (!active) {
        active = true;
        current.x = target.x;
        current.y = target.y;
        el.style.opacity = "1";
      }
    };
    const onLeave = () => {
      active = false;
      el.style.opacity = "0";
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      el.style.transform = `translate(${current.x - size / 2}px, ${current.y - size / 2}px)`;
      raf = requestAnimationFrame(tick);
    };

    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, [size]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute left-0 top-0 opacity-0 transition-opacity duration-500 ${className}`}
      style={{
        width: size,
        height: size,
        mixBlendMode: blendMode,
        background: `radial-gradient(circle, rgba(${color}, ${opacity}) 0%, rgba(${color}, 0) 70%)`,
      }}
    />
  );
}
