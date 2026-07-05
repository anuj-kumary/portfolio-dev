"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FadeUp } from "@/components/ui/FadeUp";
import { ArrowRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import Link from "next/link";
import { useMousePosition } from "@/hooks/useMousePosition";

const roles = [
  "Frontend Software Engineer",
  "React Specialist",
  "UI/UX Craftsman",
  "Performance Engineer",
];

export function Hero() {
  const { x, y } = useMousePosition();

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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4F8CFF]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#4F8CFF]/3 rounded-full blur-[80px]" />
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
        <FadeUp delay={0.1}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-[#A1A1AA]">Available for new opportunities</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <h1 className="text-6xl md:text-8xl lg:text-[96px] font-semibold tracking-tight leading-none mb-6">
            <span className="text-[#FAFAFA]">Anuj</span>
            <br />
            <span className="gradient-text">Kumar</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.35}>
          <p className="text-xl md:text-2xl text-[#4F8CFF] font-medium mb-8 tracking-tight">
            Frontend Software Engineer
          </p>
        </FadeUp>

        <FadeUp delay={0.45}>
          <p className="text-lg md:text-xl text-[#A1A1AA] max-w-xl leading-relaxed mb-12">
            Building scalable React applications,
            <br />
            beautiful user experiences,
            <br />
            AI-powered developer tools,
            <br />
            and enterprise software.
            <br />
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
          <div className="flex items-center gap-6 mt-12">
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
