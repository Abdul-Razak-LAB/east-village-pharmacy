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

export type ContactMessageInsert = {
  fullName: string;
  email: string;
  phone?: string;
  message: string;
};

export type PrescriptionInsert = {
  fullName: string;
  email: string;
  phone: string;
  notes?: string;
  fileName?: string;
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

  await sql`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id BIGSERIAL PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      full_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      message TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'new'
    );
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS prescription_requests (
      id BIGSERIAL PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      full_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      notes TEXT,
      file_name TEXT,
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

export async function saveContactMessage(input: ContactMessageInsert) {
  if (!sql) {
    throw new Error("DATABASE_URL is required to use Neon.");
  }

  await ensureSchema();

  const result = (await sql`
    INSERT INTO contact_messages (
      full_name,
      email,
      phone,
      message
    ) VALUES (
      ${input.fullName},
      ${input.email},
      ${input.phone ?? null},
      ${input.message}
    )
    RETURNING id, created_at;
  `) as { id: number; created_at: string }[];

  const [inserted] = result;

  return inserted;
}

export async function savePrescriptionRequest(input: PrescriptionInsert) {
  if (!sql) {
    throw new Error("DATABASE_URL is required to use Neon.");
  }

  await ensureSchema();

  const result = (await sql`
    INSERT INTO prescription_requests (
      full_name,
      email,
      phone,
      notes,
      file_name
    ) VALUES (
      ${input.fullName},
      ${input.email},
      ${input.phone},
      ${input.notes ?? null},
      ${input.fileName ?? null}
    )
    RETURNING id, created_at;
  `) as { id: number; created_at: string }[];

  const [inserted] = result;

  return inserted;
}
