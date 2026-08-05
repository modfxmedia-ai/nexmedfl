import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";
import { DOCTOR_HIGHLIGHT } from "@/lib/team-content";

// Solid credential icons, in the same order as DOCTOR_HIGHLIGHT.credentials:
// experience / advanced training / imaging credential / engineering & rating.
const CREDENTIAL_ICONS = [
  "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 5v5.4l4.2 2.5-1 1.6L11 13V7h2Z",
  "M12 3 1 8l11 5 9-4.09V15h2V8L12 3Zm-7 8.18V15c0 2 3.13 4 7 4s7-2 7-4v-3.82l-7 3.18-7-3.18Z",
  "M6 2h12a1 1 0 0 1 1 1v9a5 5 0 0 1-1.5 3.5L12 21l-5.5-5.5A5 5 0 0 1 5 12V3a1 1 0 0 1 1-1Zm3 6.6 1.4 1.4L9 11.4 7.6 10 9 8.6Zm4.8-1.2L17.4 9 12 14.4 8.6 11l1.4-1.4 2 2 3.8-3.8Z",
  "M12 2 3 6v6c0 5 4 9 9 10 5-1 9-5 9-10V6l-9-4ZM9.8 15.4 7 12.6l1.4-1.4 1.4 1.4 4.8-4.8L16 9.2l-6.2 6.2Z",
];

function CredentialIcon({ index }: { index: number }) {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={CREDENTIAL_ICONS[index % CREDENTIAL_ICONS.length]} />
    </svg>
  );
}

/**
 * Homepage "Meet the Doctor" section — introduces Dr. Noah Herbert with
 * his real photo/bio, a floating "Meet Your Doctor" badge overlapping
 * the photo card, a 2x2 credential grid, and dual CTAs.
 */
export function MeetTheDoctor() {
  const [namePart, suffix] = DOCTOR_HIGHLIGHT.name.split(",");
  const nameWords = namePart.trim().split(" ");
  const lastName = nameWords.pop();
  const firstNames = nameWords.join(" ");

  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 85% 10%, rgba(34,199,240,0.08) 0%, transparent 55%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-[320px] w-[320px] rounded-full bg-brand-cyan/15 blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1fr] lg:gap-16 lg:py-28 lg:px-8">
        {/* Photo */}
        <div
          className="nexmed-reveal relative mx-auto w-full max-w-sm pb-6"
          style={{ "--reveal-x": "-32px", "--reveal-y": "0px" } as CSSProperties}
        >
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-cyan/20 to-brand-deep/20 blur-2xl"
          />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-surface-border shadow-[0_30px_70px_-30px_rgba(20,121,232,0.4)]">
            <Image
              src={DOCTOR_HIGHLIGHT.image}
              alt={DOCTOR_HIGHLIGHT.name}
              fill
              sizes="(min-width: 1024px) 380px, 90vw"
              className="object-cover"
              priority={false}
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 flex justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-cyan/25 bg-white px-4 py-2 text-[12.5px] font-bold uppercase tracking-[0.08em] text-brand-deep shadow-[0_16px_36px_-14px_rgba(20,121,232,0.5)]">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep text-white">
                <CredentialIcon index={3} />
              </span>
              Meet Your Doctor
            </span>
          </div>
        </div>

        {/* Copy */}
        <div>
          <Reveal>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-cyan/30 bg-white/70 px-3 py-1.5 shadow-[0_8px_28px_-14px_rgba(20,121,232,0.35)] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-deep">
                Your Chiropractor
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {firstNames}{" "}
              <span className="bg-gradient-to-br from-brand-cyan to-brand-deep bg-clip-text text-transparent">
                {lastName}
              </span>
              {suffix ? `,${suffix}` : ""}
            </h2>
            <p className="mt-1.5 text-[13px] font-bold uppercase tracking-[0.14em] text-ink-muted">
              {DOCTOR_HIGHLIGHT.title}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              {DOCTOR_HIGHLIGHT.bio}
            </p>
          </Reveal>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {DOCTOR_HIGHLIGHT.credentials.map((credential, i) => (
              <div
                key={credential}
                className="nexmed-reveal-pill flex items-center gap-3 rounded-2xl border border-surface-border bg-bg-tinted px-4 py-3.5 text-[13.5px] font-medium leading-snug text-ink transition-all hover:-translate-y-[3px] hover:border-brand-cyan/40 hover:shadow-[0_16px_36px_-14px_rgba(20,121,232,0.35)]"
                style={
                  {
                    "--reveal-delay": `${0.15 + i * 0.08}s`,
                    "--reveal-scale": "0.94",
                  } as CSSProperties
                }
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-cyan to-brand-deep text-white">
                  <CredentialIcon index={i} />
                </span>
                {credential}
              </div>
            ))}
          </div>

          <Reveal delay={0.4} className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/appointment-request/"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_44px_-10px_rgba(20,121,232,0.55)] transition-all hover:scale-[1.03]"
            >
              <span aria-hidden>&rarr;</span> Book with {DOCTOR_HIGHLIGHT.name.split(",")[0]}
            </Link>
            <Link
              href="/meet-our-team/"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-surface-border bg-white px-7 py-3.5 text-[15px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-brand-cyan/40"
            >
              Read Full Bio <span aria-hidden>&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
