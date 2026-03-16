import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Clock,
  Shield,
  Award,
  DollarSign,
  Users,
  Leaf,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";

const TECH_IMG =
  "https://images.unsplash.com/photo-1635221798248-8a3452ad07cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmluZyUyMHRlY2huaWNpYW4lMjBob21lJTIwc2VydmljZSUyMHByb2Zlc3Npb25hbCUyMHdvcmtlcnxlbnwxfHx8fDE3NzMzNzUzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080";

const advantages = [
  {
    icon: Clock,
    title: "Fast Response Times",
    description: "We respond within 2 hours and offer same-day service for most jobs.",
    color: "#25A55F",
  },
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    description: "State-certified technicians. Your property and investment are fully protected.",
    color: "#1E7A45",
  },
  {
    icon: Award,
    title: "15+ Years of Expertise",
    description: "Deep local knowledge of Central Texas soil, regulations, and system types.",
    color: "#4FD4A4",
  },
  {
    icon: DollarSign,
    title: "Upfront, Honest Pricing",
    description: "No hidden fees. We provide clear estimates before any work begins.",
    color: "#4FD4A4",
  },
  {
    icon: Users,
    title: "Family-Owned Business",
    description: "We treat your home like our own. Real people who truly care about quality.",
    color: "#F4C542",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Methods",
    description: "Environmentally responsible disposal and green service practices throughout.",
    color: "#25A55F",
  },
];

export function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Image + overlay cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src={TECH_IMG}
                alt="Professional septic technician"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/60 to-transparent" />
            </div>

            {/* Floating card 1 - top left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -left-6 top-10 p-4 rounded-2xl bg-white shadow-xl border border-[#E2E8F0] max-w-[180px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-[#1E7A45]/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-[#1E7A45]" />
                </div>
                <div className="text-[#0B2545] text-xs" style={{ fontWeight: 800 }}>
                  Fully Licensed
                </div>
              </div>
              <div className="text-[#718096] text-xs">State-certified professionals</div>
            </motion.div>

            {/* Floating card 2 - bottom right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="absolute -right-6 bottom-16 p-4 rounded-2xl bg-[#0B2545] shadow-xl max-w-[200px]"
            >
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
              <div className="text-white text-sm leading-snug mb-2" style={{ fontWeight: 500 }}>
                "Best septic company in Austin. Fast, professional, and fair pricing!"
              </div>
              <div className="text-[#25A55F] text-xs" style={{ fontWeight: 600 }}>
                — Sarah M., Austin TX
              </div>
            </motion.div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute left-1/2 -translate-x-1/2 -bottom-8 px-6 py-3 rounded-2xl bg-[#BE2026] shadow-xl flex items-center gap-3"
            >
              <Award className="w-5 h-5 text-white" />
              <div className="text-white text-sm" style={{ fontWeight: 700 }}>
                BBB A+ Rated Business
              </div>
            </motion.div>

            {/* Green background blob */}
            <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-[#1E7A45]/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full bg-[#1E7A45]/10 text-[#1E7A45] text-sm mb-4"
                style={{ fontWeight: 700 }}
              >
                Why Choose Us
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#0B2545] mb-5"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              We're Not Just{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #1E7A45, #25A55F)" }}
              >
                Another Contractor
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#4A5568] text-lg mb-10"
            >
              We've built our reputation on trust, reliability, and exceptional service.
              When you choose Septic Masters, you're choosing a partner, not just a provider.
            </motion.p>

            {/* Advantages grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {advantages.map((adv, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                  className="group flex gap-4 p-4 rounded-xl hover:bg-[#F7F9F8] transition-colors"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{
                      background: `${adv.color}15`,
                      border: `1px solid ${adv.color}30`,
                    }}
                  >
                    <adv.icon className="w-4 h-4" style={{ color: adv.color }} />
                  </div>
                  <div>
                    <div
                      className="text-[#0B2545] text-sm mb-1"
                      style={{ fontWeight: 700 }}
                    >
                      {adv.title}
                    </div>
                    <div className="text-[#718096] text-sm leading-relaxed">
                      {adv.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.75 }}
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#0B2545] text-white hover:bg-[#1E3A5F] transition-all hover:scale-105 hover:shadow-xl"
                style={{ fontWeight: 700 }}
              >
                Learn Our Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}