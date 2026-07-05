"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUpOnScroll } from "@/components/ui/FadeUp";
import { MapPin, Briefcase, Code2, Zap } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    label: "4+ Years",
    description: "Professional experience building enterprise-grade software",
  },
  {
    icon: Code2,
    label: "React & TypeScript",
    description: "Deep expertise in modern frontend architectures and patterns",
  },
  {
    icon: Zap,
    label: "Performance",
    description: "Delivered 70% page load improvements in production systems",
  },
  {
    icon: MapPin,
    label: "Mumbai, India",
    description: "Open to remote and hybrid opportunities globally",
  },
];

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="About"
          title="Engineering with intention."
          description="I don't just write code — I think deeply about user experience, system design, and the craft of building software that scales."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeUpOnScroll>
            <div className="space-y-6 text-[#A1A1AA] text-lg leading-relaxed">
              <p>
                I'm a Software Engineer at{" "}
                <span className="text-[#FAFAFA] font-medium">Deuex Solutions</span>, where
                I specialize in building complex frontend systems that handle real enterprise
                workloads. Over the past 4+ years, I've moved from writing components to
                architecting entire frontend platforms.
              </p>
              <p>
                My work centers on <span className="text-[#FAFAFA]">React</span>,{" "}
                <span className="text-[#FAFAFA]">TypeScript</span>, and modern tooling — but
                what I care most about is the intersection of engineering rigor and design
                quality. I believe the best software is both correct and beautiful.
              </p>
              <p>
                I've built workflow automation tools used by thousands, explored AI-assisted
                development early, and invested heavily in performance engineering —
                including optimizations that reduced page load times by 70%.
              </p>
              <p>
                Outside of shipping features, I contribute to open source, experiment with
                AI tooling, and obsess over developer experience.
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
