import Image from "next/image";

const wellnessCollections = [
  {
    title: "Vitamins and Minerals",
    body: "Daily essentials to support energy, immunity, and overall wellness.",
  },
  {
    title: "Gut and Digestive Health",
    body: "Targeted probiotic and digestive support formulas chosen for quality and efficacy.",
  },
  {
    title: "Skin and Beauty",
    body: "Curated wellness and skincare products to support healthy skin from within.",
  },
  {
    title: "Stress and Sleep",
    body: "Calming blends and nighttime support options for better rest and balance.",
  },
];

export default function WellnessShopPage() {
  return (
    <div className="brand-shell flex-1">
      <main className="mx-auto w-full max-w-[1520px] px-4 py-6 sm:px-6 lg:px-10">
        <section className="grid overflow-hidden rounded-3xl border border-[var(--line)] bg-white lg:grid-cols-[1fr_1.25fr]">
          <div className="order-2 p-8 sm:p-10 lg:order-1">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand-green-700)]">Wellness Shop</p>
            <h1 className="mt-3 max-w-xl text-4xl leading-[0.98] text-[var(--brand-green-900)] sm:text-6xl sm:leading-[0.95] lg:text-7xl">
              Premium Wellness.
              <br />
              Everyday Support.
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-700 sm:text-xl">
              Explore our curated selection of supplements, vitamins, and self-care essentials.
            </p>
            <a
              href="/contact"
              className="btn-silentech-secondary mt-6 px-5 py-3 text-sm tracking-[0.06em]"
            >
              ASK A PHARMACIST
            </a>
          </div>

          <div className="order-1 relative min-h-[300px] bg-white lg:order-2">
            <Image src="/assets/wellness22.png" alt="Wellness products" fill priority className="h-full w-full object-contain object-center" />
          </div>
        </section>

        <section className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {wellnessCollections.map((collection) => (
            <article key={collection.title} className="rounded-2xl border border-[var(--line)] bg-white p-6">
              <h2 className="text-3xl text-[var(--brand-green-900)] sm:text-4xl">{collection.title}</h2>
              <p className="mt-2 text-base text-slate-700">{collection.body}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
