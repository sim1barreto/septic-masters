'use client';

import { motion } from 'framer-motion';
import type { Block } from '@/lib/blocks';

type MilestoneItem = { year: string; event: string };
type Props = { attrs: Record<string, unknown>; innerBlocks: Block[] };

export function TimelineBlock({ attrs }: Props) {
  const {
    sectionLabel = 'Our History',
    headline = '15 Years of Growth & Service',
    milestones = [],
  } = attrs as Record<string, unknown>;

  const milestoneList = milestones as MilestoneItem[];

  return (
    <section
      className="py-24"
      style={{ background: 'linear-gradient(135deg, #0B2545 0%, #0D2E1C 100%)' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-sm mb-4 font-bold"
          >
            {sectionLabel as string}
          </span>
          <h2
            className="text-white"
            style={{ fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
          >
            {(headline as string).split('Growth')[0]}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #25A55F, #4FD4A4)' }}
            >
              Growth &amp; Service
            </span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#25A55F] to-[#1E7A45]" />
          <div className="space-y-8">
            {milestoneList.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-8 pl-16 relative"
              >
                <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-[#0B2545] border-2 border-[#25A55F] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#25A55F]" />
                </div>
                <div>
                  <div className="text-[#25A55F] text-sm mb-1 font-bold">{m.year}</div>
                  <div className="text-white/80 leading-relaxed">{m.event}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
