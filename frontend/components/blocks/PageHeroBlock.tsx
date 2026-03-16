'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, CheckCircle, Star, Phone, ArrowRight } from 'lucide-react';
import type { Block } from '@/lib/blocks';

type BadgeItem = { icon: string; text: string };

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin, Clock, CheckCircle, Star, Phone, ArrowRight,
};

type Props = { attrs: Record<string, unknown>; innerBlocks: Block[] };

export function PageHeroBlock({ attrs }: Props) {
  const {
    sectionLabel = 'About Us',
    headline = "Built on Trust,\nDriven by Integrity",
    headlineGradient = 'Driven by Integrity',
    subtext = 'Your trusted septic service company.',
    imageUrl = '',
    badges = [],
  } = attrs as Record<string, unknown>;

  const badgeList = badges as BadgeItem[];
  const headlineStr = headline as string;
  const gradientPhrase = headlineGradient as string;

  const renderHeadline = () => {
    if (!gradientPhrase || !headlineStr.includes(gradientPhrase)) {
      return headlineStr.split('\n').map((line, i, arr) => (
        <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
      ));
    }
    const parts = headlineStr.split(gradientPhrase);
    return (
      <>
        {parts[0].split('\n').map((line, i, arr) => (
          <span key={`pre-${i}`}>{line}{i < arr.length - 1 && <br />}</span>
        ))}
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: 'linear-gradient(135deg, #25A55F, #4FD4A4)' }}
        >
          {gradientPhrase}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: '#0B2545' }}>
      {imageUrl && (
        <div className="absolute inset-0">
          <img src={imageUrl as string} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545] to-[#0B2545]/80" />
        </div>
      )}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-sm mb-4 font-bold"
          >
            {sectionLabel as string}
          </span>
          <h1
            className="text-white mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' }}
          >
            {renderHeadline()}
          </h1>
          <p className="text-white/65 text-xl max-w-2xl">{subtext as string}</p>

          {badgeList.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-8">
              {badgeList.map(({ icon, text }, i) => {
                const Icon = ICON_MAP[icon];
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15"
                  >
                    {Icon && <Icon className="w-4 h-4 text-[#25A55F]" />}
                    <span className="text-white/80 text-sm font-medium">{text}</span>
                  </div>
                );
              })}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
