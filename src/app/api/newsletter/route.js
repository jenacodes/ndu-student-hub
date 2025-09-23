import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "next-sanity";

// Sanity client
const client = createClient({
  projectId: "v32nzca8",
  dataset: "production",
  apiVersion: "2023-01-01",
  token: process.env.SANITY_WRITE_TOKEN_NEWSLETTER, // must have read access
  useCdn: false,
});

// Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// POST /api/newsletter/send
export async function POST(req) {
  try {
    // Allow custom subject & body in request
    const { subject, html } = await req.json().catch(() => ({}));

    // Get all subscribers from Sanity
    const subscribers = await client.fetch(`*[_type == "newsletter"]{ email }`);

    if (!subscribers.length) {
      return NextResponse.json(
        { message: "No subscribers found" },
        { status: 404 }
      );
    }

    // Send emails in parallel
    const results = await Promise.allSettled(
      subscribers.map((sub) =>
        resend.emails.send({
          from: "newsletter@ndustudenthub.com", // ✅ must be verified domain
          to: sub.email,
          subject: subject || "This Week at NDU Student Hub ✨",
          html:
            html ||
            `
            <div style="font-family: sans-serif; line-height: 1.5;">
              <h2>Hello from NDU Student Hub 🎉</h2>
              <p>Here’s the latest news, events, and updates from campus.</p>
              <p><a href="https://ndustudenthub.com">Check them out here</a></p>
            </div>
          `,
        })
      )
    );

    // Count successes & failures
    const successCount = results.filter((r) => r.status === "fulfilled").length;
    const failCount = results.filter((r) => r.status === "rejected").length;

    // Log failures
    results.forEach((r, i) => {
      if (r.status === "rejected") {
        console.error(
          `❌ Failed for ${subscribers[i].email}:`,
          r.reason?.response?.data || r.reason?.message || r.reason
        );
      }
    });

    return NextResponse.json(
      {
        message: "Newsletter send completed",
        total: subscribers.length,
        sent: successCount,
        failed: failCount,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter send error:", error);
    return NextResponse.json(
      { message: "Failed to send newsletter", error: error.message },
      { status: 500 }
    );
  }
}
