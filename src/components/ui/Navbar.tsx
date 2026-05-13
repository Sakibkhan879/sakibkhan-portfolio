"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, SunDim, MoonStars } from "@phosphor-icons/react";
import { useTheme } from "@/components/providers/ThemeProvider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/60 backdrop-blur-2xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-8 md:py-5">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-foreground"
        >
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full bg-accent shadow-accent-glow-lg"
          />
          Sakib / Khan
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#systems"
            className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-foreground"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-foreground"
          >
            Experience
          </a>
          <Link
            href="/blog"
            className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-foreground"
          >
            Blog
          </Link>
          <a
            href="#footer"
            className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-foreground"
          >
            Contact
          </a>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] p-2 text-zinc-400 transition-all duration-200 hover:bg-white/[0.08] hover:text-foreground"
          >
            {theme === "dark" ? (
              <SunDim size={14} weight="bold" />
            ) : (
              <MoonStars size={14} weight="bold" />
            )}
          </button>
        </nav>

        <a
          href="#systems"
          className="group inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-foreground backdrop-blur-md transition-all duration-200 hover:bg-white/[0.1] active:translate-y-[1px]"
        >
          Resume
          <ArrowUpRight
            size={14}
            weight="bold"
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </header>
  );
}
