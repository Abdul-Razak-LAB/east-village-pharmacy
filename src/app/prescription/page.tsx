import Image from "next/image";

const workflow = [
  {
    title: "We Receive Your Prescription",
    body: "Your prescription is securely received and sent to our pharmacy team.",
  },
  {
    title: "Our Pharmacists Review It",
    body: "We review your prescription for accuracy and suitability.",
  },
  {
    title: "We Prepare Your Medication",
    body: "Your medication is custom-compounded with precision and care.",
  },
  {
    title: "You Get Notified",
    body: "We contact you with updates or when your medication is ready.",
  },
];

const trustItems = [
  { title: "Secure Upload", body: "Your information is encrypted and protected." },
  { title: "Experienced Pharmacists", body: "Safe and effective medications by our team." },
  { title: "Personalized Care", body: "Every prescription is tailored to your needs." },
  { title: "Better Health Outcomes", body: "Compounding support to help you feel your best." },
];

export default function PrescriptionPage() {
  return (
    <div className="brand-shell flex-1">
      <main className="mx-auto w-full max-w-[1520px] px-4 py-6 sm:px-6 lg:px-10">
        <section className="grid overflow-hidden rounded-3xl border border-[var(--line)] bg-white lg:grid-cols-[1fr_1.25fr]">
          <div className="p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand-green-700)]">Upload Prescription</p>
            <h1 className="mt-3 max-w-xl text-4xl leading-[0.98] text-[var(--brand-green-900)] sm:text-6xl sm:leading-[0.95] lg:text-7xl">
              Your Health. Our Priority.
              <br />
              It Starts with Your Prescription.
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-700 sm:text-xl">
              Upload your prescription securely and our pharmacists will carefully review it to provide personalized care.
            </p>
          </div>

          <div className="relative min-h-[300px]">
            <Image src="/assets/refill.png" alt="Prescription visual" fill priority className="h-full w-full object-contain object-center" />
          </div>
        </section>

        <section className="mt-4 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
          <article className="rounded-2xl border border-[var(--line)] bg-white p-5 sm:p-6">
            <h2 className="text-3xl text-[var(--brand-green-900)] sm:text-4xl">Upload Your Prescription</h2>
            <form className="mt-4 grid gap-3 sm:grid-cols-2">
              <input className="rounded-xl border border-[var(--line)] px-4 py-2.5" placeholder="Full Name *" required />
              <input className="rounded-xl border border-[var(--line)] px-4 py-2.5" placeholder="Email Address *" type="email" required />
              <input className="rounded-xl border border-[var(--line)] px-4 py-2.5 sm:col-span-2" placeholder="Phone Number *" required />
              <label className="grid rounded-xl border border-dashed border-[var(--line)] bg-[#f9fbf8] p-6 text-center text-sm text-slate-600 sm:col-span-2">
                <span className="text-base font-semibold text-[var(--brand-green-900)]">Upload Prescription (PDF, JPG, PNG)</span>
                <span className="mt-1">Drag and drop your file here or click to browse.</span>
                <input type="file" className="mt-2" />
              </label>
              <textarea className="rounded-xl border border-[var(--line)] px-4 py-2.5 sm:col-span-2" placeholder="Additional Notes (Optional)" rows={3} />
              <button className="btn-silentech-primary px-4 py-2.5 sm:col-span-2">
                Submit Prescription
              </button>
            </form>
            <p className="mt-3 text-sm text-slate-600">Your information is secure and confidential.</p>
          </article>

          <article className="rounded-2xl border border-[var(--line)] bg-white p-5 sm:p-6">
            <h2 className="text-3xl text-[var(--brand-green-900)] sm:text-4xl">What Happens Next?</h2>
            <div className="mt-4 grid gap-3">
              {workflow.map((step) => (
                <div key={step.title} className="rounded-xl border border-[var(--line)] bg-[#fbfdf9] p-4">
                  <h3 className="text-xl font-bold text-[var(--brand-green-900)]">{step.title}</h3>
                  <p className="mt-1 text-sm text-slate-700">{step.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-[#eff5ea] p-4">
              <h3 className="text-lg font-bold text-[var(--brand-green-900)]">Secure & Private</h3>
              <p className="mt-1 text-sm text-slate-700">We protect your health information with strict security and confidentiality standards.</p>
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
            <p className="text-3xl sm:text-5xl">We are here to make your health journey easier.</p>
          </div>
          <div>
            <p className="text-lg">(770) 744-2461</p>
            <p className="mt-1 text-lg">info@eastvillagepharmacy.com</p>
          </div>
          <a href="/consultation" className="btn-silentech-secondary px-6 py-3 text-lg">
            Request a Consultation
          </a>
        </section>
      </main>
    </div>
  );
}
