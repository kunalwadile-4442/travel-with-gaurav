import type { Metadata } from "next"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://dhanashreetours.com"

export const metadata: Metadata = {
  title: "Car Rental",
  description:
    "Book Swift Dzire, Ertiga 7-seater, and more. Local rental, outstation trips, Pune to Mumbai/Goa cabs. Per KM and package pricing. Dhanashree Tours - trusted car rental in Pune.",
  keywords: [
    "car rental Pune",
    "Swift Dzire rental Pune",
    "Ertiga rental Pune",
    "7 seater cab Pune",
    "5 seater car rental",
    "Pune to Mumbai cab",
    "Pune to Goa cab",
    "local car rental 8 hours",
    "outstation cab packages",
    "car hire Pune",
  ],
  alternates: {
    canonical: `${BASE_URL}/car-rental`,
  },
  openGraph: {
    title: "Car Rental | Dhanashree Tours and Travel",
    description: "Swift Dzire, Ertiga, local & outstation rental. Book your car in Pune.",
    url: `${BASE_URL}/car-rental`,
  },
  twitter: {
    title: "Car Rental | Dhanashree Tours and Travel",
    description: "Book Swift Dzire, Ertiga, local & outstation rental in Pune.",
  },
}

export default function CarRentalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
