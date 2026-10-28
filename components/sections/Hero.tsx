"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FadeUp } from "@/components/ui/FadeUp";
import { ArrowRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import Link from "next/link";

const skills = [
  { label: "React", color: "#61DAFB" },
  { label: "TypeScript", color: "#3178C6" },
  { label: "Next.js", color: "#FAFAFA" },
  { label: "React Flow", color: "#FF4B6E" },
  { label: "Playwright", color: "#45BA4B" },
  { label: "Node.js", color: "#68A063" },
  { label: "Tailwind CSS", color: "#38BDF8" },
  { label: "Framer Motion", color: "#BB4AF8" },
];

export function Hero() {
  const mouseX = useSpring(useMotionValue(0), { stiffness: 50, damping: 20 });
  const mouseY = useSpring(useMotionValue(0), { stiffness: 50, damping: 20 });

  const bgX = useTransform(mouseX, [-1, 1], ["-2%", "2%"]);
  const bgY = useTransform(mouseY, [-1, 1], ["-2%", "2%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden"
      onMouseMove={handleMouseMove}
      id="home"
    >
      {/* Background glow */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#4F8CFF]/6 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#4F8CFF]/4 rounded-full blur-[100px]" />
      </motion.div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#FAFAFA 1px, transparent 1px), linear-gradient(90deg, #FAFAFA 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-6xl w-full pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text content */}
          <div>
            <FadeUp delay={0.1}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-[#A1A1AA]">Available for new opportunities</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h1 className="text-5xl md:text-7xl lg:text-[80px] font-semibold tracking-tight leading-none mb-6">
                <span className="text-[#FAFAFA]">Anujkumar</span>
                <br />
                <span className="gradient-text">Yadav</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.35}>
              <p className="text-xl md:text-2xl text-[#4F8CFF] font-medium mb-8 tracking-tight">
                Full Stack Software Engineer
              </p>
            </FadeUp>

            <FadeUp delay={0.45}>
              <p className="text-lg text-[#A1A1AA] leading-relaxed mb-12">
                Building scalable web and mobile products with React,
                TypeScript, React Native, and Node.js. Core contributor
                to OpenMetadata.{" "}
                <span className="text-[#FAFAFA] font-medium">Currently at Deuex Solutions.</span>
              </p>
            </FadeUp>

            <FadeUp delay={0.55}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#projects"
                  className="group inline-flex items-center gap-2 bg-[#4F8CFF] text-white font-medium px-6 py-3 rounded-xl hover:bg-[#6BA3FF] transition-all duration-200"
                >
                  View Work
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-[#222] text-[#A1A1AA] font-medium px-6 py-3 rounded-xl hover:border-[#444] hover:text-[#FAFAFA] transition-all duration-200"
                >
                  Get in Touch
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.65}>
              <div className="flex items-center gap-6 mt-10">
                <Link
                  href="https://github.com/anuj-kumary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                >
                  <GitHubIcon width={20} height={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/anujkumaryadav05/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                >
                  <LinkedInIcon width={20} height={20} />
                </Link>
                <div className="h-4 w-px bg-[#222]" />
                <span className="text-xs text-[#A1A1AA]">Mumbai, India</span>
              </div>
            </FadeUp>
          </div>

          {/* Right: floating skill tags */}
          <FadeUp delay={0.4}>
            <div className="hidden lg:flex flex-col gap-3 items-start pl-8">
              {/* Terminal-style card */}
              <div className="w-full bg-[#111] border border-[#222] rounded-2xl overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#222] bg-[#0d0d0f]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-2 text-xs text-[#A1A1AA] font-mono">engineer.ts</span>
                </div>
                <div className="p-5 font-mono text-sm space-y-2">
                  <p>
                    <span className="text-[#4F8CFF]">const</span>{" "}
                    <span className="text-[#FAFAFA]">engineer</span>{" "}
                    <span className="text-[#A1A1AA]">= {"{"}</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[#A1A1AA]">name:</span>{" "}
                    <span className="text-emerald-400">&quot;Anujkumar Yadav&quot;</span><span className="text-[#A1A1AA]">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[#A1A1AA]">role:</span>{" "}
                    <span className="text-emerald-400">&quot;Full Stack Engineer&quot;</span><span className="text-[#A1A1AA]">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[#A1A1AA]">exp:</span>{" "}
                    <span className="text-[#F59E0B]">4</span>
                    <span className="text-[#A1A1AA]">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[#A1A1AA]">location:</span>{" "}
                    <span className="text-emerald-400">&quot;Mumbai, India&quot;</span><span className="text-[#A1A1AA]">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[#A1A1AA]">available:</span>{" "}
                    <span className="text-[#4F8CFF]">true</span>
                  </p>
                  <p><span className="text-[#A1A1AA]">{"}"}</span></p>
                </div>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.07, duration: 0.4 }}
                    className="inline-flex items-center gap-1.5 bg-[#111] border border-[#222] rounded-full px-3 py-1.5 text-xs text-[#A1A1AA]"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: skill.color }}
                    />
                    {skill.label}
                  </motion.span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-[#4F8CFF] to-transparent" />
      </motion.div>
    </section>
  );
}
