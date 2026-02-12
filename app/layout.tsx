import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"

import "@/styles/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
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
  themeColor: "#2563EB",
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
      <head>
        {/* Cabinet Grotesk — display font */}
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@700,800,900&display=swap"
          rel="stylesheet"
        />
        {/* Plus Jakarta Sans — fallback display font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
