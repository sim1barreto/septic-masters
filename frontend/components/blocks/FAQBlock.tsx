'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

type BlockProps = {
  attrs: Record<string, unknown>;
  innerBlocks: unknown[];
};

type FAQ = { q: string; a: string };

const DEFAULT_FAQS: FAQ[] = [
  { q: 'How often should I have my septic tank pumped?', a: 'Most septic tanks need pumping every 3–5 years, but this varies based on tank size, household size, and water usage. We recommend an annual inspection to monitor levels and pump when needed. Waiting too long can lead to costly repairs and system failures.' },
  { q: 'What are the signs my septic system needs service?', a: 'Common warning signs include: slow drains throughout the home, gurgling sounds in pipes, sewage odors inside or outside, wet or soggy areas near the drain field, unusually lush green grass over the septic tank area, and sewage backing up into toilets or drains.' },
  { q: 'How much does septic pumping cost?', a: 'Septic pumping typically costs $300–$600 for a standard residential tank. Pricing depends on tank size, accessibility, and your location. We provide free, no-obligation quotes before any work begins — no surprises on your invoice.' },
  { q: 'Do I need to be home during the service?', a: "For most standard services, you don't need to be home, but you do need to know the location of your tank access lid. If you're unsure where your tank is, we can locate it for a small fee. We always communicate with you before and after every visit." },
  { q: 'What should I avoid putting in my septic system?', a: 'Avoid flushing anything other than human waste and toilet paper. Harmful items include wipes (even "flushable" ones), feminine products, cotton balls, medications, cooking grease, coffee grounds, and harsh chemical cleaners. These can damage your system and increase pumping frequency.' },
  { q: 'Do you offer inspections for home purchases?', a: 'Absolutely. We perform thorough pre-purchase septic inspections and provide detailed written reports within 24 hours. We can identify existing problems, estimate remaining system life, and give you negotiating leverage or peace of mind before closing.' },
  { q: 'How quickly can you respond to an emergency?', a: 'Our emergency team is available 24/7 and typically arrives within 1–2 hours of your call. We understand septic emergencies don\'t follow business hours, and we charge no extra after-hours fees for emergency dispatch.' },
];

export function FAQBlock({ attrs }: BlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const sectionLabel = (attrs.sectionLabel as string) ?? 'FAQ';
  const headline = (attrs.headline as string) ?? 'Frequently Asked Questions';
  const subtext =
    (attrs.subtext as string) ??
    "Can't find the answer you're looking for? Give us a call or send us a message.";
  const phone = (attrs.phone as string) ?? '(555) 123-4567';
  const email = (attrs.email as string) ?? 'info@septicmasters.com';
  const faqs = (attrs.faqs as FAQ[]) ?? DEFAULT_FAQS;

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#1E7A45]/10 text-[#1E7A45] text-sm mb-4 font-bold">
                {sectionLabel}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#0B2545] mb-6"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }}
            >
              {headline.includes('Questions') ? (
                <>
                  Frequently Asked{' '}
                  <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #1E7A45, #25A55F)' }}>
                    Questions
                  </span>
                </>
              ) : headline}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#4A5568] text-lg mb-8"
            >
              {subtext}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }}>
              <a
                href={`tel:+1${phone.replace(/\D/g, '')}`}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-[#0B2545] text-white hover:bg-[#1E3A5F] transition-all font-bold"
              >
                Call Us Now
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 p-6 rounded-2xl bg-[#F7F9F8] border border-[#E2E8F0]"
            >
              <div className="text-[#0B2545] mb-2 font-bold">Still have questions?</div>
              <div className="text-[#718096] text-sm mb-4">Our experts are available Mon–Sat 7am–7pm, and 24/7 for emergencies.</div>
              <div className="flex flex-col gap-2">
                <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="text-[#1E7A45] text-sm font-semibold">📞 {phone}</a>
                <a href={`mailto:${email}`} className="text-[#1E7A45] text-sm font-semibold">✉️ {email}</a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-3"
          >
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${isOpen ? 'border-[#25A55F]/50 shadow-md shadow-green-100/50' : 'border-[#E2E8F0] hover:border-[#25A55F]/40'}`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 ${isOpen ? 'bg-[#F0FBF5]' : 'hover:bg-[#F7F9F8]'}`}
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`transition-colors duration-200 ${isOpen ? 'text-[#1E7A45]' : 'text-[#0B2545]'}`}
                      style={{ fontWeight: 600, fontSize: '0.95rem' }}
                    >
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${isOpen ? 'bg-[#1E7A45]' : 'bg-[#E2E8F0]'}`}>
                      {isOpen ? <Minus className="w-3.5 h-3.5 text-white" /> : <Plus className="w-3.5 h-3.5 text-[#718096]" />}
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="px-6 pb-5 text-[#4A5568] text-sm leading-relaxed bg-[#F0FBF5]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
