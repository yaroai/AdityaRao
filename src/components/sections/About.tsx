"use client";

import { AnimatedSection } from "@/components/animated-section";
import { SectionLabel } from "@/components/section-label";
import { about, siteConfig } from "@/lib/content";
import { Camera, Briefcase, Mail } from "lucide-react";

function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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

// Placeholder photo tile. Swap in <Image src="/images/about-X.jpg" .../> once shots exist.
function PhotoPlaceholder({
  aspect,
  label,
}: {
  aspect: string;
  label: string;
}) {
  return (
    <div
      className={`relative ${aspect} rounded-xl overflow-hidden border border-[var(--color-site-border)]`}
      style={{
        background:
          "linear-gradient(135deg, #f5f5f3 0%, #eaeaea 100%)",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--color-site-muted)]">
          {label}
        </span>
      </div>
    </div>
  );
}

export function About() {
  const socialButtons = [
    {
      label: "Instagram",
      url: siteConfig.instagram,
      icon: Camera,
      color: "hover:text-pink-500 hover:border-pink-500/30",
    },
    {
      label: "X",
      url: siteConfig.x,
      icon: XLogo,
      color: "hover:text-[var(--color-site-text)] hover:border-[var(--color-site-text)]/30",
    },
    {
      label: "LinkedIn",
      url: siteConfig.linkedin,
      icon: Briefcase,
      color: "hover:text-blue-600 hover:border-blue-600/30",
    },
    {
      label: "GitHub",
      url: siteConfig.github,
      icon: GithubLogo,
      color: "hover:text-[var(--color-site-text)] hover:border-[var(--color-site-text)]/30",
    },
    {
      label: "Email",
      url: `mailto:${siteConfig.email}`,
      icon: Mail,
      color: "hover:text-[var(--color-site-accent)] hover:border-[var(--color-site-accent)]/30",
    },
  ];

  return (
    <AnimatedSection
      id="about"
      className="py-12 md:py-24 px-5 md:px-12"
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionLabel>{about.label}</SectionLabel>

        <h2 className="font-heading text-[clamp(1.75rem,4vw,3rem)] leading-[1.05] tracking-[-0.02em] mt-4">
          {about.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-14 mt-8">
          {/* Left */}
          <div>
            <p className="text-[15px] leading-[1.7] text-[var(--color-site-muted)]">
              {about.bio}
            </p>

            <ul className="flex flex-col gap-2.5 mt-8">
              {about.facts.map((fact, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px]">
                  <span className="text-[var(--color-site-accent)] text-[8px] mt-[6px] shrink-0">
                    &#x25FC;
                  </span>
                  {fact}
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-[var(--color-site-border)]">
              <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[var(--color-site-muted)] mb-3">
                Elsewhere
              </p>
              <div className="flex flex-wrap gap-2">
                {socialButtons.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target={social.url.startsWith("mailto") ? undefined : "_blank"}
                      rel={social.url.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      aria-label={social.label}
                      className={`inline-flex items-center gap-2 h-9 px-4 text-sm border border-[var(--color-site-border)] rounded-lg bg-white shadow-sm shadow-black/5 text-[var(--color-site-muted)] transition-all hover:scale-105 active:scale-95 ${social.color}`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: photo placeholders — swap for real shots (YHack, GT campus, Yaro working sessions, tennis) */}
          <div className="flex flex-col gap-3">
            <PhotoPlaceholder aspect="aspect-[4/3]" label="Photo 1 · placeholder" />
            <PhotoPlaceholder aspect="aspect-[16/10]" label="Photo 2 · placeholder" />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
