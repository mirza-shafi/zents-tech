import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on AI systems, automation, and software engineering from the people building them at Zents Tech.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <span className="eyebrow">Blog</span>
            <h1 className="mt-3 max-w-2xl text-balance font-display text-5xl font-extrabold tracking-tighter md:text-6xl">
              Notes on building AI systems, not marketing copy about them.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Written by the people actually building the systems — what
              we&rsquo;ve learned, what we&rsquo;d ask before buying someone
              else&rsquo;s &ldquo;AI agent,&rdquo; and how we think through
              the calls that actually matter.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container-page py-16 md:py-20">
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.08}>
                <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-4 flex flex-1 flex-col">
                    <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                      {formatDate(post.date)} · {post.readTime}
                    </p>
                    <h2 className="mt-2 font-display text-xl font-bold transition-colors group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    <p className="mt-4 text-sm font-medium text-foreground">{post.author}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
