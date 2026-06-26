import { NextResponse } from "next/server";
import { z } from "zod";

import { savePrescriptionRequest } from "@/lib/db";
import { sendPrescriptionSmsAlert } from "@/lib/notifications";

const prescriptionSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  email: z.email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  notes: z.string().optional().or(z.literal("")),
  fileName: z.string().optional().or(z.literal("")),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = prescriptionSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { fullName, phone, notes, fileName } = parsed.data;

    await savePrescriptionRequest({
      fullName: parsed.data.fullName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      notes: parsed.data.notes,
      fileName: parsed.data.fileName,
    });

    const smsResult = await Promise.allSettled([
      sendPrescriptionSmsAlert({ fullName, phone, notes, fileName }),
    ]);

    if (smsResult[0].status === "rejected") {
      console.error("Prescription SMS alert failed", smsResult[0].reason);

      return NextResponse.json({
        ok: true,
        warning:
          "Your prescription was submitted, but our SMS alert is temporarily unavailable. We will still process your request — call us at (770) 744-2461 if urgent.",
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Prescription submission error", error);
    return NextResponse.json(
      { ok: false, error: "We could not submit your prescription right now. Please try again or call us." },
      { status: 500 },
    );
  }
}
