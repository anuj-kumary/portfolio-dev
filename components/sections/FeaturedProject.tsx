"use client";
import { motion } from "framer-motion";
import { FadeUpOnScroll } from "@/components/ui/FadeUp";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function FeaturedProject() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <FadeUpOnScroll>
          <p className="section-label mb-4">Featured Project</p>
        </FadeUpOnScroll>

        <FadeUpOnScroll delay={0.1}>
          <div className="bg-[#111] border border-[#222] rounded-3xl overflow-hidden hover:border-[#333] transition-all duration-500 group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Content */}
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="accent">Enterprise</Badge>
                  <Badge variant="accent">Featured</Badge>
                </div>

                <h3 className="text-3xl md:text-4xl font-semibold text-[#FAFAFA] mb-4 tracking-tight">
                  Workflow Builder
                </h3>

                <p className="text-[#A1A1AA] text-lg leading-relaxed mb-8">
                  A visual drag-and-drop workflow automation platform built for enterprise
                  scale. Users can design, publish, and monitor complex multi-step automations
                  — all without writing a single line of code. Handles 10,000+ workflow
                  executions in production.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Visual node-based editor with React Flow",
                    "Real-time workflow execution monitoring",
                    "10,000+ active workflows in production",
                    "Custom node types with TypeScript",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-[#A1A1AA]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF] mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["React Flow", "TypeScript", "React", "Node.js"].map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                <Link
                  href="https://github.com/anuj-kumary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#4F8CFF] text-sm font-medium hover:gap-3 transition-all duration-200"
                >
                  View on GitHub
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              {/* Screenshot placeholder */}
              <div className="relative bg-[#0d0d0f] border-l border-[#222] min-h-[360px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4F8CFF]/5 to-transparent" />
                <div className="relative z-10 p-8 w-full">
                  {/* Simulated workflow canvas */}
                  <div className="rounded-xl border border-[#222] bg-[#111] p-6 space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-[#A1A1AA] font-mono">workflow.json</span>
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                      </div>
                    </div>

                    {/* Flow nodes */}
                    {[
                      { label: "Trigger", color: "#4F8CFF" },
                      { label: "Condition", color: "#A1A1AA" },
                      { label: "Action", color: "#10B981" },
                      { label: "Notify", color: "#F59E0B" },
                    ].map((node, i) => (
                      <motion.div
                        key={node.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                        className="flex items-center gap-3"
                      >
                        {i > 0 && (
                          <div className="ml-6 w-px h-4 bg-[#222] -mt-4 mb-1" />
                        )}
                        <div
                          className="flex items-center gap-2 bg-[#0B0B0C] border rounded-lg px-4 py-2.5 text-sm font-mono"
                          style={{ borderColor: node.color + "40" }}
                        >
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: node.color }}
                          />
                          <span style={{ color: node.color }}>{node.label}</span>
                        </div>
                      </motion.div>
                    ))}

                    <div className="pt-2 flex items-center gap-2 text-xs text-[#A1A1AA]">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>10,247 runs · 99.8% success rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUpOnScroll>
      </div>
    </section>
  );
}
