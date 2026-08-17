"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { BLOG_POSTS } from "@/lib/posts";
import { PostCard } from "@/components/blog/BlogFilterGrid";

// Latest 3 posts for the homepage teaser. Entrance animation uses the
// site's CSS-keyframe Reveal (motion/react whileInView is avoided here, 
// see /memories/nextjs-patterns.md: it gets permanently stuck at
// opacity:0 with this Motion v12 + React 19 + Next 16 Turbopack stack).
// The "View all articles" link below uses motion/react purely for a
// hover-driven micro-interaction, which is unaffected by that bug.
const LATEST_POSTS = BLOG_POSTS.slice(0, 3);

function ViewAllLink() {
  return (
    <Link
      href="/blogs/"
      className="group inline-flex items-center gap-2 text-[14px] font-semibold text-brand-deep"
    >
      <span className="relative">
        View All Articles
        <motion.span
          aria-hidden
          className="absolute inset-x-0 -bottom-0.5 h-px origin-left bg-brand-deep"
          initial={{ scaleX: 0.35 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </span>
      <motion.span
        aria-hidden
        className="inline-flex"
        whileHover={{ x: 3 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        &rarr;
      </motion.span>
    </Link>
  );
}

export function BlogTeaser() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 85% 0%, rgba(119,189,197,0.1) 0%, transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-deep">
                From Our Blog
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Health Insights &amp; Wellness Tips
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                Practical guidance from our Ormond Beach, FL care team on spine
                health, joint pain, neuropathy, and recovery.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <ViewAllLink />
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {LATEST_POSTS.map((post, i) => (
            <PostCard key={post.slug} post={post} delay={Math.min(i * 0.08, 0.24)} />
          ))}
        </div>
      </div>
    </section>
  );
}
