import Link from "next/link"
import { ArrowRight, BarChart3, Calculator, GraduationCap, Handshake, Plane } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { GridPattern } from "@/components/ui/GridPattern"
import { GlowCard } from "@/components/ui/GlowCard"

export const metadata = {
  title: "Products",
  description: "Explore our AI-powered products: DIKKHA for education and CHHAR for smart savings.",
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24 section-gradient-light">
        <GridPattern className="opacity-30" />
        <Container className="relative">
          <SectionHeading
            title="Our Products"
            subtitle="Innovative solutions powered by AI to enhance your daily life."
            className="mb-14"
          />

          <div className="grid gap-10 lg:grid-cols-2">
            {/* DIKKHA Card */}
            <GlowCard className="flex flex-col overflow-hidden">
              <div className="relative h-52 bg-gradient-to-br from-primary/5 to-primary/15 flex items-center justify-center">
                <div className="device-phone scale-[0.38] origin-center">
                  <div className="flex h-full items-center justify-center bg-gradient-to-b from-[#8b38bc]/10 via-[#8b38bc]/5 to-transparent">
                    <div className="rounded-xl border border-[#8b38bc]/30 bg-background/70 p-4 shadow-sm backdrop-blur">
                      <img
                        src="/products/dikkha/dikkha-logo.svg"
                        alt="Dikkha AI logo"
                        className="h-16 w-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-3">
                  <span className="inline-flex items-center rounded-full bg-[#8b38bc]/12 px-2.5 py-0.5 text-xs font-medium text-[#c786e0]">
                    Education
                  </span>
                </div>
                <div className="mb-4 flex items-center gap-2">
                  <img
                    src="/products/dikkha/dikkha-logo.svg"
                    alt="Dikkha AI logo"
                    className="h-6 w-6 rounded"
                  />
                  <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">Official app</span>
                </div>
                <h2 className="mb-3 text-2xl font-semibold text-foreground">Dikkha AI</h2>
                <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                  An efficient AI study assistant for all Class 9-10 students in Bangladesh. Dikkha AI blends textbook-first learning with AI Explain, flashcards, formula support, and infographic generation.
                </p>
                <ul className="mb-8 space-y-2.5 text-sm text-muted-foreground">
                  {[
                    "Built for Class 9-10 across Science, Commerce, and Arts",
                    "Selection-based AI Explain with contextual answers",
                    "Flashcards generated from highlighted textbook content",
                    "Formula chart with AI and math explain support",
                    "Topic/prompt-based infographic generation"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8b38bc] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <Button
                    asChild
                    className="w-full sm:w-auto group/btn bg-[#8b38bc] text-white hover:bg-[#7b2ea8]"
                  >
                    <Link href="/products/dikkha" className="flex items-center gap-2">
                      View Details <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </GlowCard>

            {/* CHHAR Card */}
            <GlowCard className="flex flex-col overflow-hidden">
              <div className="relative h-52 bg-gradient-to-br from-emerald-500/5 to-teal-500/15 flex items-center justify-center">
                <div className="device-phone scale-[0.38] origin-center">
                  <div className="flex h-full items-center justify-center pt-8">
                    <div className="text-center">
                      <span className="block text-4xl mb-2">🏷️</span>
                      <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">CHHAR</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-3">
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    Lifestyle
                  </span>
                </div>
                <h2 className="mb-3 text-2xl font-semibold text-foreground">CHHAR</h2>
                <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                  Your ultimate companion for finding the best deals and promotions in Dhaka. CHHAR uses location-based technology to alert you about discounts nearby, helping you save money on dining, shopping, and services you love.
                </p>
                <ul className="mb-8 space-y-2.5 text-sm text-muted-foreground">
                  {[
                    "Real-time Location Alerts",
                    "Categorized Deal Finder",
                    "Exclusive Partner Offers"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <Button
                    asChild
                    className="w-full sm:w-auto group/btn bg-[#4C8E4F] text-white hover:bg-[#417a43]"
                  >
                    <Link href="/products/chhar" className="flex items-center gap-2">
                      View Details <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </GlowCard>
          </div>
        </Container>
      </section>

      {/* Upcoming Products */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            title="Upcoming Products"
            subtitle="Five new AI products currently in planning and development."
            className="mb-10"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {[
              {
                title: "Dhara",
                desc: "Trusted booking service specifically designed for NGO facilities.",
                icon: Handshake,
                image: "/products/Dhara_placeholder.jpeg",
              },
              {
                title: "Tax Assistant",
                desc: "AI-powered personal and business tax assistant for Bangladesh.",
                icon: Calculator,
                image: "/products/Tax-assistant-placeholder.jpeg",
              },
              {
                title: "Study Abroad Assistant",
                desc: "AI + curated university, scholarship, and visa processing assistant for Bangladeshi students.",
                icon: GraduationCap,
                image: "/products/study-abroad-placeholder.jpeg",
              },
              {
                title: "Travel Partner",
                desc: "AI-powered domestic and international travel planning assistant for Bangladeshi travelers.",
                icon: Plane,
                image: "/products/travel-partner-placeholder.jpeg",
              },
              {
                title: "Human Language Analyst",
                desc: "Natural-language SQL retrieval with advanced analytics, charting, and graphical explanations.",
                icon: BarChart3,
                image: "/products/human-language-placeholder.jpeg",
              },
            ].map((product, i) => (
              <GlowCard key={i} className="p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                    Upcoming
                  </span>
                  <product.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="mb-3 h-16 overflow-hidden rounded-lg border border-border bg-muted/40">
                  <img
                    src={product.image}
                    alt={`${product.title} placeholder visual`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">{product.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{product.desc}</p>
              </GlowCard>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
