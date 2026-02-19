import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Manrope, Instrument_Sans, Poppins, Public_Sans } from "next/font/google"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "../styles/globals.css"
import 'leaflet/dist/leaflet.css'
import { AppProviders } from "@/components/provider/provider";
import { circular_std } from "@/lib/fonts";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Specify the weights you need
  variable: '--font-poppins', // Optional: for Tailwind CSS integration
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: [
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
  ],
})

const instrumentSans = Instrument_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-sans',
});

export const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-public-sans",
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://dhanashreetours.com"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Dhanashree Tours and Travel | Car Rental, Outstation Trips & Tour Packages in Pune",
    template: "%s | Dhanashree Tours and Travel",
  },
  applicationName: "Dhanashree Tours and Travel | Car Rental & Tour Services in Pune",
  description:
    "Dhanashree Tours and Travel is a trusted car rental and tour company in Pune offering local rental, outstation trips, airport transfers, and customized tour packages across Maharashtra. Book your ride now.",
  keywords: [
    "Dhanashree Tours",
    "Dhanashree Tours Pune",
    "car rental Pune",
    "car rental in Pune",
    "taxi service Pune",
    "outstation cab Pune",
    "Pune to Mumbai cab",
    "Pune to Goa cab",
    "airport transfer Pune",
    "local car rental Pune",
    "tour packages Maharashtra",
    "travel agency Pune",
    "cab booking Pune",
    "Swift Dzire rental",
    "Ertiga rental Pune",
    "7 seater cab Pune",
    "5 seater car rental",
    "one way cab Pune",
    "round trip cab",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      {
        url: '/favicon-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon.png',
        type: 'image/png',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Dhanashree Tours and Travel | Car Rental & Tour Services in Pune",
    description: "Car rentals, outstation trips, airport transfers, and tour packages. Your trusted travel partner in Pune and Maharashtra.",
    siteName: "Dhanashree Tours and Travel",
    images: [
      {
        url: "/ogimage.jpg",
        width: 1200,
        height: 630,
        alt: "Dhanashree Tours and Travel - Car Rental & Tour Services in Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanashree Tours and Travel | Car Rental in Pune",
    description: "Car rentals, outstation trips, airport transfers. Book your ride in Pune.",
    images: ["/ogimage.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#136AED",
  colorScheme: "light dark",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${instrumentSans.variable} ${poppins?.variable} ${circular_std?.variable} ${publicSans.variable} scrollbar-hide`}>
      <body className="bg-white text-gray-900 antialiased font-sans scrollbar-hide">
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  )
}
