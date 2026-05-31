import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { siteConfig } from "@/lib/content";
import { GrowingWeb } from "@/components/ui/growing-web";

function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function GithubLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18.92-.26 1.9-.39 2.88-.39s1.96.13 2.88.39c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.26 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.81-.01 3.19 0 .31.21.67.8.56C20.22 21.4 23.5 17.09 23.5 12.02 23.5 5.74 18.27.5 12 .5z" />
    </svg>
  );
}

const navLinks = [
  // FIXME: point Timeline / Projects at real routes or sections
  { label: "Partnerships", href: "/partnerships" },
  { label: "Resume", href: "/resume" },
  { label: "Timeline", href: "/timeline" },
  { label: "Projects", href: "#" },
  { label: "Contact", href: "/contact" },
];

// Bold/white highlight for key terms inside the muted prose.
function Hi({ children }: { children: React.ReactNode }) {
  return <span className="font-medium text-white">{children}</span>;
}

export function Landing() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Growing dendrite web background */}
      <GrowingWeb waitForEnter className="pointer-events-none absolute inset-0 h-full w-full" />
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.3] mix-blend-overlay" />
      {/* Vignette: darken the text region so branches don't read on top of the prose */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 65% at 28% 50%, rgba(0,0,0,0.7), transparent 75%)",
        }}
      />

      {/* Top bar */}
      <header className="relative z-10 mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-12">
        <span className="font-mono text-sm tracking-[0.25em] text-white/80">AR</span>

        <nav className="flex items-center gap-5 md:gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm text-white/55 transition-colors hover:text-white md:text-base"
            >
              {l.label}
            </Link>
          ))}
          <div className="ml-1 flex items-center gap-3 text-white/55">
            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors hover:text-white">
              <InstagramLogo className="h-[18px] w-[18px]" />
            </a>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-white">
              <GithubLogo className="h-[18px] w-[18px]" />
            </a>
            <a href={siteConfig.x} target="_blank" rel="noopener noreferrer" aria-label="X" className="transition-colors hover:text-white">
              <XLogo className="h-[18px] w-[18px]" />
            </a>
            <Link href="/contact" aria-label="Email" className="transition-colors hover:text-white">
              <Mail className="h-[18px] w-[18px]" />
            </Link>
          </div>
        </nav>
      </header>

      {/* Content */}
      <section className="relative z-10 mx-auto flex max-w-[1400px] flex-col gap-12 px-6 pt-[8vh] md:flex-row md:items-center md:justify-between md:gap-16 md:px-12 md:pt-[12vh]">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Aditya Rao</h1>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-white/65 md:text-xl">
            <p>
              Hey, I&apos;m Aditya, a 19-year-old <Hi>content creator</Hi> and <Hi>startup founder</Hi>.
            </p>

            <p>
              I am currently studying <Hi>finance</Hi> at <Hi>Georgia Tech</Hi>.
            </p>

            <p>
              I am also building my startup{" "}
              <a
                href={siteConfig.yaroWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white underline decoration-white/30 underline-offset-2 transition-colors hover:decoration-white"
              >
                Yaro
              </a>
              .
            </p>

            <p>
              In my free time I enjoy playing 🎾 tennis and 🃏 poker.
            </p>

            <div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full py-2.5 pl-5 pr-4 text-sm font-medium text-black transition-all hover:gap-3"
                style={{ backgroundColor: "#E1E0CC" }}
              >
                Contact me
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative aspect-[3/4] w-full max-w-[280px] shrink-0 self-center overflow-hidden rounded-2xl border border-white/10 md:max-w-[360px] md:-translate-x-18 md:-translate-y-4">
          <Image
            src="/images/portrait-talon.jpg"
            alt={siteConfig.name}
            fill
            className="object-cover scale-[1.7]"
            style={{ objectPosition: "50% 54%", transformOrigin: "50% 54%" }}
            sizes="(min-width: 768px) 900px, 700px"
            quality={100}
            priority
            unoptimized
          />
        </div>
      </section>
    </main>
  );
}
