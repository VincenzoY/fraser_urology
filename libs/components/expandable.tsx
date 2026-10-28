"use client"

import { useId, useState, type ReactNode } from "react"

type ExpandableProps = {
  children: ReactNode
  expandLabel?: string
  collapseLabel?: string
}

/** A toggle button that slides its content open and closed. */
export function Expandable({
  children,
  expandLabel = "Read more",
  collapseLabel = "Show less",
}: ExpandableProps) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="font-semibold text-brand-800 underline underline-offset-4 transition-colors hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
      >
        {open ? collapseLabel : expandLabel}
      </button>
      <div
        id={panelId}
        inert={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-4 pt-4">{children}</div>
        </div>
      </div>
    </div>
  )
}
