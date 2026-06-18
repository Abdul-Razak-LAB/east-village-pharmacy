import { Resend } from "resend";

type EmailPayload = {
  requestId: number;
  createdAt: string;
  fullName: string;
  email: string;
  phone: string;
  preferredContact: "phone" | "email" | "video";
  consultationType: string;
  message: string;
};

type SmsCarrier = "att" | "tmobile" | "verizon";

const SMS_GATEWAYS: Record<SmsCarrier, string> = {
  att: "txt.att.net",
  tmobile: "tmomail.net",
  verizon: "vtext.com",
};

const resendApiKey = process.env.RESEND_API_KEY;

function getResendClient() {
  if (!resendApiKey) {
    throw new Error("RESEND_API_KEY is required to send notifications.");
  }

  return new Resend(resendApiKey);
}

function normalizePhone(phone: string) {
  return phone.replace(/\D/g, "").slice(-10);
}

export async function sendConsultationEmail(payload: EmailPayload) {
  const resend = getResendClient();
  const from = process.env.RESEND_FROM ?? "East Village Pharmacy <onboarding@resend.dev>";
  const to = process.env.CLINIC_EMAIL_TO;

  if (!to) {
    throw new Error("CLINIC_EMAIL_TO is required for consultation email alerts.");
  }

  return resend.emails.send({
    from,
    to,
    subject: `New consultation request #${payload.requestId}`,
    html: `
      <h2>New consultation request</h2>
      <p><strong>ID:</strong> ${payload.requestId}</p>
      <p><strong>Created:</strong> ${payload.createdAt}</p>
      <p><strong>Name:</strong> ${payload.fullName}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Phone:</strong> ${payload.phone}</p>
      <p><strong>Preferred Contact:</strong> ${payload.preferredContact}</p>
      <p><strong>Consultation Type:</strong> ${payload.consultationType}</p>
      <p><strong>Message:</strong> ${payload.message}</p>
    `,
  });
}

export async function sendConsultationSms(params: {
  requestId: number;
  fullName: string;
  phone: string;
  consultationType: string;
  carrier?: SmsCarrier;
}) {
  const resend = getResendClient();

  if (!params.carrier) {
    return null;
  }

  const digits = normalizePhone(params.phone);

  if (digits.length !== 10) {
    throw new Error("A valid US 10-digit phone number is required for SMS gateway delivery.");
  }

  const gateway = SMS_GATEWAYS[params.carrier];
  const to = `${digits}@${gateway}`;
  const from = process.env.RESEND_FROM ?? "East Village Pharmacy <onboarding@resend.dev>";

  return resend.emails.send({
    from,
    to,
    subject: `Consultation #${params.requestId}`,
    text: `${params.fullName} submitted ${params.consultationType}. Call back: ${params.phone}`,
  });
}
