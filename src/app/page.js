import Link from "next/link";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      {" "}
      <section className="section">
        <div className="container text-center py-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Hi, I'm Rustam
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Welcome to my blog! Here, I share thoughts, tips, and experiences
            about development, technology, and the freelance life. Everything
            that helps me grow as a developer — and might help you too.
          </p>
          <Link
            href="/posts"
            className="inline-block bg-black text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-stone-800 transition"
          >
            Go to posts
          </Link>
        </div>
      </section>
    </div>
  );
}
