import Link from "next/link";
import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 font-display text-[17px] font-bold tracking-tight text-foreground ${className}`}
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
        Zents <span className="text-primary">Tech</span>
      </span>
    </Link>
  );
}
