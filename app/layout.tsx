import type { Metadata } from "next"
import { Lato } from "next/font/google"
import "./globals.css"
import { Footer } from "./_components/footer"
import { Header } from "./_components/header"

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fraserurology.ca"),
  title: {
    default: "Fraser Urology",
    template: "%s | Fraser Urology",
  },
  description:
    "Compassionate, expert urologic care in Fraser Health, from Burnaby to Boston Bar.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lato.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
        >
          Skip to content
        </a>
        <Header />
        <div id="main" className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
