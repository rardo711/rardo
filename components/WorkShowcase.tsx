import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export type WorkPiece = {
  name: string;
  kind: string;
  tags: string[];
  outcome?: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
};

/**
 * One image treatment for the work shots: the shutter opens as the card
 * scrolls into view (globals.css `.work-reveal`), and the image eases in a
 * hair on hover. Nothing else moves.
 */
function Shot({ piece, flip }: { piece: WorkPiece; flip: boolean }) {
  return (
    <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
      <div className="work-reveal relative overflow-hidden border border-line bg-wash">
        <Link
          href={piece.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${piece.name} (opens in a new tab)`}
          className="group/shot relative block"
        >
          <Image
            src={piece.image}
            alt={piece.imageAlt}
            width={1440}
            height={1000}
            className="aspect-[3/2] w-full object-cover object-top transition-transform duration-[600ms] ease-out group-hover/shot:scale-[1.015]"
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </Link>
      </div>
    </div>
  );
}

export default function WorkShowcase({ items }: { items: WorkPiece[] }) {
  return (
    <div className="mt-16 flex flex-col gap-20 lg:mt-24 lg:gap-28">
      {items.map((piece, i) => (
        <Reveal
          as="article"
          key={piece.name}
          className="work-card group grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
        >
          <Shot piece={piece} flip={i % 2 === 1} />
          <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
            <p className="font-tech text-eyebrow uppercase text-accent-deep">
              {piece.kind}
            </p>
            <h3 className="mt-3 font-display text-[clamp(2rem,1.2rem+2.4vw,3rem)] font-semibold leading-[1.08] tracking-tight transition-colors duration-300 group-hover:text-accent-deep">
              {piece.name}
            </h3>

            {/* Client Outcome Callout */}
            {piece.outcome && (
              <p className="mt-4 border-l-2 border-accent pl-3 text-sm italic text-ink">
                “{piece.outcome}”
              </p>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
              {piece.tags.map((t) => (
                <span
                  key={t}
                  className="border border-line px-3 py-1 font-tech text-eyebrow uppercase text-ink-soft"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-5 leading-relaxed text-ink-soft">
              {piece.description}
            </p>
            <Link
              href={piece.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent-deep"
            >
              Visit the site
              <span className="sr-only"> (opens in a new tab)</span>
              <ArrowUpRight
                size={16}
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
