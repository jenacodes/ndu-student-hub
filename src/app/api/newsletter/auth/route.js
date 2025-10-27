import { NextResponse } from "next/server";

export async function POST(req) {
  const { password } = await req.json();

  if (password === process.env.ADMIN_PASS) {
    return NextResponse.json({ authorized: true });
  }

  return NextResponse.json({ authorized: false }, { status: 401 });
}
