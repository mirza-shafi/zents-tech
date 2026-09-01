"use client";

import dynamic from "next/dynamic";
import { workflowNodes } from "@/components/workflow-scene-3d";

const WorkflowScene3D = dynamic(
  () => import("@/components/workflow-scene-3d").then((m) => m.WorkflowScene3D),
  {
    ssr: false,
    loading: () => <div className="h-[220px] w-full sm:h-[260px] md:h-[300px]" />,
  }
);

const details: Record<string, string> = {
  "Manual task": "A lead, a ticket, an order",
  "AI / automation": "Reads it, acts on it",
  "Your tools": "CRM, inbox, sheets, APIs",
  Outcome: "Faster, without the headcount",
};

export function Workflow3DSection() {
  return (
    <div>
      <WorkflowScene3D />
      <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4">
        {workflowNodes.map((n) => (
          <div key={n.label} className="text-center">
            <span
              className="mx-auto block size-2 rounded-full"
              style={{ backgroundColor: n.color }}
              aria-hidden="true"
            />
            <h3 className="mt-2 font-display text-sm font-bold">{n.label}</h3>
            <p className="mt-0.5 text-xs text-muted-foreground">{details[n.label]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
