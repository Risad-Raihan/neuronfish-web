import Link from "next/link"
import { ArrowRight } from "lucide-react"
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
                  <div className="h-full overflow-hidden">
                    <img
                      src="/products/dikkha/homepage.jpeg"
                      alt="Dikkha AI app homepage"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-3">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
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
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <Button asChild className="w-full sm:w-auto group/btn">
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
                  <Button asChild className="w-full sm:w-auto group/btn">
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

      {/* Comparison Table */}
      <section className="py-16 md:py-24">
        <Container>
          <GlowCard className="p-8">
            <h3 className="mb-6 text-lg font-semibold text-foreground">Quick Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-3 font-medium text-muted-foreground">Feature</th>
                    <th className="pb-3 font-semibold text-foreground">Dikkha AI</th>
                    <th className="pb-3 font-semibold text-foreground">CHHAR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-3 text-muted-foreground">Core Technology</td>
                    <td className="py-3 text-foreground">Agentic RAG (Retrieval-Augmented Generation)</td>
                    <td className="py-3 text-foreground">Geolocation & Recommendation Engine</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-muted-foreground">Target Audience</td>
                    <td className="py-3 text-foreground">Students (Class 9-10, all groups)</td>
                    <td className="py-3 text-foreground">Shoppers & Diners in Dhaka</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-muted-foreground">Platform</td>
                    <td className="py-3 text-foreground">Mobile App (Android/iOS)</td>
                    <td className="py-3 text-foreground">Mobile App (iOS/Android)</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-muted-foreground">Key Features</td>
                    <td className="py-3 text-foreground">Drag & Explain, Generalized Chat, Digital Textbooks, Voice Q&A</td>
                    <td className="py-3 text-foreground">Location-based Deals, Real-time Alerts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GlowCard>
        </Container>
      </section>
    </>
  )
}
