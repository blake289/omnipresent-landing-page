import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"

import "@/styles/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Plumber Websites That Book Emergency Jobs | Omnipresent",
  description:
    "We build plumbing websites in 48 hours that turn emergency searches into booked jobs. Free build. Missed-call text-back. You only pay if it works.",
  keywords: [
    "plumber website",
    "plumbing website design",
    "plumber lead generation",
    "emergency plumber website",
    "plumbing marketing",
    "missed call text back plumber",
  ],
}

export const viewport: Viewport = {
  themeColor: "#1a6bff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
