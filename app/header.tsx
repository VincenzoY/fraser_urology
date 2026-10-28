"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { NAV_LINKS, SITE_NAME } from "@/libs/data/site"

const bar =
  "absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 motion-reduce:transition-none"

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
          className="text-xl font-bold tracking-tight text-navy transition-colors duration-200 hover:text-brand-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy motion-reduce:transition-none"
        >
          {SITE_NAME}
        </Link>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-md text-navy transition-colors duration-200 hover:bg-brand-100 focus-visible:outline-2 focus-visible:outline-navy motion-reduce:transition-none md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="relative block h-5 w-6">
            <span className={`${bar} ${open ? "top-[9px] rotate-45" : "top-0"}`} />
            <span className={`${bar} top-[9px] ${open ? "scale-x-0 opacity-0" : ""}`} />
            <span className={`${bar} ${open ? "top-[9px] -rotate-45" : "top-[18px]"}`} />
          </span>
        </button>

        <nav
          id="primary-nav"
          aria-label="Primary"
          className={`absolute inset-x-0 top-full border-b border-brand-200 bg-white px-6 pb-4 transition-[opacity,transform,visibility] duration-200 motion-reduce:transition-none md:visible md:static md:translate-y-0 md:border-0 md:bg-transparent md:p-0 md:opacity-100 ${
            open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1 md:flex-row md:gap-2">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`relative block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200 after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-fraser-orange after:transition-transform after:duration-300 hover:bg-brand-100 hover:text-navy hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-navy motion-reduce:transition-none motion-reduce:after:transition-none ${
                    isActive(href)
                      ? "text-navy after:scale-x-100"
                      : "text-brand-900 after:scale-x-0"
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
