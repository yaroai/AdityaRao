"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useAnimateInView } from "@/hooks/use-animate-in-view";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  id,
}: AnimatedSectionProps) {
  const { ref, isInView } = useAnimateInView(0.1);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : prefersReducedMotion
            ? {}
            : { opacity: 0, y: 20 }
      }
      transition={{ duration: 0.25, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
