import { ImagePlaceholder } from "@/libs/components"

type PageHeroProps = {
  title: string
  intro?: string
  /** Describes the BC nature image that will replace the placeholder. */
  imageLabel: string
}

export function PageHero({ title, intro, imageLabel }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-700 text-white">
      <ImagePlaceholder label={imageLabel} labelPosition="corner" className="absolute inset-0 bg-linear-to-br from-brand-800 to-brand-900" />
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
        {intro ? <p className="mt-4 max-w-2xl text-lg text-brand-50">{intro}</p> : null}
      </div>
    </section>
  )
}
