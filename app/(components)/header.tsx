"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { NAV_LINKS, SITE_NAME } from "@/libs/data/site"

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
        >
          {SITE_NAME}
        </Link>

        <button
          type="button"
          className="rounded-md border border-brand-300 px-3 py-2 text-sm font-semibold text-navy md:hidden"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          id="primary-nav"
          aria-label="Primary"
          className={`${open ? "block" : "hidden"} absolute inset-x-0 top-full border-b border-brand-200 bg-white px-6 pb-4 md:static md:block md:border-0 md:bg-transparent md:p-0`}
        >
          <ul className="flex flex-col gap-1 md:flex-row md:gap-2">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-brand-100 focus-visible:outline-2 focus-visible:outline-navy ${
                    isActive(href)
                      ? "bg-brand-100 text-navy underline decoration-fraser-orange decoration-2 underline-offset-8"
                      : "text-brand-900"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
