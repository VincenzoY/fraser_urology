export type Surgeon = {
  slug: string
  name: string
  title: string
  about: string[]
  address: string
  email: string | null
  phone: string
  fax: string
}

export const SURGEONS: Surgeon[] = [
  {
    slug: "vu-truong",
    name: "Dr. Vu Truong",
    title: "Urologist",
    about: [
      "Dr. Vu Truong is a graduate of the UBC Urology Residency Program in 2005 and practices general adult and paediatric Urology in the Fraser Health Authority. He is based out of the Burnaby Hospital but also works at the Royal Columbian Hospital in New Westminster and the Eagle Ridge Hospital in Port Moody.",
      "After finishing his training at UBC, Dr. Truong completed a Fellowship at the Alberta Urology Institute in Edmonton focusing on Laparoscopic Pelvic and Retroperitoneal Surgery.",
      "His areas of interest include Laparoscopic Nerve Sparing Radical Prostatectomy for Localized Prostate Cancer, Laparoscopic Radical and Partial Nephrectomy for Localized Renal Cell Carcinoma, and Laparoscopic Adrenalectomy for functional adenomas and pheochromocytomas. He and Dr. Omar Nazif work closely together and are developing a strong minimally invasive Urology program in the Fraser Health Authority, which is Canada's largest Health Authority.",
    ],
    address: "206-6411 Nelson Ave, Burnaby, BC V5H 4H3",
    email: null,
    phone: "(604) 433-2305",
    fax: "(604) 433-2306",
  },
  {
    slug: "nathan-wong",
    name: "Dr. Nathan Wong",
    title: "Urologic Oncologist & Minimally Invasive Surgeon",
    about: [
      "Dr. Nathan Wong is a Urologic Oncologist and Minimally Invasive Surgeon at Fraser Health with an interest in Artificial Intelligence (AI) and Quality Improvement. He is a Clinical Assistant Professor at the University of British Columbia and Simon Fraser University.",
      "He is a dual board-certified urologist in Canada and the United States who aims to provide the best urological care to serve his patients and community. His fundamental goals are to improve the lives of those afflicted with urologic diseases by caring for them at the highest clinical standard, training future surgeons, and advancing clinical research with respect to AI in clinical practice, quality improvement and physician leadership.",
      "He specializes in urologic oncology and minimally invasive treatments for prostate, bladder, testis, and kidney cancer including endoscopic, laparoscopic, and robotic surgery. He has a focus on transperineal microultrasound prostate biopsies for the detection of prostate cancer.",
      "He also has an interest in minimally invasive treatment options for BPH including Greenlight Laser and Rezum Water Vapor Therapy.",
    ],
    address: "308-233 Nelson's Crescent, New Westminster, BC, V3L 0E4",
    email: "wong.office@fraserurology.ca",
    phone: "(604) 553-3819",
    fax: "(604) 553-0072",
  },
  {
    slug: "christopher-wu",
    name: "Dr. Christopher Wu",
    title: "Urologist, Male Infertility & Andrology",
    about: [
      "Dr. Christopher Wu completed his Medical School at the University of British Columbia and his Urology Residency at McMaster University in Hamilton, Ontario. He then completed Fellowship training in Male Reproductive Medicine and Andrology at the University of Toronto under the auspices of Drs. Keith Jarvi, Kirk Lo, and Ethan Grober, with a special focus on urological microsurgery and penile reconstruction procedures.",
      "He practices general adult and pediatric urology in the Fraser Health Authority. He is based out of Burnaby Hospital but also works at the Eagle Ridge Hospital in Port Moody as well as the Royal Columbian Hospital in New Westminster. His areas of interest include Male Infertility, Andrology, as well as minimally invasive urologic procedures.",
    ],
    address: "206-6411 Nelson Ave, Burnaby, BC V5H 4H3",
    email: null,
    phone: "(604) 433-2305",
    fax: "(604) 433-2306",
  },
  {
    slug: "brian-yang",
    name: "Dr. Brian Yang",
    title: "Urologist",
    about: [
      "Dr. Yang is a graduate of the McMaster University Urology Residency Program in 2010 and practices general adult and paediatric Urology in the Fraser Health Authority. He is based out of the Royal Columbian Hospital in New Westminster and the Eagle Ridge Hospital in Port Moody. He has training and special interest in advanced minimally invasive urologic procedures.",
    ],
    address: "233 Nelson's Crescent #309, New Westminster, BC V3L 0E4",
    email: null,
    phone: "(604) 522-1005",
    fax: "(604) 461-9972",
  },
  {
    slug: "daniel-yanko",
    name: "Dr. Daniel Yanko",
    title: "Urologist",
    about: ["Dr. Yanko is a Urologist at Fraser Health."],
    address: "308-233 Nelson's Crescent, New Westminster, BC V3L 0E4",
    email: null,
    phone: "(604) 553-0973",
    fax: "(604) 553-0072",
  },
]
