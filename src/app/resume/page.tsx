import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";

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

export const metadata: Metadata = {
  title: "Resume — Aditya Rao",
  description: "Work experience, education, and skills.",
};

// FIXME: Aditya to confirm dates, titles, bullets, and add any missing roles
const experience = [
  {
    role: "Co-Founder & COO",
    org: "Yaro AI",
    location: "Atlanta, GA",
    date: "August 2025 – Present",
    bullets: [
      "Co-founded a custom software and automation studio shipping AI-native tools, internal systems, and dashboards for founder-led businesses.",
      "Lead technical architecture and ML systems across client engagements.",
      "Generated $60K+ within the first months of operation, fully bootstrapped.",
    ],
  },
  {
    role: "Co-Founder",
    org: "Yaro",
    location: "Atlanta, GA",
    date: "March 2026 – Present",
    bullets: [
      "Building Yaro AI's first standalone product: an AI-native CRM for real estate agents that automatically captures every text, call, and email.",
      "Lead product architecture, data pipelines, and ML systems across a three-person founding team.",
      "Ran 30+ discovery calls with real estate agents to inform product design.",
    ],
  },
  {
    role: "Builder · Polyedge",
    org: "YHack Yale 2026",
    location: "New Haven, CT",
    date: "2026",
    bullets: [
      "Built Polyedge, a Polymarket trading intelligence dashboard, end-to-end in a weekend.",
      // FIXME: confirm exact award / featured framing
      "Featured at YHack Yale 2026.",
    ],
  },
  {
    role: "Researcher",
    org: "Georgia Tech VIP — Financial NLP",
    location: "Atlanta, GA",
    // FIXME: confirm dates
    date: "2025 – Present",
    bullets: [
      "Vertically Integrated Projects team researching NLP applications to financial markets.",
      "Work-in-progress; no published research yet.",
    ],
  },
  // FIXME: add any additional roles (internships, TA, prior work) here
];

const education = {
  school: "Georgia Institute of Technology",
  location: "Atlanta, GA",
  // FIXME: confirm degree title and graduation year
  degree: "B.S. in Finance and Computer Science (Expected 2027)",
  // FIXME: confirm GPA / honors if Aditya wants them on the resume
  gpa: "",
};

const skills = {
  // FIXME: tighten to Aditya's actual strongest stacks
  engineering:
    "TypeScript, Next.js, React, Python, PyTorch, scikit-learn, XGBoost, SQL, Supabase, Anthropic API",
  domains:
    "ML systems, NLP for finance, sports market modeling, AI-native product engineering, data pipelines",
  interests:
    "Competitive tennis, chess, poker, capital markets, ML research",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <nav className="px-5 md:px-12 py-5 md:py-6 max-w-[800px] mx-auto">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-[var(--color-site-muted)] hover:text-[var(--color-site-text)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          Back to home
        </Link>
      </nav>

      <div className="px-5 md:px-12 pb-20 max-w-[800px] mx-auto">
        <h1 className="font-heading text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
          Resume
        </h1>
        <p className="text-[14px] md:text-[15px] text-[var(--color-site-muted)] mt-2">
          Aditya Rao · Atlanta, GA · {siteConfig.email}
        </p>

        <div className="flex flex-wrap items-center gap-2 mt-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-1.5 h-8 px-3 text-[12px] border border-[var(--color-site-border)] rounded-full bg-white text-[var(--color-site-muted)] hover:text-[var(--color-site-text)] transition-colors"
          >
            <Mail className="w-3 h-3" />
            Email
          </a>
          <a
            href={siteConfig.x}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 h-8 px-3 text-[12px] border border-[var(--color-site-border)] rounded-full bg-white text-[var(--color-site-muted)] hover:text-[var(--color-site-text)] transition-colors"
          >
            <XLogo className="w-3 h-3" />
            X
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 h-8 px-3 text-[12px] border border-[var(--color-site-border)] rounded-full bg-white text-[var(--color-site-muted)] hover:text-[var(--color-site-text)] transition-colors"
          >
            <GithubLogo className="w-3 h-3" />
            GitHub
          </a>
        </div>

        <section className="mt-10 md:mt-12">
          <h2 className="font-mono text-[11px] tracking-[0.15em] uppercase text-[var(--color-site-accent)] mb-4">
            Education
          </h2>
          <div className="border border-[var(--color-site-border)] rounded-xl p-5 bg-white">
            <p className="font-medium text-[15px]">{education.school}</p>
            <p className="text-[14px] text-[var(--color-site-muted)] mt-1">
              {education.degree}
            </p>
            {education.gpa && (
              <p className="text-[13px] text-[var(--color-site-muted)] mt-1">
                {education.gpa}
              </p>
            )}
          </div>
        </section>

        <section className="mt-10 md:mt-12">
          <h2 className="font-mono text-[11px] tracking-[0.15em] uppercase text-[var(--color-site-accent)] mb-4">
            Experience
          </h2>
          <div className="flex flex-col gap-0">
            {experience.map((job, i) => (
              <div
                key={i}
                className={`py-5 md:py-6 ${
                  i !== experience.length - 1
                    ? "border-b border-[var(--color-site-border)]"
                    : ""
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-3">
                  <div className="min-w-0">
                    <p className="font-medium text-[15px] leading-snug">
                      {job.role}
                      <span className="text-[var(--color-site-muted)] font-normal">
                        {" "}at {job.org}
                      </span>
                    </p>
                    <p className="text-[12.5px] text-[var(--color-site-muted)] mt-0.5">
                      {job.location}
                    </p>
                  </div>
                  <p className="font-mono text-[10.5px] md:text-[11px] tracking-[0.05em] text-[var(--color-site-muted)] shrink-0 whitespace-nowrap">
                    {job.date}
                  </p>
                </div>
                <ul className="mt-3 flex flex-col gap-2">
                  {job.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-[14px] text-[var(--color-site-muted)] leading-[1.55]"
                    >
                      <span className="text-[var(--color-site-accent)] text-[6px] mt-[8px] shrink-0">
                        &#x25FC;
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 md:mt-12">
          <h2 className="font-mono text-[11px] tracking-[0.15em] uppercase text-[var(--color-site-accent)] mb-4">
            Skills & Interests
          </h2>
          <div className="flex flex-col gap-3 text-[14px]">
            <div>
              <span className="font-medium">Engineering:</span>{" "}
              <span className="text-[var(--color-site-muted)]">
                {skills.engineering}
              </span>
            </div>
            <div>
              <span className="font-medium">Domains:</span>{" "}
              <span className="text-[var(--color-site-muted)]">
                {skills.domains}
              </span>
            </div>
            <div>
              <span className="font-medium">Interests:</span>{" "}
              <span className="text-[var(--color-site-muted)]">
                {skills.interests}
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
