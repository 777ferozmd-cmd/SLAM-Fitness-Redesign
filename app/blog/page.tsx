"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { blogPosts, CATEGORIES } from "@/lib/blog-data";
import Card from "@/components/ui/Card";

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <main className="pt-24 pb-24 min-h-screen">
      {/* Hero Section */}
      <section className="px-6 md:px-20 max-w-[1200px] mx-auto pt-12 pb-16">
        <span className="text-ferous-accent text-[12px] font-semibold uppercase tracking-[0.12em] block mb-3">
          FROM THE FEROUS BLOG
        </span>
        <h1 className="text-white text-[clamp(36px,4.5vw,56px)] font-bold mb-8 leading-[1.2]">
          Fitness, Nutrition & <span className="text-ferous-accent">Lifestyle</span>
        </h1>
        
        {/* Search */}
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full bg-[#1A1A1A] text-white border border-[#2A2A2A] rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:border-ferous-accent transition-colors"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ferous-muted w-5 h-5" />
        </div>
      </section>

      {/* Featured Post */}
      {!searchQuery && activeCategory === "All" && (
        <section className="px-6 md:px-20 max-w-[1200px] mx-auto mb-16">
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div className="relative aspect-video md:aspect-[21/9] rounded-[24px] overflow-hidden mb-6">
              <Image
                src={featuredPost.thumbnail}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
            </div>
            <div className="max-w-3xl">
              <span className="inline-block text-[11px] font-semibold text-ferous-accent uppercase tracking-[0.1em] mb-3">
                {featuredPost.category}
              </span>
              <h2 className="text-white text-[clamp(24px,3vw,32px)] font-bold mb-4 group-hover:text-ferous-accent transition-colors leading-[1.3]">
                {featuredPost.title}
              </h2>
              <p className="text-ferous-body text-[18px] mb-4 line-clamp-2 leading-[1.65]">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center text-ferous-muted text-sm gap-4">
                <span>{featuredPost.author}</span>
                <span className="w-1 h-1 rounded-full bg-ferous-border" />
                <span>{featuredPost.readTime}</span>
                <span className="w-1 h-1 rounded-full bg-ferous-border" />
                <span className="text-white font-semibold underline underline-offset-4 group-hover:text-ferous-accent transition-colors">
                  Read Article →
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Category Tabs */}
      <section className="px-6 md:px-20 max-w-[1200px] mx-auto mb-12">
        <div className="flex items-center gap-6 overflow-x-auto pb-4 border-b border-ferous-border" style={{ scrollbarWidth: "none" }}>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap pb-4 px-1 text-[14px] font-medium transition-colors relative ${
                activeCategory === category ? "text-white" : "text-ferous-muted hover:text-white"
              }`}
            >
              {category}
              {activeCategory === category && (
                <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-ferous-accent" />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Article Grid */}
      <section className="px-6 md:px-20 max-w-[1200px] mx-auto">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block transition-all duration-300 hover:-translate-y-1">
                <Card className="p-0 overflow-hidden border-[#2A2A2A]">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-block text-[11px] font-semibold text-ferous-accent uppercase tracking-[0.1em] mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-white text-[17px] font-bold leading-[1.4] mb-3 group-hover:text-ferous-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="text-ferous-muted text-[12px] flex items-center gap-3 mt-2">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-ferous-border" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-ferous-muted text-[16px]">
            No articles found matching your criteria.
          </div>
        )}
      </section>
    </main>
  );
}
