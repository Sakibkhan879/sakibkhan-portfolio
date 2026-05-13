"use client";

import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

const experience = [
  {
    role: "Web Developer",
    company: "Cozmoh Intelligence",
    period: "08/2025 — Present",
    location: "Vasai (W)",
  },
  {
    role: "Web Developer",
    company: "Kantascrypt",
    period: "08/2023 — 08/2025",
    location: "Vasai (W)",
  },
];

const education = [
  {
    degree: "B.Sc Software Development",
    school: "St. Peter's Degree College (TISS)",
    period: "Currently 3rd Year",
    location: "Vasai",
  },
  {
    degree: "HSC",
    school: "Vidya Vikasini Jr. College",
    period: "2021 — 2022 | 60%",
    location: "Vasai (E)",
  },
  {
    degree: "SSC",
    school: "The Ambassador High School",
    period: "2019 — 2020 | 64%",
    location: "Vasai (E)",
  },
];

const achievements = [
  "1st Prize — Long Jump Competition (2023)",
  "1st Prize — Relay Competition (2023)",
  "Participated in Skit & Event Management",
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16">
        <AnimatedSection className="flex flex-col gap-8">
          <AnimatedItem>
            <EyebrowBadge>EXPERIENCE &amp; EDUCATION</EyebrowBadge>
          </AnimatedItem>
        </AnimatedSection>

        <div className="grid gap-16 md:grid-cols-2">
          <AnimatedSection className="flex flex-col gap-6">
            <AnimatedItem>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
                Work Experience
              </h3>
              <div className="mt-1 h-px w-full bg-white/10" />
            </AnimatedItem>
            {experience.map((exp) => (
              <AnimatedItem key={exp.company + exp.period}>
                <div className="card-surface p-5">
                  <span className="font-sans text-lg font-semibold text-foreground">
                    {exp.role}
                  </span>
                  <p className="mt-1 font-sans text-sm text-zinc-300">
                    {exp.company}
                  </p>
                  <div className="mt-3 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                    <span>{exp.period}</span>
                    <span className="text-accent/60">{exp.location}</span>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>

          <AnimatedSection className="flex flex-col gap-6">
            <AnimatedItem>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
                Education
              </h3>
              <div className="mt-1 h-px w-full bg-white/10" />
            </AnimatedItem>
            {education.map((edu) => (
              <AnimatedItem key={edu.degree}>
                <div className="card-surface p-5">
                  <span className="font-sans text-lg font-semibold text-foreground">
                    {edu.degree}
                  </span>
                  <p className="mt-1 font-sans text-sm text-zinc-300">
                    {edu.school}
                  </p>
                  <div className="mt-3 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                    <span>{edu.period}</span>
                    <span className="text-accent/60">{edu.location}</span>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>

        <AnimatedSection className="flex flex-col gap-6">
          <AnimatedItem>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
              Achievements
            </h3>
            <div className="mt-1 h-px w-full bg-white/10" />
          </AnimatedItem>
          <div className="grid gap-4 md:grid-cols-3">
            {achievements.map((a) => (
              <AnimatedItem key={a}>
                <div className="card-surface flex items-center gap-3 p-4">
                  <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-accent-glow" />
                  <span className="font-sans text-sm text-zinc-300">{a}</span>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
