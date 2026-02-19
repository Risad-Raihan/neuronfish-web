import Link from "next/link"
import { MapPin, Bell, Store, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { FAQAccordion } from "@/components/ui/FAQAccordion"
import { Badge } from "@/components/ui/Badge"
import { GridPattern } from "@/components/ui/GridPattern"
import { GlowCard } from "@/components/ui/GlowCard"

export const metadata = {
  title: "CHHAR - Best Deals in Dhaka",
  description: "Find the best discounts, offers, and promotions nearby in Dhaka. Save money on dining, shopping, and lifestyle.",
}

export default function ChharPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28 section-gradient-light">
        <GridPattern className="opacity-30" />
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-emerald-500/5 blur-[120px] animate-float-slow" />
        </div>
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge className="mb-4 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20">
                Live in Dhaka
              </Badge>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Never Miss a Deal with{" "}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">CHHAR</span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                Your location-based savings companion. Discover incredible discounts on food, fashion, and fun right in your neighborhood.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" variant="glow" asChild>
                  <Link href="/contact?subject=CHHAR%20Partnership">
                    Partner with Us
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#how-it-works">See How It Works</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="device-phone">
                <div className="flex h-full items-center justify-center pt-8 bg-gradient-to-b from-emerald-500/5 to-transparent">
                  <div className="text-center">
                    <span className="block text-6xl mb-3">🏷️</span>
                    <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">CHHAR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-muted/30 py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Smart Savings, Simplified"
            subtitle="Connect with the best offers around you instantly."
            className="mb-14"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: MapPin,
                title: "Nearby Deals",
                desc: "Open the app and see a map of all active promotions within walking distance. No more searching endlessly.",
              },
              {
                icon: Bell,
                title: "Instant Alerts",
                desc: "Get notified when you walk past a store with a sale that matches your interests.",
              },
              {
                icon: Store,
                title: "Wide Variety",
                desc: "From local cafes to major retail brands, find offers across diverse categories.",
              }
            ].map((feature, i) => (
              <GlowCard key={i} className="flex flex-col items-center text-center p-8">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </GlowCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Availability */}
      <section id="how-it-works" className="py-20 md:py-28">
        <Container className="text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-foreground">Currently Available In</h2>
          <p className="mb-6 text-2xl font-semibold bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">Dhaka, Bangladesh</p>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            We are starting our journey in the heart of Dhaka. Stay tuned as we expand to Chittagong, Sylhet, and other major cities soon!
          </p>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-border bg-muted/30 py-20 md:py-28">
        <Container className="max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" className="mb-12" />
          <FAQAccordion
            items={[
              {
                question: "Is the CHHAR app free?",
                answer: "Yes! CHHAR is completely free for users to download and use."
              },
              {
                question: "How do I redeem a deal?",
                answer: "Simply show the digital coupon on your CHHAR app at the checkout counter of the partner store."
              },
              {
                question: "I am a business owner. How can I list my offers?",
                answer: "We'd love to have you! Click the 'Partner with Us' button to contact our sales team for onboarding."
              },
              {
                question: "Does it work offline?",
                answer: "You need an internet connection to browse live map data, but saved coupons can often be accessed offline."
              }
            ]}
          />
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="cta-dark relative overflow-hidden rounded-2xl px-6 py-16 text-center max-w-3xl mx-auto border border-white/[0.08]">
            <GridPattern className="opacity-[0.06] fill-white" />
            <div className="relative">
              <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl text-white">Grow your business with CHHAR</h2>
              <p className="mb-8 text-lg text-zinc-400">Connect with thousands of local customers looking for deals today.</p>
              <Button size="lg" variant="glow" asChild>
                <Link href="/contact?subject=CHHAR%20Partnership" className="flex items-center gap-2">
                  Become a Partner <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
