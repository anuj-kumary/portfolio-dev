"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUpOnScroll } from "@/components/ui/FadeUp";

const categories = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Redux", "Zustand", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    name: "Testing",
    items: ["Playwright", "Cypress", "Jest", "React Testing Library"],
  },
  {
    name: "AI & Tools",
    items: ["Claude Code", "OpenAI API", "GitHub Copilot", "Cursor", "MCP"],
  },
  {
    name: "DevOps",
    items: ["Docker", "GitHub Actions", "Vercel", "Netlify", "CI/CD"],
  },
];

export function TechStack() {
  return (
    <section id="stack" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Stack"
          title="Tools I trust."
          description="A curated set of technologies I use to build fast, reliable, and maintainable software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <FadeUpOnScroll key={cat.name} delay={i * 0.08}>
              <div className="bg-[#111] border border-[#222] rounded-2xl p-6 hover:border-[#333] transition-all duration-300 h-full">
                <h3 className="text-xs font-semibold tracking-widest text-[#4F8CFF] uppercase mb-5">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, j) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 + j * 0.04 }}
                      className="inline-flex items-center bg-[#0B0B0C] border border-[#222] rounded-lg px-3 py-1.5 text-sm text-[#A1A1AA] hover:text-[#FAFAFA] hover:border-[#333] transition-all duration-200 cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </FadeUpOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
