'use client';

import { Phone, ArrowRight } from 'lucide-react';
import type { Block } from '@/lib/blocks';

type Props = { attrs: Record<string, unknown>; innerBlocks: Block[] };

export function CTABannerBlock({ attrs }: Props) {
  const {
    headline = 'Ready to Schedule Service?',
    subtext = 'Most appointments available within 24 hours.',
    phone = '(555) 123-4567',
    ctaText = 'Request a Quote',
    ctaUrl = '/contact',
  } = attrs as Record<string, unknown>;

  return (
    <section
      className="py-20"
      style={{ background: 'linear-gradient(135deg, #0B2545 0%, #0D2E1C 100%)' }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2
          className="text-white mb-4"
          style={{ fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
        >
          {headline as string}
        </h2>
        <p className="text-white/60 text-lg mb-8">{subtext as string}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:+1${(phone as string).replace(/\D/g, '')}`}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#BE2026] text-white hover:bg-[#A0181F] transition-colors font-bold"
          >
            <Phone className="w-5 h-5" />
            {phone as string}
          </a>
          <a
            href={ctaUrl as string}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-white/20 text-white hover:bg-white/10 transition-colors font-semibold"
          >
            {ctaText as string}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
