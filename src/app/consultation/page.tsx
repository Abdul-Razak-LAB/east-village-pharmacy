import Image from "next/image";

const highlights = [
  {
    title: "Expert Advice",
    body: "Get personalized guidance from our experienced pharmacists.",
  },
  {
    title: "Private & Secure",
    body: "Your information is always kept confidential and secure.",
  },
  {
    title: "Convenient & Flexible",
    body: "Choose phone, video, or in-person consultations.",
  },
];

const consultTypes = [
  {
    title: "Video Consultation",
    body: "Meet face-to-face with our pharmacist from the comfort of your home.",
  },
  {
    title: "Phone Consultation",
    body: "Speak with our pharmacist over the phone at a time that works for you.",
  },
  {
    title: "In-Person Consultation",
    body: "Visit our pharmacy for a personal consultation with our team.",
  },
];

const trustItems = [
  { title: "Dedicated Pharmacists", body: "We listen and understand your needs." },
  { title: "Medication Expertise", body: "Advice on interactions, alternatives, and safety." },
  { title: "Wellness Focused", body: "We look at the bigger picture of your health." },
  { title: "Ongoing Support", body: "We are with you at every step of your journey." },
];

export default function ConsultationPage() {
  return (
    <div className="brand-shell flex-1">
      <main className="mx-auto w-full max-w-[1520px] px-4 py-6 sm:px-6 lg:px-10">
        <section className="grid overflow-hidden rounded-3xl border border-[var(--line)] bg-white lg:grid-cols-[1fr_1.35fr]">
          <div className="p-8 sm:p-10">
            <div className="lg:hidden">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand-green-700)]">Request A Consultation</p>
              <h1 className="mt-3 max-w-xl text-xl font-bold leading-tight text-[var(--brand-green-900)] sm:text-2xl">
                Personalized Guidance.
                <br />
                Better Health Outcomes.
              </h1>
            </div>

            <div className="relative mb-6 min-h-[260px] overflow-hidden rounded-2xl border border-[var(--line)] lg:hidden">
              <Image src="/assets/book-consultation.png" alt="Consultation visual" fill priority className="h-full w-full object-contain object-center" />
            </div>

            <div className="hidden lg:block">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand-green-700)]">Request A Consultation</p>
              <h1 className="mt-3 max-w-xl text-xl font-bold leading-tight text-[var(--brand-green-900)] sm:text-2xl">
                Personalized Guidance.
                <br />
                Better Health Outcomes.
              </h1>
            </div>

            <p className="mt-4 max-w-xl text-base text-slate-700 sm:text-xl">
              Our pharmacists are here to answer your questions, review your medications, and help you make informed decisions.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <article key={item.title} className="rounded-2xl border border-[var(--line)] bg-[#f7faf6] p-4">
                  <h2 className="text-lg font-bold text-[var(--brand-green-900)]">{item.title}</h2>
                  <p className="mt-1 text-sm text-slate-700">{item.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative hidden min-h-[320px] lg:block">
            <Image src="/assets/book-consultation.png" alt="Consultation visual" fill priority className="h-full w-full object-contain object-center" />
          </div>
        </section>

        <section className="mt-4 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
          <article className="rounded-2xl border border-[var(--line)] bg-white p-5 sm:p-6">
            <h2 className="text-3xl text-[var(--brand-green-900)] sm:text-4xl">Consultation Request Form</h2>
            <form className="mt-4 grid gap-3 sm:grid-cols-2">
              <input className="rounded-xl border border-[var(--line)] px-4 py-2.5" placeholder="Full Name *" required />
              <input className="rounded-xl border border-[var(--line)] px-4 py-2.5" placeholder="Email Address *" type="email" required />
              <input className="rounded-xl border border-[var(--line)] px-4 py-2.5" placeholder="Phone Number *" required />
              <select className="rounded-xl border border-[var(--line)] px-4 py-2.5" defaultValue="">
                <option value="" disabled>
                  Preferred Method *
                </option>
                <option>Video</option>
                <option>Phone</option>
                <option>In-Person</option>
              </select>
              <select className="rounded-xl border border-[var(--line)] px-4 py-2.5 sm:col-span-2" defaultValue="">
                <option value="" disabled>
                  Reason for Consultation *
                </option>
                <option>Medication Questions</option>
                <option>Compounding</option>
                <option>Therapy Review</option>
              </select>
              <textarea className="rounded-xl border border-[var(--line)] px-4 py-2.5 sm:col-span-2" placeholder="Additional Details (Optional)" rows={3} />
              <button className="btn-silentech-primary px-4 py-2.5 sm:col-span-2">
                Request Consultation
              </button>
            </form>
            <p className="mt-3 text-sm text-slate-600">Your information is secure and confidential.</p>
          </article>

          <article className="rounded-2xl border border-[var(--line)] bg-white p-5 sm:p-6">
            <h2 className="text-3xl text-[var(--brand-green-900)] sm:text-4xl">Choose Your Preferred Consultation</h2>
            <div className="mt-4 grid gap-3">
              {consultTypes.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--line)] bg-[#fbfdf9] p-4">
                  <h3 className="text-xl font-bold text-[var(--brand-green-900)]">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-700">{item.body}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-4 grid gap-3 rounded-2xl border border-[#d8ded5] bg-[#f3f6f0] p-4 md:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item) => (
            <article key={item.title} className="rounded-xl bg-white/75 p-4">
              <h3 className="text-xl font-bold text-[var(--brand-green-900)]">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-700">{item.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-4 grid gap-3 rounded-2xl bg-gradient-to-r from-[#045938] via-[#014a2f] to-[#02442c] p-5 text-white lg:grid-cols-[1.5fr_1fr_auto] lg:items-center">
          <div>
            <p className="text-3xl sm:text-5xl">Your Health. Our Priority.</p>
            <p className="mt-1 text-base text-emerald-50">Schedule a consultation today and take the next step toward better health.</p>
          </div>
          <div>
            <p className="text-lg">(770) 744-2461</p>
            <p className="mt-1 text-lg">Saudat.Mawia@GreenLeafGA.onmicrosoft.com</p>
          </div>
          <a href="/consultation" className="btn-silentech-secondary px-6 py-3 text-lg">
            Request a Consultation
          </a>
        </section>
      </main>
    </div>
  );
}
