import { createClient } from "next-sanity";
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Sanity client
const client = createClient({
  projectId: "v32nzca8",
  dataset: "production",
  apiVersion: "2023-01-01",
  token: process.env.SANITY_WRITE_TOKEN_NEWSLETTER,
  useCdn: false,
});

// POST /api/newsletter
// This route handles newsletter subscriptions
export async function POST(req) {
  // Initialize Resend
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    let { email } = body;

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    // To avoid case-sensitive duplicates
    email = email.toLowerCase();

    //  Check if the email already exists
    const existing = await client.fetch(
      `*[_type == "newsletter" && email == $email][0]`,
      { email }
    );

    if (existing) {
      return NextResponse.json(
        { message: "You are already subscribed!" },
        { status: 409 }
      );
    }

    const result = await client.create({
      _type: "newsletter",
      email,
      subscribedAt: new Date().toISOString(),
    });

    // Send confirmation email via Resend
    await resend.emails.send({
      from: "NDU Student Hub <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to NDU Student Hub Newsletter 🎉",
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h2>You're subscribed! 🎉</h2>
          <p>Thanks for signing up for the <strong>NDU Student Hub</strong> newsletter.</p>
          <p>You’ll now get exclusive updates, events, and helpful info from campus.</p>
          <br/>
          <small>If this wasn’t you, you can safely ignore this email.</small>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Subscribed successfully", result },
      { status: 201 }
    );
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
