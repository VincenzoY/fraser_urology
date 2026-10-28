import type { ButtonHTMLAttributes } from "react"
import { buttonStyles, type ButtonVariant } from "./button_styles"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return <button type={type} className={buttonStyles(variant, className)} {...props} />
}
