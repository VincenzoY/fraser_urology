import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { PageHero } from "../_components/page-hero"

export const metadata: Metadata = {
  title: "News & Updates",
}

const UPCOMING = [
  "New surgical technologies",
  "Patient education events",
  "Research updates and partnerships",
]

export default async function NewsletterIndex() {
  const posts = await getAllPosts()

  return (
    <main>
      <PageHero title="News & Updates" imageLabel="Misty BC coastline" />
      <div className="mx-auto w-full max-w-3xl px-6 py-14">
        <h2 className="text-3xl font-bold text-navy">Coming Soon</h2>
        <p className="mt-3 text-lg text-zinc-800">
          Announcements will be shared here, including:
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-6 text-lg text-zinc-800">
          {UPCOMING.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <ul className="mt-12 space-y-6">
          {posts.map((post) => (
            <li key={post.slug} className="rounded-2xl border border-brand-200 p-6">
              <Link
                href={`/newsletter/${post.slug}`}
                className="text-xl font-bold text-brand-800 underline underline-offset-4"
              >
                {post.title}
              </Link>
              <p className="text-sm text-zinc-600">{post.date}</p>
              <p className="mt-2">{post.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
