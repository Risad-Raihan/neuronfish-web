import * as React from "react"
import { Navbar } from "@/components/site/Navbar"
import { Footer } from "@/components/site/Footer"
import { ChatWidget } from "@/components/pluto/ChatWidget"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ChatWidget />
    </div>
  )
}

