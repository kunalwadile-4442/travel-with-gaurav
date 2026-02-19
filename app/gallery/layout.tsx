import type { Metadata } from "next"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://dhanashreetours.com"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore our travel gallery - Lonavala trips, Pune to Mumbai cabs, airport transfers, and local rentals. Dhanashree Tours and Travel - your trusted travel partner in Pune.",
  keywords: [
    "Dhanashree Tours gallery",
    "Lonavala trip photos",
    "Pune Mumbai cab",
    "airport transfer Pune",
    "local rental Pune",
    "travel photos Maharashtra",
  ],
  alternates: {
    canonical: `${BASE_URL}/gallery`,
  },
  openGraph: {
    title: "Gallery | Dhanashree Tours and Travel",
    description: "Explore our travel gallery - outstation trips, airport transfers, local rentals.",
    url: `${BASE_URL}/gallery`,
  },
  twitter: {
    title: "Gallery | Dhanashree Tours and Travel",
    description: "Explore our travel gallery - trips and rentals in Pune.",
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
