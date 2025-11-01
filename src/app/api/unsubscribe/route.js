import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json({ error: "Email not provided" }, { status: 400 });
  }

  try {
    // Find the subscriber
    const subscriber = await client.fetch(
      `*[_type == "newsletter" && email == $email][0]`,
      { email }
    );

    //test if no subscriber found
    if (!subscriber) {
      return NextResponse.redirect(new URL("/unsubscribe/error", request.url));
    }

    // Update in Sanity
    await client.patch(subscriber._id).set({ unsubscribed: true }).commit();

    // Redirect to success page
    return NextResponse.redirect(new URL("/unsubscribe/success", request.url));
  } catch (err) {
    console.error(err);
    return NextResponse.redirect(new URL("/unsubscribe/error", request.url));
  }
}
