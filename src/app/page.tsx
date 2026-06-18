import Image from "next/image";

const qualityItems = [
  {
    title: "Non-Sterile",
    body: "Compounding",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-[var(--brand-gold-600)]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l8 4v6c0 4.5-2.9 8.2-8 10-5.1-1.8-8-5.5-8-10V6l8-4z" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
  {
    title: "Hazardous Drug",
    body: "Handling",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-[var(--brand-gold-600)]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l8 14H4l8-14z" />
        <path d="M12 9v4" />
        <circle cx="12" cy="16" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Licensed",
    body: "Georgia Pharmacy",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-[var(--brand-gold-600)]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4" />
        <path d="M7 14h10v7l-5-2-5 2v-7z" />
      </svg>
    ),
  },
];

const quickActions = [
  {
    title: "Refill Prescription",
    body: "Quick and easy refills online",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-[var(--brand-gold-300)]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M10 7h4" />
      </svg>
    ),
  },
  {
    title: "Transfer Prescription",
    body: "Transfer your prescription to us",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-[var(--brand-gold-300)]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 7h10" />
        <path d="M11 3l4 4-4 4" />
        <path d="M19 17H9" />
        <path d="M13 13l-4 4 4 4" />
      </svg>
    ),
  },
  {
    title: "Custom Compounding",
    body: "Medications made just for you",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-[var(--brand-gold-300)]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 4h8" />
        <path d="M9 4v4l-4 7a3 3 0 0 0 2.7 4.5h8.6A3 3 0 0 0 19 15l-4-7V4" />
      </svg>
    ),
  },
  {
    title: "Speak to a Pharmacist",
    body: "We are here to answer your questions",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-[var(--brand-gold-300)]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="8" />
        <path d="M9 11h6" />
        <path d="M9 14h4" />
      </svg>
    ),
  },
];

const solutions = [
  {
    title: "Dermatology",
    body: "Creams, gels, and solutions for skin conditions",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[var(--brand-green-700)] sm:h-7 sm:w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M10 4h4l2 3v10a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V7l2-3z" />
        <path d="M9 9h6" />
      </svg>
    ),
  },
  {
    title: "Pain Management",
    body: "Topical and oral solutions for pain relief",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[var(--brand-green-700)] sm:h-7 sm:w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21a9 9 0 1 1 0-18" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Hormone Therapy",
    body: "Bioidentical hormone therapy tailored for you",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[var(--brand-green-700)] sm:h-7 sm:w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 8a3 3 0 1 1 6 0c0 2-3 3-3 5a3 3 0 1 0 3 3" />
        <path d="M18 5v6" />
        <path d="M15 8h6" />
      </svg>
    ),
  },
  {
    title: "Pediatrics",
    body: "Kid-friendly dosage forms and flavors",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[var(--brand-green-700)] sm:h-7 sm:w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="3" />
        <path d="M6 20a6 6 0 0 1 12 0" />
      </svg>
    ),
  },
  {
    title: "Veterinary",
    body: "Compounded meds for your beloved pets",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[var(--brand-green-700)] sm:h-7 sm:w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="8" cy="9" r="1.8" />
        <circle cx="16" cy="9" r="1.8" />
        <circle cx="12" cy="6" r="1.8" />
        <path d="M8 15a4 4 0 0 1 8 0c0 2-1.5 3.5-4 3.5S8 17 8 15z" />
      </svg>
    ),
  },
];

const values = [
  {
    title: "Personalized Care",
    body: "Medications tailored to your unique needs",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-[var(--brand-green-700)]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 8h6" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
  {
    title: "Quality You Can Trust",
    body: "High-quality ingredients and precise formulations",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-[var(--brand-green-700)]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4" />
        <path d="M8.5 12.5 7 21l5-2 5 2-1.5-8.5" />
      </svg>
    ),
  },
  {
    title: "Local and Accessible",
    body: "Proudly serving the Alpharetta community",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-[var(--brand-green-700)]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="8" cy="9" r="3" />
        <circle cx="16" cy="9" r="3" />
        <path d="M3 20a5 5 0 0 1 10 0" />
        <path d="M11 20a5 5 0 0 1 10 0" />
      </svg>
    ),
  },
  {
    title: "Here for You",
    body: "Compassionate care every step of the way",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-[var(--brand-green-700)]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 20s-7-4.2-7-9.1A4 4 0 0 1 12 8a4 4 0 0 1 7 2.9C19 15.8 12 20 12 20z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="brand-shell flex-1 pb-8">
      <main className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <section className="mt-6 overflow-hidden rounded-[30px] border border-[#d8dfd1] bg-[#f9faf6] shadow-[0_24px_45px_-32px_rgba(5,44,31,0.55)]">
          <div className="p-6 sm:p-8 lg:p-0">
            <div className="relative overflow-hidden rounded-[26px] border border-[#d5ddd0] bg-white lg:rounded-none lg:border-0">
              <Image
                src="/assets/welcome.png"
                alt="Compounding care"
                width={1200}
                height={900}
                priority
                className="h-[300px] w-full object-cover sm:h-[390px] lg:h-[620px]"
              />
            </div>

            <div className="mt-6">
              <h1 className="text-3xl leading-[0.98] text-[var(--brand-green-900)] sm:text-4xl lg:text-[3.2rem]">
                Customized
                <br />
                Medications.
                <br />
                <span className="text-[var(--brand-gold-600)]">Personalized Care.</span>
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-700">
                We create high-quality compounded medications tailored to your unique health needs.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 lg:px-10 lg:pb-8">
              <a
                href="/prescription"
                className="btn-silentech-primary px-4 py-2.5 text-xs tracking-[0.08em] sm:text-sm"
              >
                REFILL PRESCRIPTION
              </a>
              <a
                href="/consultation"
                className="btn-silentech-secondary px-4 py-2.5 text-xs tracking-[0.08em] sm:text-sm"
              >
                REQUEST A COMPOUND
              </a>
              <a
                href="/contact"
                className="btn-silentech-secondary px-4 py-2.5 text-xs tracking-[0.08em] sm:text-sm"
              >
                TRANSFER RX
              </a>
              <a
                href="/consultation"
                className="btn-silentech-secondary px-4 py-2.5 text-xs tracking-[0.08em] sm:text-sm"
              >
                CONSULTATION
              </a>
            </div>

            <div className="mt-8 grid gap-4 border-t border-[#dbe2d6] pt-5 sm:grid-cols-3 lg:mx-10 lg:mt-0 lg:border-[#d0d8ce] lg:pb-8">
              {qualityItems.map((item) => (
                <article key={item.title} className="flex items-start gap-2.5">
                  <span className="mt-0.5">{item.icon}</span>
                  <div>
                    <h2 className="font-sans text-base font-bold text-[var(--brand-green-900)]">{item.title}</h2>
                    <p className="text-sm text-slate-600">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-r from-[#1a7659] to-[#0f5a44] text-white shadow-[0_16px_34px_-24px_rgba(4,34,24,0.65)]">
          <div className="grid gap-0 md:grid-cols-2 xl:grid-cols-4">
            {quickActions.map((action, index) => (
              <article
                key={action.title}
                className={`flex items-start gap-3 px-5 py-5 ${index !== 0 ? "border-t border-white/25 md:border-l md:border-t-0" : ""}`}
              >
                <span>{action.icon}</span>
                <div>
                  <h2 className="font-sans text-[1.35rem] font-bold leading-tight !text-white">{action.title}</h2>
                  <p className="mt-1 text-sm text-emerald-50">{action.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <div className="flex flex-col rounded-2xl border border-[#d8dfd2] bg-[#f8f8f3] p-6 sm:p-8">
            <article className="order-1 overflow-hidden rounded-2xl border border-[#cfd7cb] bg-white shadow-[0_16px_30px_-25px_rgba(7,45,32,0.65)] lg:order-2">
              <div className="relative h-64 w-full lg:h-[420px]">
                <Image
                  src="/assets/compounding2.png"
                  alt="Pharmacist preparing medication"
                  fill
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-cover"
                />
              </div>
            </article>

            <div className="order-2 lg:order-1">
              <h2 className="mt-6 text-4xl leading-none text-[var(--brand-green-900)] sm:text-5xl">Specialized Compounding Solutions</h2>
              <p className="mt-2 text-slate-700">Customized medications for a variety of needs and conditions.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                {solutions.map((solution) => (
                  <article key={solution.title} className="text-center">
                    <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-[#d7dfd3] bg-[#f4f7f0] sm:h-16 sm:w-16">
                      {solution.icon}
                    </div>
                    <h3 className="mt-3 font-sans text-base font-bold text-[var(--brand-green-900)]">{solution.title}</h3>
                    <p className="mt-1 text-sm leading-snug text-slate-600">{solution.body}</p>
                  </article>
                ))}
              </div>

              <a
                href="/services"
                className="btn-silentech-secondary mt-6 px-5 py-2.5 text-sm tracking-wide"
              >
                LEARN MORE ABOUT COMPOUNDING
              </a>
            </div>
          </div>
        </section>

        <section className="mt-6 overflow-hidden rounded-2xl border border-[#d8dfd1] bg-[#f6f7f2]">
          <div className="grid items-center gap-4 p-6 sm:p-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="order-2 lg:order-1">
              <h2 className="text-5xl leading-[0.9] text-[var(--brand-green-900)] sm:text-6xl">Your Wellness Starts Here</h2>
              <p className="mt-3 max-w-md text-slate-700">
                Explore our curated selection of premium supplements, vitamins, and skincare products to support your health journey.
              </p>
              <a
                href="/services"
                className="btn-silentech-primary mt-5 px-5 py-2.5 text-sm tracking-wide"
              >
                SHOP WELLNESS
              </a>
            </div>
            <div className="order-1 overflow-hidden rounded-2xl border border-[#d8dfd1] bg-white lg:order-2">
              <Image
                src="/assets/wellness22.png"
                alt="Wellness products"
                width={1200}
                height={700}
                className="h-60 w-full object-cover sm:h-72"
              />
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-[#d9dfd2] bg-white p-5 sm:p-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {values.map((item) => (
              <article key={item.title} className="flex items-start gap-3 rounded-xl border border-[#e4eadf] bg-[#fbfcfa] p-4">
                <span>{item.icon}</span>
                <div>
                  <h3 className="font-sans text-base font-bold text-[var(--brand-green-900)]">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
