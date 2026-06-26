import { NextResponse } from "next/server";
import { z } from "zod";

import { saveContactMessage } from "@/lib/db";
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
      const details = parsed.error.flatten();
      const firstFieldError = Object.values(details.fieldErrors)
        .flat()
        .find((message): message is string => typeof message === "string" && message.length > 0);
      const errorMessage = firstFieldError ?? details.formErrors[0] ?? "Validation failed";

      return NextResponse.json(
        {
          ok: false,
          error: errorMessage,
          details,
        },
        { status: 400 },
      );
    }

    const { fullName, email, phone, message } = parsed.data;

    const dbResult = await Promise.allSettled([
      saveContactMessage({
        fullName,
        email,
        phone,
        message,
      }),
    ]);

    if (dbResult[0].status === "rejected") {
      console.error("Contact message save failed", dbResult[0].reason);
    }

    const emailResult = await Promise.allSettled([
      sendContactEmail({
        fullName,
        email,
        phone,
        message,
      }),
    ]);

    if (emailResult[0].status === "rejected") {
      console.error("Contact email delivery failed", emailResult[0].reason);
    }

    if (dbResult[0].status === "rejected" && emailResult[0].status === "rejected") {
      return NextResponse.json({
        ok: true,
        warning:
          "Your form was submitted, but our systems are temporarily unavailable for processing. Please call us at (770) 744-2461 if your request is urgent.",
      });
    }

    if (dbResult[0].status === "rejected") {
      return NextResponse.json({
        ok: true,
        warning:
          "Your form was submitted, but secure storage is temporarily unavailable. Please call us at (770) 744-2461 if your request is urgent.",
      });
    }

    if (emailResult[0].status === "rejected") {
      return NextResponse.json({
        ok: true,
        warning:
          "Your form was submitted, but email delivery is temporarily unavailable. Please call us at (770) 744-2461 if your request is urgent.",
      });
    }

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
