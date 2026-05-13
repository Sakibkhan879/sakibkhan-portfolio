import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { blogPosts } from "@/lib/blog";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background px-6 pb-28 pt-28 md:px-10 md:pt-36">
      <article className="mx-auto flex max-w-[720px] flex-col gap-8">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-1.5 self-start font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-foreground"
        >
          <ArrowLeft
            size={12}
            weight="bold"
            className="transition-transform duration-200 group-hover:-translate-x-0.5"
          />
          Back to Blog
        </Link>

        <header className="flex flex-col gap-4">
          <h1 className="font-sans text-3xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
            <span>{post.date}</span>
            <span className="flex gap-2">
              {post.tags.map((t) => (
                <span key={t} className="text-accent">#{t}</span>
              ))}
            </span>
          </div>
        </header>

        <div className="font-sans text-base leading-relaxed text-zinc-300 [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1 [&_strong]:text-foreground [&_code]:rounded [&_code]:bg-white/[0.06] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm [&_code]:text-accent">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </main>
      <Footer />
    </>
  );
}
