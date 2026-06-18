import Image from "next/image";

const contactItems = [
  { title: "Visit Us", body: ["239 East 14th Street", "New York, NY 10003"] },
  { title: "Call Us", body: ["(770) 744-2461"] },
  { title: "Email Us", body: ["info@eastvillagepharmacy.com"] },
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
  return (
    <div className="brand-shell flex-1">
      <main className="mx-auto w-full max-w-[1520px] px-4 py-6 sm:px-6 lg:px-10">
        <section className="grid overflow-hidden rounded-3xl border border-[var(--line)] bg-white lg:grid-cols-[1fr_1.25fr]">
          <div className="order-2 p-8 sm:p-10 lg:order-1">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand-green-700)]">Contact Us</p>
            <h1 className="mt-3 max-w-xl text-4xl leading-[0.98] text-[var(--brand-green-900)] sm:text-6xl sm:leading-[0.95] lg:text-7xl">
              We are Here for You.
              <br />
              Lets Talk.
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-700 sm:text-xl">
              Have a question, need assistance, or want to learn more about our services? Our team is ready to help.
            </p>
          </div>

          <div className="order-1 relative min-h-[300px] lg:order-2">
            <Image src="/assets/contact%20us2.png" alt="Contact visual" fill priority className="object-cover object-right-top" />
          </div>
        </section>

        <section className="mt-4 grid gap-4 lg:grid-cols-[1.25fr_1fr]">
          <article className="rounded-2xl border border-[var(--line)] bg-white p-5 sm:p-6">
            <h2 className="text-3xl text-[var(--brand-green-900)] sm:text-4xl">Send Us a Message</h2>
            <form className="mt-4 grid gap-3 sm:grid-cols-2">
              <input className="rounded-xl border border-[var(--line)] px-4 py-2.5" placeholder="Full Name *" required />
              <input className="rounded-xl border border-[var(--line)] px-4 py-2.5" placeholder="Email Address *" type="email" required />
              <input className="rounded-xl border border-[var(--line)] px-4 py-2.5 sm:col-span-2" placeholder="Phone Number" />
              <textarea className="rounded-xl border border-[var(--line)] px-4 py-2.5 sm:col-span-2" placeholder="Your Message" rows={4} required />
              <button className="btn-silentech-primary px-4 py-2.5 sm:col-span-2">
                Send Message
              </button>
            </form>
            <p className="mt-3 text-sm text-slate-600">Your information is safe and secure. We respect your privacy.</p>
          </article>

          <article className="grid gap-4 rounded-2xl border border-[var(--line)] bg-white p-5 sm:p-6">
            <h2 className="text-3xl text-[var(--brand-green-900)] sm:text-4xl">Contact Information</h2>
            <div className="mt-3 grid grid-cols-2 gap-3 items-start sm:gap-4">
              <div className="grid gap-3">
                {contactItems.map((item) => (
                  <div key={item.title}>
                    {contactIcons[item.title] ? (
                      <div className="flex items-start gap-3">
                        <span className="mt-1 grid h-9 w-9 place-items-center rounded-full bg-[#e5eee5] text-[var(--brand-green-900)]">
                          {contactIcons[item.title]}
                        </span>
                        <div>
                          {item.body.map((line) => (
                            <p key={line} className="text-base text-slate-700">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <>
                        <h3 className="text-xl font-bold text-[var(--brand-green-900)]">{item.title}</h3>
                        {item.body.map((line) => (
                          <p key={line} className="text-base text-slate-700">
                            {line}
                          </p>
                        ))}
                      </>
                    )}
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-[var(--line)] bg-[#e6ece4] p-5 sm:p-6">
                <div className="overflow-hidden rounded-xl border border-[var(--line)] bg-white">
                  <iframe
                    title="East Village Pharmacy map"
                    src="https://www.google.com/maps?q=239+East+14th+Street,+New+York,+NY+10003&output=embed"
                    className="h-64 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a href="https://maps.google.com/?q=239+East+14th+Street,+New+York,+NY+10003" className="btn-silentech-secondary mt-4 px-4 py-2">
                  Get Directions
                </a>
              </div>
            </div>
          </article>
        </section>

        <section className="relative mt-4 overflow-hidden rounded-2xl border border-[#d8ded5]">
          <Image src="/assets/welcome.png" alt="Pharmacy care background" fill className="object-cover" />
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
