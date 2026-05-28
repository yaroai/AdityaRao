"use client";

import { AnimatedSection } from "@/components/animated-section";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { TextEffect } from "@/components/ui/text-effect";
import { contact } from "@/lib/content";
import { ArrowUpRight, Calendar, MessageCircle, Mail } from "lucide-react";

const icons = [Calendar, MessageCircle, Mail];

export function Contact() {
  return (
    <AnimatedSection
      id="contact"
      className="py-12 md:py-24 px-5 md:px-12"
    >
      <div className="max-w-[1200px] mx-auto text-center">
        <TextEffect
          per="word"
          preset="slide"
          as="h2"
          className="font-heading text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em]"
        >
          {contact.headline}
        </TextEffect>
        <p className="text-[15px] text-[var(--color-site-muted)] mt-3 max-w-[480px] mx-auto">
          {contact.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {contact.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <SpotlightCard key={card.title} className="p-6 text-left flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[var(--color-site-border)]/60 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[var(--color-site-muted)]" />
                  </div>
                  <h3 className="font-heading text-lg">{card.title}</h3>
                </div>
                <p className="text-[13px] text-[var(--color-site-muted)] mb-5 flex-1">
                  {card.description}
                </p>
                <a
                  href={card.buttonUrl}
                  target={card.buttonUrl.startsWith("mailto") ? undefined : "_blank"}
                  rel={card.buttonUrl.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="group relative inline-flex items-center justify-center gap-2 h-11 w-full text-sm font-medium rounded-full overflow-hidden transition-all bg-[var(--color-site-text)] text-[var(--background)] hover:shadow-lg hover:shadow-[var(--color-site-text)]/10 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {card.buttonLabel}
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
