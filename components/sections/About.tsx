"use client";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUpOnScroll } from "@/components/ui/FadeUp";
import { MapPin, Briefcase, Code2, Zap } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    label: "4 Years",
    description: "Shipping production React and TypeScript applications at Deuex Solutions since 2022",
  },
  {
    icon: Code2,
    label: "Fullstack",
    description: "React and TypeScript on the frontend, Node.js, PostgreSQL, gRPC, and WebSockets on the backend",
  },
  {
    icon: Zap,
    label: "70% Faster",
    description: "Cut Page Ready load time by 11 seconds on a core enterprise product through focused optimization",
  },
  {
    icon: MapPin,
    label: "Mumbai, India",
    description: "Open to remote and hybrid roles globally",
  },
];

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="About"
          title="A bit about me."
          description="Fullstack engineer who owns features end to end, from the canvas a user touches to the APIs behind it."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeUpOnScroll>
            <div className="space-y-6 text-[#A1A1AA] text-lg leading-relaxed">
              <p>
                I work at{" "}
                <span className="text-[#FAFAFA] font-medium">Deuex Solutions</span> where
                I have spent the past four years building things I find genuinely interesting
                — node-based visual editors, real-time dashboards, graph canvas UIs, and the
                backend services that make them work.
              </p>
              <p>
                Most of my day is React and TypeScript, but I am equally comfortable on the
                backend with Node.js, PostgreSQL, gRPC, and WebSockets. I have shipped
                real-time features for a live cricket scoring platform, built governance
                workflow tools that handle 10,000+ daily runs, and contributed to{" "}
                <span className="text-[#FAFAFA]">OpenMetadata</span> — an open standard for
                data infrastructure used by companies globally.
              </p>
              <p>
                Performance is something I take seriously. I cut Page Ready load time by 11
                seconds (roughly 70%) on one of our core products through bundle splitting,
                lazy loading, and eliminating unnecessary rerenders.
              </p>
              <p>
                I use AI tooling heavily — Codex, Claude Code, Copilot — and review
                everything generated before it ships. I have a degree in Information
                Technology from Savitribai Phule Pune University with a 9.2 GPA.
              </p>
            </div>
          </FadeUpOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <FadeUpOnScroll key={item.label} delay={i * 0.1}>
                <div className="bg-[#111] border border-[#222] rounded-2xl p-6 hover:border-[#333] transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 flex items-center justify-center mb-4 group-hover:bg-[#4F8CFF]/15 transition-colors">
                    <item.icon size={18} className="text-[#4F8CFF]" />
                  </div>
                  <p className="text-[#FAFAFA] font-semibold mb-1">{item.label}</p>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">{item.description}</p>
                </div>
              </FadeUpOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
