import Link from "next/link"
import type { ComponentProps } from "react"
import { buttonStyles, type ButtonVariant } from "./button-styles"

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant
}

/** A navigation link that looks like a button. */
export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps) {
  return <Link className={buttonStyles(variant, className)} {...props} />
}
