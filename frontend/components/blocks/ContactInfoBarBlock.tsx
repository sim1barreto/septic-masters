'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import type { Block } from '@/lib/blocks';

type InfoItem = {
  iconName: string;
  title: string;
  line1: string;
  line2: string;
  href: string;
  color: string;
};

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Phone, Mail, MapPin, Clock,
};

type Props = { attrs: Record<string, unknown>; innerBlocks: Block[] };

export function ContactInfoBarBlock({ attrs }: Props) {
  const { items = [] } = attrs as Record<string, unknown>;
  const itemList = items as InfoItem[];

  return (
    <section className="py-12 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {itemList.map((info, i) => {
            const Icon = ICON_MAP[info.iconName] ?? Phone;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${info.color}15`, border: `1px solid ${info.color}30` }}
                >
                  <Icon className="w-5 h-5" style={{ color: info.color }} />
                </div>
                <div>
                  <div className="text-[#718096] text-xs uppercase tracking-widest mb-1 font-semibold">
                    {info.title}
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-[#0B2545] hover:text-[#1E7A45] transition-colors block text-sm font-bold"
                    >
                      {info.line1}
                    </a>
                  ) : (
                    <div className="text-[#0B2545] text-sm font-bold">{info.line1}</div>
                  )}
                  <div className="text-[#A0AEC0] text-xs mt-0.5">{info.line2}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
