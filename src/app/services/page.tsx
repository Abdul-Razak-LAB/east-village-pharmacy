import Image from "next/image";

const serviceCards = [
  {
    title: "Compounding Pharmacy",
    body: "Custom medications tailored to your unique needs, including dosage forms and strengths not available commercially.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-[var(--brand-green-900)]" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 5h8" />
        <path d="M9 5v4l-3.5 5.9a2.8 2.8 0 0 0 2.4 4.2h8.2a2.8 2.8 0 0 0 2.4-4.2L15 9V5" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
  {
    title: "Hormone Therapy",
    body: "Bioidentical hormone compounding to help restore balance and support your overall well-being.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-[var(--brand-green-900)]" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6.5" cy="12" r="2" />
        <circle cx="12" cy="6.5" r="2" />
        <circle cx="17.5" cy="12" r="2" />
        <circle cx="12" cy="17.5" r="2" />
        <path d="M8 10.5 10.5 8" />
        <path d="M13.5 8 16 10.5" />
        <path d="M16 13.5 13.5 16" />
        <path d="M10.5 16 8 13.5" />
      </svg>
    ),
  },
  {
    title: "Pediatric Compounding",
    body: "Safe, effective, and great-tasting medications designed specifically for children.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-[var(--brand-green-900)]" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="6.5" />
        <circle cx="10" cy="11" r="0.7" fill="currentColor" stroke="none" />
        <circle cx="14" cy="11" r="0.7" fill="currentColor" stroke="none" />
        <path d="M9.6 14c.8 1 1.6 1.4 2.4 1.4.8 0 1.6-.4 2.4-1.4" />
      </svg>
    ),
  },
  {
    title: "Veterinary Compounding",
    body: "Customized medications for pets with care, precision, and consistency.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-[var(--brand-green-900)]" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="9" r="1.8" />
        <circle cx="16" cy="9" r="1.8" />
        <circle cx="12" cy="6" r="1.8" />
        <path d="M8 15a4 4 0 0 1 8 0c0 2-1.5 3.5-4 3.5S8 17 8 15z" />
      </svg>
    ),
  },
];

const trustItems = [
  { title: "Quality & Safety", body: "We follow high standards to ensure pure, effective medications." },
  { title: "Experienced Team", body: "Years of expertise and passion for personalized care." },
  { title: "Customized for You", body: "Every prescription is tailored to your specific needs." },
  { title: "Trusted & Confidential", body: "Your health and privacy are always our priority." },
];

export default function ServicesPage() {
  return (
    <div className="brand-shell flex-1">
      <main className="mx-auto w-full max-w-[1520px] px-4 py-6 sm:px-6 lg:px-10">
        <section className="grid overflow-hidden rounded-3xl border border-[var(--line)] bg-white lg:grid-cols-[1fr_1.3fr]">
          <div className="p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand-green-700)]">Services</p>
            <h1 className="mt-3 max-w-xl text-4xl leading-[0.98] text-[var(--brand-green-900)] sm:text-6xl sm:leading-[0.95] lg:text-7xl">
              Personalized Solutions.
              <br />
              Better Outcomes.
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-700 sm:text-xl">
              Our compounding services are tailored to meet your unique health needs with precision and care.
            </p>
          </div>

          <div className="relative min-h-[300px]">
            <Image src="/assets/com.png" alt="Services visual" fill priority className="h-full w-full object-contain object-center" />
          </div>
        </section>

        <section className="mt-5">
          <p className="text-center text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand-green-700)]">Our Compounding Services</p>
          <h2 className="mt-2 text-center text-3xl text-[var(--brand-green-900)] sm:text-5xl">Care Thats Custom. Solutions That Work.</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-[var(--line)] bg-white p-6 text-center shadow-[0_15px_30px_-24px_rgba(10,50,36,0.45)]">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-[#d8e1d4] bg-[#eff3e9]">
                  {card.icon}
                </div>
                <h3 className="mt-5 text-[2rem] leading-tight text-[var(--brand-green-900)] sm:text-[2.2rem]">{card.title}</h3>
                <div className="mx-auto mt-2 h-[3px] w-10 rounded-full bg-[var(--brand-gold-600)]" />
                <p className="mt-3 text-base leading-relaxed text-slate-700">{card.body}</p>
                <a href="/contact" className="mt-5 inline-block text-base font-bold text-[var(--brand-green-700)]">
                  Learn More -&gt;
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-4 grid gap-3 rounded-2xl border border-[#d8ded5] bg-[#f3f6f0] p-4 md:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item) => (
            <article key={item.title} className="rounded-xl bg-white/75 p-4">
              <h3 className="text-xl font-bold text-[var(--brand-green-900)]">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-700">{item.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-4 grid gap-3 rounded-2xl bg-gradient-to-r from-[#045938] via-[#014a2f] to-[#02442c] p-5 text-white lg:grid-cols-[1.6fr_1fr_auto] lg:items-center">
          <div>
            <p className="text-3xl sm:text-5xl">Your Health. Your Needs. Our Personalized Care.</p>
          </div>
          <div>
            <p className="text-lg">Let our team create the right solution for you or your loved ones.</p>
          </div>
          <a href="/consultation" className="btn-silentech-secondary px-6 py-3 text-lg">
            Request a Consultation
          </a>
        </section>
      </main>
    </div>
  );
}
