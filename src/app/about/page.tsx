const values = [
  {
    title: "Personalized Care",
    body: "We tailor every recommendation and compounded medication to each patient.",
  },
  {
    title: "Clinical Accuracy",
    body: "Our pharmacists follow strict quality and safety protocols on every preparation.",
  },
  {
    title: "Community Commitment",
    body: "We proudly serve East Village families with trusted, neighborhood-first care.",
  },
];

const stats = [
  { label: "Years Serving NYC", value: "15+" },
  { label: "Patients Supported", value: "20k+" },
  { label: "Compounded Prescriptions", value: "50k+" },
  { label: "Avg. Response Time", value: "30 min" },
];

const faqItems = [
  {
    question: "Does East Village Pharmacy offer custom compounding?",
    answer: "Yes. We prepare tailored medications for specific dosage forms, strengths, and patient needs.",
  },
  {
    question: "Can I request consultations online?",
    answer: "Absolutely. You can submit a consultation request and choose phone, video, or in-person options.",
  },
  {
    question: "Is my prescription and health data secure?",
    answer: "Yes. We follow strict confidentiality and security standards for all patient information.",
  },
  {
    question: "How quickly will I get a response?",
    answer: "Our team reviews new requests promptly during business hours and follows up as soon as possible.",
  },
];

export default function AboutPage() {
  return (
    <div className="brand-shell flex-1">
      <main className="mx-auto w-full max-w-[1520px] px-4 py-6 sm:px-6 lg:px-10">
        <section
          className="rounded-3xl border border-[var(--line)] bg-cover bg-center bg-no-repeat p-8 sm:p-10"
          style={{
            backgroundImage: "url('/assets/about1.png')",
            backgroundPosition: "center",
          }}
        >
          <div className="mr-auto w-full max-w-[420px] sm:max-w-[520px] md:max-w-[620px]">
            <p className="text-center text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand-green-700)] sm:text-left">About East Village Pharmacy</p>
            <h1 className="mt-3 text-2xl leading-[1.06] text-[var(--brand-green-900)] sm:text-4xl sm:leading-[1.02] lg:text-6xl lg:leading-[0.96]">
              Rooted in Community.
              <br />
              Focused on Better Outcomes.
            </h1>
            <p className="mt-5 text-base text-slate-700 sm:text-xl">
              East Village Pharmacy combines modern pharmacy services with one-on-one support. We specialize in compounding,
              medication guidance, and practical care plans that fit real life.
            </p>
          </div>
        </section>

        <section className="mt-4 rounded-2xl border border-[var(--line)] bg-white p-6 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand-green-700)]">Our Story</p>
          <h2 className="mt-2 text-4xl leading-none text-[var(--brand-green-900)] sm:text-5xl">Care that grew with our community</h2>
          <div className="mt-4 grid gap-4 text-base leading-relaxed text-slate-700 lg:grid-cols-2">
            <p>
              East Village Pharmacy began with a simple mission: give patients care that feels personal, clear, and dependable.
              As healthcare needs evolved, we expanded from traditional dispensing into advanced compounding and one-on-one
              medication support.
            </p>
            <p>
              Today, we continue to serve families, providers, and caregivers with the same neighborhood mindset. Every
              prescription, consultation, and follow-up is designed to improve outcomes and make daily health management easier.
            </p>
          </div>
        </section>

        <section className="mt-4 rounded-2xl border border-[var(--line)] bg-[#f8faf6] p-6 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand-green-700)]">Our Values</p>
          <h2 className="mt-2 text-4xl leading-none text-[var(--brand-green-900)] sm:text-5xl">What guides every patient interaction</h2>
          <div className="mt-4 grid gap-4 xl:grid-cols-3">
            {values.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[var(--line)] bg-white p-6">
                <h3 className="text-3xl text-[var(--brand-green-900)]">{item.title}</h3>
                <p className="mt-2 text-base text-slate-700">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-4 grid gap-3 rounded-2xl border border-[#d8ded5] bg-[#f3f6f0] p-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="rounded-xl bg-white/80 p-4 text-center">
              <p className="text-4xl font-bold text-[var(--brand-green-900)]">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.07em] text-slate-600">{stat.label}</p>
            </article>
          ))}
        </section>

        <section className="mt-4 overflow-hidden rounded-2xl border border-[#0f5e43] bg-gradient-to-r from-[#045938] via-[#014a2f] to-[#02442c] text-white">
          <div className="border-b border-white/20 px-5 py-5 text-center sm:px-7">
            <h2 className="text-4xl leading-none !text-white sm:text-5xl">Quick answers to common inquiries.</h2>
          </div>

          <div className="px-5 py-4 sm:px-7">
            <div className="grid gap-3">
              {faqItems.map((item, index) => (
                <details key={item.question} open={index === 0} className="rounded-xl border border-white/25 bg-white/10 p-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-xl font-bold text-white marker:content-none">
                    <span>{item.question}</span>
                    <span className="text-2xl leading-none text-white/85">+</span>
                  </summary>
                  <p className="mt-2 text-sm text-emerald-50">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-4 rounded-[2rem] border border-[#13304a] bg-gradient-to-br from-[#061b33] via-[#04182d] to-[#031427] p-6 text-white shadow-[0_20px_44px_-24px_rgba(0,0,0,0.8)] sm:p-8 lg:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="text-5xl font-bold !text-white sm:text-6xl">Still have questions?</h3>
            <p className="mt-4 text-xl text-slate-300 sm:text-2xl">Our pharmacy team is ready to support your health journey.</p>

            <div className="mt-7 grid gap-3 sm:mx-auto sm:max-w-[640px] sm:grid-cols-3 lg:max-w-none">
              <a
                href="tel:+14049341691"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-[#1f3750] bg-[#10253c] px-5 py-4 text-3xl font-bold text-white transition hover:brightness-105 sm:text-[2rem]"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7A2 2 0 0 1 22 16.9z" />
                </svg>
                <span>Call Sales</span>
              </a>

              <a
                href="mailto:info@eastvillagepharmacy.com"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-[#1f3750] bg-[#10253c] px-5 py-4 text-3xl font-bold text-white transition hover:brightness-105 sm:text-[2rem]"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                <span>Email Support</span>
              </a>

              <a
                href="https://wa.me/14049341691?text=Hi%20East%20Village%20Pharmacy%2C%20I%20have%20a%20question."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-[#0ea371] bg-[#0da06e] px-5 py-4 text-3xl font-bold text-[#041828] transition hover:brightness-105 sm:text-[2rem]"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 11.5A8.5 8.5 0 0 1 7.3 18.9L3 20l1.2-4.1A8.5 8.5 0 1 1 20 11.5z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
