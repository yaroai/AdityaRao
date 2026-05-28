"use client";

import { AnimatedSection } from "@/components/animated-section";
import { SectionLabel } from "@/components/section-label";
import { yaroCrm, siteConfig } from "@/lib/content";

export function Yaro() {
  return (
    <AnimatedSection id="yaro" className="py-12 md:py-24 px-5 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center gap-3 mb-10">
          <SectionLabel>{yaroCrm.label}</SectionLabel>
          <span className="font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] tracking-[-0.02em]">
            Yaro
          </span>
        </div>

        <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.05] tracking-[-0.02em] mb-8 max-w-[800px] mx-auto text-center">
          {yaroCrm.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
          <div className="flex flex-col gap-5">
            <span className="font-mono text-xs text-[var(--color-site-accent)] tracking-[0.1em]">
              {yaroCrm.status}
            </span>
            <p className="text-[15px] leading-[1.6] text-[var(--color-site-muted)]">
              {yaroCrm.body}
            </p>
            <ul className="flex flex-col gap-3">
              {yaroCrm.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[var(--color-site-accent)] text-[8px] mt-[7px] shrink-0">&#x25FC;</span>
                  <div>
                    <span className="font-medium text-[14px]">{f.title}:</span>{" "}
                    <span className="text-[14px] text-[var(--color-site-muted)]">{f.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href={yaroCrm.linkUrl || siteConfig.yaroWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-site-accent)] hover:underline transition-colors mt-1"
            >
              {yaroCrm.link}
            </a>
          </div>

          <div className="flex items-start justify-center">
            <div className="terminal-card w-full max-w-[440px]">
              <div className="term-bar">
                <span className="term-dot" />
                <span className="term-dot" />
                <span className="term-dot" />
                <span className="ml-2">yaro@today &mdash; 3 actions</span>
              </div>
              <div className="p-5 text-[13px] leading-relaxed">
                {yaroCrm.mockActions.map((action, i) => (
                  <div
                    key={i}
                    className={`py-2.5 ${
                      i !== yaroCrm.mockActions.length - 1
                        ? "border-b border-[#1f1f1f]"
                        : ""
                    }`}
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="term-prompt">&gt;</span>
                      <span className="text-[#f5f5f5] font-medium">{action.name}</span>
                    </div>
                    <p className="text-[#7a7a7a] text-[11.5px] mt-1 pl-5 leading-relaxed">
                      {action.reason}
                    </p>
                    <p className="text-[#5a5a5a] text-[10.5px] mt-1 pl-5 uppercase tracking-[0.1em]">
                      [{action.action.toLowerCase()}]
                    </p>
                  </div>
                ))}
                <div className="pt-3 mt-1 flex items-center gap-1.5 text-[#5a5a5a] text-[10.5px]">
                  <span className="term-prompt">&gt;</span>
                  <span className="inline-block w-[7px] h-[14px] bg-[var(--color-site-accent)] animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
