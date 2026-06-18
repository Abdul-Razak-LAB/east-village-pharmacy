# East Village Pharmacy Website

Next.js marketing and consultation-request site modeled from the homepage PRD image. Consultation form submissions are stored in Neon PostgreSQL, then notification messages are sent through Resend.

## Stack

- Next.js 16 (App Router + TypeScript)
- Tailwind CSS 4
- Neon (`@neondatabase/serverless`) for persistence
- Resend for email notifications and SMS gateway delivery

## Setup

1. Install dependencies:

```bash
npm.cmd install
```

2. Create environment variables:

```bash
copy .env.example .env.local
```

3. Fill `.env.local`:

- `DATABASE_URL`: Neon pooled connection string.
- `RESEND_API_KEY`: API key from Resend.
- `RESEND_FROM`: Sender identity (must be verified in Resend for production).
- `CLINIC_EMAIL_TO`: Destination inbox for consultation alerts.

4. Run locally:

```bash
npm.cmd run dev
```

Visit `http://localhost:3000`.

## Form Flow

1. User submits consultation form on the homepage.
2. API route validates payload with Zod.
3. Request is inserted into Neon table `consultation_requests`.
4. Resend sends:
	- HTML email to `CLINIC_EMAIL_TO`.
	- SMS gateway email for optional carrier selections (`AT&T`, `T-Mobile`, `Verizon`).

## Notes

- The Neon table is auto-created on first form submission.
- SMS uses carrier gateway addresses; add or adjust carrier mappings in `src/lib/notifications.ts` as needed.
- Build command uses `next build --webpack` for compatibility in this Windows environment.
