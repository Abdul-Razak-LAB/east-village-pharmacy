import { NextResponse } from "next/server";
import { z } from "zod";

import { savePrescriptionRequest } from "@/lib/db";
import { sendPrescriptionEmail, sendPrescriptionSmsAlert } from "@/lib/notifications";

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

    const notificationResults = await Promise.allSettled([
      sendPrescriptionEmail({ fullName, email: parsed.data.email, phone, notes, fileName }),
      sendPrescriptionSmsAlert({ fullName, phone, notes, fileName }),
    ]);

    const hasFailure = notificationResults.some((result) => result.status === "rejected");

    if (hasFailure) {
      notificationResults.forEach((result, index) => {
        if (result.status === "rejected") {
          const channel = index === 0 ? "email" : "sms";
          console.error(`Prescription ${channel} notification failed`, result.reason);
        }
      });

      return NextResponse.json({
        ok: true,
        warning:
          "Your prescription was submitted, but one of our staff alerts is temporarily unavailable. We will still process your request — call us at (770) 744-2461 if urgent.",
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
