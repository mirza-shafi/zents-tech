import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { blogPosts, type BlogBlock } from "@/lib/blog-data";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function BodyBlock({ block }: { block: BlogBlock }) {
  if (block.type === "h2") {
    return <h2 className="mt-10 font-display text-2xl font-bold tracking-tight">{block.text}</h2>;
  }
  if (block.type === "ul") {
    return (
      <ul className="mt-4 flex flex-col gap-2.5">
        {block.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-base leading-relaxed text-foreground/90">
            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  return <p className="mt-4 text-base leading-relaxed text-foreground/90">{block.text}</p>;
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page max-w-3xl py-16 md:py-20">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" /> All posts
            </Link>
            <p className="mt-5 font-mono text-xs tracking-wide text-muted-foreground uppercase">
              {formatDate(post.date)} · {post.readTime}
            </p>
            <h1 className="mt-3 text-balance font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6">
              <p className="text-sm font-semibold">{post.author}</p>
              <p className="text-xs text-muted-foreground">{post.authorRole}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container-page max-w-3xl pt-10">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
            <Image
              src={post.image}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 768px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page max-w-3xl pt-8 pb-16 md:pb-20">
          <Reveal>
            {post.body.map((block, i) => (
              <BodyBlock key={i} block={block} />
            ))}
          </Reveal>
          <div className="mt-12 flex justify-center">
            <Button size="lg" nativeButton={false} render={<Link href="/contact" />}>
              Talk through what you&rsquo;re building
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="container-page py-16 md:py-20">
          <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">More from the blog</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {otherPosts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-3 font-display text-base font-bold transition-colors group-hover:text-primary">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
