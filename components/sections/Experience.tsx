"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUpOnScroll } from "@/components/ui/FadeUp";
import { Badge } from "@/components/ui/Badge";
import { MapPin } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Deuex Solutions",
    period: "2021 – Present",
    location: "Mumbai, India",
    description:
      "Leading frontend development of enterprise-scale platforms. Architecting React applications that serve thousands of daily users, building complex workflow automation systems, and driving performance engineering initiatives.",
    achievements: [
      "Built a visual Workflow Builder using React Flow, enabling users to create and manage 10,000+ automation workflows without writing code",
      "Reduced page load times by 70% through code splitting, lazy loading, and asset optimization strategies",
      "Developed the Ontology Explorer — a rich interactive graph UI for navigating complex data relationships",
      "Integrated AI-assisted development workflows using Claude Code and GitHub Copilot, cutting feature delivery time by 40%",
      "Established end-to-end test coverage using Playwright, reducing regression incidents in production",
      "Collaborated with design and backend teams to ship 100+ production features across enterprise products",
    ],
    tech: ["React", "TypeScript", "React Flow", "Node.js", "PostgreSQL", "Playwright", "Redux", "Tailwind CSS"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Experience"
          title="Where I've worked."
          description="A track record of shipping impactful software at scale."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#4F8CFF] via-[#222] to-transparent ml-[7px] hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <FadeUpOnScroll key={i} delay={0.1 * i}>
                <div className="md:pl-12 relative">
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-[#4F8CFF] border-2 border-[#0B0B0C] hidden md:block" />

                  <div className="bg-[#111] border border-[#222] rounded-2xl p-8 hover:border-[#333] transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-[#FAFAFA] mb-1">{exp.role}</h3>
                        <p className="text-[#4F8CFF] font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-1">
                        <span className="text-sm text-[#A1A1AA] font-medium">{exp.period}</span>
                        <span className="flex items-center gap-1 text-xs text-[#A1A1AA]">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-[#A1A1AA] leading-relaxed mb-6">{exp.description}</p>

                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((ach, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-[#A1A1AA]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF] mt-2 flex-shrink-0" />
                          {ach}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUpOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
