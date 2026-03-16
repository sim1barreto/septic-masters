import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Shield, Award, Heart, Leaf, Users, Star,
  CheckCircle, ArrowRight, Phone,
} from "lucide-react";

const TEAM_IMG = "https://images.unsplash.com/photo-1742535035610-c5865df05858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzZXJ2aWNlJTIwdGVhbSUyMHdvcmtlcnMlMjB1bmlmb3Jtc3xlbnwxfHx8fDE3NzMzNzUzNDd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const CUSTOMER_IMG = "https://images.unsplash.com/photo-1762613875432-1b80b1682905?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGhvbWVvd25lciUyMHNhdGlzZmllZCUyMGN1c3RvbWVyJTIwc21pbGluZ3xlbnwxfHx8fDE3NzMzMDE2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080";
const LAWN_IMG = "https://images.unsplash.com/photo-1765258179774-5fd339bc01a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGxhbmRzY2FwZSUyMGxhd24lMjBiYWNreWFyZCUyMHN1YnVyYmFuJTIwaG9tZXxlbnwxfHx8fDE3NzMzNzUzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080";

const values = [
  { icon: Shield, title: "Integrity", description: "We tell you what you need, not what makes us the most money.", color: "#25A55F" },
  { icon: Award, title: "Excellence", description: "We hold ourselves to the highest standard in every job, big or small.", color: "#4FD4A4" },
  { icon: Heart, title: "Care", description: "We treat your home and family with the same respect as our own.", color: "#1E7A45" },
  { icon: Leaf, title: "Sustainability", description: "Environmentally responsible practices in everything we do.", color: "#4FD4A4" },
];

const team = [
  { name: "Mike Torres", role: "Owner & Master Technician", experience: "15 years", initials: "MT", color: "#25A55F" },
  { name: "Carlos Rivera", role: "Senior Technician", experience: "10 years", initials: "CR", color: "#4FD4A4" },
  { name: "Jake Williams", role: "Installation Specialist", experience: "8 years", initials: "JW", color: "#4FD4A4" },
  { name: "Amy Chen", role: "Office Manager", experience: "5 years", initials: "AC", color: "#1E7A45" },
];

const milestones = [
  { year: "2009", event: "Founded by Mike Torres with one truck and a commitment to honest service" },
  { year: "2013", event: "Expanded to 3 trucks and added drain field restoration services" },
  { year: "2016", event: "Achieved BBB A+ rating and won Austin's Best Service Provider award" },
  { year: "2019", event: "Added aerobic system installation and commercial grease trap services" },
  { year: "2022", event: "Reached 500+ customers served with a 4.9-star average rating" },
  { year: "2025", event: "Opened second service hub to better serve Georgetown & surrounding areas" },
];

export default function About() {
  return (
    <div className="bg-[#F7F9F8]">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: "#0B2545" }}>
        <div className="absolute inset-0">
          <img src={LAWN_IMG} alt="Our service area" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545] to-[#0B2545]/80" />
        </div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)", backgroundSize: "40px 40px" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-sm mb-4" style={{ fontWeight: 700 }}>About Us</span>
            <h1 className="text-white mb-5" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Built on Trust,<br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #25A55F, #4FD4A4)" }}>
                Driven by Integrity
              </span>
            </h1>
            <p className="text-white/65 text-xl max-w-2xl">
              Septic Masters has been Central Texas's most trusted septic service company since 2009. We're a family-owned business that believes in doing the job right, every time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#1E7A45]/10 text-[#1E7A45] text-sm mb-4" style={{ fontWeight: 700 }}>Our Story</span>
              <h2 className="text-[#0B2545] mb-6" style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1.15 }}>
                From One Truck to Central Texas's{" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #1E7A45, #25A55F)" }}>
                  Most Trusted Team
                </span>
              </h2>
              <div className="space-y-5 text-[#4A5568] leading-relaxed">
                <p>
                  In 2009, Mike Torres started Septic Masters with a single truck, a state license, and a frustration with how homeowners were being treated by other septic companies — overcharged, underinformed, and left without real solutions.
                </p>
                <p>
                  His simple philosophy: explain the problem clearly, do the work right, charge a fair price, and stand behind every job. Word spread fast. Within five years, we had a full team and were the top-rated septic company in Austin.
                </p>
                <p>
                  Today, Septic Masters serves hundreds of families across Central Texas. We've grown, but our values haven't changed. Every call is answered by a real person. Every job is done by a certified technician. Every customer gets the same honest service that built our reputation.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#0B2545] text-white hover:bg-[#1E3A5F] transition-all hover:scale-105" style={{ fontWeight: 700 }}>
                  Work With Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-square shadow-2xl">
                <img src={TEAM_IMG} alt="Our team" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                  <div className="flex-1 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                    <div className="text-white" style={{ fontWeight: 800, fontSize: "1.8rem" }}>15+</div>
                    <div className="text-white/70 text-xs">Years in business</div>
                  </div>
                  <div className="flex-1 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                    <div className="text-white" style={{ fontWeight: 800, fontSize: "1.8rem" }}>500+</div>
                    <div className="text-white/70 text-xs">Customers served</div>
                  </div>
                  <div className="flex-1 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                    <div className="text-white" style={{ fontWeight: 800, fontSize: "1.8rem" }}>4.9★</div>
                    <div className="text-white/70 text-xs">Average rating</div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-[#1E7A45]/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{ background: "#F7F9F8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1E7A45]/10 text-[#1E7A45] text-sm mb-4" style={{ fontWeight: 700 }}>Our Values</span>
            <h2 className="text-[#0B2545]" style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              What We Stand For
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-[#E2E8F0] text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: `${v.color}15`, border: `1px solid ${v.color}30` }}>
                  <v.icon className="w-6 h-6" style={{ color: v.color }} />
                </div>
                <h3 className="text-[#0B2545] mb-3" style={{ fontWeight: 700, fontSize: "1.1rem" }}>{v.title}</h3>
                <p className="text-[#718096] text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24" style={{ background: "linear-gradient(135deg, #0B2545 0%, #0D2E1C 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-sm mb-4" style={{ fontWeight: 700 }}>Our History</span>
            <h2 className="text-white" style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              15 Years of{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #25A55F, #4FD4A4)" }}>
                Growth & Service
              </span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#25A55F] to-[#1E7A45]" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-8 pl-16 relative"
                >
                  <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-[#0B2545] border-2 border-[#25A55F] flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#25A55F]" />
                  </div>
                  <div>
                    <div className="text-[#25A55F] text-sm mb-1" style={{ fontWeight: 700 }}>{m.year}</div>
                    <div className="text-white/80 leading-relaxed">{m.event}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1E7A45]/10 text-[#1E7A45] text-sm mb-4" style={{ fontWeight: 700 }}>Meet the Team</span>
            <h2 className="text-[#0B2545]" style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              The Experts Behind Every Job
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-[#F7F9F8] border border-[#E2E8F0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 text-white text-xl"
                  style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}99)`, fontWeight: 800 }}
                >
                  {member.initials}
                </div>
                <h3 className="text-[#0B2545] mb-1" style={{ fontWeight: 700 }}>{member.name}</h3>
                <div className="text-[#718096] text-sm mb-2">{member.role}</div>
                <div className="flex items-center justify-center gap-1.5 text-xs" style={{ color: member.color, fontWeight: 600 }}>
                  <Award className="w-3.5 h-3.5" />
                  {member.experience} experience
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer photo section */}
      <section className="py-24 bg-[#F7F9F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#1E7A45]/10 text-[#1E7A45] text-sm mb-4" style={{ fontWeight: 700 }}>Our Promise</span>
              <h2 className="text-[#0B2545] mb-6" style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1.15 }}>
                Your Satisfaction Is{" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #1E7A45, #25A55F)" }}>
                  Our Guarantee
                </span>
              </h2>
              <p className="text-[#4A5568] leading-relaxed mb-8 text-lg">
                We're not done until you're completely satisfied. Every service is backed by our satisfaction guarantee — if something isn't right, we'll fix it at no charge.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "100% satisfaction or we return free of charge",
                  "Written warranty on all labor and parts",
                  "Transparent pricing — no hidden fees ever",
                  "Real people answer every call",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#25A55F] flex-shrink-0" />
                    <span className="text-[#4A5568]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <a href="tel:+15551234567" className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#BE2026] text-white hover:bg-[#A0181F] transition-colors" style={{ fontWeight: 700 }}>
                  <Phone className="w-5 h-5" />
                  Call Us Today
                </a>
                <Link to="/contact" className="flex items-center gap-3 px-8 py-4 rounded-2xl border border-[#0B2545]/20 text-[#0B2545] hover:bg-[#0B2545]/5 transition-colors" style={{ fontWeight: 600 }}>
                  Get a Quote
                </Link>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img src={CUSTOMER_IMG} alt="Happy customers" className="w-full h-full object-cover" />
              <div className="absolute bottom-6 right-6 flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/95 shadow-xl">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-[#0B2545] text-sm" style={{ fontWeight: 700 }}>500+ Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}