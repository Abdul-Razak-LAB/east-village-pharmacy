import { NextResponse } from "next/server";
import { z } from "zod";

import { saveConsultationRequest } from "@/lib/db";
import { sendConsultationEmail, sendConsultationSms } from "@/lib/notifications";

const consultationSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  email: z.email("Please enter a valid email address."),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number.")
    .regex(/^[0-9()+\-\s]+$/, "Phone number contains invalid characters."),
  preferredContact: z.enum(["phone", "email", "video"]),
  consultationType: z.string().min(2, "Please choose a consultation type."),
  message: z.string().min(10, "Please provide a short message."),
  smsCarrier: z.enum(["att", "tmobile", "verizon"]).optional(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = consultationSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Validation failed",
          details: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    const input = parsed.data;
    const saved = await saveConsultationRequest(input);

    await Promise.allSettled([
      sendConsultationEmail({
        requestId: saved.id,
        createdAt: saved.created_at,
        fullName: input.fullName,
        email: input.email,
        phone: input.phone,
        preferredContact: input.preferredContact,
        consultationType: input.consultationType,
        message: input.message,
      }),
      sendConsultationSms({
        requestId: saved.id,
        fullName: input.fullName,
        phone: input.phone,
        consultationType: input.consultationType,
        carrier: input.smsCarrier,
      }),
    ]);

    return NextResponse.json({ ok: true, id: saved.id });
  } catch (error) {
    console.error("Consultation request error", error);
    return NextResponse.json(
      {
        ok: false,
        error: "We could not submit your request right now.",
      },
      { status: 500 },
    );
  }
}
