import { FadeUpOnScroll } from "./FadeUp";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-16 md:mb-20">
      <FadeUpOnScroll>
        <p className="section-label mb-4">{label}</p>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#FAFAFA] mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-[#A1A1AA] text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </FadeUpOnScroll>
    </div>
  );
}
