import Image from "next/image";
import Link from "next/link";
import { WELCOME, WELCOME_PROGRAMS } from "@/lib/home-content";

export function WelcomeSection() {
  return (
    <section className="bg-bg-tinted">
      <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-deep">
            {WELCOME.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {WELCOME.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            {WELCOME.intro}
          </p>
        </div>

        {/* Specialty programs — auto-scrolling image carousel */}
        <div className="mt-16 lg:mt-20">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-ink-muted">
            {WELCOME.programsLeadIn}
          </p>

          <div
            className="group/marquee relative mt-10 overflow-hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
              maskImage:
                "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            }}
          >
            <div className="marquee-track flex w-max gap-5 group-hover/marquee:[animation-play-state:paused] lg:gap-6">
              {[...WELCOME_PROGRAMS, ...WELCOME_PROGRAMS].map(
                (program, i) => (
                  <Link
                    key={`${program.name}-${i}`}
                    href={program.href}
                    aria-hidden={i >= WELCOME_PROGRAMS.length}
                    tabIndex={i >= WELCOME_PROGRAMS.length ? -1 : 0}
                    className="group relative flex h-80 w-64 shrink-0 flex-col overflow-hidden rounded-2xl bg-ink shadow-[0_24px_60px_-30px_rgba(20,121,232,0.35)] transition-transform hover:-translate-y-1 sm:w-72"
                  >
                    <Image
                      src={program.image}
                      alt={program.name}
                      fill
                      sizes="(min-width: 640px) 288px, 256px"
                      className="object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-60"
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"
                    />
                    <span className="relative mt-auto flex flex-col gap-2 p-6">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan">
                        {String((i % WELCOME_PROGRAMS.length) + 1).padStart(
                          2,
                          "0",
                        )}
                      </span>
                      <span className="text-lg font-semibold leading-snug text-white">
                        {program.name}
                      </span>
                    </span>
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Closing paragraphs */}
        <div className="mx-auto mt-16 max-w-3xl text-center lg:mt-20">
          {WELCOME.closing.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 text-base leading-relaxed text-ink-soft first:mt-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
