'use client';

import { motion } from 'framer-motion';
import { Phone, Zap, ArrowRight } from 'lucide-react';
import type { Block } from '@/lib/blocks';

type Props = { attrs: Record<string, unknown>; innerBlocks: Block[] };

export function EmergencyBannerBlock({ attrs }: Props) {
  const {
    badgeLabel = '24/7 Emergency Response',
    headline = "Septic Emergency?\nWe're Available Now.",
    subtext = "Don't wait for a small problem to become a major disaster. Our emergency team is on standby 24 hours a day, 7 days a week — including holidays.",
    phone = '(555) 123-4567',
    contactUrl = '/contact',
    features = ['Rapid 2-hour response', 'No after-hours surcharge', 'All areas covered', 'Guaranteed same-day fix'],
  } = attrs as Record<string, string | string[]>;

  const headlineLines = (headline as string).split('\n');
  const featureList = features as string[];

  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #BE2026 0%, #A0181F 40%, #7A1519 100%)' }}
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0B2545]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 justify-center lg:justify-start mb-4"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-white/90 uppercase tracking-widest text-sm font-bold">
                {badgeLabel as string}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white mb-4"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }}
            >
              {headlineLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headlineLines.length - 1 && <br />}
                </span>
              ))}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/75 text-lg max-w-xl"
            >
              {subtext as string}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 flex-shrink-0"
          >
            <a
              href={`tel:+1${(phone as string).replace(/\D/g, '')}`}
              className="group relative flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white text-[#BE2026] hover:bg-white/95 transition-all duration-200 hover:scale-105 shadow-2xl font-extrabold text-lg"
            >
              <span className="absolute -inset-1 rounded-2xl bg-white/20 animate-ping opacity-0 group-hover:opacity-100" />
              <Phone className="w-5 h-5" />
              {phone as string}
            </a>
            <a
              href={contactUrl as string}
              className="flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white/15 border border-white/30 text-white hover:bg-white/25 transition-all duration-200 font-bold text-lg"
            >
              Request Online
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {featureList.map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-white/85 text-sm font-medium">{feature}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
