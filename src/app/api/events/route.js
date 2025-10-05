import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const start = parseInt(searchParams.get("start") || "0", 10);
  const limit = parseInt(searchParams.get("limit") || "6", 10);

  const query = groq`*[_type == "event"] | order(date asc)[$start...$end] {
    _id,
    title,
    category,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    shortDescription,
    date,
    time,
    venue
  }`;

  const events = await client.fetch(query, { start, end: start + limit });

  const total = await client.fetch(groq`count(*[_type == "event"])`);

  return NextResponse.json({ events, total });
}
