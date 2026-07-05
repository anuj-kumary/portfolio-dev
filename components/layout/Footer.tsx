import Link from "next/link";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="border-t border-[#222] py-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#A1A1AA]">
          Designed & Built by{" "}
          <span className="text-[#FAFAFA] font-medium">Anujkumar Yadav</span>
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/anuj-kumary"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
          >
            <GitHubIcon width={18} height={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/anujkumaryadav05/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
          >
            <LinkedInIcon width={18} height={18} />
          </Link>
          <Link
            href="mailto:anujf0510@gmail.com"
            className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
          >
            <Mail size={18} />
          </Link>
        </div>
        <p className="text-xs text-[#A1A1AA]">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
