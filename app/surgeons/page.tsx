import type { Metadata } from "next"
import { SURGEONS } from "@/libs/data/surgeons"
import { PageHero } from "../(components)/page_hero"
import { SurgeonCard } from "./surgeon_card"

export const metadata: Metadata = {
  title: "Our Surgeons",
  description: "Meet the Fraser Urology surgeons and find their contact details.",
}

export default function SurgeonsPage() {
  return (
    <main>
      <PageHero
        title="Our Surgeons"
        intro="Find your urologist and how to reach their office."
        imageLabel="Forest light through BC trees"
      />
      {SURGEONS.map((surgeon, i) => (
        <SurgeonCard key={surgeon.slug} surgeon={surgeon} tone={i % 2 === 0 ? "white" : "tinted"} />
      ))}
    </main>
  )
}
