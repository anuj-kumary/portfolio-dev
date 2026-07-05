"use client";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUpOnScroll } from "@/components/ui/FadeUp";
import { Badge } from "@/components/ui/Badge";
import { MapPin, Award } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Deuex Solutions",
    period: "Jul 2022 – Present",
    location: "Mumbai, India",
    description:
      "Building production React and TypeScript applications backed by Node.js services. Own features end to end, from the canvas a user touches to the APIs and real-time pipelines behind them.",
    achievements: [
      "Contributed to Uber's internal uWorc workflow platform — migrated the codebase from React class components to TypeScript functional components, reducing recurring bugs and improving maintainability",
      "Built a node-based visual workflow editor in React Flow now driving 10,000+ governance workflows, replacing manual processes and cutting team effort by 60–70%",
      "Built the Ontology Explorer for OpenMetadata with Ant G6 — an interactive graph canvas for navigating datasets, pipelines, and relationships across large, densely connected data",
      "Cut Page Ready load time by 11 seconds (roughly 70% faster) through bundle splitting, lazy loading, and eliminating unnecessary rerenders; applied virtualized lists on React Native for demanding UIs",
      "Shipped real-time features over WebSockets for a live cricket scoring and auction platform, handling high-frequency updates with low latency",
      "Built backend services end to end — Node.js and Express APIs on PostgreSQL with JWT auth and RBAC, and integrated gRPC between React apps and backend services",
      "Reworked the UI of a real-time analytics platform; the product grew from $500K to $4M+ ARR over that period",
      "Wrote end-to-end tests (Cypress, Playwright) and unit tests (Jest, RTL); containerized dev environments with Docker and moved deployments to GitHub Actions",
      "Use Codex, Claude Code, and Copilot daily for scaffolding and refactors — review all generated code for hallucinated APIs, missing edge cases, and rerender issues before merging",
    ],
    tech: ["React", "TypeScript", "React Flow", "Ant G6", "Node.js", "PostgreSQL", "WebSockets", "gRPC", "Playwright", "Redux", "Tailwind CSS", "Docker"],
    awards: ["Standout Performer — Aug 2025 & Aug 2024", "Fresher of the Year — Sep 2023"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Experience"
          title="Where I've worked."
          description="4 years at Deuex Solutions building production systems across enterprise clients."
        />

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#4F8CFF] via-[#222] to-transparent ml-[7px] hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <FadeUpOnScroll key={i} delay={0.1 * i}>
                <div className="md:pl-12 relative">
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

                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>

                    <div className="border-t border-[#1a1a1a] pt-5 flex flex-wrap gap-3">
                      {exp.awards.map((award) => (
                        <span key={award} className="inline-flex items-center gap-1.5 text-xs text-[#F59E0B]">
                          <Award size={12} />
                          {award}
                        </span>
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
