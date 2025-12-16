import { NextResponse } from "next/server";
import { createClient } from "next-sanity";
import { Resend } from "resend";

const client = createClient({
  projectId: "v32nzca8",
  dataset: "production",
  apiVersion: "2023-01-01",
  token: process.env.SANITY_WRITE_TOKEN_NEWSLETTER,
  useCdn: false,
});

const resend = new Resend(process.env.RESEND_API_KEY);

const WELCOME_EMAIL_HTML = `
<div style="font-family: Arial, sans-serif; text-align: center; color: #333; padding: 20px; background-color: #f9fafb;">
  <h2 style="color: #0056b3;">Welcome to NDU Student Hub! 🎓</h2>
  <p>Thanks for subscribing to our newsletter. We're excited to have you on board!</p>
  <p>You'll be the first to know about the latest news, events, and stories from around campus.</p>
  <a href="https://ndustudenthub.com" style="display:inline-block;margin:16px 0;background-color:#0056b3;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">
    Visit Student Hub
  </a>
  <p style="margin-top:20px;color:#555;">Stay tuned for our next update! 💙</p>
  <hr style="margin:30px 0;border:none;border-top:1px solid #ddd;" />
  <p style="font-size:13px;color:#888;">If you didn't sign up for this, you can <a href="https://ndustudenthub.com/unsubscribe" style="color:#0056b3;">unsubscribe</a> anytime.</p>
</div>
`;

export async function POST(req) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    // Check if already exists
    const existing = await client.fetch(
      `*[_type == "newsletter" && email == $email][0]`,
      { email }
    );

    if (existing) {
      return NextResponse.json(
        { message: "You're already subscribed!" },
        { status: 200 }
      );
    }

    // Save new subscriber
    const subscriber = await client.create({
      _type: "newsletter",
      email,
      subscribedAt: new Date().toISOString(),
    });

    // Send welcome email
    try {
      await resend.emails.send({
        from: "Jena from NDU <newsletter@ndustudenthub.com>",
        to: email,
        subject: "Welcome to NDU Student Hub! 🎓",
        html: WELCOME_EMAIL_HTML,
      });
    } catch (emailError) {
      console.error("Failed to send welcome email:", emailError);
      // We don't fail the request if email fails, as the subscription was successful
    }

    return NextResponse.json(
      { message: "Thank you for subscribing!", subscriber },
      { status: 201 }
    );
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { message: "Subscription failed", error: error.message },
      { status: 500 }
    );
  }
}
