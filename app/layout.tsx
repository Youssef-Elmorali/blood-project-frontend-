import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import ScrollToTop from "./components/scroll-to-top"

export const metadata: Metadata = {
  title: "Qatrah Hayat - Blood Donation Platform",
  description: "Connect blood donors with recipients and save lives",
  keywords: "blood donation, blood bank, donate blood, find blood, blood drives",
  authors: [{ name: "Qatrah Hayat Team" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="pt-20 min-h-screen flex flex-col">
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}



import './globals.css'