import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const NEIGHBORHOOD_IMG =
  "https://images.unsplash.com/photo-1758304480344-f8d0de5f4f25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJ1cmJhbiUyMG5laWdoYm9yaG9vZCUyMGhvdXNlcyUyMGFlcmlhbCUyMHZpZXd8ZW58MXx8fHwxNzczMzc1MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080";

const areas = [
  { name: "Austin", primary: true },
  { name: "Round Rock", primary: true },
  { name: "Cedar Park", primary: true },
  { name: "Georgetown", primary: true },
  { name: "Pflugerville", primary: false },
  { name: "Leander", primary: false },
  { name: "Kyle", primary: false },
  { name: "Buda", primary: false },
  { name: "Bastrop", primary: false },
  { name: "Dripping Springs", primary: false },
  { name: "Wimberley", primary: false },
  { name: "San Marcos", primary: false },
];

export function ServiceAreaMap() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-[#0B2545] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#25A55F] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#4FD4A4] rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-sm mb-4"
                style={{ fontWeight: 700 }}
              >
                Service Areas
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white mb-5"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Proudly Serving{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #25A55F, #4FD4A4)" }}
              >
                Central Texas
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/60 text-lg mb-8"
            >
              We serve Austin and all surrounding communities within a 50-mile radius.
              Not sure if we cover your area? Just give us a call!
            </motion.p>

            {/* Area grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10"
            >
              {areas.map((area, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-colors ${
                    area.primary
                      ? "bg-[#1E7A45]/30 border border-[#25A55F]/30"
                      : "bg-white/5 border border-white/10"
                  }`}
                >
                  <MapPin
                    className="w-3.5 h-3.5 flex-shrink-0"
                    style={{ color: area.primary ? "#25A55F" : "#718096" }}
                  />
                  <span
                    className="text-sm"
                    style={{
                      color: area.primary ? "#fff" : "rgba(255,255,255,0.65)",
                      fontWeight: area.primary ? 600 : 500,
                    }}
                  >
                    {area.name}, TX
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link
                to="/service-areas"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#25A55F] text-white hover:bg-[#1E7A45] transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-900/30"
                style={{ fontWeight: 700 }}
              >
                View All Service Areas
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src={NEIGHBORHOOD_IMG}
                alt="Central Texas neighborhoods we serve"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/50 to-transparent" />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white text-sm mb-0.5" style={{ fontWeight: 700 }}>
                      50+ Mile Coverage Area
                    </div>
                    <div className="text-white/60 text-xs">Serving all of Central Texas</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#25A55F] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-40 h-40 bg-[#25A55F]/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}