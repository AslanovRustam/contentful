import PostBody from "@/components/PostBody";
import PostHeader from "@/components/PostHeader";

import { client, previewClient } from "@/lib/contentful/client";

async function page({ params: paramsPromise, preview = false }) {
  const { slug } = await paramsPromise;

  const cfClient = preview ? previewClient : client;

  const response = await cfClient.getEntries({
    content_type: "post",
    "fields.slug": slug,
  });

  if (!response?.items?.length) {
    return {
      redirect: {
        destination: "/posts",
        permanent: false,
      },
    };
  }

  const post = response?.items?.[0];

  return (
    <section className="section">
      <div className="container">
        <article className=" mx-auto">
          <PostHeader post={post} />
          <PostBody post={post} />
        </article>
      </div>
    </section>
  );
}

export default page;
