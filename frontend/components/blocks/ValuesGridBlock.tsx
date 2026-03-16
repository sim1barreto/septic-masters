'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Heart, Leaf, Star, CheckCircle, Users, Zap } from 'lucide-react';
import type { Block } from '@/lib/blocks';

type ValueItem = { iconName: string; title: string; description: string; color: string };

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Shield, Award, Heart, Leaf, Star, CheckCircle, Users, Zap,
};

type Props = { attrs: Record<string, unknown>; innerBlocks: Block[] };

export function ValuesGridBlock({ attrs }: Props) {
  const {
    sectionLabel = 'Our Values',
    headline = 'What We Stand For',
    values = [],
  } = attrs as Record<string, unknown>;

  const valueList = values as ValueItem[];
  return (
    <section className="py-24" style={{ background: '#F7F9F8' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-[#1E7A45]/10 text-[#1E7A45] text-sm mb-4 font-bold"
          >
            {sectionLabel as string}
          </span>
          <h2
            className="text-[#0B2545]"
            style={{ fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
          >
            {headline as string}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueList.map((v, i) => {
            const Icon = ICON_MAP[v.iconName] ?? Shield;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-[#E2E8F0] text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: `${v.color}15`, border: `1px solid ${v.color}30` }}
                >
                  <Icon className="w-6 h-6" style={{ color: v.color }} />
                </div>
                <h3 className="text-[#0B2545] mb-3 text-lg" style={{ fontWeight: 700 }}>{v.title}</h3>
                <p className="text-[#718096] text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
