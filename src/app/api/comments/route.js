import { NextResponse } from "next/server";
import { client } from "@/sanity/client";
import { writeClient } from "@/sanity/writeClient";

// GET /api/comments?slug=some-article-slug
// Returns all approved comments for the given news article slug
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "slug is required" }, { status: 400 });
  }

  const query = `*[_type == "comment" && newsSlug == $slug && approved == true] | order(_createdAt desc) {
    _id,
    name,
    text,
    _createdAt
  }`;

  const comments = await client.fetch(query, { slug });
  return NextResponse.json({ comments });
}

// POST /api/comments
// Body: { name, email?, text, newsSlug }
// Creates a new (unapproved) comment in Sanity
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, text, newsSlug } = body;

    // Basic validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 },
      );
    }
    if (!text || typeof text !== "string" || text.trim().length < 3) {
      return NextResponse.json(
        { error: "Comment must be at least 3 characters long." },
        { status: 400 },
      );
    }
    if (!newsSlug || typeof newsSlug !== "string") {
      return NextResponse.json(
        { error: "newsSlug is required." },
        { status: 400 },
      );
    }

    // Check token is configured
    if (!process.env.SANITY_API_TOKEN) {
      console.error("SANITY_API_TOKEN is not set.");
      return NextResponse.json(
        { error: "Server configuration error. Please try again later." },
        { status: 500 },
      );
    }

    await writeClient.create({
      _type: "comment",
      name: name.trim(),
      email: email?.trim() || "",
      text: text.trim(),
      newsSlug: newsSlug.trim(),
      approved: false,
    });

    return NextResponse.json(
      {
        message:
          "Comment submitted! It will appear after moderation. Thank you.",
      },
      { status: 201 },
    );
  } catch (err) {
    console.error("Comment POST error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
