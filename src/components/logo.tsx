import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 font-display text-[17px] font-bold tracking-tight text-foreground ${className}`}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="1" y="1" width="24" height="24" rx="6" stroke="var(--primary)" strokeWidth="1.6" />
        <path
          d="M8 8.5H18L8 17.5H18"
          stroke="var(--primary)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>
        Zents <span className="text-primary">Tech</span>
      </span>
    </Link>
  );
}
