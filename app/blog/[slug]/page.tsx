"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "@/app/constants/blogPosts";
import { useState } from "react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // match by slug from link
  const post = blogPosts.find((post) => post.link === `/blog/${params.slug}`);
  const [loading, setLoading] = useState(true);

  if (!post) return notFound();

  return (
    <div className="min-h-screen pb-12 pt-24 px-4 bg-white dark:bg-gray-900  ">
      <div className="max-w-3xl mx-auto">
        {/* Blog Image */}
        <div className={`relative w-full h-64 sm:h-96 mb-8 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700 shadow-lg ${loading ? " animate-pulse" : ""}`}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover object-center"
            onLoad={() => {
              setLoading(false);
            }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Title + Meta */}
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">{post.title}</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          {post.date} • {post.readTime} min read
        </p>

        {/* Content */}
        <article className="prose dark:prose-invert prose-lg max-w-none">
          <p>{post.excerpt}</p>
        </article>
      </div>
    </div>
  );
}
