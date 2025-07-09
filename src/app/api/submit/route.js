import { createClient } from "next-sanity";
import { NextResponse } from "next/server";

const client = createClient({
  projectId: "v32nzca8",
  dataset: "production",
  apiVersion: "2023-01-01",
  token: process.env.SANITY_WRITE_TOKEN_SUBMIT,
  useCdn: false,
});

export async function POST(req) {
  try {
    const data = await req.json();

    const doc = await client.create({
      _type: "submission",
      title: data.title,
      authorName: data.authorName,
      faculty: data.faculty,
      category: data.category,
      content: data.content,
      snippet: data.snippet || "",
      tags: data.tags || [],
      eventDate: data.eventDate || null,
      location: data.location || "",
      image: data.image || null,
      status: "pending",
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, id: doc._id });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
