import { Reveal } from "@/components/Reveal";
import { BLOG_POSTS, getBlogTopic, getReadTimeMinutes } from "@/lib/posts";
import { BLOG_INTRO, BLOG_TOPICS } from "@/lib/contact-content";
import { BlogFilterGrid } from "@/components/blog/BlogFilterGrid";

/**
 * /blogs/ index page body, hero/intro framing the content hub, an
 * interactive topic filter, a featured post, and a modern card grid of
 * every post. Individual post bodies are rendered on their own
 * /[slug]/ route.
 */
export function BlogsPageBody() {
  const topicsCovered = new Set(BLOG_POSTS.map((post) => getBlogTopic(post))).size;
  const postsWithFullBody = BLOG_POSTS.filter((post) => post.body && post.body.length > 0);
  const avgReadTime = Math.max(
    1,
    Math.round(
      postsWithFullBody.reduce((sum, post) => sum + getReadTimeMinutes(post), 0) /
        postsWithFullBody.length
    )
  );
  const heroStats = [
    { value: `${BLOG_POSTS.length}+`, label: "Articles" },
    { value: `${topicsCovered}`, label: "Topics Covered" },
    { value: `${avgReadTime} min`, label: "Avg. Read Time" },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        {/* Ambient brand glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 20% 0%, rgba(119,189,197,0.16) 0%, rgba(1,36,83,0.06) 40%, transparent 75%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage:
              "linear-gradient(#77BDC5 1px, transparent 1px), linear-gradient(90deg, #77BDC5 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-0 h-[380px] w-[380px] rounded-full bg-brand-cyan/15 blur-[110px]"
        />

        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
          <Reveal>
            <div className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-cyan">
                {BLOG_INTRO.eyebrow}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Your Guide to Spine, Nerve &amp;{" "}
              <span className="bg-gradient-to-br from-brand-cyan to-white bg-clip-text text-transparent">
                Joint Health
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70">
              {BLOG_INTRO.intro}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 backdrop-blur"
                >
                  <p className="bg-gradient-to-br from-brand-cyan to-white bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10.5px] font-bold uppercase tracking-[0.16em] text-white/55">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mx-auto mt-9 flex max-w-2xl flex-wrap justify-center gap-2">
              {BLOG_TOPICS.map((topic) => (
                <span
                  key={topic.label}
                  title={topic.description}
                  className="rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-1.5 text-[12px] font-semibold text-white/75"
                >
                  {topic.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filterable post grid */}
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <BlogFilterGrid posts={BLOG_POSTS} />
      </section>
    </main>
  );
}

