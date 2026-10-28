import { TextLink } from "@/libs/components"
import { telHref } from "@/libs/data/site"
import { FaxIcon, MailIcon, MapPinIcon, PhoneIcon } from "./icons"

type ContactDetailsProps = {
  address: string
  email: string | null
  phone: string
  fax: string
}

function Row({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-6 shrink-0 items-center text-xl text-brand-700">{icon}</span>
      <div>
        <dt className="sr-only">{label}</dt>
        <dd>{children}</dd>
      </div>
    </div>
  )
}

export function ContactDetails({ address, email, phone, fax }: ContactDetailsProps) {
  return (
    <dl className="space-y-3 text-brand-900">
      <Row icon={<MapPinIcon />} label="Address">{address}</Row>
      <Row icon={<PhoneIcon />} label="Phone">
        <TextLink href={telHref(phone)}>{phone}</TextLink>
      </Row>
      <Row icon={<FaxIcon />} label="Fax">{fax}</Row>
      {email ? (
        <Row icon={<MailIcon />} label="Email">
          <TextLink href={`mailto:${email}`}>{email}</TextLink>
        </Row>
      ) : null}
    </dl>
  )
}
