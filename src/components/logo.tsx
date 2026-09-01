import Link from "next/link";
import Image from "next/image";

export function Logo({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const textColor = variant === "dark" ? "text-[var(--footer-fg)]" : "text-foreground";
  const techColor = variant === "dark" ? "text-[var(--footer-accent)]" : "text-primary";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 font-display text-[17px] font-bold tracking-tight ${textColor} ${className}`}
    >
      <Image
        src="/icon-192.png"
        alt=""
        width={28}
        height={28}
        priority
        className="shrink-0"
      />
      <span>
        Zents <span className={techColor}>Tech</span>
      </span>
    </Link>
  );
}
