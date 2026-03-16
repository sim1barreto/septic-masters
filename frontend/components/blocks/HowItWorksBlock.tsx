'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, ClipboardCheck, Settings, ThumbsUp, type LucideIcon } from 'lucide-react';

type BlockProps = {
  attrs: Record<string, unknown>;
  innerBlocks: unknown[];
};

type Step = { iconName: string; step: string; title: string; description: string; color: string };

const ICON_MAP: Record<string, LucideIcon> = { Phone, ClipboardCheck, Settings, ThumbsUp };

const DEFAULT_STEPS: Step[] = [
  { iconName: 'Phone', step: '01', title: 'Call or Request Online', description: 'Contact us by phone or fill out our quick online form. We\'ll gather basic information about your system and schedule your appointment.', color: '#25A55F' },
  { iconName: 'ClipboardCheck', step: '02', title: 'On-Site Assessment', description: 'Our certified technician arrives on time, inspects your septic system, and provides a clear explanation of any issues found.', color: '#1E7A45' },
  { iconName: 'Settings', step: '03', title: 'Expert Service', description: 'We complete your service with professional-grade equipment, taking care not to disturb your property any more than necessary.', color: '#4FD4A4' },
  { iconName: 'ThumbsUp', step: '04', title: 'Peace of Mind', description: 'Receive a detailed service report, maintenance recommendations, and warranty on our work. We follow up to ensure your satisfaction.', color: '#4FD4A4' },
];

export function HowItWorksBlock({ attrs }: BlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const sectionLabel = (attrs.sectionLabel as string) ?? 'Our Process';
  const headline = (attrs.headline as string) ?? 'Simple, Hassle-Free Service';
  const subtext =
    (attrs.subtext as string) ??
    "Getting your septic system serviced shouldn't be stressful. Here's exactly what to expect when you work with us.";
  const phone = (attrs.phone as string) ?? '(555) 123-4567';
  const steps = (attrs.steps as Step[]) ?? DEFAULT_STEPS;

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0B2545 0%, #0D2E1C 100%)' }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1E7A45]/10 rounded-full blur-3xl" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '40px 40px' }}
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-sm mb-4 font-bold">
              {sectionLabel}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white mb-5"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }}
          >
            {headline.includes('Hassle-Free') ? (
              <>
                Simple,{' '}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #25A55F, #4FD4A4)' }}>
                  Hassle-Free
                </span>{' '}
                Service
              </>
            ) : (
              headline
            )}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg"
          >
            {subtext}
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute top-12 left-1/2 -translate-x-1/2 hidden lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.5, ease: 'easeInOut' }}
              className="h-0.5 origin-left"
              style={{ width: 'calc(75vw - 6rem)', maxWidth: '900px', background: 'linear-gradient(90deg, #25A55F, #1E7A45, #4FD4A4, #4FD4A4)' }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = ICON_MAP[step.iconName] ?? Phone;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative mb-8">
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
                      style={{ background: `linear-gradient(135deg, ${step.color}30, ${step.color}15)`, border: `2px solid ${step.color}50`, boxShadow: `0 0 40px ${step.color}20` }}
                    >
                      <Icon className="w-9 h-9" style={{ color: step.color }} />
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0B2545] border-2 flex items-center justify-center text-xs font-extrabold"
                      style={{ color: step.color, borderColor: step.color }}
                    >
                      {i + 1}
                    </div>
                  </div>
                  <div className="text-xs uppercase tracking-widest mb-3 font-bold" style={{ color: step.color, opacity: 0.7 }}>
                    Step {step.step}
                  </div>
                  <h3 className="text-white mb-4 font-bold" style={{ fontSize: '1.1rem' }}>
                    {step.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-20 p-8 lg:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: 'linear-gradient(135deg, rgba(30,122,69,0.2), rgba(37,165,95,0.1))', border: '1px solid rgba(37,165,95,0.2)' }}
        >
          <div>
            <h3 className="text-white mb-2 font-bold" style={{ fontSize: '1.4rem' }}>
              Ready to get started?
            </h3>
            <p className="text-white/60">Most appointments available within 24 hours.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a
              href={`tel:+1${phone.replace(/\D/g, '')}`}
              className="px-8 py-3.5 rounded-xl bg-[#BE2026] text-white hover:bg-[#A0181F] transition-colors font-bold"
            >
              Call {phone}
            </a>
            <a
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors font-semibold"
            >
              Schedule Online
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
