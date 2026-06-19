import Image from "next/image";

const compoundingAreas = [
  {
    title: "Dermatology",
    body: "Customized creams, gels, and solutions designed for sensitive skin and specialized treatment plans.",
  },
  {
    title: "Hormone Therapy",
    body: "Bioidentical hormone formulations prepared to your provider's prescribed strength and dosage form.",
  },
  {
    title: "Pediatrics",
    body: "Flavor-matched and child-friendly medications to improve adherence and comfort.",
  },
  {
    title: "Veterinary",
    body: "Pet-specific compounds for easier administration and precise dosing across species.",
  },
];

export default function CompoundingPage() {
  return (
    <div className="brand-shell flex-1">
      <main className="mx-auto w-full max-w-[1520px] px-4 py-6 sm:px-6 lg:px-10">
        <section className="grid overflow-hidden rounded-3xl border border-[var(--line)] bg-white lg:grid-cols-[1fr_1.25fr]">
          <div className="order-2 p-8 sm:p-10 lg:order-1">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand-green-700)]">Compounding</p>
            <h1 className="mt-3 max-w-xl text-4xl leading-[0.98] text-[var(--brand-green-900)] sm:text-6xl sm:leading-[0.95] lg:text-7xl">
              Tailored Medications.
              <br />
              Personalized Precision.
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-700 sm:text-xl">
              Our compounding team creates customized medications when standard options are not the right fit.
            </p>
            <a
              href="/consultation"
              className="btn-silentech-primary mt-6 px-5 py-3 text-sm tracking-[0.06em]"
            >
              REQUEST A CONSULTATION
            </a>
          </div>

          <div className="order-1 relative min-h-[300px] lg:order-2">
            <Image src="/assets/compounding%20background%20image.png" alt="Compounding pharmacist" fill priority className="h-full w-full object-contain object-center" />
          </div>
        </section>

        <section className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {compoundingAreas.map((area) => (
            <article key={area.title} className="rounded-2xl border border-[var(--line)] bg-white p-6">
              <h2 className="text-3xl text-[var(--brand-green-900)] sm:text-4xl">{area.title}</h2>
              <p className="mt-2 text-base text-slate-700">{area.body}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
