"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

/* ---------------- WordsPullUp ---------------- */
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  noWrap?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({
  text,
  className = "",
  showAsterisk = false,
  noWrap = false,
  style,
}: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div
      ref={ref}
      className={`inline-flex ${noWrap ? "flex-nowrap whitespace-nowrap" : "flex-wrap"} ${className}`}
      style={style}
    >
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ---------------- WordsPullUpMultiStyle ---------------- */
interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  style?: React.CSSProperties;
}

export const WordsPullUpMultiStyle = ({
  segments,
  className = "",
  style,
}: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const words: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`} style={style}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-block ${w.className ?? ""}`}
          style={{ marginRight: "0.25em" }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  );
};

/* ---------------- PrismaHero ---------------- */
const CREAM = "#E1E0CC";
const CREAM_MUTED = "rgba(225, 224, 204, 0.7)";

export interface NavItem {
  label: string;
  href: string;
}

export interface PrismaHeroProps {
  name: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  navItems: NavItem[];
  topline?: string;
  handle?: string;
  handleHref?: string;
  // Optional MP4 / WebM. If omitted, the hero renders with a dark gradient + dot grid + noise fallback.
  videoSrc?: string;
  // Optional portrait shown above the subtitle in the bottom-right block.
  portraitSrc?: string;
}

export const PrismaHero = ({
  name,
  subtitle,
  ctaLabel,
  ctaHref,
  navItems,
  topline,
  handle,
  handleHref,
  videoSrc,
  portraitSrc,
}: PrismaHeroProps) => {
  return (
    <section className="h-screen w-full overflow-hidden">
      <div
        className="relative h-full w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #0a0a0a 0%, #141420 50%, #0a0a0a 100%)",
        }}
      >
        {videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            src={videoSrc}
          />
        ) : (
          // FIXME: drop in a real hero video — place an mp4 at /public/videos/hero.mp4
          // and pass videoSrc="/videos/hero.mp4" from the parent. Until then this dark
          // gradient + dot grid + noise stack stands in.
          <div className="absolute inset-0 hero-dot-grid-dark" />
        )}

        {/* Noise overlay */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Topline (location) */}
        {topline && (
          <div
            className="absolute left-4 top-4 z-20 font-mono text-[10px] uppercase tracking-[0.15em] md:left-6 md:top-6 md:text-[11px]"
            style={{ color: CREAM_MUTED }}
          >
            {topline}
          </div>
        )}

        {/* Handle */}
        {handle && (
          <a
            href={handleHref || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-4 top-4 z-20 font-mono text-[10px] uppercase tracking-[0.05em] transition-colors md:right-6 md:top-6 md:text-[11px]"
            style={{ color: CREAM_MUTED }}
            onMouseEnter={(e) => (e.currentTarget.style.color = CREAM)}
            onMouseLeave={(e) => (e.currentTarget.style.color = CREAM_MUTED)}
          >
            {handle}
          </a>
        )}

        {/* Navbar */}
        <nav className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
          <div className="flex items-center gap-3 rounded-b-2xl bg-black px-4 py-2 sm:gap-6 md:gap-12 md:rounded-b-3xl md:px-8 lg:gap-14">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] transition-colors sm:text-xs md:text-sm"
                style={{ color: CREAM_MUTED }}
                onMouseEnter={(e) => (e.currentTarget.style.color = CREAM)}
                onMouseLeave={(e) => (e.currentTarget.style.color = CREAM_MUTED)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Right: rounded portrait card, inset from all four edges.
            Crop knob: objectPosition Y% (higher = less sky / more body). */}
        {portraitSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-4 top-[13vh] bottom-6 z-10 w-[44%] overflow-hidden rounded-3xl border sm:right-6 md:right-10 md:bottom-10 lg:w-[34%]"
            style={{
              borderColor: "rgba(225, 224, 204, 0.18)",
              boxShadow: "0 30px 60px -25px rgba(0,0,0,0.6)",
            }}
          >
            <Image
              src={portraitSrc}
              alt={name}
              fill
              className="object-cover"
              style={{ objectPosition: "center 40%" }}
              sizes="(min-width: 1024px) 34vw, 44vw"
              quality={100}
              priority
            />
          </motion.div>
        )}

        {/* Hero content — confined to the left of the portrait panel.
            Name sits at the top, paragraph + CTA pushed to the bottom. */}
        <div className="absolute inset-y-0 left-0 right-[50%] z-10 flex flex-col items-center justify-between px-4 pb-6 pt-[14vh] text-center sm:px-6 md:px-10 md:pb-10 lg:right-[40%]">
          {/* Name (top). Size knob: the vw values (kept to one line via noWrap). */}
          <h1
            className="font-medium leading-[0.85] tracking-[-0.07em] text-[9vw] lg:text-[11vw]"
            style={{ color: CREAM }}
          >
            <WordsPullUp text={name} noWrap />
          </h1>

          {/* Paragraph + CTA (bottom) */}
          <div className="flex max-w-md flex-col gap-5">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm md:text-base"
              style={{ color: CREAM_MUTED, lineHeight: 1.2 }}
            >
              {subtitle}
            </motion.p>

            <motion.a
              href={ctaHref}
              target={ctaHref.startsWith("http") ? "_blank" : undefined}
              rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group inline-flex items-center gap-2 self-center rounded-full py-1 pl-5 pr-1 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base"
              style={{ backgroundColor: CREAM }}
            >
              {ctaLabel}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                <ArrowRight className="h-4 w-4" style={{ color: CREAM }} />
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};
