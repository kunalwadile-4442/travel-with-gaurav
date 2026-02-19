import type { Metadata } from "next"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://dhanashreetours.com"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Dhanashree Tours and Travel, led by Gaurav Patil, offers reliable car rental and tour services in Pune. Safe journeys, professional drivers, affordable pricing for local and outstation trips.",
  keywords: [
    "about Dhanashree Tours",
    "Dhanashree Tours Pune",
    "Gaurav Patil tours",
    "trusted car rental Pune",
    "travel company Pune",
    "professional taxi service",
  ],
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "About Us | Dhanashree Tours and Travel",
    description: "Trusted car rental and tour services in Pune. Safe journeys, professional drivers.",
    url: `${BASE_URL}/about`,
  },
  twitter: {
    title: "About Us | Dhanashree Tours and Travel",
    description: "Trusted car rental and tour services in Pune.",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
