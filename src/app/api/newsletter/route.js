import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "v32nzca8",
  dataset: "production",
  apiVersion: "2023-01-01",
  token: process.env.SANITY_WRITE_TOKEN_NEWSLETTER,
  useCdn: false,
});

const resend = new Resend(process.env.RESEND_API_KEY);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function POST(req) {
  try {
    const { subject, html, password } = await req.json().catch(() => ({}));

    if (password !== process.env.ADMIN_PASS) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const subscribers = await client.fetch(`*[_type == "newsletter"]{ email }`);

    if (!subscribers.length) {
      return NextResponse.json(
        { message: "No subscribers found" },
        { status: 404 }
      );
    }

    let sent = 0;
    let failed = 0;
    const BATCH_SIZE = 5;

    for (let i = 0; i < subscribers.length; i += BATCH_SIZE) {
      const batch = subscribers.slice(i, i + BATCH_SIZE);

      const results = await Promise.allSettled(
        batch.map((sub) =>
          resend.emails.send({
            from: "Jena from NDU <newsletter@ndustudenthub.com>",
            to: sub.email,
            // to: "jenakumoemmanuel@gmail.com",
            subject: subject || "This Week at NDU Student Hub ✨",
            html:
              html ||
              `<div style="font-family: Arial, sans-serif; text-align: center; color: #333; padding: 20px; background-color: #f9fafb;">
                <h2 style="color: #0056b3;">Stay Updated with the Latest from NDU Student Hub 🎓</h2>
                <p>If you haven’t checked in lately, <strong>NDU Student Hub</strong> has new stories and updates waiting for you.</p>
                <a href="https://ndustudenthub.com/news" style="display:inline-block;margin:16px 0;background-color:#0056b3;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">
                  Catch Up on the Latest Articles
                </a>
                <p style="margin-top:20px;color:#555;">Enjoy what we’re building? Share it with your friends and coursemates 💙</p>
                <hr style="margin:30px 0;border:none;border-top:1px solid #ddd;" />
                <p style="font-size:13px;color:#888;">You’re receiving this email because you subscribed to NDU Student Hub updates.<br/>
                <a href="https://ndustudenthub.com/unsubscribe" style="color:#0056b3;">Unsubscribe</a></p>
              </div>`,
          })
        )
      );

      sent += results.filter((r) => r.status === "fulfilled").length;
      failed += results.filter((r) => r.status === "rejected").length;

      // wait 1 second before next batch
      await sleep(1000);
    }

    return NextResponse.json({
      message: "Newsletter batch send completed",
      total: subscribers.length,
      sent,
      failed,
    });
  } catch (error) {
    console.error("Newsletter send error:", error);
    return NextResponse.json(
      { message: "Failed to send newsletter", error: error.message },
      { status: 500 }
    );
  }
}
