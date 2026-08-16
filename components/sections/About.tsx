"use client";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUpOnScroll } from "@/components/ui/FadeUp";
import { MapPin, Briefcase, Code2, Zap } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    label: "4 Years",
    description: "Four years shipping production React and TypeScript apps for enterprise clients at Deuex Solutions",
  },
  {
    icon: Code2,
    label: "Full Stack",
    description: "React and TypeScript up front, Node.js, PostgreSQL, gRPC and WebSockets on the backend",
  },
  {
    icon: Zap,
    label: "70% Faster",
    description: "Brought load time from 30 seconds down to 9 on a core enterprise product through code splitting and rerender cleanup",
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
          description="Full stack engineer who owns features end to end, from the canvas a user touches to the APIs behind it."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeUpOnScroll>
            <div className="space-y-6 text-[#A1A1AA] text-lg leading-relaxed">
              <p>
                I work at{" "}
                <span className="text-[#FAFAFA] font-medium">Deuex Solutions</span>{" "}
                where I have spent the past four years building things I find genuinely
                interesting. Node based visual editors, real time dashboards, graph canvas
                UIs and the backend services that make them actually work.
              </p>
              <p>
                My day to day is mostly React and TypeScript but I am just as comfortable
                going deeper on the backend with Node.js, PostgreSQL, gRPC and WebSockets.
                Right now I own the{" "}
                <span className="text-[#FAFAFA]">Governance domain at Collate (OpenMetadata)</span>.
                The workflow builder and access request systems I built there are handling
                over 10,000 governance workflows in production. I have 250 plus merged PRs
                as a core contributor to OpenMetadata which has 15k GitHub stars.
              </p>
              <p>
                I have shipped production work for Uber where I migrated a legacy codebase
                to TypeScript and brought load times down by around 70 percent. At StarTree
                I owned core UI modules while the product grew from $500K to over $4M in
                ARR. Along the way I also built a real time WebSocket system for live
                cricket scoring and auctions and shipped a full stack health tracking app
                in React Native.
              </p>
              <p>
                Performance matters a lot to me. On the Uber project I took load time from
                around 30 seconds down to 9 seconds through code splitting, lazy loading
                and cutting rerenders that were slowing things down. I write Playwright and
                Cypress tests, do code reviews regularly and enjoy helping engineers level
                up on React and TypeScript.
              </p>
              <p>
                I lean on AI tools like Codex, Claude Code and Copilot for scaffolding and
                refactors but I always review what comes out before it goes anywhere near
                production. I studied Information Technology at Savitribai Phule Pune
                University and graduated with a 9.2 GPA.
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
