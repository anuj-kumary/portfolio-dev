"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FadeUpOnScroll } from "@/components/ui/FadeUp";

const stats = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 450, suffix: "+", label: "Merged PRs to OpenMetadata" },
  { value: 2, suffix: "×", label: "Standout Performer Award" },
  { value: 9, suffix: "s", label: "Load Time, Down from ~30s" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function Achievements() {
  return (
    <section className="py-24 px-6 border-y border-[#222]">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <FadeUpOnScroll key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-[#FAFAFA] mb-2 tracking-tight">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-[#A1A1AA]">{stat.label}</p>
              </div>
            </FadeUpOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
