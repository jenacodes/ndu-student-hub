import { revalidatePath } from "next/cache";
import { parseBody } from "next-sanity/webhook";

export async function POST(req) {
  try {
    const { isValidSignature, body } = await parseBody(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    );

    if (!isValidSignature) {
      return new Response("Invalid Signature", { status: 401 });
    }

    if (!body?._type) {
      return new Response("Bad Request", { status: 400 });
    }

    // Always revalidate the home page as it has the "Latest Updates"
    revalidatePath("/");

    // Revalidate the specific news list page
    if (body._type === "news") {
      revalidatePath("/news");
      // Revalidate the specific article
      if (body.slug?.current) {
        revalidatePath(`/news/${body.slug.current}`);
      }
    }

    return new Response(
      JSON.stringify({
        status: 200,
        revalidated: true,
        now: Date.now(),
        body,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.error(err);
    return new Response(err.message, { status: 500 });
  }
}
