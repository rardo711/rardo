import Image from "next/image";
import { ArrowDown } from "lucide-react";

function Line({ children, i }: { children: React.ReactNode; i: number }) {
  return (
    <span className="-mb-[0.18em] block overflow-hidden pb-[0.18em]">
      <span
        className="hero-line block"
        style={{ "--d": `${0.04 + i * 0.08}s` } as React.CSSProperties}
      >
        {children}
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      data-surface="dark"
      className="relative flex h-[100svh] min-h-[38rem] max-h-[58rem] flex-col justify-end overflow-hidden bg-[#192217] text-paper short-landscape:h-auto short-landscape:min-h-[28rem]"
    >
      {/* Full-resolution portrait anchored right so it never upscales past its native 1000px width */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-[68%] lg:w-[62%] xl:w-[58%]"
      >
        <Image
          src="/photos/gerardo-olivia.webp"
          alt=""
          fill
          preload
          unoptimized
          sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 62vw, (min-width: 768px) 68vw, 100vw"
          className="object-cover object-[50%_20%] opacity-60 contrast-[1.06] brightness-[0.94] mix-blend-luminosity md:object-[54%_22%] md:opacity-78"
        />
        {/* Seamless horizontal dissolve into the Deep Oak canvas on tablet and desktop */}
        <div
          className="hidden md:block absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #192217 0%, rgba(25,34,23,0.92) 14%, rgba(25,34,23,0.46) 38%, rgba(25,34,23,0.12) 72%, rgba(25,34,23,0.22) 100%)",
          }}
        />
      </div>

      {/* Mobile vertical scrim for header and bottom-left legibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(25,34,23,0.58) 0%, rgba(25,34,23,0.16) 36%, rgba(25,34,23,0.88) 76%, #192217 100%)",
        }}
      />

      {/* Desktop top and bottom atmospheric framing */}
      <div
        aria-hidden
        className="pointer-events-none hidden md:block absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(25,34,23,0.54) 0%, transparent 24%, transparent 66%, rgba(25,34,23,0.8) 100%)",
        }}
      />

      {/* Foreground anchor aligned to the exact site gutter */}
      <div className="gutter relative z-10 mx-auto w-full max-w-6xl pb-12 pt-32 sm:pb-16 lg:max-w-7xl lg:pb-20 short-landscape:pb-10 short-landscape:pt-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="reveal-now font-tech text-[0.72rem] font-medium uppercase text-gold">
              Websites &amp; software
            </p>

            <h1 className="mt-3.5 font-display text-display font-semibold text-paper">
              <Line i={0}>Gerardo</Line>
              <Line i={1}>Castaneda</Line>
            </h1>

            <div
              className="reveal-now mt-8 flex flex-wrap items-center gap-6 sm:gap-7"
              style={{ "--d": "0.14s" } as React.CSSProperties}
            >
              <a
                href="#work"
                className="inline-flex min-h-12 items-center justify-center rounded-[2px] border border-paper/65 bg-transparent px-8 py-3 font-tech text-[0.72rem] font-semibold uppercase text-paper transition-colors duration-300 hover:border-paper hover:bg-paper hover:text-[#192217]"
              >
                View work
              </a>
              <a
                href="#inquire"
                className="u-sweep inline-flex min-h-11 items-center font-tech text-[0.72rem] font-medium uppercase text-paper/75 transition-colors duration-300 hover:text-paper"
              >
                Get in touch
              </a>
            </div>
          </div>

          <a
            href="#services"
            aria-label="Scroll to What I do"
            className="hidden md:inline-flex h-11 w-11 items-center justify-center text-paper/75 transition-all duration-300 hover:translate-y-0.5 hover:text-paper"
          >
            <ArrowDown size={18} strokeWidth={1.5} aria-hidden />
          </a>
        </div>
      </div>

      <div
        id="hero-end"
        aria-hidden
        className="pointer-events-none absolute inset-0"
      />
    </section>
  );
}
