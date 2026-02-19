import type { Metadata } from "next"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://dhanashreetours.com"

export const metadata: Metadata = {
  title: "Travel Packages",
  description:
    "Choose from flexible car rental packages - local rides, airport transfers, outstation trips. Pune to Mumbai, Goa, Lonavala. Per KM and fixed packages. Book with Dhanashree Tours.",
  keywords: [
    "travel packages Pune",
    "car rental packages",
    "local rental 8 hours 80 km",
    "airport transfer package",
    "outstation trip packages",
    "Pune Mumbai package",
    "Pune Goa package",
    "300 km package",
    "tour packages Maharashtra",
  ],
  alternates: {
    canonical: `${BASE_URL}/packages`,
  },
  openGraph: {
    title: "Travel Packages | Dhanashree Tours and Travel",
    description: "Local, airport, and outstation packages. Book your trip in Pune.",
    url: `${BASE_URL}/packages`,
  },
  twitter: {
    title: "Travel Packages | Dhanashree Tours and Travel",
    description: "Flexible car rental packages for local and outstation trips.",
  },
}

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
