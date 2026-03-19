import Link from "next/link"
import { MapPin, Bell, Store, ArrowRight, Search, Tag, Navigation } from "lucide-react"
import { CHHAR_PLAY_STORE_URL } from "@/lib/constants"
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
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#4C8E4F]/20 blur-[120px] animate-float-slow" />
          <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-[#7eb680]/20 blur-[130px] animate-float-slow" style={{ animationDelay: "1.6s" }} />
          <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#4C8E4F]/10 blur-[140px]" />
        </div>
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge className="mb-4 border-[#4C8E4F]/35 bg-[#4C8E4F]/15 text-[#b8deb9]">
                Live in Dhaka
              </Badge>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Never Miss a Deal with{" "}
                <span className="bg-gradient-to-r from-[#7eb680] via-[#69a96c] to-[#4C8E4F] bg-clip-text text-transparent">CHHAR <span className="font-semibold">- ছাড়</span></span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                Your location-powered savings companion. Discover nearby offers, explore store maps, and redeem the best discounts around you from one modern app experience.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  variant="glow"
                  className="btn-get-app group/btn bg-[#4C8E4F] text-white hover:bg-[#417a43] hover:shadow-[0_0_40px_rgba(76,142,79,0.5)]"
                  asChild
                >
                  <a
                    href={CHHAR_PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Get the App <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#how-it-works">See How It Works</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {["Nearby hot deals", "Map-based discovery", "One-tap redemption"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-[#4C8E4F]/35 bg-[#4C8E4F]/10 px-3 py-1 text-xs font-medium text-[#cde9ce]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="pointer-events-none absolute -left-10 top-10 hidden rounded-xl border border-[#4C8E4F]/35 bg-background/90 p-3 text-xs font-medium text-foreground shadow-sm backdrop-blur lg:block">
                  <span className="inline-flex items-center gap-1.5"><Tag className="h-3.5 w-3.5 text-[#7eb680]" /> Time-limited offers</span>
                </div>
                <div className="pointer-events-none absolute -right-10 bottom-10 hidden rounded-xl border border-[#4C8E4F]/35 bg-background/90 p-3 text-xs font-medium text-foreground shadow-sm backdrop-blur lg:block">
                  <span className="inline-flex items-center gap-1.5"><Navigation className="h-3.5 w-3.5 text-[#7eb680]" /> Location-based savings</span>
                </div>
                <div className="device-phone">
                  <div className="h-full overflow-hidden bg-gradient-to-b from-[#4C8E4F]/10 to-transparent">
                    <img
                      src="/products/chhar/chhar-mock.png"
                      alt="CHHAR promotional app mock inside mobile frame"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Positioning */}
      <section className="relative overflow-hidden border-t border-[#4C8E4F]/20 bg-gradient-to-b from-[#111a12] via-background to-background py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-12 left-1/3 h-72 w-72 rounded-full bg-[#4C8E4F]/15 blur-[130px]" />
          <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-[#7eb680]/12 blur-[120px]" />
        </div>
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 border-[#4C8E4F]/35 bg-[#4C8E4F]/15 text-[#b8deb9]">
              Smart Savings Engine
            </Badge>
            <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">
              Discover better deals with{" "}
              <span className="bg-gradient-to-r from-[#7eb680] to-[#4C8E4F] bg-clip-text text-transparent">
                location + context
              </span>
            </h2>
            <p className="mb-12 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              CHHAR combines live offers, location mapping, and merchant detail pages so users can find, evaluate, and redeem discounts quickly.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Search, title: "Deal Discovery", desc: "Browse active discounts by category and store feed." },
                { icon: MapPin, title: "Location Relevance", desc: "Surface offers around your current area in real time." },
                { icon: Bell, title: "Faster Decisions", desc: "See key offer details before going to a store." },
                { icon: Store, title: "Merchant Context", desc: "Review deal terms and branch info in one place." },
              ].map((item, i) => (
                <GlowCard key={i} className="group relative overflow-hidden p-6 text-center border-[#4C8E4F]/25 bg-gradient-to-b from-card to-[#4C8E4F]/[0.06]">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#4C8E4F]/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <item.icon className="h-6 w-6 mx-auto mb-3 text-[#7eb680]" />
                  <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Visual Feature Stories */}
      <section id="how-it-works" className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[#4C8E4F]/10 blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#7eb680]/10 blur-[150px]" />
        </div>
        <Container>
          <SectionHeading
            title="How CHHAR works in real life"
            subtitle="From feed to map to offer details, every step is optimized for quick savings decisions."
            className="mb-14"
          />

          <div className="space-y-8">
            <GlowCard className="relative overflow-hidden p-6 md:p-8 border-[#4C8E4F]/25 bg-gradient-to-br from-card to-[#4C8E4F]/[0.06]">
              <div className="absolute right-5 top-5 rounded-full border border-[#4C8E4F]/30 bg-[#4C8E4F]/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[#9ed0a0]">01</div>
              <div className="mb-6 flex items-center gap-3">
                <div className="inline-flex rounded-lg bg-[#4C8E4F]/15 p-2.5 text-[#9ed0a0]">
                  <Search className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Home feed discovery</h3>
              </div>
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                Users open CHHAR to explore active offers, categories, hot deals, and top stores from one clean home feed.
              </p>
              <div className="flex justify-center">
                <div className="w-full max-w-[250px] rounded-2xl border border-border bg-card p-2 shadow-sm">
                  <div className="overflow-hidden rounded-xl border border-border/60">
                    <img
                      src="/products/chhar/chhar-homepage.jpeg"
                      alt="CHHAR app homepage with active deals and store lists"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </GlowCard>

            <GlowCard className="relative overflow-hidden p-6 md:p-8 border-[#4C8E4F]/25 bg-gradient-to-br from-card to-[#4C8E4F]/[0.06]">
              <div className="absolute right-5 top-5 rounded-full border border-[#4C8E4F]/30 bg-[#4C8E4F]/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[#9ed0a0]">02</div>
              <div className="mb-6 flex items-center gap-3">
                <div className="inline-flex rounded-lg bg-[#4C8E4F]/15 p-2.5 text-[#9ed0a0]">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Map-driven nearby deals</h3>
              </div>
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                The map view shows store density, nearby branches, and radius-aware deal zones to help users choose where to go.
              </p>
              <div className="flex justify-center">
                <div className="w-full max-w-[250px] rounded-2xl border border-border bg-card p-2 shadow-sm">
                  <div className="overflow-hidden rounded-xl border border-border/60">
                    <img
                      src="/products/chhar/chhar-map.jpeg"
                      alt="CHHAR map view with nearby stores and deal areas"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </GlowCard>

            <GlowCard className="relative overflow-hidden p-6 md:p-8 border-[#4C8E4F]/25 bg-gradient-to-br from-card to-[#4C8E4F]/[0.06]">
              <div className="absolute right-5 top-5 rounded-full border border-[#4C8E4F]/30 bg-[#4C8E4F]/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[#9ed0a0]">03</div>
              <div className="mb-6 flex items-center gap-3">
                <div className="inline-flex rounded-lg bg-[#4C8E4F]/15 p-2.5 text-[#9ed0a0]">
                  <Tag className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Offer details and redemption context</h3>
              </div>
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                Each offer page gives discount tags, eligibility context, terms, and store actions so users can redeem with confidence.
              </p>
              <div className="flex justify-center">
                <div className="w-full max-w-[250px] rounded-2xl border border-border bg-card p-2 shadow-sm">
                  <div className="overflow-hidden rounded-xl border border-border/60">
                    <img
                      src="/products/chhar/chhar-discount-details.jpeg"
                      alt="CHHAR deal details screen with offer conditions and store action"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </Container>
      </section>

      {/* Expansion */}
      <section className="relative overflow-hidden border-t border-[#4C8E4F]/20 bg-gradient-to-b from-background via-[#101712] to-background py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#4C8E4F]/12 blur-[140px]" />
        </div>
        <Container>
          <SectionHeading
            title="City expansion roadmap"
            subtitle="Launching strong in Dhaka, then scaling CHHAR to more cities in Bangladesh."
            className="mb-14"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { city: "Dhaka", status: "Live", desc: "Active deals, map coverage, and merchant onboarding running now." },
              { city: "Chattogram", status: "Next", desc: "Planning partner onboarding and localized category rollout." },
              { city: "Sylhet", status: "Upcoming", desc: "Expanding regional merchant network and consumer access." },
            ].map((item, i) => (
              <GlowCard key={i} className="p-6 border-[#4C8E4F]/25 bg-gradient-to-br from-card to-[#4C8E4F]/[0.05]">
                <Badge className="mb-3 border-[#4C8E4F]/30 bg-[#4C8E4F]/15 text-[#b8deb9]">{item.status}</Badge>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{item.city}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </GlowCard>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-[#4C8E4F]/20 bg-gradient-to-b from-[#101712] to-background py-20 md:py-28">
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
                answer: "We'd love to have you! Visit our Contact page to reach our sales team for merchant onboarding."
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
          <div className="relative overflow-hidden rounded-2xl px-6 py-16 text-center max-w-3xl mx-auto border border-[#7eb680]/35 bg-gradient-to-br from-[#102015] via-[#15261a] to-[#0a130d]">
            <GridPattern className="opacity-[0.06] fill-white" />
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-[#4C8E4F]/25 blur-[90px]" />
              <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-[#7eb680]/20 blur-[110px]" />
            </div>
            <div className="relative">
              <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl text-white">Ready to save with CHHAR?</h2>
              <p className="mb-8 text-lg text-zinc-400">Download now and discover the best deals around you in Dhaka.</p>
              <Button
                size="lg"
                variant="glow"
                className="btn-get-app group/btn bg-[#4C8E4F] text-white hover:bg-[#417a43] hover:shadow-[0_0_40px_rgba(76,142,79,0.5)]"
                asChild
              >
                <a
                  href={CHHAR_PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Get the App <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
