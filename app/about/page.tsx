import type { Metadata } from "next"
import { ImagePlaceholder } from "@/libs/components"
import { HOSPITALS } from "@/libs/data/site"
import { PageHero } from "../_components/page-hero"
import { HospitalIcon } from "../_components/icons"

export const metadata: Metadata = {
  title: "About Your Urologist",
  description:
    "Our mission, teaching affiliations, credentials and hospital locations across Fraser Health.",
}

const BLOCKS = [
  {
    title: "Our Mission",
    body: [
      "We are committed to providing the best Urologic care and empowering patients to make informed decisions.",
      "As dedicated healthcare professionals, we are passionate about advancing health through personalized and compassionate care.",
    ],
  },
  {
    title: "Teaching and Affiliations",
    body: [
      "We hold clinical and educational appointments with the University of British Columbia and Simon Fraser University.",
      "We play a significant role in the education of future doctors including medical students and resident physicians.",
    ],
  },
  {
    title: "Credentials",
    body: [
      "Our surgeons are board-certified under the Fellow of The Royal College of Surgeons of Canada with additional expertise and certifications.",
    ],
  },
]

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Your Urologist"
        intro="Our mission, our teaching roles and where you can find us."
        imageLabel="Coastal mountains and water"
      />

      {BLOCKS.map((block, i) => (
        <section key={block.title} className={i % 2 === 0 ? "bg-white" : "bg-brand-50"}>
          <div className="mx-auto max-w-3xl px-6 py-14">
            <h2 className="text-3xl font-bold text-navy">{block.title}</h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-zinc-800">
              {block.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold text-navy">Hospital Locations</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-3">
            {HOSPITALS.map((h) => (
              <li
                key={h.name}
                className="flex flex-col items-center rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center"
              >
                <span className="rounded-full bg-brand-100 p-4 text-brand-800 [&_svg]:h-8 [&_svg]:w-8">
                  <HospitalIcon />
                </span>
                <p className="mt-4 text-xl font-bold text-navy">{h.name}</p>
                <p className="text-brand-800">{h.city}</p>
              </li>
            ))}
          </ul>
          <ImagePlaceholder
            label="Map of the Fraser Health coverage area"
            className="mt-10 h-64 rounded-2xl"
          />
        </div>
      </section>
    </main>
  )
}
