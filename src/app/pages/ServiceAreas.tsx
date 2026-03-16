import { motion } from "motion/react";
import { Link } from "react-router";
import { MapPin, Phone, CheckCircle, ArrowRight, Clock } from "lucide-react";

const NEIGHBORHOOD_IMG = "https://images.unsplash.com/photo-1758304480344-f8d0de5f4f25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJ1cmJhbiUyMG5laWdoYm9yaG9vZCUyMGhvdXNlcyUyMGFlcmlhbCUyMHZpZXd8ZW58MXx8fHwxNzczMzc1MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080";

const primaryAreas = [
  {
    city: "Austin",
    county: "Travis County",
    description: "Our home base. We serve all Austin neighborhoods and zip codes with priority scheduling.",
    services: ["Residential & Commercial", "Same-day service", "Emergency response < 1 hr"],
    color: "#25A55F",
  },
  {
    city: "Round Rock",
    county: "Williamson County",
    description: "One of our most active service zones. Full-service coverage for all Round Rock neighborhoods.",
    services: ["Same-day availability", "Full installation service", "Emergency response"],
    color: "#4FD4A4",
  },
  {
    city: "Cedar Park",
    county: "Williamson County",
    description: "Complete septic services for Cedar Park's growing residential communities.",
    services: ["Residential specialists", "Aerobic system experts", "Fast response times"],
    color: "#4FD4A4",
  },
  {
    city: "Georgetown",
    county: "Williamson County",
    description: "Serving Georgetown's established neighborhoods and new developments alike.",
    services: ["Historic district experience", "New construction", "All system types"],
    color: "#1E7A45",
  },
  {
    city: "Pflugerville",
    county: "Travis County",
    description: "Reliable septic services for Pflugerville's expanding suburban communities.",
    services: ["Suburban specialists", "Full-service coverage", "Emergency available"],
    color: "#F4C542",
  },
  {
    city: "Leander",
    county: "Williamson County",
    description: "Serving Leander's fast-growing communities with experienced local technicians.",
    services: ["New development experience", "Full installations", "Quick scheduling"],
    color: "#25A55F",
  },
];

const additionalAreas = [
  "Kyle, TX", "Buda, TX", "Bastrop, TX", "Dripping Springs, TX",
  "Wimberley, TX", "San Marcos, TX", "Liberty Hill, TX", "Hutto, TX",
  "Taylor, TX", "Elgin, TX", "Lakeway, TX", "Bee Cave, TX",
  "Manor, TX", "Sunset Valley, TX", "Rollingwood, TX", "West Lake Hills, TX",
];

export default function ServiceAreas() {
  return (
    <div className="bg-[#F7F9F8]">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: "#0B2545" }}>
        <div className="absolute inset-0">
          <img src={NEIGHBORHOOD_IMG} alt="Service areas" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545] via-[#0B2545]/90 to-[#0B2545]/60" />
        </div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-sm mb-4" style={{ fontWeight: 700 }}>Service Areas</span>
            <h1 className="text-white mb-5" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Serving All of<br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #25A55F, #4FD4A4)" }}>
                Central Texas
              </span>
            </h1>
            <p className="text-white/65 text-xl max-w-2xl">
              We serve Austin and surrounding communities within a 50-mile radius. Local experts who know the area, the soil, and the regulations.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { icon: MapPin, text: "50+ mile coverage radius" },
                { icon: Clock, text: "Fast response in all areas" },
                { icon: CheckCircle, text: "Local licensed technicians" },
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

      {/* Primary service areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1E7A45]/10 text-[#1E7A45] text-sm mb-4" style={{ fontWeight: 700 }}>Primary Coverage</span>
            <h2 className="text-[#0B2545]" style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              Our Core Service Cities
            </h2>
            <p className="text-[#4A5568] mt-3 text-lg max-w-2xl mx-auto">
              These areas receive our highest priority scheduling and fastest response times.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-[#F7F9F8] border border-[#E2E8F0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${area.color}15`, border: `1px solid ${area.color}30` }}>
                    <MapPin className="w-5 h-5" style={{ color: area.color }} />
                  </div>
                  <div>
                    <h3 className="text-[#0B2545]" style={{ fontWeight: 800, fontSize: "1.2rem" }}>{area.city}, TX</h3>
                    <div className="text-[#718096] text-sm">{area.county}</div>
                  </div>
                </div>

                <p className="text-[#4A5568] text-sm leading-relaxed mb-5">{area.description}</p>

                <div className="space-y-2 mb-6">
                  {area.services.map((service, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: area.color }} />
                      <span className="text-[#4A5568] text-xs">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a href="tel:+15551234567" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-white text-xs transition-all" style={{ background: area.color, fontWeight: 700 }}>
                    <Phone className="w-3.5 h-3.5" /> Call Now
                  </a>
                  <Link to="/contact" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#E2E8F0] text-[#0B2545] text-xs hover:bg-white transition-colors" style={{ fontWeight: 600 }}>
                    Get Quote <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional areas */}
      <section className="py-24 bg-[#F7F9F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#1E7A45]/10 text-[#1E7A45] text-sm mb-4" style={{ fontWeight: 700 }}>Extended Coverage</span>
              <h2 className="text-[#0B2545] mb-5" style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1.15 }}>
                Also Serving These{" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #1E7A45, #25A55F)" }}>Communities</span>
              </h2>
              <p className="text-[#4A5568] text-lg mb-8">
                Don't see your city listed? Call us — we likely serve your area or can accommodate your request with a small travel fee.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {additionalAreas.map((area, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E2E8F0]"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#25A55F] flex-shrink-0" />
                    <span className="text-[#4A5568] text-sm" style={{ fontWeight: 500 }}>{area}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="tel:+15551234567" className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#BE2026] text-white hover:bg-[#A0181F] transition-colors" style={{ fontWeight: 700 }}>
                  <Phone className="w-5 h-5" /> Check My Area
                </a>
                <Link to="/contact" className="flex items-center gap-3 px-8 py-4 rounded-2xl border border-[#0B2545]/20 text-[#0B2545] hover:bg-white transition-colors" style={{ fontWeight: 600 }}>
                  Request Service
                </Link>
              </div>
            </div>

            {/* Visual coverage indicator */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-[#0B2545] flex items-center justify-center overflow-hidden shadow-2xl">
                {/* Concentric circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[0.9, 0.7, 0.5, 0.3].map((scale, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full border border-[#25A55F]/20"
                      style={{
                        width: `${scale * 100}%`,
                        height: `${scale * 100}%`,
                        background: i === 3 ? `radial-gradient(circle, ${["#25A55F", "#1E7A45", "#0B2545", "transparent"][i]}30, transparent)` : "transparent",
                      }}
                    />
                  ))}
                </div>

                {/* Center dot - Austin */}
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full bg-[#BE2026] flex items-center justify-center shadow-lg shadow-red-900/40">
                    <MapPin className="w-8 h-8 text-white fill-white" />
                  </div>
                  <div className="text-white" style={{ fontWeight: 800 }}>Austin, TX</div>
                  <div className="text-white/50 text-sm">Service Hub</div>
                </div>

                {/* Floating city labels */}
                {[
                  { label: "Round Rock", top: "15%", left: "55%", color: "#25A55F" },
                  { label: "Cedar Park", top: "25%", left: "20%", color: "#4FD4A4" },
                  { label: "Georgetown", top: "8%", left: "45%", color: "#F4C542" },
                  { label: "Pflugerville", top: "40%", left: "72%", color: "#4FD4A4" },
                  { label: "Kyle", top: "72%", left: "55%", color: "#25A55F" },
                  { label: "Buda", top: "78%", left: "35%", color: "#4FD4A4" },
                  { label: "Leander", top: "18%", left: "28%", color: "#1E7A45" },
                ].map(({ label, top, left, color }, i) => (
                  <div
                    key={i}
                    className="absolute flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-sm"
                    style={{ top, left, transform: "translate(-50%, -50%)" }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                    <span className="text-white text-xs" style={{ fontWeight: 600 }}>{label}</span>
                  </div>
                ))}

                {/* 50-mile label */}
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                    <div className="w-2 h-2 rounded-full bg-[#25A55F]/60 border border-[#25A55F]" />
                    <span className="text-white/70 text-xs" style={{ fontWeight: 600 }}>~50 mile radius coverage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0B2545 0%, #0D2E1C 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white mb-4" style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
            Not Sure If We Cover Your Area?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Give us a call and we'll let you know right away. We serve more areas than listed above.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15551234567" className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#BE2026] text-white hover:bg-[#A0181F] transition-colors" style={{ fontWeight: 700 }}>
              <Phone className="w-5 h-5" /> (555) 123-4567
            </a>
            <Link to="/contact" className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-white/20 text-white hover:bg-white/10 transition-colors" style={{ fontWeight: 600 }}>
              Request Service Online <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}