import type { Metadata } from "next"
import { ButtonLink } from "@/libs/components"
import { PageHero } from "./(components)/page_hero"

export const metadata: Metadata = {
  title: "Page not found",
}

export default function NotFound() {
  return (
    <main>
      <PageHero title="Page not found" imageLabel="Quiet BC forest trail" />
      <div className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
        <p className="text-xl leading-relaxed text-zinc-800">
          Sorry, we couldn&apos;t find the page you were looking for. It may have
          moved, or the address may be mistyped.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href="/" variant="primary">
            Back to Home
          </ButtonLink>
          <ButtonLink href="/surgeons" variant="secondary">
            Find Your Urologist
          </ButtonLink>
        </div>
      </div>
    </main>
  )
}
