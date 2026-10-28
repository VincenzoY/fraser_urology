import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "Newsletter",
}

export default async function NewsletterIndex() {
  const posts = await getAllPosts()

  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-semibold">Newsletter</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/newsletter/${post.slug}`} className="text-xl font-medium">
              {post.title}
            </Link>
            <p className="text-sm text-zinc-500">{post.date}</p>
            <p>{post.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
