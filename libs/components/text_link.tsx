import Link from "next/link"
import type { AnchorHTMLAttributes } from "react"

type TextLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string
}

const styles =
  "font-medium text-brand-800 underline decoration-brand-300 underline-offset-4 transition-colors hover:text-navy hover:decoration-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"

/**
 * Inline text link. Internal paths use next/link; absolute URLs, mailto: and
 * tel: links render a plain anchor (external http(s) links open in a new tab).
 */
export function TextLink({ href, className, children, ...props }: TextLinkProps) {
  const classes = `${styles} ${className ?? ""}`.trim()

  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  const isWeb = /^https?:\/\//.test(href)
  return (
    <a
      href={href}
      className={classes}
      {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  )
}
