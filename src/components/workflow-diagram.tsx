"use client";

import { m, useReducedMotion } from "motion/react";
import { Inbox, Workflow, Network, TrendingUp } from "lucide-react";

const nodes = [
  { icon: Inbox, title: "A manual task", detail: "A lead, a ticket, an order", iconCls: "text-muted-foreground", badgeCls: "bg-muted" },
  { icon: Workflow, title: "An AI agent or automation", detail: "Reads it, acts on it", iconCls: "text-primary", badgeCls: "bg-accent" },
  { icon: Network, title: "Your existing tools", detail: "CRM, inbox, sheets, APIs", iconCls: "text-violet", badgeCls: "bg-violet-tint" },
  { icon: TrendingUp, title: "A better outcome", detail: "Faster, without the headcount", iconCls: "text-good", badgeCls: "bg-good-tint" },
];

const nodePositions = [12.5, 37.5, 62.5, 87.5]; // percent, matches the 4-col grid centers

function Connector({ orientation }: { orientation: "horizontal" | "vertical" }) {
  const shouldReduceMotion = useReducedMotion();
  const isHorizontal = orientation === "horizontal";

  const pathProps = isHorizontal
    ? { d: `M ${nodePositions[0]} 2 L ${nodePositions[3]} 2`, viewBox: "0 0 100 4" }
    : { d: `M 2 ${nodePositions[0]} L 2 ${nodePositions[3]}`, viewBox: "0 0 4 100" };

  const gradientId = `flow-gradient-${orientation}`;

  return (
    <svg
      aria-hidden="true"
      className={isHorizontal ? "absolute inset-x-0 top-7 h-1 w-full" : "absolute inset-y-0 left-7 h-full w-1"}
      viewBox={pathProps.viewBox}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1={isHorizontal ? "0%" : "0%"}
          y1={isHorizontal ? "0%" : "0%"}
          x2={isHorizontal ? "100%" : "0%"}
          y2={isHorizontal ? "0%" : "100%"}
        >
          <stop offset="0%" stopColor="var(--muted-foreground)" />
          <stop offset="45%" stopColor="var(--primary)" />
          <stop offset="75%" stopColor="var(--violet)" />
          <stop offset="100%" stopColor="var(--good)" />
        </linearGradient>
      </defs>
      <path
        d={pathProps.d}
        stroke="var(--border)"
        strokeWidth="1"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
      <m.path
        d={pathProps.d}
        stroke={`url(#${gradientId})`}
        strokeWidth="1.5"
        fill="none"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
      {!shouldReduceMotion && (
        <m.circle
          r="1.6"
          fill="var(--primary)"
          initial={isHorizontal ? { cx: nodePositions[0], cy: 2 } : { cx: 2, cy: nodePositions[0] }}
          animate={
            isHorizontal
              ? { cx: [nodePositions[0], nodePositions[3]] }
              : { cy: [nodePositions[0], nodePositions[3]] }
          }
          transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 0.6, ease: "easeInOut", delay: 1.4 }}
        />
      )}
    </svg>
  );
}

export function WorkflowDiagram() {
  return (
    <div className="relative">
      {/* Mobile: stacked vertically */}
      <div className="relative grid grid-cols-1 gap-10 py-2 md:hidden">
        <Connector orientation="vertical" />
        {nodes.map((node, i) => (
          <Node key={node.title} node={node} index={i} />
        ))}
      </div>

      {/* Desktop: horizontal row */}
      <div className="relative hidden grid-cols-4 gap-4 py-2 md:grid">
        <Connector orientation="horizontal" />
        {nodes.map((node, i) => (
          <Node key={node.title} node={node} index={i} />
        ))}
      </div>
    </div>
  );
}

function Node({
  node,
  index,
}: {
  node: (typeof nodes)[number];
  index: number;
}) {
  const Icon = node.icon;
  return (
    <m.div
      className="relative flex flex-col items-start gap-3 md:items-center md:text-center"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.15 * index }}
    >
      <div
        className={`relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-border shadow-[0_1px_2px_rgba(18,22,28,0.04),0_8px_24px_-12px_rgba(18,22,28,0.10)] ${node.badgeCls}`}
      >
        <Icon className={`size-6 ${node.iconCls}`} strokeWidth={1.75} />
      </div>
      <div>
        <h3 className="font-display text-sm font-bold">{node.title}</h3>
        <p className="mt-0.5 text-xs text-muted-foreground">{node.detail}</p>
      </div>
    </m.div>
  );
}
