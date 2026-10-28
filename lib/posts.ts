import { readdir } from "node:fs/promises"
import path from "node:path"

export type PostMetadata = {
  title: string
  date: string
  summary: string
}

const CONTENT_DIR = path.join(process.cwd(), "content")

export async function getPostSlugs(): Promise<string[]> {
  const files = await readdir(CONTENT_DIR)
  return files
    .filter((file) => file.endsWith(".mdx") && !file.startsWith("_"))
    .map((file) => file.replace(/\.mdx$/, ""))
}

export async function getPost(slug: string) {
  const { default: Content, metadata } = await import(`@/content/${slug}.mdx`)
  return { Content, metadata: metadata as PostMetadata }
}

export async function getAllPosts() {
  const slugs = await getPostSlugs()
  const posts = await Promise.all(
    slugs.map(async (slug) => ({ slug, ...(await getPost(slug)).metadata })),
  )
  return posts.sort((a, b) => b.date.localeCompare(a.date))
}
