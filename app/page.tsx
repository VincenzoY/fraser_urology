import { ButtonLink, ImagePlaceholder } from "@/libs/components"

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden text-white">
        <ImagePlaceholder
          label="Calm BC scene: mountain reflected in a still lake"
          className="absolute inset-0 bg-linear-to-b from-brand-700 via-brand-800 to-brand-900"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
          <h1 className="max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
            Fraser Urology
            <span className="mt-3 block text-2xl font-normal text-brand-50 md:text-3xl">
              Compassionate, Expert Urologic Care in Fraser Health.
            </span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="text-xl leading-relaxed text-zinc-800 md:text-2xl">
          We are Urologic Surgeons who provide care within Fraser Health to
          patients in our communities — from Burnaby to Boston Bar.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-zinc-700">
          This website will help you connect with your Urologist and empower
          your care.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href="/surgeons" variant="primary">
            Find Your Urologist
          </ButtonLink>
          <ButtonLink href="/about" variant="secondary">
            Learn About Our Services
          </ButtonLink>
        </div>
      </section>

      <section aria-hidden="true" className="bg-brand-50">
        <ImagePlaceholder label="Forest light along a BC river" className="mx-auto h-48 max-w-6xl bg-brand-100" />
      </section>
    </main>
  )
}
