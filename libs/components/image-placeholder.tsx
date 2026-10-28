type ImagePlaceholderProps = {
  /** Describes the image that will eventually go here. */
  label: string
  className?: string
}

/** Stand-in for a real photo until final assets are supplied. */
export function ImagePlaceholder({ label, className = "" }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center bg-brand-200 text-sm text-brand-900 ${className}`.trim()}
    />
  )
}
