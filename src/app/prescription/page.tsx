"use client";

import Image from "next/image";
import { useState } from "react";

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
  const [formData, setFormData] = useState({ fullName: "", email: "", phone: "", notes: "" });
  const [fileName, setFileName] = useState("");
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
      const response = await fetch("/api/prescription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, fileName }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "We could not submit your prescription right now.");
      }

      setFeedback({
        type: data.warning ? "warning" : "success",
        message: data.warning ?? "Your prescription has been submitted. Our team will be in touch shortly.",
      });
      setFormData({ fullName: "", email: "", phone: "", notes: "" });
      setFileName("");
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
            <Image src="/assets/refill.png" alt="Prescription visual" fill sizes="(max-width: 1024px) 100vw, 52vw" priority className="h-full w-full object-contain object-center" />
          </div>
        </section>

        <section className="mt-4 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
          <article className="rounded-2xl border border-[var(--line)] bg-white p-5 sm:p-6">
            <h2 className="text-3xl text-[var(--brand-green-900)] sm:text-4xl">Upload Your Prescription</h2>
            <form className="mt-4 grid gap-3 sm:grid-cols-2" onSubmit={handleSubmit}>
              <input
                className="rounded-xl border border-[var(--line)] px-4 py-2.5"
                placeholder="Full Name *"
                required
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
              />
              <input
                className="rounded-xl border border-[var(--line)] px-4 py-2.5"
                placeholder="Email Address *"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <input
                className="rounded-xl border border-[var(--line)] px-4 py-2.5 sm:col-span-2"
                placeholder="Phone Number *"
                required
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
              <label className="grid rounded-xl border border-dashed border-[var(--line)] bg-[#f9fbf8] p-6 text-center text-sm text-slate-600 sm:col-span-2">
                <span className="text-base font-semibold text-[var(--brand-green-900)]">Upload Prescription (PDF, JPG, PNG)</span>
                <span className="mt-1">{fileName || "Drag and drop your file here or click to browse."}</span>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="mt-2"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                />
              </label>
              <textarea
                className="rounded-xl border border-[var(--line)] px-4 py-2.5 sm:col-span-2"
                placeholder="Additional Notes (Optional)"
                rows={3}
                value={formData.notes}
                onChange={(e) => handleChange("notes", e.target.value)}
              />
              <button className="btn-silentech-primary px-4 py-2.5 sm:col-span-2" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Prescription"}
              </button>
            </form>
            {feedback ? (
              <p className={`mt-3 text-sm ${feedback.type === "success" ? "text-emerald-700" : feedback.type === "warning" ? "text-amber-700" : "text-red-600"}`}>
                {feedback.message}
              </p>
            ) : null}
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
            <a
              href="mailto:Info@GreenLeafGA.onmicrosoft.com?subject=East%20Village%20Pharmacy%20Prescription%20Question&body=From%3A%20%0ATo%3A%20Info%40GreenLeafGA.onmicrosoft.com%0ASubject%3A%20East%20Village%20Pharmacy%20Prescription%20Question%0A%0AMessage%3A%20"
              className="mt-1 inline-block text-lg underline-offset-2 hover:underline"
            >
              Info@GreenLeafGA.onmicrosoft.com
            </a>
          </div>
          <a href="/consultation" className="btn-silentech-secondary px-6 py-3 text-lg">
            Request a Consultation
          </a>
        </section>
      </main>
    </div>
  );
}
