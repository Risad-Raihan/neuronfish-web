import Link from "next/link"
import { MapPin, Bell, Store, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { FAQAccordion } from "@/components/ui/FAQAccordion"
import { Badge } from "@/components/ui/Badge"

export const metadata = {
  title: "CHHAR - Best Deals in Dhaka",
  description: "Find the best discounts, offers, and promotions nearby in Dhaka. Save money on dining, shopping, and lifestyle.",
}

export default function ChharPage() {
  return (
    <>
      {/* Hero - Teal Industrial */}
      <section className="bg-secondary text-white py-20 md:py-28 border-b-2 border-black relative overflow-hidden">
         {/* Decorative elements */}
         <div className="absolute bottom-0 left-0 h-64 w-64 rounded-none bg-white/10 blur-xl -z-10 rotate-12" />
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge className="mb-6 bg-white text-secondary border-2 border-black hover:bg-gray-100 shadow-funky-sm text-sm py-1 px-3">
                Live in Dhaka
              </Badge>
              <h1 className="mb-8 text-5xl font-extrabold tracking-tight sm:text-6xl text-white">
                Never Miss a Deal with <span className="text-white underline decoration-wavy decoration-white decoration-2 underline-offset-4">CHHAR</span>
              </h1>
              <p className="mb-10 text-xl text-white/90 font-medium leading-relaxed">
                Your location-based savings companion. Discover incredible discounts on food, fashion, and fun right in your neighborhood.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-white hover:bg-white/90 text-secondary border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] hover:-translate-y-1" asChild>
                  <Link href="/contact?subject=CHHAR%20Partnership">
                    Partner with Us
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-white border-2 border-white hover:bg-white/10 shadow-none hover:-translate-y-1" asChild>
                   <Link href="#how-it-works">See How It Works</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl bg-white border-2 border-black flex items-center justify-center p-8 shadow-funky">
                <div className="text-center opacity-70">
                  <span className="block text-9xl mb-4">🏷️</span>
                  <span className="text-lg font-bold uppercase tracking-widest text-foreground">Map View</span>
               </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-white border-b-2 border-black">
        <Container>
          <SectionHeading
            title="Smart Savings, Simplified"
            subtitle="Connect with the best offers around you instantly."
            className="mb-16"
          />
          <div className="grid gap-8 md:grid-cols-3">
             {[
               {
                 icon: MapPin,
                 title: "Nearby Deals",
                 desc: "Open the app and see a map of all active promotions within walking distance. No more searching endlessly.",
                 color: "bg-pop-royal"
               },
               {
                 icon: Bell,
                 title: "Instant Alerts",
                 desc: "Get notified when you walk past a store with a sale that matches your interests.",
                 color: "bg-pop-lavender"
               },
               {
                 icon: Store,
                 title: "Wide Variety",
                 desc: "From local cafes to major retail brands, find offers across diverse categories.",
                 color: "bg-pop-navy text-white"
               }
             ].map((feature, i) => (
               <div key={i} className="flex flex-col items-center text-center p-8 rounded-xl border-2 border-black bg-white shadow-funky hover:shadow-funky-hover transition-all">
                 <div className={`mb-6 rounded-full ${feature.color} p-4 text-foreground border-2 border-black shadow-funky-sm`}>
                   <feature.icon className="h-8 w-8" />
                 </div>
                 <h3 className="mb-3 text-2xl font-bold text-foreground">{feature.title}</h3>
                 <p className="text-foreground/70 font-medium leading-relaxed">{feature.desc}</p>
               </div>
             ))}
          </div>
        </Container>
      </section>

      {/* Availability */}
      <section className="bg-secondary/10 py-20 md:py-28 border-b-2 border-black">
        <Container className="text-center">
           <h2 className="mb-6 text-4xl font-extrabold text-foreground">Currently Available In</h2>
           <p className="mb-8 text-3xl text-secondary font-black tracking-tight drop-shadow-sm">Dhaka, Bangladesh</p>
           <p className="mx-auto max-w-2xl text-xl text-foreground/80 font-medium">
             We are starting our journey in the heart of Dhaka. Stay tuned as we expand to Chittagong, Sylhet, and other major cities soon!
           </p>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white border-b-2 border-black">
        <Container className="max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" className="mb-16" />
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
      <section className="py-20 md:py-28 bg-pop-navy text-white">
        <Container>
          <div className="rounded-2xl bg-white/10 px-6 py-16 text-center text-white border-2 border-white/20 shadow-none max-w-4xl mx-auto backdrop-blur-sm">
            <h2 className="mb-6 text-4xl font-extrabold sm:text-5xl text-white">Grow your business with CHHAR</h2>
            <p className="mb-10 text-xl font-bold text-white/80">Connect with thousands of local customers looking for deals today.</p>
            <Button size="lg" variant="secondary" asChild className="bg-white text-pop-navy hover:bg-gray-100 border-2 border-white shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1">
               <Link href="/contact?subject=CHHAR%20Partnership">
                 Become a Partner <ArrowRight className="ml-2 h-5 w-5" />
               </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
