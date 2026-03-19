"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const couples = [
  { src: "/images/wedding/hero-indian-couple.jpg", alt: "Happy Indian couple in traditional wedding attire" },
  { src: "/images/wedding/hindu-wedding-couple.jpg", alt: "Hindu wedding couple in traditional attire" },
  { src: "/images/wedding/punjabi-newlyweds.jpg", alt: "Newlyweds in traditional Indian clothing" },
];

export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animStyle = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  return (
    <div ref={ref} className="relative w-full max-w-5xl mx-auto">
      {/* Main Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {/* Large featured image */}
        <div
          className="col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden shadow-2xl"
          style={animStyle(0)}
        >
          <div className="aspect-[4/5] md:aspect-[3/4] relative">
            <Image
              src={couples[0].src}
              alt={couples[0].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-green-700">Launching Soon</span>
                </div>
                <p className="text-xs text-text-muted">Trusted matchmaking for families across India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column images */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-lg"
          style={animStyle(200)}
        >
          <div className="aspect-square relative">
            <Image
              src={couples[1].src}
              alt={couples[1].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 30vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
            <div className="absolute bottom-2 left-2">
              <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full">
                95% Match
              </span>
            </div>
          </div>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden shadow-lg hidden md:block"
          style={animStyle(400)}
        >
          <div className="aspect-square relative">
            <Image
              src={couples[2].src}
              alt={couples[2].alt}
              fill
              className="object-cover"
              sizes="30vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
            <div className="absolute bottom-2 left-2">
              <span className="bg-accent text-white text-[10px] font-bold px-2 py-1 rounded-full">
                Verified
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating testimonial badge */}
      <div
        className="absolute -bottom-4 right-4 md:right-8 bg-white rounded-xl shadow-xl border border-border p-3 max-w-[200px]"
        style={animStyle(600)}
      >
        <div className="flex gap-1 mb-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <svg key={i} className="w-3 h-3 text-accent fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-[11px] text-text-muted italic leading-snug">
          &ldquo;Found my soulmate in just 3 weeks!&rdquo;
        </p>
        <p className="text-[10px] font-semibold text-secondary mt-1">— Priya & Vikram</p>
      </div>

      {/* Floating stats badge */}
      <div
        className="absolute top-4 -left-2 md:-left-6 bg-white rounded-xl shadow-xl border border-border p-3"
        style={animStyle(800)}
      >
        <div className="text-lg font-bold text-primary">94%</div>
        <p className="text-[10px] text-text-muted">Success Rate</p>
      </div>
    </div>
  );
}
