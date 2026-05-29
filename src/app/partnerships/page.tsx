import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { partnerships } from "@/lib/content";
import { GrowingWeb } from "@/components/ui/growing-web";

export const metadata: Metadata = {
  title: "Partnerships — Aditya Rao",
  description: "Ways to work together.",
};

export default function PartnershipsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Growing dendrite web background */}
      <GrowingWeb durationMs={5000} className="pointer-events-none absolute inset-0 h-full w-full" />
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.3] mix-blend-overlay" />

      {/* Top bar */}
      <header className="relative z-10 mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-12">
        <Link
          href="/"
          className="font-mono text-sm tracking-[0.25em] text-white/80 transition-colors hover:text-white"
        >
          AR
        </Link>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Home
        </Link>
      </header>

      {/* Content */}
      <section className="relative z-10 mx-auto max-w-[900px] px-6 pb-24 pt-[6vh] md:px-12 md:pt-[10vh]">
        <h1 className="font-heading text-4xl tracking-tight md:text-6xl">
          {partnerships.title}
        </h1>
        <p className="mt-3 text-white/55 md:text-lg">{partnerships.subtitle}</p>

        {/* Rate table */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
          <div className="flex items-center justify-between bg-white/[0.04] px-6 py-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/45">
              Format
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/45">
              Rate
            </span>
          </div>
          {partnerships.rows.map((row, i) => (
            <div
              key={row.format}
              className={`flex items-center justify-between px-6 py-5 ${
                i !== partnerships.rows.length - 1 ? "border-t border-white/10" : ""
              }`}
            >
              <span className="text-[15px] md:text-base">{row.format}</span>
              <span className="font-mono text-[15px] text-white/90 md:text-base">
                {row.rate}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-4 max-w-xl font-mono text-[11px] leading-relaxed text-white/40">
          {partnerships.note}
        </p>

        <a
          href={partnerships.ctaUrl}
          className="group mt-6 inline-flex items-center gap-2 rounded-full py-2.5 pl-5 pr-4 text-sm font-medium text-black transition-all hover:gap-3"
          style={{ backgroundColor: "#E1E0CC" }}
        >
          {partnerships.ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </section>
    </main>
  );
}
