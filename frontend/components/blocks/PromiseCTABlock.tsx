'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Phone, Star } from 'lucide-react';
import type { Block } from '@/lib/blocks';

type Props = { attrs: Record<string, unknown>; innerBlocks: Block[] };

export function PromiseCTABlock({ attrs }: Props) {
  const {
    sectionLabel = 'Our Promise',
    headline = 'Your Satisfaction Is Our Guarantee',
    subtext = "We're not done until you're completely satisfied.",
    guarantees = [],
    phone = '(555) 123-4567',
    ctaText = 'Get a Quote',
    ctaUrl = '/contact',
    imageUrl = '',
  } = attrs as Record<string, unknown>;

  const guaranteeList = guarantees as string[];

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
              className="text-[#0B2545] mb-6"
              style={{ fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: 1.15 }}
            >
              {(headline as string).replace('Our Guarantee', '')}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #1E7A45, #25A55F)' }}
              >
                Our Guarantee
              </span>
            </h2>
            <p className="text-[#4A5568] leading-relaxed mb-8 text-lg">{subtext as string}</p>

            <div className="space-y-4 mb-8">
              {guaranteeList.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#25A55F] flex-shrink-0" />
                  <span className="text-[#4A5568]">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:+1${(phone as string).replace(/\D/g, '')}`}
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#BE2026] text-white hover:bg-[#A0181F] transition-colors font-bold"
              >
                <Phone className="w-5 h-5" />
                Call Us Today
              </a>
              <a
                href={ctaUrl as string}
                className="flex items-center gap-3 px-8 py-4 rounded-2xl border border-[#0B2545]/20 text-[#0B2545] hover:bg-[#0B2545]/5 transition-colors font-semibold"
              >
                {ctaText as string}
              </a>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl bg-[#1a3a6b]">
            {imageUrl && (
              <img src={imageUrl as string} alt="Happy customers" className="w-full h-full object-cover" />
            )}
            <div className="absolute bottom-6 right-6 flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/95 shadow-xl">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-[#0B2545] text-sm font-bold">500+ Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
