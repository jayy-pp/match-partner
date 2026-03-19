"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  suffix: string;
  duration?: number;
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

function formatNumber(n: number): string {
  return Math.floor(n).toLocaleString("en-IN");
}

export default function AnimatedCounter({
  end,
  suffix,
  duration = 2000,
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();

          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutQuart(progress);
            const current = eased * end;
            setDisplay(formatNumber(current));

            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setDisplay(formatNumber(end));
            }
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
