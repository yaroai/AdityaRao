import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import type { Metadata } from "next";
import { ResumeCanvas } from "@/components/ui/resume-canvas";

export const metadata: Metadata = {
  title: "Resume — Aditya Rao",
  description: "Aditya Rao's resume.",
};

// Swap this file in public/ to update the resume (keep the same name, or update the path).
const PDF = "/aditya-rao-resume.pdf";

export default function ResumePage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* Top bar */}
      <header className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-6 py-6 md:px-10">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Home
        </Link>
        <a
          href={PDF}
          download
          className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-black transition-all hover:gap-3"
          style={{ backgroundColor: "#E1E0CC" }}
        >
          <Download className="h-4 w-4" />
          Download PDF
        </a>
      </header>

      {/* Resume rendered to canvas via pdf.js — just the page, no viewer chrome */}
      <div className="mx-auto w-full max-w-[820px] flex-1 px-4 pb-12 md:px-6">
        <ResumeCanvas
          src={PDF}
          className="mx-auto block h-auto w-full rounded-sm shadow-2xl shadow-black/50"
        />
      </div>
    </main>
  );
}
