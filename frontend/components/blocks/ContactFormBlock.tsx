'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Zap } from 'lucide-react';
import type { Block } from '@/lib/blocks';

type HourRow = { day: string; hours: string };
type Props = { attrs: Record<string, unknown>; innerBlocks: Block[] };

export function ContactFormBlock({ attrs }: Props) {
  const {
    formTitle = 'Request a Quote or Service',
    formSubtext = "Fill out the form and we'll get back to you within 1 hour during business hours.",
    phone = '(555) 123-4567',
    email = 'info@septicmasters.com',
    serviceOptions = [],
    whyItems = [],
    hours = [],
  } = attrs as Record<string, unknown>;

  const serviceList = serviceOptions as string[];
  const whyList = whyItems as string[];
  const hoursList = hours as HourRow[];

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-[#E2E8F0]">
              <h2 className="text-[#0B2545] mb-2 text-2xl font-extrabold">{formTitle as string}</h2>
              <p className="text-[#718096] text-sm mb-8">{formSubtext as string}</p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#1E7A45]/10 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-[#1E7A45]" />
                  </div>
                  <h3 className="text-[#0B2545] mb-3 font-extrabold text-2xl">Message Sent!</h3>
                  <p className="text-[#4A5568] mb-6 max-w-md">
                    Thank you for contacting Septic Masters! We&apos;ll reach out within 1 hour during business hours.
                    For urgent needs, call us directly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3.5 rounded-xl bg-[#0B2545] text-white font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#0B2545] text-sm mb-2 font-semibold">Full Name *</label>
                      <input
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F9F8] border border-[#E2E8F0] focus:border-[#25A55F] text-[#0B2545] text-sm placeholder:text-[#A0AEC0] focus:outline-none focus:ring-2 focus:ring-[#25A55F]/40 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[#0B2545] text-sm mb-2 font-semibold">Phone Number *</label>
                      <input
                        required
                        type="tel"
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F9F8] border border-[#E2E8F0] focus:border-[#25A55F] text-[#0B2545] text-sm placeholder:text-[#A0AEC0] focus:outline-none focus:ring-2 focus:ring-[#25A55F]/40 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#0B2545] text-sm mb-2 font-semibold">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F9F8] border border-[#E2E8F0] focus:border-[#25A55F] text-[#0B2545] text-sm placeholder:text-[#A0AEC0] focus:outline-none focus:ring-2 focus:ring-[#25A55F]/40 transition-all"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#0B2545] text-sm mb-2 font-semibold">Service Needed *</label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F9F8] border border-[#E2E8F0] focus:border-[#25A55F] text-[#0B2545] text-sm focus:outline-none focus:ring-2 focus:ring-[#25A55F]/40 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select a service...</option>
                        {serviceList.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#0B2545] text-sm mb-2 font-semibold">Preferred Time</label>
                      <select className="w-full px-4 py-3 rounded-xl bg-[#F7F9F8] border border-[#E2E8F0] focus:border-[#25A55F] text-[#0B2545] text-sm focus:outline-none focus:ring-2 focus:ring-[#25A55F]/40 transition-all appearance-none cursor-pointer">
                        <option value="">Any time works</option>
                        <option value="morning">Morning (7am–12pm)</option>
                        <option value="afternoon">Afternoon (12pm–5pm)</option>
                        <option value="evening">Evening (5pm–7pm)</option>
                        <option value="asap">As soon as possible</option>
                        <option value="emergency">Emergency – need help now</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#0B2545] text-sm mb-2 font-semibold">Message or Details</label>
                    <textarea
                      rows={5}
                      placeholder="Describe your situation, any symptoms you've noticed, or questions you have..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F9F8] border border-[#E2E8F0] focus:border-[#25A55F] text-[#0B2545] text-sm placeholder:text-[#A0AEC0] focus:outline-none focus:ring-2 focus:ring-[#25A55F]/40 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-[#1E7A45] to-[#25A55F] text-white hover:opacity-95 transition-all hover:scale-[1.01] hover:shadow-xl hover:shadow-green-900/20 disabled:opacity-70 font-bold text-base"
                  >
                    {sending ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send My Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-5"
          >
            <div className="p-6 rounded-2xl bg-[#BE2026] text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold">24/7 Emergency?</div>
                  <div className="text-white/80 text-sm">Call us immediately</div>
                </div>
              </div>
              <a
                href={`tel:+1${(phone as string).replace(/\D/g, '')}`}
                className="block w-full text-center py-3.5 rounded-xl bg-white text-[#BE2026] hover:bg-white/95 transition-colors font-extrabold text-lg"
              >
                {phone as string}
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0]">
              <h3 className="text-[#0B2545] mb-4 font-bold">Why Choose Septic Masters?</h3>
              {whyList.map((item, i) => (
                <div key={i} className="flex items-center gap-3 mb-3 last:mb-0">
                  <CheckCircle className="w-4 h-4 text-[#25A55F] flex-shrink-0" />
                  <span className="text-[#4A5568] text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-[#0B2545] text-white">
              <h3 className="text-white mb-4 font-bold">Service Hours</h3>
              {hoursList.map((row, i) => (
                <div
                  key={i}
                  className={`flex justify-between py-2.5 ${i < hoursList.length - 1 ? 'border-b border-white/10' : ''}`}
                >
                  <span className="text-white/70 text-sm">{row.day}</span>
                  <span className="text-white text-sm font-semibold">{row.hours}</span>
                </div>
              ))}
              <div className="mt-4 px-4 py-3 rounded-xl bg-[#BE2026]/20 border border-[#BE2026]/30 text-center">
                <span className="text-[#BE2026] text-sm font-bold">Emergency service available 24/7/365</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
