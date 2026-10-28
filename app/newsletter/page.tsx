import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { PageHero } from "../(components)/page_hero"

export default async function NewsletterIndex() {
  const posts = await getAllPosts()

  return (
    <main>
      <PageHero title="News & Updates" imageLabel="Misty BC coastline" />
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        {posts.length === 0 ? (
          <p className="flex min-h-[40vh] items-center justify-center text-center text-xl text-zinc-700">
            No news or updates yet.
          </p>
        ) : (
          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.slug} className="py-2">
                <Link
                  href={`/newsletter/${post.slug}`}
                  className="inline-block text-3xl font-bold text-brand-800 underline underline-offset-4"
                >
                  {post.title}
                </Link>
                <p className="mt-2 text-sm text-zinc-600">{post.date}</p>
                <p className="mt-4 text-lg">{post.summary}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}
