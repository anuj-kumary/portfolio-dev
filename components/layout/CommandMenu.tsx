"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command, Search, FileText, Mail, User, Briefcase } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { SVGProps } from "react";

type IconComponent = React.FC<SVGProps<SVGSVGElement>> | React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement> & { size?: number | string }>;

const commands: Array<{ group: string; icon: IconComponent; label: string; action: () => void }> = [
  { group: "Navigate", icon: User, label: "About", action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
  { group: "Navigate", icon: Briefcase, label: "Experience", action: () => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }) },
  { group: "Navigate", icon: FileText, label: "Projects", action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) },
  { group: "Navigate", icon: Search, label: "Tech Stack", action: () => document.getElementById("stack")?.scrollIntoView({ behavior: "smooth" }) },
  { group: "Navigate", icon: Mail, label: "Contact", action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
  { group: "Social", icon: GitHubIcon, label: "GitHub", action: () => window.open("https://github.com/anuj-kumary", "_blank") },
  { group: "Social", icon: LinkedInIcon, label: "LinkedIn", action: () => window.open("https://www.linkedin.com/in/anujkumaryadav05/", "_blank") },
  { group: "Social", icon: Mail, label: "Send Email", action: () => window.open("mailto:anujf0510@gmail.com") },
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
        setQuery("");
        setSelected(0);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "ArrowDown") setSelected((s) => Math.min(s + 1, filtered.length - 1));
      if (e.key === "ArrowUp") setSelected((s) => Math.max(s - 1, 0));
      if (e.key === "Enter" && filtered[selected]) {
        filtered[selected].action();
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, selected, filtered]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 left-8 z-50 hidden md:flex items-center gap-2 bg-[#111] border border-[#222] rounded-xl px-3 py-2 text-xs text-[#A1A1AA] hover:border-[#333] hover:text-[#FAFAFA] transition-all duration-200"
        aria-label="Open command menu"
      >
        <Command size={12} />
        <span>K</span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80]"
              onClick={() => setOpen(false)}
            />
            <div className="fixed inset-0 flex items-start justify-center pt-[20vh] z-[90] px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -8 }}
                transition={{ duration: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="w-full max-w-lg bg-[#111] border border-[#222] rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#222]">
                  <Search size={16} className="text-[#A1A1AA] flex-shrink-0" />
                  <input
                    autoFocus
                    value={query}
                    onChange={(e) => { setQuery(e.target.value); setSelected(0); }}
                    placeholder="Type a command..."
                    className="flex-1 bg-transparent text-[#FAFAFA] text-sm outline-none placeholder:text-[#A1A1AA]"
                  />
                  <kbd className="text-xs text-[#A1A1AA] bg-[#0B0B0C] border border-[#222] rounded px-1.5 py-0.5">
                    ESC
                  </kbd>
                </div>

                <div className="py-2 max-h-80 overflow-y-auto">
                  {filtered.length === 0 ? (
                    <p className="text-center text-sm text-[#A1A1AA] py-8">No results found.</p>
                  ) : (
                    filtered.map((cmd, i) => (
                      <button
                        key={cmd.label}
                        onClick={() => { cmd.action(); setOpen(false); }}
                        onMouseEnter={() => setSelected(i)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-100 ${
                          selected === i
                            ? "bg-[#4F8CFF]/10 text-[#FAFAFA]"
                            : "text-[#A1A1AA] hover:bg-[#1a1a1a]"
                        }`}
                      >
                        <cmd.icon width={15} height={15} className={selected === i ? "text-[#4F8CFF]" : ""} />
                        {cmd.label}
                      </button>
                    ))
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
