const rowOne = ["n8n", "OpenAI", "Next.js", "React", "WhatsApp API", "PostgreSQL", "Make", "Webhooks"];
const rowTwo = ["RAG Pipelines", "AI Agents", "Node.js", "TypeScript", "Meta Graph API", "CRMs", "Google Sheets", "REST APIs"];

function MarqueeRow({ items, direction }: { items: string[]; direction: "left" | "right" }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex w-max items-center gap-x-10 sm:gap-x-14 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-3xl font-bold whitespace-nowrap text-[var(--footer-fg)]/85 sm:text-4xl"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/** A no-JS, pure-CSS marquee — respects reduced motion via the
 * `.animate-marquee-*` rules in globals.css, so it needs no client
 * component or `useReducedMotion` check of its own. */
export function TechMarquee() {
  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <MarqueeRow items={rowOne} direction="left" />
      <MarqueeRow items={rowTwo} direction="right" />
    </div>
  );
}
