"use client";

import { PrismaHero, type NavItem } from "@/components/ui/prisma-hero";
import { StatsTicker } from "@/components/ui/stats-ticker";
import { hero, siteConfig } from "@/lib/content";

const navItems: NavItem[] = [
  { label: "Yaro", href: "#yaro" },
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Hero() {
  return (
    <>
      <PrismaHero
        name={siteConfig.name}
        subtitle={hero.subtitle}
        ctaLabel={hero.cta}
        ctaHref={siteConfig.calendlyUrl}
        navItems={navItems}
        topline={hero.topline}
        handle={siteConfig.instagramHandle}
        handleHref={siteConfig.x}
        videoSrc="/videos/hero.mp4"
        portraitSrc="/images/IMG_0188.png"
      />
      <StatsTicker stats={hero.stats} />
    </>
  );
}
