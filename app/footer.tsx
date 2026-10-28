import Link from "next/link"
import { ImagePlaceholder } from "@/libs/components"
import { NAV_LINKS, SITE_NAME, TAGLINE } from "@/libs/data/site"

export function Footer() {
  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="text-xl font-bold">{SITE_NAME}</p>
          <p className="mt-2 text-brand-100">{TAGLINE}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="space-y-2">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-brand-100 underline-offset-4 hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-start gap-4">
          <ImagePlaceholder label="Fraser Health logo" className="h-14 w-28 rounded bg-white/90" />
          <ImagePlaceholder label="UBC logo" className="h-14 w-28 rounded bg-white/90" />
        </div>
      </div>

      <div className="border-t border-white/20 px-6 py-4 text-center text-sm text-brand-100">
        <FooterCopyright />
      </div>
    </footer>
  )
}

function FooterCopyright() {
  return (
    <p>
      © {SITE_NAME}, {new Date().getFullYear()}
    </p>
  )
}
