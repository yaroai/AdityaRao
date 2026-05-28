import { footer, siteConfig } from "@/lib/content";

const links = [
  { label: "Instagram", url: siteConfig.instagram },
  { label: "X", url: siteConfig.x },
  { label: "GitHub", url: siteConfig.github },
  { label: "LinkedIn", url: siteConfig.linkedin },
];

export function Footer() {
  return (
    <footer className="py-8 px-5 md:px-12 border-t border-[var(--color-site-border)]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <p className="font-mono text-[11px] text-[var(--color-site-muted)] tracking-[0.05em]">
          {footer.text}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-[0.05em] text-[var(--color-site-muted)] hover:text-[var(--color-site-text)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
