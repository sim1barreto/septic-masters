import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Droplets, Search, Wrench, Zap, Layers, AlertTriangle, Wind, Trash2,
  CheckCircle, ArrowRight, Phone, Clock, Star,
} from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";

const WORKER_IMG = "https://images.unsplash.com/photo-1620301015743-73bcc87c89e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1dGlsaXR5JTIwc2VydmljZSUyMHdvcmtlciUyMHVuZGVyZ3JvdW5kJTIwcGlwZSUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NzMzNzUzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080";

const services = [
  {
    icon: Droplets,
    title: "Septic Tank Pumping",
    color: "#25A55F",
    description: "Routine septic tank pumping is the single most important thing you can do to protect your system. We recommend pumping every 3–5 years depending on household size and tank capacity.",
    benefits: ["Prevents system backups and failure", "Extends system lifespan by years", "Protects your property investment", "Complies with state regulations"],
    price: "Starting at $299",
    time: "1–3 hours",
  },
  {
    icon: Search,
    title: "Septic Inspections",
    color: "#4FD4A4",
    description: "Our thorough septic inspections include a full system evaluation, tank pumping if needed, video inspection, and a detailed written report — essential for home purchases and routine maintenance.",
    benefits: ["Full written inspection report", "Photo and video documentation", "Required for real estate transactions", "Identify problems before they escalate"],
    price: "Starting at $199",
    time: "2–4 hours",
  },
  {
    icon: Layers,
    title: "New System Installations",
    color: "#4FD4A4",
    description: "Planning a new home or replacing a failed system? Our installation team handles everything — site evaluation, permit acquisition, excavation, system installation, and final inspection.",
    benefits: ["Permit handling included", "All system types available", "Engineered for your property", "Full warranty on installation"],
    price: "Custom quote required",
    time: "2–5 days",
  },
  {
    icon: Wrench,
    title: "Septic Repairs",
    color: "#1E7A45",
    description: "From broken pipes to failing pumps, our diagnostic team quickly identifies and fixes any septic system issue. We carry common parts on our trucks for same-day repairs whenever possible.",
    benefits: ["Same-day repairs available", "Transparent diagnosis and pricing", "Quality parts and workmanship", "All repairs under warranty"],
    price: "Starting at $149",
    time: "Varies by repair",
  },
  {
    icon: Wind,
    title: "Drain Field Services",
    color: "#F4C542",
    description: "A failing drain field doesn't always mean full replacement. Our restoration services can extend the life of your drain field at a fraction of the cost of a new system installation.",
    benefits: ["Drain field restoration available", "Save vs. full replacement", "Aeration and bio-treatment", "New installation if needed"],
    price: "Starting at $499",
    time: "1–3 days",
  },
  {
    icon: AlertTriangle,
    title: "24/7 Emergency Service",
    color: "#BE2026",
    description: "Septic emergencies don't wait for business hours. Our emergency team is on standby around the clock, ready to respond within 1–2 hours to sewage backups, overflows, and system failures.",
    benefits: ["1–2 hour average response time", "No after-hours surcharges", "Available 365 days a year", "Emergency repairs on-site"],
    price: "Call for emergency pricing",
    time: "1–2 hour response",
  },
  {
    icon: Zap,
    title: "Aerobic Systems",
    color: "#4FD4A4",
    description: "Aerobic treatment systems are ideal for smaller lots, poor soil conditions, or environmentally sensitive areas. We install, maintain, and repair all major aerobic system brands.",
    benefits: ["Installation on challenging properties", "Annual maintenance contracts", "State-required biannual inspections", "System upgrades available"],
    price: "Starting at $8,000 installed",
    time: "Varies by project",
  },
  {
    icon: Trash2,
    title: "Grease Trap Cleaning",
    color: "#25A55F",
    description: "Restaurants and food service businesses require regular grease trap maintenance to stay compliant and odor-free. We offer scheduled service plans with service certificates for inspectors.",
    benefits: ["Service certificates provided", "Flexible scheduling available", "All trap sizes serviced", "Commercial and residential"],
    price: "Starting at $199",
    time: "1–2 hours",
  },
];

const faqs = [
  { q: "How do I know if my septic tank needs pumping?", a: "Signs include slow drains, gurgling sounds, sewage odors, and wet spots near your tank. We also recommend pumping every 3–5 years as preventive maintenance." },
  { q: "What's included in a septic inspection?", a: "Our inspection includes tank pumping, component check, effluent quality test, drain field evaluation, and a detailed written report with photos delivered within 24 hours." },
  { q: "Do you offer service contracts?", a: "Yes! Our annual maintenance plans include scheduled pumping reminders, priority scheduling, and discounted rates for regular customers." },
];

export default function Services() {
  return (
    <div className="bg-[#F7F9F8]">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: "#0B2545" }}>
        <div className="absolute inset-0">
          <img src={WORKER_IMG} alt="Septic service" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545] via-[#0B2545]/90 to-[#0B2545]/70" />
        </div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-sm mb-4" style={{ fontWeight: 700 }}>
              Our Services
            </span>
            <h1 className="text-white mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Complete Septic Services<br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #25A55F, #4FD4A4)" }}>
                Done Right, Every Time
              </span>
            </h1>
            <p className="text-white/65 text-xl max-w-2xl">
              From routine pumping to complex installations, our certified team handles every aspect of your septic system with expertise and care.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { icon: Clock, text: "Same-day available" },
                { icon: Star, text: "500+ 5-star reviews" },
                { icon: CheckCircle, text: "Licensed & insured" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15">
                  <Icon className="w-4 h-4 text-[#25A55F]" />
                  <span className="text-white/80 text-sm" style={{ fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i % 3 * 0.1 }}
                className={`grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden bg-white shadow-sm border border-[#E2E8F0] hover:shadow-xl transition-shadow duration-300 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Left accent panel */}
                <div
                  className="lg:col-span-1 p-8 flex flex-col justify-between"
                  style={{ background: `linear-gradient(135deg, ${service.color}15, ${service.color}08)`, borderRight: `1px solid ${service.color}20` }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: `${service.color}20`, border: `1px solid ${service.color}30` }}
                  >
                    <service.icon className="w-7 h-7" style={{ color: service.color }} />
                  </div>
                  <div>
                    <div className="text-[#718096] text-xs uppercase tracking-widest mb-1" style={{ fontWeight: 600 }}>
                      Typical Cost
                    </div>
                    <div className="text-[#0B2545] text-sm mb-4" style={{ fontWeight: 700 }}>
                      {service.price}
                    </div>
                    <div className="text-[#718096] text-xs uppercase tracking-widest mb-1" style={{ fontWeight: 600 }}>
                      Service Time
                    </div>
                    <div className="text-[#0B2545] text-sm" style={{ fontWeight: 600 }}>
                      {service.time}
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="lg:col-span-3 p-8">
                  <h2 className="text-[#0B2545] mb-4" style={{ fontWeight: 800, fontSize: "1.4rem" }}>
                    {service.title}
                  </h2>
                  <p className="text-[#4A5568] leading-relaxed mb-6">
                    {service.description}
                  </p>
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
                    href="tel:+15551234567"
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-white text-sm transition-all hover:scale-105"
                    style={{ background: service.color, fontWeight: 700 }}
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#E2E8F0] text-[#0B2545] text-sm hover:bg-[#F7F9F8] transition-colors"
                    style={{ fontWeight: 600 }}
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0B2545]" style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
              Service FAQs
            </h2>
          </div>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <Accordion.Item key={i} value={`faq-${i}`} className="group border border-[#E2E8F0] rounded-2xl overflow-hidden bg-white">
                <Accordion.Trigger className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#F7F9F8] data-[state=open]:bg-[#F0FBF5] transition-colors">
                  <span className="text-[#0B2545] group-data-[state=open]:text-[#1E7A45] transition-colors text-sm" style={{ fontWeight: 600 }}>{faq.q}</span>
                  <div className="w-7 h-7 rounded-full bg-[#E2E8F0] group-data-[state=open]:bg-[#1E7A45] flex items-center justify-center flex-shrink-0 transition-colors">
                    <Plus className="w-3.5 h-3.5 text-[#718096] group-data-[state=open]:hidden" />
                    <Minus className="w-3.5 h-3.5 text-white hidden group-data-[state=open]:block" />
                  </div>
                </Accordion.Trigger>
                <Accordion.Content>
                  <div className="px-6 pb-5 text-[#4A5568] text-sm leading-relaxed bg-[#F0FBF5]">{faq.a}</div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0B2545 0%, #0D2E1C 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white mb-4" style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
            Ready to Schedule Service?
          </h2>
          <p className="text-white/60 text-lg mb-8">Most appointments available within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15551234567" className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#BE2026] text-white hover:bg-[#A0181F] transition-colors" style={{ fontWeight: 700 }}>
              <Phone className="w-5 h-5" />
              (555) 123-4567
            </a>
            <Link to="/contact" className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-white/20 text-white hover:bg-white/10 transition-colors" style={{ fontWeight: 600 }}>
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}