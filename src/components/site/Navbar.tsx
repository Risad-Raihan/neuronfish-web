"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b-2 border-black bg-background">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <span className="text-2xl font-extrabold tracking-tight text-foreground shadow-funky-sm border-2 border-black px-2 py-1 bg-white -rotate-2 hover:rotate-0 transition-transform decoration-primary underline decoration-wavy underline-offset-4">NeuronFish</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base font-bold transition-all hover:-translate-y-0.5",
                  pathname === link.href 
                    ? "text-primary underline decoration-4 decoration-black underline-offset-4" 
                    : "text-foreground hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="default" className="ml-4 bg-primary text-white hover:bg-primary/90 shadow-funky hover:shadow-funky-hover border-2 border-black">
               <Link href="/products">Get Started</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle menu"
              onClick={toggleMenu}
              className="border-2 border-black"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="border-b-2 border-black bg-background md:hidden shadow-xl">
          <Container className="py-6">
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-lg font-bold transition-colors",
                    pathname === link.href ? "text-primary" : "text-foreground"
                  )}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full justify-center bg-primary text-white border-2 border-black shadow-funky">
                 <Link href="/products" onClick={closeMenu}>Get Started</Link>
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}
