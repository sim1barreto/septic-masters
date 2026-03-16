'use client';

import { motion } from 'framer-motion';
import {
  Droplets, Search, Wrench, Zap, Layers, AlertTriangle, Wind, Trash2,
  Phone, CheckCircle, ArrowRight,
} from 'lucide-react';
import type { Block } from '@/lib/blocks';

type ServiceItem = {
  iconName: string;
  title: string;
  color: string;
  description: string;
  benefits: string[];
  price: string;
  time: string;
};

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Droplets, Search, Wrench, Zap, Layers, AlertTriangle, Wind, Trash2, Phone, CheckCircle,
};

type Props = { attrs: Record<string, unknown>; innerBlocks: Block[] };

export function ServicesDetailBlock({ attrs }: Props) {
  const {
    phone = '(555) 123-4567',
    ctaUrl = '/contact',
    services = [],
  } = attrs as Record<string, unknown>;

  const serviceList = services as ServiceItem[];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {serviceList.map((service, i) => {
            const Icon = ICON_MAP[service.iconName] ?? Wrench;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden bg-white shadow-sm border border-[#E2E8F0] hover:shadow-xl transition-shadow duration-300"
              >
                {/* Accent panel */}
                <div
                  className="lg:col-span-1 p-8 flex flex-col justify-between"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}15, ${service.color}08)`,
                    borderRight: `1px solid ${service.color}20`,
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: `${service.color}20`, border: `1px solid ${service.color}30` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: service.color }} />
                  </div>
                  <div>
                    <div className="text-[#718096] text-xs uppercase tracking-widest mb-1 font-semibold">Typical Cost</div>
                    <div className="text-[#0B2545] text-sm mb-4 font-bold">{service.price}</div>
                    <div className="text-[#718096] text-xs uppercase tracking-widest mb-1 font-semibold">Service Time</div>
                    <div className="text-[#0B2545] text-sm font-semibold">{service.time}</div>
                  </div>
                </div>

                {/* Main content */}
                <div className="lg:col-span-3 p-8">
                  <h2 className="text-[#0B2545] mb-4 text-2xl font-extrabold">{service.title}</h2>
                  <p className="text-[#4A5568] leading-relaxed mb-6">{service.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, j) => (
                      <div key={j} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: service.color }} />
                        <span className="text-[#4A5568] text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA panel */}
                <div className="lg:col-span-1 p-8 flex flex-col gap-4 justify-center border-l border-[#E2E8F0]">
                  <a
                    href={`tel:+1${(phone as string).replace(/\D/g, '')}`}
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-white text-sm transition-all hover:scale-105 font-bold"
                    style={{ background: service.color }}
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <a
                    href={ctaUrl as string}
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#E2E8F0] text-[#0B2545] text-sm hover:bg-[#F7F9F8] transition-colors font-semibold"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
