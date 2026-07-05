"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const progress = useScrollProgress();

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between backdrop-blur-xl bg-[#0B0B0C]/80 border border-[#222] rounded-2xl px-6 py-3">
            <Link href="/" className="text-sm font-semibold text-[#FAFAFA] tracking-tight">
              AK<span className="text-[#4F8CFF]">.</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="#contact"
              className="text-sm font-medium bg-[#4F8CFF] text-white px-4 py-2 rounded-lg hover:bg-[#6BA3FF] transition-all duration-200"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#4F8CFF] z-[60] origin-left"
        style={{ scaleX: progress / 100 }}
      />
    </>
  );
}
