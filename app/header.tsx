"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { NAV_LINKS, SITE_NAME } from "@/libs/data/site"
import { CloseIcon, MenuIcon } from "./(components)/icons"

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
          <span className="flex text-3xl">{open ? <CloseIcon /> : <MenuIcon />}</span>
        </button>

        <nav
          id="primary-nav"
          aria-label="Primary"
          className={`absolute inset-x-0 top-full grid bg-white transition-[grid-template-rows,visibility] duration-300 ease-out motion-reduce:transition-none md:visible md:static md:block md:bg-transparent ${
            open
              ? "visible grid-rows-[1fr] border-b border-brand-200"
              : "invisible grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden md:overflow-visible">
            <div className="px-6 pb-4 md:p-0">
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
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
