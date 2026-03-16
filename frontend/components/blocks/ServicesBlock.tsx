'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Droplets,
  Search,
  Wrench,
  Zap,
  Layers,
  AlertTriangle,
  Wind,
  Trash2,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';

type BlockProps = {
  attrs: Record<string, unknown>;
  innerBlocks: unknown[];
};

type Service = {
  iconName: string;
  title: string;
  description: string;
  color: string;
  popular?: boolean;
  urgent?: boolean;
};

const ICON_MAP: Record<string, LucideIcon> = {
  Droplets,
  Search,
  Wrench,
  Zap,
  Layers,
  AlertTriangle,
  Wind,
  Trash2,
};

const DEFAULT_SERVICES: Service[] = [
  { iconName: 'Droplets', title: 'Septic Tank Pumping', description: 'Regular pumping prevents system failures and backups. Our efficient process keeps your system running smoothly year-round.', color: '#25A55F', popular: true },
  { iconName: 'Search', title: 'Septic Inspections', description: 'Comprehensive inspections with detailed reports. Essential for home sales, routine maintenance, and system health checks.', color: '#4FD4A4' },
  { iconName: 'Layers', title: 'New Installations', description: 'Expert design and installation of conventional and alternative septic systems. We handle permits, excavation, and startup.', color: '#4FD4A4' },
  { iconName: 'Wrench', title: 'Septic Repairs', description: 'Fast diagnosis and reliable repairs for any septic component. We fix problems right the first time to prevent future issues.', color: '#1E7A45' },
  { iconName: 'Wind', title: 'Drain Field Services', description: 'Drain field restoration, repair, and replacement. Save thousands versus full system replacement with our targeted solutions.', color: '#F4C542' },
  { iconName: 'AlertTriangle', title: 'Emergency Services', description: '24/7 emergency response for septic backups and failures. Our rapid response team is always on standby for your urgent needs.', color: '#BE2026', urgent: true },
  { iconName: 'Zap', title: 'Aerobic Systems', description: 'Installation and maintenance of advanced aerobic treatment systems. Eco-friendly solutions for properties where conventional systems fail.', color: '#4FD4A4' },
  { iconName: 'Trash2', title: 'Grease Trap Cleaning', description: 'Professional grease trap pumping and cleaning for restaurants and commercial facilities. Keep your business compliant and odor-free.', color: '#25A55F' },
];

function renderSectionTitle(text: string) {
  const accent = 'Under One Roof';
  const idx = text.indexOf(accent);
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span
        className="bg-clip-text text-transparent"
        style={{ backgroundImage: 'linear-gradient(135deg, #1E7A45, #25A55F)' }}
      >
        {accent}
      </span>
    </>
  );
}

export function ServicesBlock({ attrs }: BlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const sectionLabel = (attrs.sectionLabel as string) ?? 'Our Services';
  const sectionTitle = (attrs.sectionTitle as string) ?? 'Complete Septic Solutions Under One Roof';
  const sectionSubtitle =
    (attrs.sectionSubtitle as string) ??
    'From routine maintenance to full system installations, we handle every aspect of your septic system with expertise and care.';
  const services = (attrs.services as Service[]) ?? DEFAULT_SERVICES;

  return (
    <section className="py-24 lg:py-32 bg-[#F7F9F8] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E7A45]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1E7A45]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full bg-[#1E7A45]/10 text-[#1E7A45] text-sm mb-4 font-bold"
            >
              {sectionLabel}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#0B2545] mb-5"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }}
          >
            {renderSectionTitle(sectionTitle)}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#4A5568] text-lg"
          >
            {sectionSubtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = ICON_MAP[service.iconName] ?? Droplets;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              >
                <Link
                  href="/services"
                  className="group relative flex flex-col h-full p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-transparent hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#1E7A45]/10 text-[#1E7A45] text-xs font-bold">
                      Most Popular
                    </div>
                  )}
                  {service.urgent && (
                    <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#BE2026]/10 text-[#BE2026] text-xs font-bold">
                      24/7 Urgent
                    </div>
                  )}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    style={{ background: `linear-gradient(135deg, ${service.color}08, ${service.color}04)`, border: `1px solid ${service.color}30` }}
                  />
                  <div
                    className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`, border: `1px solid ${service.color}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: service.color }} />
                  </div>
                  <h3
                    className="text-[#0B2545] mb-3 group-hover:text-[#1E7A45] transition-colors"
                    style={{ fontWeight: 700, fontSize: '1rem' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[#718096] text-sm leading-relaxed flex-1 mb-5">
                    {service.description}
                  </p>
                  <div
                    className="flex items-center gap-2 text-sm group-hover:gap-3 transition-all"
                    style={{ color: service.color, fontWeight: 600 }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-14"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#0B2545] text-white hover:bg-[#1E3A5F] transition-all duration-200 hover:scale-105 hover:shadow-xl"
            style={{ fontWeight: 700 }}
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
