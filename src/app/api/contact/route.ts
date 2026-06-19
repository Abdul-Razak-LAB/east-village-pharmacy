import { NextResponse } from "next/server";
import { z } from "zod";

import { sendContactEmail } from "@/lib/notifications";

const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  email: z.email("Please enter a valid email address."),
  phone: z.string().optional().or(z.literal("")),
  message: z.string().min(10, "Please provide a short message."),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = contactSchema.safeParse(json);

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

    const { fullName, email, phone, message } = parsed.data;

    await sendContactEmail({
      fullName,
      email,
      phone,
      message,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json(
      {
        ok: false,
        error: "We could not submit your message right now.",
      },
      { status: 500 },
    );
  }
}
