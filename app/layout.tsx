import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shree Nilkanth Enterprises - Leading Pipe Manufacturer",
  description:
    "Leading manufacturer of high-quality HDPE, sprinkler, and agricultural pipes for construction, agriculture, and infrastructure projects.",
  keywords: "HDPE pipes, sprinkler pipes, agricultural pipes, pipe manufacturer, construction pipes, irrigation pipes",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
