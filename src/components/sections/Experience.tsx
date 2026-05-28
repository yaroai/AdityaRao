"use client";

import { AnimatedSection } from "@/components/animated-section";
import { SectionLabel } from "@/components/section-label";
import { experience } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Experience() {
  return (
    <AnimatedSection
      id="experience"
      className="py-12 md:py-24 px-5 md:px-12"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <SectionLabel>{experience.label}</SectionLabel>
          <h2 className="font-heading text-[clamp(1.75rem,4vw,3rem)] leading-[1.05] tracking-[-0.02em] mt-4">
            {experience.title}
          </h2>
          <p className="text-[15px] text-[var(--color-site-muted)] mt-2">
            {experience.subtitle}
          </p>
        </div>
        <Link
          href="/resume"
          className="group inline-flex items-center gap-2 h-12 px-7 bg-[var(--color-site-text)] text-[var(--background)] text-sm font-medium rounded-full hover:shadow-lg hover:shadow-[var(--color-site-text)]/10 hover:-translate-y-0.5 active:translate-y-0 transition-all"
        >
          View full resume
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </AnimatedSection>
  );
}
