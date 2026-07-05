"use client";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUpOnScroll } from "@/components/ui/FadeUp";
import { MapPin, Briefcase, Code2, Zap } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    label: "4+ Years",
    description: "Building production software that teams actually rely on every day",
  },
  {
    icon: Code2,
    label: "React & TypeScript",
    description: "My primary tools for the past 4 years across multiple products",
  },
  {
    icon: Zap,
    label: "Performance",
    description: "Cut page load times by 70% on a core product used by enterprise clients",
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
          description="Frontend engineer with a focus on building things that are fast, reliable, and easy to use."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeUpOnScroll>
            <div className="space-y-6 text-[#A1A1AA] text-lg leading-relaxed">
              <p>
                I work at{" "}
                <span className="text-[#FAFAFA] font-medium">Deuex Solutions</span> as a
                Software Engineer, where most of my time goes into building frontend systems
                for enterprise products. Four years in, and I still enjoy the problem-solving
                side of this job as much as I did when I started.
              </p>
              <p>
                My stack is{" "}
                <span className="text-[#FAFAFA]">React</span> and{" "}
                <span className="text-[#FAFAFA]">TypeScript</span> day-to-day. I have
                worked on workflow automation tools, graph-based data exploration UIs, and
                large-scale refactors that needed careful coordination across the team.
              </p>
              <p>
                Performance is something I take seriously. One of the projects I worked on
                saw a 70% drop in page load times after a focused optimization effort.
                Small things add up quickly when you are working at enterprise scale.
              </p>
              <p>
                Outside of work I keep an eye on what is happening with AI tooling, contribute
                to open source when I find something useful to add, and build side projects
                to try out ideas.
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
