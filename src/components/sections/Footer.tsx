import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-white/5 bg-background px-6 py-14 md:px-10 md:py-16"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-foreground">
              <span
                aria-hidden
                className="inline-block h-2 w-2 rounded-full bg-accent shadow-accent-glow-lg"
              />
              Sakib / Khan
            </div>
            <p className="max-w-[38ch] font-sans text-sm leading-relaxed text-zinc-400">
              sakib957900@gmail.com &middot; +91 95790 03676
            </p>
            <p className="max-w-[38ch] font-sans text-sm leading-relaxed text-zinc-400">
              Vasai, Maharashtra, India
            </p>
            <a
              href="/sakibkhan-portfolio/Resume/Sakib Resume.pdf"
              target="_blank"
              className="group inline-flex items-center gap-1.5 self-start rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-foreground backdrop-blur-md transition-all duration-200 hover:bg-white/[0.08] active:translate-y-[1px]"
            >
              Download Resume
              <ArrowUpRight
                size={14}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 md:grid-cols-3">
            {[
              ["HTML & CSS", "Web Fundamentals"],
              ["JavaScript", "Interactive Web"],
              ["Python", "Backend & Scripting"],
              ["Angular", "Frontend Framework"],
              ["SQL", "Database Management"],
              ["Linux", "Server Administration"],
            ].map(([name, note]) => (
              <a
                key={name}
                href="#"
                className="group flex flex-col gap-1"
              >
                <span className="font-sans text-[13px] font-medium text-foreground transition-colors group-hover:text-accent">
                  {name}
                  <ArrowUpRight
                    size={11}
                    weight="bold"
                    className="ml-1 inline-block align-baseline opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                  {note}
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/5 pt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500 md:flex-row md:items-center md:justify-between">
          <span>Build 2026 &nbsp;&middot;&nbsp; Sakib Khan &nbsp;&middot;&nbsp; Portfolio</span>
          <span>Always learning, always building.</span>
        </div>
      </div>
    </footer>
  );
}
