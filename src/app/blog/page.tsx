import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { blogPosts } from "@/lib/blog";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background px-6 pb-28 pt-28 md:px-10 md:pt-36">
      <div className="mx-auto flex max-w-[900px] flex-col gap-12">
        <div className="flex flex-col gap-4">
          <EyebrowBadge>SAKIB // BLOG</EyebrowBadge>
          <h1 className="font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
            Thoughts &amp;{" "}
            <span className="text-accent">Notes.</span>
          </h1>
          <p className="max-w-[42ch] font-sans text-base leading-relaxed text-zinc-300">
            Writing about web development, programming, and things I learn along the way.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="card-surface p-6 transition-all duration-200 hover:border-white/20"
            >
              <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-3">
                <h2 className="font-sans text-2xl font-semibold text-foreground transition-colors group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="font-sans text-sm leading-relaxed text-zinc-300">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                  <span>{post.date}</span>
                  <span className="flex gap-2">
                    {post.tags.map((t) => (
                      <span key={t} className="text-accent">
                        #{t}
                      </span>
                    ))}
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
      <Footer />
    </>
  );
}
