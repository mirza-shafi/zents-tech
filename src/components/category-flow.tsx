import { Fragment } from "react";
import { pillarColorClasses, type ServiceCategory } from "@/lib/site-data";

/**
 * A connected step-flow built directly from a category's own real
 * feature list — a visualization of "here's how these pieces connect,"
 * not a fabricated workflow narrative.
 */
export function CategoryFlow({ items, color }: { items: string[]; color: ServiceCategory["color"] }) {
  const colors = pillarColorClasses[color];

  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-0">
      {items.map((item, i) => (
        <Fragment key={item}>
          <div className="flex flex-col items-center text-center sm:w-36">
            <div
              className={`flex size-12 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold ${colors.badge}`}
            >
              {i + 1}
            </div>
            <p className="mt-3 text-xs leading-snug font-medium">{item}</p>
          </div>
          {i < items.length - 1 && <div className="hidden h-px flex-1 bg-border sm:mt-6 sm:block" />}
        </Fragment>
      ))}
    </div>
  );
}
