import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  website?: string; // honeypot — real visitors never see or fill this field
};

// TODO: wire this up to a real delivery mechanism (e.g. Resend, SES, or a
// forwarding inbox) before launch. For now it validates the submission and
// logs it server-side so the form is honest about what it currently does.
export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, message, website } = body;

  if (website?.trim()) {
    // Honeypot tripped — a bot filled the hidden field. Report success so
    // it doesn't learn anything, but skip logging it as a real inquiry.
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.trim())) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  console.log("[contact] New inquiry", {
    name: name.trim(),
    email: email.trim(),
    company: company?.trim() || null,
    message: message.trim(),
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
