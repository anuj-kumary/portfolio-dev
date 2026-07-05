"use client";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUpOnScroll } from "@/components/ui/FadeUp";
import { Mail, Download, ArrowUpRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "anujf0510@gmail.com",
    href: "mailto:anujf0510@gmail.com",
    description: "Best for project inquiries",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "anujkumaryadav05",
    href: "https://www.linkedin.com/in/anujkumaryadav05/",
    description: "Let's connect professionally",
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "anuj-kumary",
    href: "https://github.com/anuj-kumary",
    description: "See my open source work",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Contact"
          title="Let's build something."
          description="I'm open to senior engineering roles, consulting, and interesting collaborations."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {links.map((link, i) => (
            <FadeUpOnScroll key={link.label} delay={i * 0.1}>
              <Link
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group block"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#111] border border-[#222] rounded-2xl p-6 h-full hover:border-[#4F8CFF]/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 flex items-center justify-center">
                      <link.icon size={18} className="text-[#4F8CFF]" />
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-[#A1A1AA] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  </div>
                  <p className="text-[#FAFAFA] font-semibold mb-1">{link.label}</p>
                  <p className="text-sm text-[#4F8CFF] mb-2 font-mono">{link.value}</p>
                  <p className="text-xs text-[#A1A1AA]">{link.description}</p>
                </motion.div>
              </Link>
            </FadeUpOnScroll>
          ))}
        </div>

        <FadeUpOnScroll delay={0.35}>
          <div className="bg-[#111] border border-[#222] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-[#FAFAFA] font-semibold text-lg mb-1">Download Resume</h3>
              <p className="text-sm text-[#A1A1AA]">
                Get a copy of my resume with full work history and project details.
              </p>
            </div>
            <Link
              href="/resume.pdf"
              download
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#4F8CFF] text-white font-medium px-6 py-3 rounded-xl hover:bg-[#6BA3FF] transition-all duration-200"
            >
              <Download size={16} />
              Download CV
            </Link>
          </div>
        </FadeUpOnScroll>
      </div>
    </section>
  );
}
