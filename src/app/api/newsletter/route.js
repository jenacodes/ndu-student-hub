import { createClient } from "next-sanity";
import { NextResponse } from "next/server";

// Initialize Sanity client
const client = createClient({
  projectId: "v32nzca8",
  dataset: "production",
  apiVersion: "2023-01-01",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

// POST /api/newsletter
// This route handles newsletter subscriptions
export async function POST(req) {
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
