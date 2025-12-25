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

export async function GET() {
  try {
    // Fetch last 15 subscribers, ordered by subscription date (newest first)
    const subscribers = await client.fetch(
      `*[_type == "newsletter"] | order(subscribedAt desc) [0...15]`
    );

    if (!subscribers.length) {
      return NextResponse.json({ message: "No subscribers found" });
    }

    const results = await Promise.allSettled(
      subscribers.map((sub) =>
        resend.emails.send({
          from: "Jena from NDU <newsletter@ndustudenthub.com>",
          to: sub.email,
          subject: "Welcome to NDU Student Hub! 🎓",
          html: WELCOME_EMAIL_HTML,
        })
      )
    );

    const sent = results.filter((r) => r.status === "fulfilled").length;
    const failed = results.filter((r) => r.status === "rejected").length;

    return NextResponse.json({
      message: "Welcome emails sent to recent subscribers",
      total: subscribers.length,
      sent,
      failed,
      recipients: subscribers.map((s) => s.email),
    });
  } catch (error) {
    console.error("Error sending welcome emails:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
