export const SITE_NAME = "Fraser Urology"
export const TAGLINE = "Providing expert care in your community."

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Your Urologist" },
  { href: "/surgeons", label: "Our Surgeons" },
  { href: "/newsletter", label: "News & Updates" },
  { href: "/contact", label: "Contact" },
] as const

export const HOSPITALS = [
  { name: "Burnaby Hospital", city: "Burnaby" },
  { name: "Eagle Ridge Hospital", city: "Port Moody" },
  { name: "Royal Columbian Hospital", city: "New Westminster" },
] as const

export const MAIN_OFFICE = {
  name: "Dr. Nathan Wong",
  addressLines: ["308-233 Nelson's Crescent", "New Westminster, BC, V3L 0E4"],
  email: "wong.office@fraserurology.ca",
  phone: "(604) 553-3819",
  fax: "(604) 553-0072",
}

/** Turns "(604) 553-3819" into a tel: href. */
export function telHref(phone: string) {
  return `tel:+1${phone.replace(/\D/g, "")}`
}
