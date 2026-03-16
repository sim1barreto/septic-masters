import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Austin, TX",
    rating: 5,
    date: "March 2026",
    text: "Septic Masters showed up within 2 hours of my call and fixed our backed-up system same day. The technician was professional, explained everything clearly, and the price was exactly what they quoted. Highly recommend!",
    initials: "SM",
    color: "#25A55F",
  },
  {
    name: "David Rodriguez",
    location: "Round Rock, TX",
    rating: 5,
    date: "February 2026",
    text: "Used them for a pre-purchase inspection on a home we were buying. They found a problem the seller didn't disclose and saved us from a very expensive mistake. Thorough, honest, and professional.",
    initials: "DR",
    color: "#4FD4A4",
  },
  {
    name: "Jennifer Park",
    location: "Cedar Park, TX",
    rating: 5,
    date: "February 2026",
    text: "Best experience I've had with any home service company. They arrived on time, kept my yard clean, and the price was fair. Will definitely use Septic Masters for all future maintenance.",
    initials: "JP",
    color: "#4FD4A4",
  },
  {
    name: "Marcus Thompson",
    location: "Georgetown, TX",
    rating: 5,
    date: "January 2026",
    text: "Called at 10pm for an emergency backup. They sent someone out within an hour and a half. The team was courteous and got everything working before midnight. Worth every penny for the peace of mind.",
    initials: "MT",
    color: "#1E7A45",
  },
  {
    name: "Linda Chen",
    location: "Pflugerville, TX",
    rating: 5,
    date: "January 2026",
    text: "Got three quotes for a new installation. Septic Masters was competitive in price and far ahead on professionalism. The installation was completed in two days, passed inspection first try. Very happy.",
    initials: "LC",
    color: "#F4C542",
  },
  {
    name: "Robert & Kim Walsh",
    location: "Leander, TX",
    rating: 5,
    date: "December 2025",
    text: "We've used Septic Masters for 8 years. They've done everything from routine pumping to replacing our drain field. Consistent quality, fair prices, and they treat you like family. Our only call for septic service.",
    initials: "RW",
    color: "#25A55F",
  },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const scroll = (dir: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const cardWidth = card ? card.offsetWidth + 24 : 320; // 24 = gap-6
    track.scrollBy({ left: dir === "next" ? cardWidth : -cardWidth, behavior: "smooth" });
  };

  return (
    <section className="py-24 lg:py-32 bg-[#F7F9F8] overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full bg-[#1E7A45]/10 text-[#1E7A45] text-sm mb-4"
                style={{ fontWeight: 700 }}
              >
                Customer Reviews
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#0B2545]"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              What Our Customers{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #1E7A45, #25A55F)" }}
              >
                Are Saying
              </span>
            </motion.h2>
          </div>

          {/* Rating + Nav */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 mr-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
              <span className="text-[#0B2545] ml-2" style={{ fontWeight: 700 }}>4.9</span>
              <span className="text-[#718096] text-sm">· 500+ reviews</span>
            </div>
            <button
              onClick={() => scroll("prev")}
              aria-label="Previous testimonials"
              className="w-12 h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center hover:bg-[#0B2545] hover:border-[#0B2545] transition-all group"
            >
              <ChevronLeft className="w-5 h-5 text-[#0B2545] group-hover:text-white" />
            </button>
            <button
              onClick={() => scroll("next")}
              aria-label="Next testimonials"
              className="w-12 h-12 rounded-full bg-[#0B2545] flex items-center justify-center hover:bg-[#1E3A5F] transition-all"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Carousel track */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
              >
                <div className="h-full p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  {/* Quote icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: `${t.color}15` }}
                  >
                    <Quote className="w-5 h-5" style={{ color: t.color }} />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-[#4A5568] leading-relaxed flex-1 mb-6 italic">
                    "{t.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[#E2E8F0]">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${t.color}, ${t.color}99)`,
                        fontWeight: 700,
                      }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-[#0B2545] text-sm" style={{ fontWeight: 700 }}>
                        {t.name}
                      </div>
                      <div className="text-[#718096] text-xs">
                        {t.location} · {t.date}
                      </div>
                    </div>
                    <div className="ml-auto">
                      <div
                        className="text-xs px-2 py-1 rounded-full bg-[#F7F9F8] text-[#718096]"
                        style={{ fontWeight: 500 }}
                      >
                        Google Review
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
