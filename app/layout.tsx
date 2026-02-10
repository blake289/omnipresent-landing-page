import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"

import "@/styles/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Free Smart Website in 48 Hours | Omnipresent",
  description:
    "We build premium websites in 48 hours for free. You pay $297/mo for the system that turns visitors into phone calls.",
  keywords: [
    "smart website",
    "small business website",
    "San Diego web design",
    "website that converts",
    "missed call text-back",
    "lead generation",
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
