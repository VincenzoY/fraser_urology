export type ButtonVariant = "primary" | "secondary" | "accent"

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand-700 text-white hover:bg-brand-800",
  secondary:
    "border-2 border-brand-700 bg-white text-brand-800 hover:bg-brand-100",
  accent: "bg-fraser-orange text-navy hover:bg-fraser-orange-dark",
}

export function buttonStyles(variant: ButtonVariant = "primary", className = "") {
  return `${base} ${variants[variant]} ${className}`.trim()
}
