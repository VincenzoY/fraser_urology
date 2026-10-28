type ImagePlaceholderProps = {
  /** Describes the image that will eventually go here. */
  label: string
  /** "corner" keeps the label out of the way when text is overlaid (e.g. banners). */
  labelPosition?: "center" | "corner"
  className?: string
}

const positions = {
  center: "items-center justify-center p-4 text-center text-sm text-brand-900",
  corner: "items-end justify-end p-3 text-xs text-white/80",
}

/** Stand-in for a real photo until final assets are supplied. */
export function ImagePlaceholder({
  label,
  labelPosition = "center",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex bg-brand-200 ${positions[labelPosition]} ${className}`.trim()}
    >
      {label}
    </div>
  )
}
