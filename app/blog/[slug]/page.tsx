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
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const { metadata } = await loadPost(slug)
  return { title: metadata.title, description: metadata.summary }
}

export default async function BlogPost({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params
  const { Content } = await loadPost(slug)

  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16">
      <article>
        <Content />
      </article>
    </main>
  )
}
