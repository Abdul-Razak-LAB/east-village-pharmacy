import { neon } from "@neondatabase/serverless";

export type ConsultationInsert = {
  fullName: string;
  email: string;
  phone: string;
  preferredContact: "phone" | "email" | "video";
  consultationType: string;
  message: string;
  smsCarrier?: string;
};

const databaseUrl = process.env.DATABASE_URL;
const sql = databaseUrl ? neon(databaseUrl) : null;
let schemaReady = false;

async function ensureSchema() {
  if (!sql) {
    throw new Error("DATABASE_URL is required to use Neon.");
  }

  if (schemaReady) {
    return;
  }

  await sql`
    CREATE TABLE IF NOT EXISTS consultation_requests (
      id BIGSERIAL PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      full_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      preferred_contact TEXT NOT NULL,
      consultation_type TEXT NOT NULL,
      message TEXT NOT NULL,
      sms_carrier TEXT,
      status TEXT NOT NULL DEFAULT 'new'
    );
  `;

  schemaReady = true;
}

export async function saveConsultationRequest(input: ConsultationInsert) {
  if (!sql) {
    throw new Error("DATABASE_URL is required to use Neon.");
  }

  await ensureSchema();

  const result = (await sql`
    INSERT INTO consultation_requests (
      full_name,
      email,
      phone,
      preferred_contact,
      consultation_type,
      message,
      sms_carrier
    ) VALUES (
      ${input.fullName},
      ${input.email},
      ${input.phone},
      ${input.preferredContact},
      ${input.consultationType},
      ${input.message},
      ${input.smsCarrier ?? null}
    )
    RETURNING id, created_at;
  `) as { id: number; created_at: string }[];

  const [inserted] = result;

  return inserted;
}
