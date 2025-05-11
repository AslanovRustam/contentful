import { draftMode } from "next/headers";
import { NextResponse } from "next/server";
import { previewClient } from "@/lib/contentful/client";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  const response = await previewClient.getEntries({
    content_type: "post",
    "fields.slug": slug,
  });

  const post = response?.items?.[0];

  if (!post) {
    return NextResponse.json({ message: "Invalid slug" }, { status: 401 });
  }

  // Включаем режим предпросмотра
  draftMode().enable();

  return NextResponse.redirect(
    new URL(`/posts/${post.fields.slug}`, request.url)
  );
}
