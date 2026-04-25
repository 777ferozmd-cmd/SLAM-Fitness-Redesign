import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Get related articles (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // If not enough in category, just grab some recent ones
  if (relatedPosts.length < 3) {
    const additional = blogPosts
      .filter((p) => p.slug !== post.slug && !relatedPosts.includes(p))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...additional);
  }

  return (
    <main className="pt-24 pb-24 min-h-screen">
      {/* Header */}
      <header className="px-6 md:px-20 max-w-[1000px] mx-auto pt-12 pb-12 text-center">
        <span className="inline-block text-[12px] font-semibold text-ferous-accent uppercase tracking-[0.12em] mb-6">
          {post.category}
        </span>
        <h1 className="text-white text-[clamp(36px,5vw,64px)] font-bold mb-8 leading-[1.1]">
          {post.title}
        </h1>
        <div className="flex items-center justify-center text-ferous-muted text-[14px] gap-4">
          <span className="text-white font-medium">{post.author}</span>
          <span className="w-1 h-1 rounded-full bg-ferous-border" />
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-ferous-border" />
          <span>{post.readTime}</span>
        </div>
      </header>

      {/* Hero Image */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-20 mb-16">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[24px] overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>

      {/* Article Body */}
      <article className="px-6 md:px-20 max-w-[800px] mx-auto">
        <div className="prose prose-invert prose-lg max-w-none">
          {post.content.map((paragraph, idx) => {
            // Add a fake pull quote in the middle for styling demonstration
            if (idx === Math.floor(post.content.length / 2)) {
              return (
                <div key={idx}>
                  <blockquote className="border-l-[3px] border-ferous-accent pl-6 my-10 italic text-white text-[clamp(24px,3vw,32px)] font-medium leading-[1.4]">
                    "{post.excerpt}"
                  </blockquote>
                  <p className="text-[18px] text-[#B0B0B0] leading-[1.7] mb-8">
                    {paragraph}
                  </p>
                </div>
              );
            }
            return (
              <p key={idx} className="text-[18px] text-[#B0B0B0] leading-[1.7] mb-8">
                {paragraph}
              </p>
            );
          })}
        </div>
      </article>

      {/* Related Articles */}
      <section className="px-6 md:px-20 max-w-[1200px] mx-auto mt-24 pt-16 border-t border-[#2A2A2A]">
        <h2 className="text-white text-[36px] font-bold mb-10">
          Related Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((relatedPost) => (
            <Link
              key={relatedPost.slug}
              href={`/blog/${relatedPost.slug}`}
              className="group block bg-[#1A1A1A] border border-[#2A2A2A] rounded-[16px] overflow-hidden transition-all duration-300 hover:border-ferous-accent hover:-translate-y-1"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={relatedPost.thumbnail}
                  alt={relatedPost.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="inline-block text-[11px] font-semibold text-ferous-accent uppercase tracking-[0.1em] mb-2">
                  {relatedPost.category}
                </span>
                <h3 className="text-white text-[17px] font-bold leading-[1.4] mb-3 group-hover:text-ferous-accent transition-colors line-clamp-2">
                  {relatedPost.title}
                </h3>
                <div className="text-ferous-muted text-[12px] flex items-center gap-3 mt-2">
                  <span>{relatedPost.date}</span>
                  <span className="w-1 h-1 rounded-full bg-ferous-border" />
                  <span>{relatedPost.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
