'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, ThumbsUp, Star, Shield, Award, type LucideIcon } from 'lucide-react';

type BlockProps = {
  attrs: Record<string, unknown>;
  innerBlocks: unknown[];
};

type Stat = { iconName: string; value: number; suffix: string; label: string; color: string; decimal?: boolean };

const ICON_MAP: Record<string, LucideIcon> = { Clock, ThumbsUp, Star, Shield, Award };

const DEFAULT_STATS: Stat[] = [
  { iconName: 'Clock', value: 15, suffix: '+', label: 'Years Experience', color: '#25A55F' },
  { iconName: 'ThumbsUp', value: 500, suffix: '+', label: 'Happy Customers', color: '#4FD4A4' },
  { iconName: 'Star', value: 4.9, suffix: '', label: 'Average Rating', color: '#F4C542', decimal: true },
  { iconName: 'Shield', value: 100, suffix: '%', label: 'Licensed & Insured', color: '#4FD4A4' },
  { iconName: 'Award', value: 24, suffix: '/7', label: 'Emergency Service', color: '#BE2026' },
];

function Counter({ target, suffix, decimal, active }: { target: number; suffix: string; decimal?: boolean; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target]);

  const display = decimal ? count.toFixed(1) : Math.floor(count).toString();
  return <span>{display}{suffix}</span>;
}

export function TrustBarBlock({ attrs }: BlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const stats = (attrs.stats as Stat[]) ?? DEFAULT_STATS;

  return (
    <section ref={ref} className="relative bg-[#0B2545] py-16 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#25A55F]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E7A45]/30 to-transparent" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#1E7A45] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#1E7A45] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {stats.map((stat, i) => {
            const Icon = ICON_MAP[stat.iconName] ?? Shield;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-3 group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-1 transition-transform group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${stat.color}25, ${stat.color}10)`, border: `1px solid ${stat.color}35` }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, lineHeight: 1, color: stat.color }}
                >
                  <Counter
                    target={stat.value}
                    suffix={stat.suffix}
                    decimal={stat.decimal}
                    active={inView}
                  />
                </div>
                <div className="text-white/60 text-sm font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
