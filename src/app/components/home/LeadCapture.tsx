import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Phone, Mail, MapPin, CheckCircle, Send } from "lucide-react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const serviceOptions = [
  "Septic Tank Pumping",
  "Septic Inspection",
  "New Installation",
  "Septic Repair",
  "Drain Field Service",
  "Emergency Service",
  "Aerobic System",
  "Grease Trap Cleaning",
  "Other",
];

const EMPTY_FORM: FormData = { name: "", phone: "", email: "", service: "", message: "" };

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.phone.trim()) errors.phone = "Phone is required";
  if (!data.service) errors.service = "Please select a service";
  return errors;
}

export function LeadCapture() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Form submitted:", form);
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl bg-[#F7F9F8] border text-[#0B2545] text-sm placeholder:text-[#A0AEC0] focus:outline-none focus:ring-2 focus:ring-[#25A55F]/40 transition-all ${
      errors[field] ? "border-red-400" : "border-[#E2E8F0] focus:border-[#25A55F]"
    }`;

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "#F7F9F8" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#25A55F]/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full bg-[#1E7A45]/10 text-[#1E7A45] text-sm mb-4"
              style={{ fontWeight: 700 }}
            >
              Get a Free Quote
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#0B2545] mb-4"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Ready to Get Started?{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #1E7A45, #25A55F)" }}
            >
              We're Ready Too.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#4A5568] text-lg"
          >
            Fill out the form and we'll get back to you within 1 hour during business hours,
            or call us for an immediate response.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-black/5 border border-[#E2E8F0]">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#1E7A45]/10 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-[#1E7A45]" />
                  </div>
                  <h3 className="text-[#0B2545] mb-3" style={{ fontWeight: 700, fontSize: "1.4rem" }}>
                    Request Received!
                  </h3>
                  <p className="text-[#4A5568] mb-6">
                    Thank you! We'll contact you within 1 hour during business hours.
                    For urgent needs, please call us directly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(EMPTY_FORM); }}
                    className="px-6 py-3 rounded-xl bg-[#0B2545] text-white"
                    style={{ fontWeight: 600 }}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#0B2545] text-sm mb-2" style={{ fontWeight: 600 }}>
                        Full Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className={inputClass("name")}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-[#0B2545] text-sm mb-2" style={{ fontWeight: 600 }}>
                        Phone Number *
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className={inputClass("phone")}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#0B2545] text-sm mb-2" style={{ fontWeight: 600 }}>
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={inputClass("email")}
                    />
                  </div>

                  <div>
                    <label className="block text-[#0B2545] text-sm mb-2" style={{ fontWeight: 600 }}>
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClass("service")} appearance-none cursor-pointer`}
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                  </div>

                  <div>
                    <label className="block text-[#0B2545] text-sm mb-2" style={{ fontWeight: 600 }}>
                      Tell us more (optional)
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe your situation or any specific concerns..."
                      className={`${inputClass("message")} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-[#1E7A45] to-[#25A55F] text-white hover:opacity-95 transition-all hover:scale-[1.01] hover:shadow-xl hover:shadow-green-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ fontWeight: 700, fontSize: "1rem" }}
                  >
                    {submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Get My Free Quote
                      </>
                    )}
                  </button>

                  <p className="text-[#A0AEC0] text-xs text-center">
                    No spam, ever. We'll only use your info to contact you about your request.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {[
              {
                icon: Phone,
                title: "Call Us Directly",
                value: "(555) 123-4567",
                sub: "Mon–Sat 7am–7pm · 24/7 Emergency",
                href: "tel:+15551234567",
                color: "#25A55F",
              },
              {
                icon: Mail,
                title: "Email Us",
                value: "info@septicmasters.com",
                sub: "We respond within 1 business hour",
                href: "mailto:info@septicmasters.com",
                color: "#4FD4A4",
              },
              {
                icon: MapPin,
                title: "Service Area",
                value: "Austin & Central Texas",
                sub: "50+ mile radius from Austin, TX",
                color: "#4FD4A4",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${card.color}15`, border: `1px solid ${card.color}30` }}
                >
                  <card.icon className="w-5 h-5" style={{ color: card.color }} />
                </div>
                <div>
                  <div
                    className="text-[#718096] text-xs uppercase tracking-wider mb-0.5"
                    style={{ fontWeight: 600 }}
                  >
                    {card.title}
                  </div>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="text-[#0B2545] hover:text-[#1E7A45] transition-colors block mb-1"
                      style={{ fontWeight: 700 }}
                    >
                      {card.value}
                    </a>
                  ) : (
                    <div className="text-[#0B2545] mb-1" style={{ fontWeight: 700 }}>
                      {card.value}
                    </div>
                  )}
                  <div className="text-[#A0AEC0] text-xs">{card.sub}</div>
                </div>
              </div>
            ))}

            {/* Guarantees */}
            <div className="p-6 rounded-2xl bg-[#0B2545] text-white">
              <div
                className="text-sm uppercase tracking-widest mb-4"
                style={{ fontWeight: 700, color: "#25A55F" }}
              >
                Our Guarantee
              </div>
              {[
                "Free estimate with every visit",
                "Price match guarantee",
                "Work backed by warranty",
                "Satisfaction or we come back free",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 mb-3 last:mb-0">
                  <CheckCircle className="w-4 h-4 text-[#25A55F] flex-shrink-0" />
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
