import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Omnipresent | Smart Websites That Actually Work",
  description:
    "Your website should work as hard as you do. Custom Smart Websites built in 48 hours. Free to start. 340+ five-star reviews. San Diego.",
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
  themeColor: "#0A0F1C",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
