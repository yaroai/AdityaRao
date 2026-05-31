import Link from "next/link";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";
import { GrowingWeb } from "@/components/ui/growing-web";

export const metadata: Metadata = {
  title: "Contact — Aditya Rao",
  description: "How to reach Aditya Rao.",
};

export default function ContactPage() {
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
          Contact.
        </h1>
        <p className="mt-3 text-white/55 md:text-lg">
          Best ways to reach me.
        </p>

        <div className="mt-10 flex flex-col gap-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 transition-colors hover:border-white/25 hover:bg-white/[0.04]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 group-hover:text-white">
              <Mail className="h-4 w-4" />
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/45">
                Email
              </div>
              <div className="text-lg md:text-xl">{siteConfig.email}</div>
            </div>
          </a>

          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 transition-colors hover:border-white/25 hover:bg-white/[0.04]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 group-hover:text-white">
              <Phone className="h-4 w-4" />
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/45">
                Phone
              </div>
              <div className="text-lg md:text-xl">{siteConfig.phone}</div>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
