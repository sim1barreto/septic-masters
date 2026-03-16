'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import type { Block } from '@/lib/blocks';

type MapCity = { label: string; top: string; left: string; color: string };
type Props = { attrs: Record<string, unknown>; innerBlocks: Block[] };

export function CoverageMapBlock({ attrs }: Props) {
  const {
    sectionLabel = 'Extended Coverage',
    headline = 'Also Serving These Communities',
    subtext = "Don't see your city listed? Call us — we likely serve your area.",
    phone = '(555) 123-4567',
    ctaUrl = '/contact',
    additionalAreas = [],
    mapCities = [],
  } = attrs as Record<string, unknown>;

  const areaList = additionalAreas as string[];
  const cityList = mapCities as MapCity[];

  return (
    <section className="py-24 bg-[#F7F9F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full bg-[#1E7A45]/10 text-[#1E7A45] text-sm mb-4 font-bold"
            >
              {sectionLabel as string}
            </span>
            <h2
              className="text-[#0B2545] mb-5"
              style={{ fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: 1.15 }}
            >
              {(headline as string).split('These')[0]}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #1E7A45, #25A55F)' }}
              >
                These Communities
              </span>
            </h2>
            <p className="text-[#4A5568] text-lg mb-8">{subtext as string}</p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {areaList.map((area, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E2E8F0]"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#25A55F] flex-shrink-0" />
                  <span className="text-[#4A5568] text-sm font-medium">{area}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:+1${(phone as string).replace(/\D/g, '')}`}
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#BE2026] text-white hover:bg-[#A0181F] transition-colors font-bold"
              >
                <Phone className="w-5 h-5" /> Check My Area
              </a>
              <a
                href={ctaUrl as string}
                className="flex items-center gap-3 px-8 py-4 rounded-2xl border border-[#0B2545]/20 text-[#0B2545] hover:bg-white transition-colors font-semibold"
              >
                Request Service
              </a>
            </div>
          </div>

          {/* Visual map */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-[#0B2545] flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                {[0.9, 0.7, 0.5, 0.3].map((scale, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border border-[#25A55F]/20"
                    style={{ width: `${scale * 100}%`, height: `${scale * 100}%` }}
                  />
                ))}
              </div>

              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-[#BE2026] flex items-center justify-center shadow-lg shadow-red-900/40">
                  <MapPin className="w-8 h-8 text-white fill-white" />
                </div>
                <div className="text-white font-bold">Austin, TX</div>
                <div className="text-white/50 text-sm">Service Hub</div>
              </div>

              {cityList.map(({ label, top, left, color }, i) => (
                <div
                  key={i}
                  className="absolute flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-sm"
                  style={{ top, left, transform: 'translate(-50%, -50%)' }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                  <span className="text-white text-xs font-semibold">{label}</span>
                </div>
              ))}

              <div className="absolute bottom-6 left-0 right-0 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                  <div className="w-2 h-2 rounded-full bg-[#25A55F]/60 border border-[#25A55F]" />
                  <span className="text-white/70 text-xs font-semibold">~50 mile radius coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
