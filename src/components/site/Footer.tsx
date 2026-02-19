import Link from "next/link"
import { Container } from "@/components/ui/Container"

export function Footer() {
  return (
    <footer className="gradient-border-t bg-background">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-extrabold tracking-tight text-foreground">NeuronFish</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building the future of apps in Bangladesh.
            </p>
            <p className="text-xs text-muted-foreground/70">
              Dhaka, Bangladesh
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Products</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/products/dikkha" className="transition-colors hover:text-foreground">
                  DIKKHA
                </Link>
              </li>
              <li>
                <Link href="/products/chhar" className="transition-colors hover:text-foreground">
                  CHHAR
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Company</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="transition-colors hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Legal</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/dikkha-ai/privacy" className="transition-colors hover:text-foreground">
                  Dikkha AI Privacy
                </Link>
              </li>
              <li>
                <Link href="/dikkha-ai/terms" className="transition-colors hover:text-foreground">
                  Dikkha AI Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} NeuronFish. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
