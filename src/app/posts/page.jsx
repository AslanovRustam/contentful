import { client } from "@/lib/contentful/client";
import PostCard from "@/components/PostCard";

export const revalidate = 3600;

export default async function Page() {
  const responce = await client.getEntries({ content_type: "post" });
  const posts = responce.items;

  return (
    <section className="section">
      <div className="container">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10 gap-10">
          {posts.map((post, i) => (
            <PostCard key={post.fields.slug} post={post} />
          ))}
        </ul>
      </div>
    </section>
  );
}
