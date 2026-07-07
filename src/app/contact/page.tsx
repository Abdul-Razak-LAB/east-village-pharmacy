"use client";

import Image from "next/image";
import { useState } from "react";

const contactItems = [
  { title: "Visit Us", body: ["2612 Holcom Bridge Road", "Suites 110", "Alpharetta, GA 30022"] },
  { title: "Call Us", body: ["(770) 744-2461"] },
  { title: "Email Us", body: ["Info@GreenLeafGA.onmicrosoft.com"] },
  { title: "Hours of Operation", body: ["Mon - Fri: 9:00 AM - 7:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"] },
];

const trustItems = [
  { title: "Trusted & Confidential", body: "Your privacy and health information are always protected." },
  { title: "Experienced Team", body: "Our pharmacists provide personalized care you deserve." },
  { title: "Personalized Care", body: "We understand your needs and craft the right solution." },
  { title: "Community Focused", body: "Proudly serving our neighborhood with care and dedication." },
];

const contactIcons: Record<string, React.ReactNode> = {
  "Visit Us": (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  "Call Us": (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 3h4l1.4 3.4-2.2 2.2a14 14 0 0 0 5.2 5.2l2.2-2.2L21 13v4c0 1.1-.9 2-2 2A16 16 0 0 1 5 5c0-1.1.9-2 2-2z" />
    </svg>
  ),
  "Email Us": (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "warning" | "error"; message: string } | null>(null);

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "We could not send your message right now.");
      }

      setFeedback({
        type: data.warning ? "warning" : "success",
        message: data.warning ?? "Thanks for reaching out. We’ll be in touch soon.",
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setFeedback({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="brand-shell flex-1">
      <main className="mx-auto w-full max-w-[1520px] px-4 py-6 sm:px-6 lg:px-10">
        <section className="grid overflow-hidden rounded-3xl border border-[var(--line)] bg-white lg:grid-cols-[1fr_1.25fr]">
          <div className="order-2 p-6 sm:p-8 lg:order-1 lg:p-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl leading-tight text-[var(--brand-green-900)] sm:text-5xl lg:text-6xl">
                Get in Touch with East Village Pharmacy
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
                Fast prescriptions. Clear answers. Trusted advice.
              </p>
              <p className="mt-3 text-base leading-7 text-slate-700">
                Our team is ready to help with medication counseling, dosage questions, stock checks, or health screenings. Call, WhatsApp, or visit — we’ll respond quickly and professionally.
              </p>
              <p className="mt-3 text-base leading-7 text-slate-700">
                Your health questions deserve real answers. Let’s talk.
              </p>
            </div>
          </div>

          <div className="order-1 relative min-h-[220px] sm:min-h-[300px] lg:order-2">
            <Image src="/assets/contactUs.png" alt="Contact visual" fill sizes="(max-width: 1024px) 100vw, 52vw" priority className="h-full w-full object-contain object-center" />
          </div>
        </section>

        <section className="mt-4 grid gap-4 lg:grid-cols-[0.9fr_1.1fr] xl:grid-cols-[0.85fr_1.15fr]">
          <article className="rounded-2xl border border-[var(--line)] bg-white p-5 sm:p-6">
            <h2 className="text-3xl text-[var(--brand-green-900)] sm:text-4xl">Send Us a Message</h2>
            <form className="mt-4 grid gap-3 sm:grid-cols-2" onSubmit={handleSubmit}>
              <input
                className="rounded-xl border border-[var(--line)] px-4 py-2.5"
                placeholder="Full Name *"
                required
                minLength={2}
                value={formData.fullName}
                onChange={(event) => handleChange("fullName", event.target.value)}
              />
              <input
                className="rounded-xl border border-[var(--line)] px-4 py-2.5"
                placeholder="Email Address *"
                type="email"
                required
                value={formData.email}
                onChange={(event) => handleChange("email", event.target.value)}
              />
              <input
                className="rounded-xl border border-[var(--line)] px-4 py-2.5 sm:col-span-2"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(event) => handleChange("phone", event.target.value)}
              />
              <textarea
                className="rounded-xl border border-[var(--line)] px-4 py-2.5 sm:col-span-2"
                placeholder="Your Message"
                rows={4}
                required
                minLength={10}
                value={formData.message}
                onChange={(event) => handleChange("message", event.target.value)}
              />
              <button className="btn-silentech-primary px-4 py-2.5 sm:col-span-2" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
            {feedback ? (
              <p
                className={`mt-3 text-sm ${
                  feedback.type === "success"
                    ? "text-emerald-700"
                    : feedback.type === "warning"
                      ? "text-amber-700"
                      : "text-red-600"
                }`}
              >
                {feedback.message}
              </p>
            ) : null}
            <p className="mt-3 text-sm text-slate-600">Your information is safe and secure. We respect your privacy.</p>
          </article>

          <article className="grid gap-4 rounded-2xl border border-[var(--line)] bg-white p-5 sm:p-6 lg:p-7">
            <div className="grid items-stretch gap-4 md:grid-cols-2">
              <div className="h-full rounded-2xl border border-[var(--line)] bg-[#f7f9f6] p-5 sm:p-6 lg:min-h-[600px]">
                <h2 className="text-3xl text-[var(--brand-green-900)] sm:text-4xl">Contact Information</h2>
                <div className="mt-4 space-y-4">
                  {contactItems.map((item) => (
                    <div key={item.title}>
                      {contactIcons[item.title] ? (
                        <div className="flex items-start gap-3">
                          <span className="mt-1 grid h-9 w-9 place-items-center rounded-full bg-[#e5eee5] text-[var(--brand-green-900)]">
                            {contactIcons[item.title]}
                          </span>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-base font-semibold text-[var(--brand-green-900)]">{item.title}</h3>
                            {item.body.map((line) => (
                              item.title === "Email Us" ? (
                                <a
                                  key={line}
                                  href="mailto:Info@GreenLeafGA.onmicrosoft.com?subject=East%20Village%20Pharmacy%20Inquiry&body=From%3A%20%0ATo%3A%20Info%40GreenLeafGA.onmicrosoft.com%0ASubject%3A%20East%20Village%20Pharmacy%20Inquiry%0A%0AMessage%3A%20"
                                  className="break-words text-[13px] leading-snug text-slate-700 underline-offset-2 hover:underline sm:text-sm"
                                >
                                  {line}
                                </a>
                              ) : (
                                <p key={line} className="break-words text-sm text-slate-700">
                                  {line}
                                </p>
                              )
                            ))}
                          </div>
                        </div>
                      ) : (
                        <>
                          <h3 className="text-xl font-bold text-[var(--brand-green-900)]">{item.title}</h3>
                          {item.body.map((line) => (
                            <p key={line} className="break-words text-base text-slate-700">
                              {line}
                            </p>
                          ))}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex h-full min-h-[360px] flex-col rounded-2xl border border-[var(--line)] bg-[#e6ece4] p-5 sm:min-h-[400px] sm:p-6 lg:min-h-[600px]">
                <div className="flex-1 overflow-hidden rounded-xl border border-[var(--line)] bg-white">
                  <iframe
                    title="East Village Pharmacy map"
                    src="https://www.google.com/maps?q=2612+Holcom+Bridge+Road,+Suites+110,+Alpharetta,+GA+30022&output=embed"
                    className="h-full min-h-[300px] w-full sm:min-h-[340px] lg:min-h-[460px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a href="https://maps.google.com/?q=2612+Holcom+Bridge+Road,+Suites+110,+Alpharetta,+GA+30022" className="btn-silentech-secondary mt-4 px-4 py-2">
                  Get Directions
                </a>
              </div>
            </div>
          </article>
        </section>

        <section className="relative mt-4 overflow-hidden rounded-2xl border border-[#d8ded5]">
          <Image src="/assets/welcome.png" alt="Pharmacy care background" fill sizes="(max-width: 1024px) 100vw, 50vw" className="h-full w-full object-contain object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f3f6f0]/92 via-[#f3f6f0]/85 to-[#eaf1e6]/90" />

          <div className="relative grid gap-3 p-4 md:grid-cols-2 xl:grid-cols-4">
            {trustItems.map((item) => (
              <article key={item.title} className="rounded-xl border border-[#d6ddd4] bg-white/90 p-4 backdrop-blur-[1px]">
                <h3 className="text-xl font-bold text-[var(--brand-green-900)]">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-700">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
