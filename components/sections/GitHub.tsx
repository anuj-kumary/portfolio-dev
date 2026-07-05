"use client";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUpOnScroll } from "@/components/ui/FadeUp";
import { GitHubUser } from "@/types";
import { Users, BookOpen, Star } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import Link from "next/link";

interface GitHubSectionProps {
  user: GitHubUser | null;
}

export function GitHubSection({ user }: GitHubSectionProps) {
  const stats = [
    {
      icon: BookOpen,
      label: "Public Repos",
      value: user?.public_repos ?? "30+",
    },
    {
      icon: Users,
      label: "Followers",
      value: user?.followers ?? "—",
    },
    {
      icon: Star,
      label: "Following",
      value: user?.following ?? "—",
    },
  ];

  return (
    <section className="py-32 px-6 border-t border-[#222]">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="GitHub"
          title="On the open web."
          description="Contributing to open source and building in public."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {stats.map((stat, i) => (
            <FadeUpOnScroll key={stat.label} delay={i * 0.1}>
              <div className="bg-[#111] border border-[#222] rounded-2xl p-6 flex items-center gap-5 hover:border-[#333] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 flex items-center justify-center flex-shrink-0">
                  <stat.icon size={20} className="text-[#4F8CFF]" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-[#FAFAFA]">{stat.value}</p>
                  <p className="text-sm text-[#A1A1AA]">{stat.label}</p>
                </div>
              </div>
            </FadeUpOnScroll>
          ))}
        </div>

        <FadeUpOnScroll delay={0.3}>
          <div className="bg-[#111] border border-[#222] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 flex items-center justify-center flex-shrink-0">
              <GitHubIcon width={28} height={28} className="text-[#4F8CFF]" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-[#FAFAFA] font-semibold text-lg mb-1">
                {user?.name ?? "Anuj Kumar"}
              </p>
              <p className="text-[#A1A1AA] text-sm">
                {user?.bio ?? "Software Engineer · Building enterprise React apps · Open source contributor"}
              </p>
            </div>
            <Link
              href="https://github.com/anuj-kumary"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#FAFAFA] text-[#0B0B0C] font-medium text-sm px-5 py-2.5 rounded-xl hover:bg-white transition-colors duration-200"
            >
              <GitHubIcon width={16} height={16} />
              Follow on GitHub
            </Link>
          </div>
        </FadeUpOnScroll>
      </div>
    </section>
  );
}
