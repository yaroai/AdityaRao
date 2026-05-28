"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function PortfolioShortcut() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollTop}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="group fixed top-4 left-4 md:top-6 md:left-6 z-50 inline-flex items-center gap-2 h-9 pl-3 pr-4 rounded-full bg-[var(--color-site-text)] text-[var(--background)] font-mono text-[10px] tracking-[0.15em] uppercase shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:gap-3 transition-all"
          aria-label="Back to top"
        >
          <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          Portfolio
        </motion.button>
      )}
    </AnimatePresence>
  );
}
