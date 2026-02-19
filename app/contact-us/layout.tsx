import type { Metadata } from "next"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://dhanashreetours.com"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Dhanashree Tours and Travel for car rentals, outstation trips, airport transfers, and tour packages. Call or fill the form for quick booking in Pune.",
  keywords: [
    "contact Dhanashree Tours",
    "car rental booking Pune",
    "taxi booking contact",
    "Dhanashree Tours phone number",
    "cab booking inquiry Pune",
  ],
  alternates: {
    canonical: `${BASE_URL}/contact-us`,
  },
  openGraph: {
    title: "Contact Us | Dhanashree Tours and Travel",
    description: "Get in touch for car rentals, outstation trips, and tour packages in Pune.",
    url: `${BASE_URL}/contact-us`,
  },
  twitter: {
    title: "Contact Us | Dhanashree Tours and Travel",
    description: "Get in touch for car rentals and tour packages in Pune.",
  },
}

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
