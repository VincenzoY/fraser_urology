import type { Metadata } from "next"
import { ImagePlaceholder, TextLink } from "@/libs/components"
import { MAIN_OFFICE } from "@/libs/data/site"
import { ContactDetails } from "../(components)/contact_details"
import { PageHero } from "../(components)/page_hero"

export const metadata: Metadata = {
  title: "Contact",
  description: "How to reach the Fraser Urology main office and your urologist's office.",
}

export default function ContactPage() {
  return (
    <main>
      <PageHero title="Contact" imageLabel="Calm river at dawn" />

      <div className="mx-auto max-w-6xl px-6 py-14">
        <div role="note" className="rounded-lg border border-brand-200 bg-brand-50 p-6 text-lg text-brand-900">
          <p className="font-bold">A referral is required</p>
          <p className="mt-2">
            A referral from your general practitioner, the emergency department,
            or another specialist is required for all new consultations.
          </p>
          <p className="mt-2">
            Please refer to the <TextLink href="/about">About Your Urologist</TextLink> page for
            specific contact information.
          </p>
        </div>

        <h2 className="mt-12 text-3xl font-bold text-navy">General Contact (Main Office)</h2>
        <p className="mt-3 text-xl font-semibold text-brand-900">{MAIN_OFFICE.name}</p>
        <div className="mt-4">
          <ContactDetails
            address={MAIN_OFFICE.addressLines.join(", ")}
            email={MAIN_OFFICE.email}
            phone={MAIN_OFFICE.phone}
            fax={MAIN_OFFICE.fax}
          />
        </div>

        <ImagePlaceholder
          label="Map showing the Fraser Urology main office"
          className="mt-10 h-80 rounded-lg"
        />
      </div>
    </main>
  )
}
