import Link from "next/link"
import { Container } from "@/components/ui/Container"

export function Footer() {
  return (
    <footer className="border-t-2 border-black bg-muted/50">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-extrabold tracking-tight text-foreground">NeuronFish</h3>
            <p className="text-sm font-medium text-muted-foreground">
              AI-powered products for everyday learning & savings.
            </p>
            <p className="text-sm font-bold text-foreground">
              Dhaka, Bangladesh
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-base font-bold uppercase tracking-wider text-black">Products</h4>
            <ul className="space-y-3 text-sm font-medium text-muted-foreground">
              <li>
                <Link href="/products/dikkha" className="hover:text-primary hover:underline hover:decoration-2 hover:underline-offset-4 transition-all">
                  DIKKHA
                </Link>
              </li>
              <li>
                <Link href="/products/chhar" className="hover:text-primary hover:underline hover:decoration-2 hover:underline-offset-4 transition-all">
                  CHHAR
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-base font-bold uppercase tracking-wider text-black">Company</h4>
            <ul className="space-y-3 text-sm font-medium text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary hover:underline hover:decoration-2 hover:underline-offset-4 transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary hover:underline hover:decoration-2 hover:underline-offset-4 transition-all">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-base font-bold uppercase tracking-wider text-black">Legal</h4>
            <ul className="space-y-3 text-sm font-medium text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-primary hover:underline hover:decoration-2 hover:underline-offset-4 transition-all">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary hover:underline hover:decoration-2 hover:underline-offset-4 transition-all">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t-2 border-black/10 pt-8 text-center text-sm font-bold text-muted-foreground">
          © {new Date().getFullYear()} NeuronFish. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
