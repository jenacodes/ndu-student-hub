import { NextResponse } from "next/server";
import { client } from "@/sanity/client";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const start = parseInt(searchParams.get("start")) || 0;
  const limit = parseInt(searchParams.get("limit")) || 6;
  const category = searchParams.get("category") || "all";
  const faculty = searchParams.get("faculty") || "all";

  let filters = [`_type == "news"`];
  if (category !== "all") filters.push(`category == "${category}"`);
  if (faculty !== "all") filters.push(`faculty == "${faculty}"`);

  const filterQuery = filters.join(" && ");

  const newsQuery = `* [${filterQuery}] | order(date desc) [${start}...${
    start + limit
  }] {
    _id,
    title,
    category,
    faculty,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    snippet,
    date,
    author
  }`;

  const totalQuery = `count(* [${filterQuery}])`;

  const [news, total] = await Promise.all([
    client.fetch(newsQuery),
    client.fetch(totalQuery),
  ]);

  return NextResponse.json({ news, total });
}
