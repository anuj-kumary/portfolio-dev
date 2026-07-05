import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border",
        variant === "default"
          ? "bg-[#1a1a1a] border-[#222] text-[#A1A1AA]"
          : "bg-[#4F8CFF]/10 border-[#4F8CFF]/30 text-[#4F8CFF]",
        className
      )}
    >
      {children}
    </span>
  );
}
