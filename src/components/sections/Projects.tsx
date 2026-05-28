"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { SectionLabel } from "@/components/section-label";
import { useAnimateInView } from "@/hooks/use-animate-in-view";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { projects } from "@/lib/content";

function ProjectCard({
  project,
  featured,
  delay,
}: {
  project: (typeof projects.items)[0];
  featured: boolean;
  delay: number;
}) {
  const { ref, isInView } = useAnimateInView(0.1);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : prefersReducedMotion
            ? {}
            : { opacity: 0, y: 20 }
      }
      transition={{ duration: 0.25, delay, ease: "easeOut" as const }}
      className={`group ${featured ? "col-span-1 md:col-span-2 lg:col-span-3" : ""}`}
    >
      <SpotlightCard className="p-5 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="font-heading text-xl md:text-2xl tracking-[-0.01em]">
              {project.name}
            </h3>
            <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--color-site-muted)] mt-1">
              {project.type}
            </p>
          </div>
          <span
            className={`font-mono text-[10px] tracking-[0.1em] uppercase shrink-0 px-2.5 py-1 rounded-full ${
              project.status === "MY PRIDE AND JOY"
                ? "text-[var(--color-site-accent)] bg-[var(--color-site-accent)]/5 border border-[var(--color-site-accent)]/20"
                : project.status === "Live"
                  ? "text-emerald-600 bg-emerald-50 border border-emerald-200"
                  : "text-[var(--color-site-muted)] bg-[var(--color-site-border)]/50 border border-[var(--color-site-border)]"
            }`}
          >
            {project.status}
          </span>
        </div>

        <p className="text-[15px] leading-[1.6] text-[var(--color-site-muted)] mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] px-2.5 py-1 bg-[var(--color-site-border)]/50 rounded-full border border-[var(--color-site-border)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.linkUrl || "#"}
            target={project.linkUrl?.startsWith("http") ? "_blank" : undefined}
            rel={
              project.linkUrl?.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            className="text-sm text-[var(--color-site-accent)] hover:underline transition-colors"
          >
            {project.link}
          </a>
        )}
      </SpotlightCard>
    </motion.div>
  );
}

export function Projects() {
  const featured = projects.items.filter((p) => p.featured);
  const rest = projects.items.filter((p) => !p.featured);

  return (
    <AnimatedSection
      id="work"
      className="py-12 md:py-24 px-5 md:px-12"
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionLabel>{projects.label}</SectionLabel>

        <h2 className="font-heading text-[clamp(1.75rem,4vw,3rem)] leading-[1.05] tracking-[-0.02em] mt-6">
          {projects.title}
        </h2>
        <p className="text-[15px] text-[var(--color-site-muted)] mt-3">
          {projects.subtitle}
        </p>

        <div className="mt-8">
          {featured.map((p, i) => (
            <ProjectCard
              key={p.name}
              project={p}
              featured
              delay={i * 0.08}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {rest.map((p, i) => (
            <ProjectCard
              key={p.name}
              project={p}
              featured={false}
              delay={(i + 1) * 0.08}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
