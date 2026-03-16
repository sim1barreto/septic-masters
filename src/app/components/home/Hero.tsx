import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Phone,
  Star,
  ArrowRight,
  Shield,
  Clock,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1586447950350-7424f8424fee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXB0aWMlMjBzZXJ2aWNlJTIwdHJ1Y2slMjBwcm9mZXNzaW9uYWwlMjB0ZWNobmljaWFufGVufDF8fHx8MTc3MzM3NTM0Nnww&ixlib=rb-4.1.0&q=80&w=1080";

const trustPoints = [
  "Licensed & Insured",
  "Same-Day Service",
  "Free Estimates",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Septic service professionals"
          className="w-full h-full object-cover object-center"
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/95 via-[#0B2545]/75 to-[#0B2545]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-transparent to-[#0B2545]/30" />
      </div>

      {/* Animated grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#1E7A45]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#BE2026]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#BE2026]/20 border border-[#BE2026]/40 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BE2026] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#BE2026]"></span>
              </span>
              <span className="text-red-300 text-sm" style={{ fontWeight: 700 }}>
                24/7 Emergency Service Available
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white mb-6"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Central Texas'{" "}
            <span className="relative">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #25A55F 0%, #4FD4A4 100%)",
                }}
              >
                #1 Septic
              </span>
            </span>{" "}
            <br />
            Service Experts
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-white/75 mb-10 max-w-xl"
            style={{ fontSize: "1.2rem", lineHeight: 1.6 }}
          >
            Professional septic pumping, inspections, and repairs. Fast, reliable, and
            done right the first time — backed by 15+ years of trusted service.
          </motion.p>

          {/* Trust points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            {trustPoints.map((point, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#25A55F]" />
                <span className="text-white/85 text-sm" style={{ fontWeight: 500 }}>
                  {point}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <a
              href="tel:+15551234567"
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#BE2026] hover:bg-[#A0181F] text-white transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/30"
              style={{ fontWeight: 700, fontSize: "1.05rem" }}
            >
              <Phone className="w-5 h-5 group-hover:animate-bounce" />
              Call Now: (555) 123-4567
            </a>
            <Link
              to="/contact"
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/25 text-white hover:bg-white/20 transition-all duration-200"
              style={{ fontWeight: 700, fontSize: "1.05rem" }}
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex items-center gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["bg-green-400", "bg-blue-400", "bg-orange-400", "bg-purple-400"].map(
                  (color, i) => (
                    <div
                      key={i}
                      className={`w-9 h-9 rounded-full ${color} border-2 border-[#0B2545] flex items-center justify-center text-white text-xs`}
                      style={{ fontWeight: 700 }}
                    >
                      {["JD", "SM", "RK", "AL"][i]}
                    </div>
                  )
                )}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="text-white/70 text-xs" style={{ fontWeight: 500 }}>
                  500+ happy customers
                </div>
              </div>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#25A55F]" />
              <span className="text-white/70 text-sm" style={{ fontWeight: 500 }}>
                Licensed & Insured
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating stat cards */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4"
      >
        {[
          { label: "Response Time", value: "< 2 Hours", icon: Clock, color: "#25A55F" },
          { label: "Satisfied Clients", value: "500+", icon: Star, color: "#4FD4A4" },
          { label: "Years Experience", value: "15+", icon: Shield, color: "#4FD4A4" },
        ].map(({ label, value, icon: Icon, color }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + i * 0.15 }}
            className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-colors"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${color}25`, border: `1px solid ${color}50` }}
            >
              <Icon className="w-4 h-4" style={{ color }} />
            </div>
            <div>
              <div className="text-white/50 text-xs uppercase tracking-wider" style={{ fontWeight: 600 }}>
                {label}
              </div>
              <div className="text-white text-base" style={{ fontWeight: 700 }}>
                {value}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase" style={{ fontWeight: 600 }}>
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-white/40" />
      </motion.div>
    </section>
  );
}