'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Block } from '@/lib/blocks';

type StatItem = { value: string; label: string };
type Props = { attrs: Record<string, unknown>; innerBlocks: Block[] };

export function AboutStoryBlock({ attrs }: Props) {
  const {
    sectionLabel = 'Our Story',
    headline = "From One Truck to Central Texas's Most Trusted Team",
    paragraphs = [],
    ctaText = 'Work With Us',
    ctaUrl = '/contact',
    imageUrl = '',
    stats = [],
  } = attrs as Record<string, unknown>;

  const paraList = paragraphs as string[];
  const statList = stats as StatItem[];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full bg-[#1E7A45]/10 text-[#1E7A45] text-sm mb-4 font-bold"
            >
              {sectionLabel as string}
            </span>
            <h2
              className="text-[#0B2545] mb-6"
              style={{ fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: 1.15 }}
            >
              {(headline as string).split("Most Trusted")[0]}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #1E7A45, #25A55F)' }}
              >
                Most Trusted Team
              </span>
            </h2>
            <div className="space-y-5 text-[#4A5568] leading-relaxed">
              {paraList.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8">
              <a
                href={ctaUrl as string}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#0B2545] text-white hover:bg-[#1E3A5F] transition-all hover:scale-105 font-bold"
              >
                {ctaText as string}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square shadow-2xl bg-[#1a3a6b]">
              {(imageUrl as string) && (
                <img
                  src={imageUrl as string}
                  alt="Our team"
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/50 to-transparent" />
              {statList.length > 0 && (
                <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                  {statList.map((stat, i) => (
                    <div
                      key={i}
                      className="flex-1 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center"
                    >
                      <div className="text-white font-extrabold text-2xl">{stat.value}</div>
                      <div className="text-white/70 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-[#1E7A45]/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
