"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

const projects = [
  {
    title: "SkillSwap Hub",
    desc: "A peer-to-peer skill exchange platform where users trade knowledge without money. Create profiles, list skills you offer and want to learn, find matches, and schedule learning sessions.",
    stack: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    link: "https://sakibkhan0168.pythonanywhere.com/",
  },
  {
    title: "Nexus ATS",
    desc: "AI-powered hiring platform with automated skill verification. Upload resumes for parsing via spaCy NER, answer scenario-based AI questions to earn verified badges, and get matched with employers through smart weighted matching.",
    stack: ["Python", "FastAPI", "spaCy", "JavaScript", "WebSocket"],
    link: "https://nexus-ats-nexus-ats.hf.space/",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-12">
        <AnimatedSection className="flex flex-col gap-8">
          <AnimatedItem>
            <EyebrowBadge>PROJECTS // SHOWCASE</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-[16ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
              Things I&rsquo;ve{" "}
              <span className="text-accent">built.</span>
            </h2>
          </AnimatedItem>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <AnimatedItem key={p.title}>
              <div className="card-surface flex h-full flex-col p-6">
                <h3 className="font-sans text-xl font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-zinc-300">
                  {p.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  className="group mt-5 inline-flex items-center gap-1 self-start font-mono text-[10px] uppercase tracking-[0.24em] text-accent transition-colors hover:text-foreground"
                >
                  View Project
                  <ArrowUpRight
                    size={12}
                    weight="bold"
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
}
