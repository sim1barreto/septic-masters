import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { Phone, Mail, MapPin, Clock, CheckCircle, Send, Zap } from "lucide-react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  preferredTime: string;
  message: string;
};

const services = [
  "Septic Tank Pumping",
  "Septic Inspection",
  "New Installation",
  "Septic Repair",
  "Drain Field Service",
  "Emergency Service",
  "Aerobic System",
  "Grease Trap Cleaning",
  "General Inquiry",
];

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["(555) 123-4567", "Available 24/7 for emergencies"],
    href: "tel:+15551234567",
    color: "#25A55F",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@septicmasters.com", "Response within 1 business hour"],
    href: "mailto:info@septicmasters.com",
    color: "#4FD4A4",
  },
  {
    icon: MapPin,
    title: "Service Area",
    lines: ["Austin & Central Texas", "50+ mile radius from Austin"],
    color: "#4FD4A4",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon–Sat: 7:00am – 7:00pm", "24/7 Emergency Available"],
    color: "#1E7A45",
  },
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Contact form:", data);
  };

  return (
    <div className="bg-[#F7F9F8]">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0B2545] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#1E7A45]/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-sm mb-4" style={{ fontWeight: 700 }}>Contact Us</span>
            <h1 className="text-white mb-5" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Let's Talk About<br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #25A55F, #4FD4A4)" }}>
                Your Septic System
              </span>
            </h1>
            <p className="text-white/65 text-xl max-w-2xl mx-auto">
              Get a free quote, schedule a service, or ask us anything. We respond fast and are always happy to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact info row */}
      <section className="py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${info.color}15`, border: `1px solid ${info.color}30` }}>
                  <info.icon className="w-5 h-5" style={{ color: info.color }} />
                </div>
                <div>
                  <div className="text-[#718096] text-xs uppercase tracking-widest mb-1" style={{ fontWeight: 600 }}>{info.title}</div>
                  {info.href ? (
                    <a href={info.href} className="text-[#0B2545] hover:text-[#1E7A45] transition-colors block text-sm" style={{ fontWeight: 700 }}>
                      {info.lines[0]}
                    </a>
                  ) : (
                    <div className="text-[#0B2545] text-sm" style={{ fontWeight: 700 }}>{info.lines[0]}</div>
                  )}
                  <div className="text-[#A0AEC0] text-xs mt-0.5">{info.lines[1]}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main form area */}
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
                <h2 className="text-[#0B2545] mb-2" style={{ fontWeight: 800, fontSize: "1.6rem" }}>
                  Request a Quote or Service
                </h2>
                <p className="text-[#718096] text-sm mb-8">
                  Fill out the form and we'll get back to you within 1 hour during business hours.
                </p>

                {isSubmitSuccessful ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-20 h-20 rounded-full bg-[#1E7A45]/10 flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-[#1E7A45]" />
                    </div>
                    <h3 className="text-[#0B2545] mb-3" style={{ fontWeight: 800, fontSize: "1.5rem" }}>
                      Message Sent!
                    </h3>
                    <p className="text-[#4A5568] mb-6 max-w-md">
                      Thank you for contacting Septic Masters! We'll reach out within 1 hour during business hours. For urgent needs, call us directly.
                    </p>
                    <button onClick={() => reset()} className="px-8 py-3.5 rounded-xl bg-[#0B2545] text-white" style={{ fontWeight: 700 }}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[#0B2545] text-sm mb-2" style={{ fontWeight: 600 }}>Full Name *</label>
                        <input {...register("name", { required: "Name is required" })}
                          placeholder="John Smith"
                          className={`w-full px-4 py-3 rounded-xl bg-[#F7F9F8] border text-[#0B2545] text-sm placeholder:text-[#A0AEC0] focus:outline-none focus:ring-2 focus:ring-[#25A55F]/40 transition-all ${errors.name ? "border-red-400" : "border-[#E2E8F0] focus:border-[#25A55F]"}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-[#0B2545] text-sm mb-2" style={{ fontWeight: 600 }}>Phone Number *</label>
                        <input {...register("phone", { required: "Phone is required" })}
                          type="tel" placeholder="(555) 000-0000"
                          className={`w-full px-4 py-3 rounded-xl bg-[#F7F9F8] border text-[#0B2545] text-sm placeholder:text-[#A0AEC0] focus:outline-none focus:ring-2 focus:ring-[#25A55F]/40 transition-all ${errors.phone ? "border-red-400" : "border-[#E2E8F0] focus:border-[#25A55F]"}`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#0B2545] text-sm mb-2" style={{ fontWeight: 600 }}>Email Address</label>
                      <input {...register("email")} type="email" placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F9F8] border border-[#E2E8F0] focus:border-[#25A55F] text-[#0B2545] text-sm placeholder:text-[#A0AEC0] focus:outline-none focus:ring-2 focus:ring-[#25A55F]/40 transition-all"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[#0B2545] text-sm mb-2" style={{ fontWeight: 600 }}>Service Needed *</label>
                        <select {...register("service", { required: "Please select a service" })}
                          className={`w-full px-4 py-3 rounded-xl bg-[#F7F9F8] border text-[#0B2545] text-sm focus:outline-none focus:ring-2 focus:ring-[#25A55F]/40 transition-all appearance-none cursor-pointer ${errors.service ? "border-red-400" : "border-[#E2E8F0] focus:border-[#25A55F]"}`}
                        >
                          <option value="">Select a service...</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                        {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                      </div>
                      <div>
                        <label className="block text-[#0B2545] text-sm mb-2" style={{ fontWeight: 600 }}>Preferred Time</label>
                        <select {...register("preferredTime")}
                          className="w-full px-4 py-3 rounded-xl bg-[#F7F9F8] border border-[#E2E8F0] focus:border-[#25A55F] text-[#0B2545] text-sm focus:outline-none focus:ring-2 focus:ring-[#25A55F]/40 transition-all appearance-none cursor-pointer"
                        >
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
                      <label className="block text-[#0B2545] text-sm mb-2" style={{ fontWeight: 600 }}>Message or Details</label>
                      <textarea {...register("message")} rows={5}
                        placeholder="Describe your situation, any symptoms you've noticed, or questions you have..."
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F9F8] border border-[#E2E8F0] focus:border-[#25A55F] text-[#0B2545] text-sm placeholder:text-[#A0AEC0] focus:outline-none focus:ring-2 focus:ring-[#25A55F]/40 transition-all resize-none"
                      />
                    </div>

                    <button type="submit" disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-[#1E7A45] to-[#25A55F] text-white hover:opacity-95 transition-all hover:scale-[1.01] hover:shadow-xl hover:shadow-green-900/20 disabled:opacity-70"
                      style={{ fontWeight: 700, fontSize: "1rem" }}
                    >
                      {isSubmitting ? (
                        <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                      ) : (
                        <><Send className="w-5 h-5" />Send My Request</>
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
              {/* Emergency card */}
              <div className="p-6 rounded-2xl bg-[#BE2026] text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700 }}>24/7 Emergency?</div>
                    <div className="text-white/80 text-sm">Call us immediately</div>
                  </div>
                </div>
                <a href="tel:+15551234567" className="block w-full text-center py-3.5 rounded-xl bg-white text-[#BE2026] hover:bg-white/95 transition-colors" style={{ fontWeight: 800, fontSize: "1.1rem" }}>
                  (555) 123-4567
                </a>
              </div>

              {/* Why us */}
              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0]">
                <h3 className="text-[#0B2545] mb-4" style={{ fontWeight: 700 }}>Why Choose Septic Masters?</h3>
                {[
                  "Free estimates on all services",
                  "Same-day service available",
                  "Licensed & insured technicians",
                  "No hidden fees ever",
                  "Satisfaction guaranteed",
                  "Local & family-owned",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 mb-3 last:mb-0">
                    <CheckCircle className="w-4 h-4 text-[#25A55F] flex-shrink-0" />
                    <span className="text-[#4A5568] text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Service hours */}
              <div className="p-6 rounded-2xl bg-[#0B2545] text-white">
                <h3 className="text-white mb-4" style={{ fontWeight: 700 }}>Service Hours</h3>
                {[
                  { day: "Monday – Friday", hours: "7:00am – 7:00pm" },
                  { day: "Saturday", hours: "8:00am – 5:00pm" },
                  { day: "Sunday", hours: "Emergency Only" },
                ].map((row, i) => (
                  <div key={i} className={`flex justify-between py-2.5 ${i < 2 ? "border-b border-white/10" : ""}`}>
                    <span className="text-white/70 text-sm">{row.day}</span>
                    <span className="text-white text-sm" style={{ fontWeight: 600 }}>{row.hours}</span>
                  </div>
                ))}
                <div className="mt-4 px-4 py-3 rounded-xl bg-[#BE2026]/20 border border-[#BE2026]/30 text-center">
                  <span className="text-[#BE2026] text-sm" style={{ fontWeight: 700 }}>Emergency service available 24/7/365</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}