"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

const skills = [
  { name: "HTML & CSS", level: 100 },
  { name: "JavaScript", level: 100 },
  { name: "Python", level: 100 },
  { name: "Angular", level: 100 },
  { name: "SQL", level: 100 },
  { name: "Linux", level: 100 },
];

export function SystemsNominal() {
  return (
    <section
      id="systems"
      className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16 md:grid md:grid-cols-[5fr_4fr] md:gap-20">
        <AnimatedSection className="flex flex-col gap-8">
          <AnimatedItem>
            <EyebrowBadge>SAKIB // SKILLS &amp; STACK</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-[16ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
              &ldquo;Clean code,{" "}
              <span className="text-accent">strong fundamentals.</span>&rdquo;
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="max-w-[48ch] font-sans text-base leading-relaxed text-zinc-300 md:text-lg">
              Every project starts with a solid foundation. From frontend
              interfaces to backend architecture, I build with modern tools
              and best practices.
            </p>
          </AnimatedItem>
          <AnimatedItem>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-foreground backdrop-blur-md transition-all duration-200 hover:bg-white/[0.08] active:translate-y-[1px]"
            >
              View Projects
              <ArrowUpRight
                size={14}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="flex flex-col gap-6 md:mt-3">
          {skills.map((skill) => (
            <AnimatedItem key={skill.name}>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-300">
                    {skill.name}
                  </span>
                  <span className="font-mono text-[11px] text-accent">
                    {skill.level}%
                  </span>
                </div>
                <div
                  className="h-1.5 w-full overflow-hidden rounded-full"
                  style={{ backgroundColor: "var(--skill-bar)" }}
                >
                  <div
                    className="h-full rounded-full bg-accent transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
