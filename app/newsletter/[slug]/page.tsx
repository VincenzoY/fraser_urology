import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPost, getPostSlugs } from "@/lib/posts"

export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

async function loadPost(slug: string) {
  const slugs = await getPostSlugs()
  if (!slugs.includes(slug)) notFound()
  return getPost(slug)
}

export async function generateMetadata({
  params,
}: PageProps<"/newsletter/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const { metadata } = await loadPost(slug)
  return { description: metadata.summary }
}

export default async function NewsletterPost({ params }: PageProps<"/newsletter/[slug]">) {
  const { slug } = await params
  const { Content } = await loadPost(slug)

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <article className="prose max-w-none prose-headings:text-navy prose-a:text-brand-800">
        <Content />
      </article>
    </main>
  )
}
