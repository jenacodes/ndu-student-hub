import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "next-sanity";

// Sanity client
const client = createClient({
  projectId: "v32nzca8",
  dataset: "production",
  apiVersion: "2023-01-01",
  token: process.env.SANITY_WRITE_TOKEN_NEWSLETTER,
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
          from: "Jena from NDU <newsletter@ndustudenthub.com>", // ✅ must be verified domain
          // to: "jenakumoemmanuel@gmail.com", // for testing purposes
          to: sub.email, // for production
          subject: subject || "This Week at NDU Student Hub ✨",
          html:
            html ||
            `
            <div style="font-family: Arial, sans-serif; text-align: center; color: #333; padding: 20px; background-color: #f9fafb;">
            <h2 style="color: #0056b3;">Stay Updated with the Latest from NDU Student Hub 🎓</h2>

            <p style="font-size: 16px; line-height: 1.6;">
             If you haven’t checked in lately, <strong>NDU Student Hub</strong> has some exciting new stories and updates waiting for you!  
            From campus events and student highlights to insightful reads and opportunities — there’s always something new to discover.
             </p>

            <a href="https://ndustudenthub.com/news"
       style="display: inline-block; margin: 16px 0; background-color: #0056b3; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
       Catch Up on the Latest Articles
    </a>

    <p style="margin-top: 20px; color: #555; font-size: 15px;">
      Enjoy what we’re building? Share it with your friends and coursemates 💙  
      Let’s grow this community together and make sure every NDU student stays informed and inspired.
    </p>

    <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

    <p style="font-size: 13px; color: #888;">
      You’re receiving this email because you subscribed to NDU Student Hub updates.<br/>
      <a href="https://ndustudenthub.com/unsubscribe" style="color: #0056b3;">Unsubscribe</a>
    </p>
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
