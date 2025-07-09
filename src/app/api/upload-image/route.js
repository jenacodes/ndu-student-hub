import { NextResponse } from "next/server";

export async function POST(req) {
  //parse the form data
  const data = await req.formData();
  const file = data.get("file");

  //Handle Missing File
  if (!file) {
    return NextResponse.json(
      { success: false, message: "No file provided" },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const res = await fetch(
    `https://v32nzca8.api.sanity.io/v1/assets/images/production`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.SANITY_WRITE_TOKEN_SUBMIT}`,
        "Content-Type": file.type,
      },
      body: buffer,
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    return NextResponse.json(
      { success: false, message: errorText },
      { status: 500 }
    );
  }

  const result = await res.json();

  return NextResponse.json({
    success: true,
    image: {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: result.document._id,
      },
    },
  });
}
