import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { timeline } from "@/lib/content";
import { GrowingWeb } from "@/components/ui/growing-web";

export const metadata: Metadata = {
  title: "Timeline — Aditya Rao",
  description: "A few moments along the way.",
};

export default function TimelinePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Growing dendrite web background */}
      <GrowingWeb
        durationMs={5000}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
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
      <section className="relative z-10 mx-auto max-w-[720px] px-6 pb-24 pt-[6vh] md:px-10 md:pt-[10vh]">
        <h1 className="font-heading text-4xl tracking-tight md:text-6xl">
          {timeline.title}
        </h1>
        <p className="mt-3 text-white/55 md:text-lg">{timeline.subtitle}</p>

        <ol className="relative mt-12 ml-3 space-y-10 border-l border-white/15 pl-8">
          {timeline.events.map((e, i) => (
            <li key={i} className="relative">
              <span
                className="absolute -left-[37px] top-[10px] h-2.5 w-2.5 rounded-full ring-4 ring-black"
                style={{ backgroundColor: "#E1E0CC" }}
              />
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/50">
                {e.date}
              </div>
              <div className="mt-1 text-xl font-medium md:text-2xl">
                {e.title}
              </div>
              {e.detail && (
                <div className="mt-1 text-sm text-white/55 md:text-base">
                  {e.detail}
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
