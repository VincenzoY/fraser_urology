import { ImagePlaceholder } from "@/libs/components"
import type { Surgeon } from "@/libs/data/surgeons"
import { ContactDetails } from "./contact-details"

export function SurgeonCard({ surgeon, tone }: { surgeon: Surgeon; tone: "white" | "tinted" }) {
  const [lead, ...rest] = surgeon.about

  return (
    <section
      id={surgeon.slug}
      aria-labelledby={`${surgeon.slug}-name`}
      className={`scroll-mt-24 py-14 ${tone === "tinted" ? "bg-brand-50" : "bg-white"}`}
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[260px_1fr]">
        <ImagePlaceholder
          label={`Photo of ${surgeon.name}`}
          className="aspect-4/5 w-full max-w-65 rounded-2xl"
        />

        <div>
          <h2 id={`${surgeon.slug}-name`} className="text-3xl font-bold text-navy">
            {surgeon.name}
          </h2>
          <p className="mt-1 text-lg text-brand-800">{surgeon.title}</p>

          <h3 className="mt-6 text-sm font-bold tracking-wide text-brand-800 uppercase">About</h3>
          <div className="mt-2 space-y-4 text-lg leading-relaxed text-zinc-800">
            <p>{lead}</p>
            {rest.length > 0 ? (
              <details className="group">
                <summary className="cursor-pointer font-semibold text-brand-800 underline underline-offset-4 group-open:mb-4">
                  <span className="group-open:hidden">Read full bio</span>
                  <span className="hidden group-open:inline">Show less</span>
                </summary>
                <div className="space-y-4">
                  {rest.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </details>
            ) : null}
          </div>

          <h3 className="mt-8 mb-3 text-sm font-bold tracking-wide text-brand-800 uppercase">Contact</h3>
          <ContactDetails
            address={surgeon.address}
            email={surgeon.email}
            phone={surgeon.phone}
            fax={surgeon.fax}
          />
        </div>
      </div>
    </section>
  )
}
