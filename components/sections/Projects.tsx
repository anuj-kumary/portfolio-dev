"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUpOnScroll } from "@/components/ui/FadeUp";
import { Badge } from "@/components/ui/Badge";
import { GitHubRepo } from "@/types";
import { Star, GitFork, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import Link from "next/link";

interface ProjectsProps {
  repos: GitHubRepo[];
}

const FALLBACK_REPOS: Partial<GitHubRepo>[] = [
  {
    id: 1,
    name: "OpenMetadata",
    description: "Open-source metadata platform for data discovery, observability, and governance. Core contributor.",
    html_url: "https://github.com/open-metadata/OpenMetadata",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["react", "typescript", "metadata"],
  },
  {
    id: 2,
    name: "react-native-toastify",
    description: "Type-safe, animated toast notifications for React Native and Expo with auto-dismiss.",
    html_url: "https://github.com/anuj-kumary/react-native-toastify",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["react-native", "expo", "typescript"],
  },
  {
    id: 3,
    name: "PeerPlan",
    description: "A collaborative platform for students and developers to build teams, share ideas, and co-create projects.",
    html_url: "https://github.com/anuj-kumary/PeerPlan",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["react", "typescript", "tailwindcss"],
  },
  {
    id: 4,
    name: "mitro",
    description: "A social media app where you can share posts and learnings.",
    html_url: "https://github.com/anuj-kumary/mitro",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["react", "redux", "material-ui"],
  },
  {
    id: 5,
    name: "TechHub",
    description: "A video library for tech review videos.",
    html_url: "https://github.com/anuj-kumary/TechHub",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["react", "react-router", "context"],
  },
  {
    id: 6,
    name: "Eagle-stores",
    description: "An online shopping site for gadgets.",
    html_url: "https://github.com/anuj-kumary/Eagle-stores",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["react", "ecommerce", "react-router"],
  },
];

const BLOCKLIST = [
  "event-based-workflow",
  "periodic-batch-workflow",
  "anuj-kumary",
  "dev-portfolio",
  "portfolio-dev",
];

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3776AB",
  Go: "#00ADD8",
  Rust: "#CE422B",
};

export function Projects({ repos }: ProjectsProps) {
  const filtered = repos.filter((r) => !BLOCKLIST.includes(r.name));
  const displayRepos = filtered.length > 0 ? filtered.slice(0, 6) : FALLBACK_REPOS;

  return (
    <section id="projects" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-16">
          <SectionHeader
            label="Projects"
            title="Things I've built."
            description="Open source projects and experiments."
          />
          <FadeUpOnScroll>
            <Link
              href="https://github.com/anuj-kumary"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-[#FAFAFA] border border-[#222] rounded-lg px-4 py-2 hover:border-[#333] transition-all duration-200"
            >
              <GitHubIcon width={14} height={14} />
              View All
            </Link>
          </FadeUpOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayRepos.map((repo, i) => (
            <FadeUpOnScroll key={repo.id || i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="bg-[#111] border border-[#222] rounded-2xl p-6 flex flex-col h-full hover:border-[#333] transition-colors duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 flex items-center justify-center">
                    <GitHubIcon width={18} height={18} className="text-[#4F8CFF]" />
                  </div>
                  <Link
                    href={(repo.html_url as string) ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#A1A1AA] hover:text-[#FAFAFA]"
                    aria-label="View on GitHub"
                  >
                    <ArrowUpRight size={18} />
                  </Link>
                </div>

                <h3 className="text-[#FAFAFA] font-semibold mb-2 tracking-tight">
                  {repo.name}
                </h3>

                <p className="text-sm text-[#A1A1AA] leading-relaxed flex-1 mb-4">
                  {repo.description ?? "No description provided."}
                </p>

                {(repo.topics?.length ?? 0) > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {repo.topics?.slice(0, 3).map((t) => (
                      <Badge key={t} className="text-xs">{t}</Badge>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4 text-xs text-[#A1A1AA] pt-4 border-t border-[#1a1a1a]">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{
                          backgroundColor: LANG_COLORS[repo.language] ?? "#A1A1AA",
                        }}
                      />
                      {repo.language}
                    </span>
                  )}
                  {(repo.stargazers_count ?? 0) > 0 && (
                    <span className="flex items-center gap-1">
                      <Star size={12} />
                      {repo.stargazers_count}
                    </span>
                  )}
                  {(repo.forks_count ?? 0) > 0 && (
                    <span className="flex items-center gap-1">
                      <GitFork size={12} />
                      {repo.forks_count}
                    </span>
                  )}
                </div>
              </motion.div>
            </FadeUpOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
