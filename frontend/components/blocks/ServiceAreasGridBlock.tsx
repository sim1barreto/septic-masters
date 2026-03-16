'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import type { Block } from '@/lib/blocks';

type AreaCard = {
  city: string;
  county: string;
  description: string;
  services: string[];
  color: string;
};

type Props = { attrs: Record<string, unknown>; innerBlocks: Block[] };

export function ServiceAreasGridBlock({ attrs }: Props) {
  const {
    sectionLabel = 'Primary Coverage',
    headline = 'Our Core Service Cities',
    subtext = 'These areas receive our highest priority scheduling and fastest response times.',
    phone = '(555) 123-4567',
    ctaUrl = '/contact',
    areas = [],
  } = attrs as Record<string, unknown>;

  const areaList = areas as AreaCard[];

  return (
    <section className="py-24 bg-white">
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
          <p className="text-[#4A5568] mt-3 text-lg max-w-2xl mx-auto">{subtext as string}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areaList.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-[#F7F9F8] border border-[#E2E8F0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${area.color}15`, border: `1px solid ${area.color}30` }}
                >
                  <MapPin className="w-5 h-5" style={{ color: area.color }} />
                </div>
                <div>
                  <h3 className="text-[#0B2545] font-extrabold text-xl">{area.city}, TX</h3>
                  <div className="text-[#718096] text-sm">{area.county}</div>
                </div>
              </div>

              <p className="text-[#4A5568] text-sm leading-relaxed mb-5">{area.description}</p>

              <div className="space-y-2 mb-6">
                {area.services.map((service, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: area.color }} />
                    <span className="text-[#4A5568] text-xs">{service}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={`tel:+1${(phone as string).replace(/\D/g, '')}`}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-white text-xs font-bold transition-all"
                  style={{ background: area.color }}
                >
                  <Phone className="w-3.5 h-3.5" /> Call Now
                </a>
                <a
                  href={ctaUrl as string}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#E2E8F0] text-[#0B2545] text-xs hover:bg-white transition-colors font-semibold"
                >
                  Get Quote <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
