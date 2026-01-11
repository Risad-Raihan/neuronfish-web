import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"

export const metadata = {
  title: "Products",
  description: "Explore our AI-powered products: DIKKHA for education and CHHAR for smart savings.",
}

export default function ProductsPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Our Products"
          subtitle="Innovative solutions powered by AI to enhance your daily life."
          className="mb-16"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* DIKKHA Card */}
          <div className="flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-md">
            <div className="aspect-video w-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-8 flex items-center justify-center">
               <span className="text-4xl font-bold text-foreground/20">Dikkha AI Preview</span>
            </div>
            <div className="flex flex-1 flex-col p-8">
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                  Education
                </span>
              </div>
              <h2 className="mb-4 text-3xl font-bold">Dikkha AI</h2>
              <p className="mb-6 text-muted-foreground">
                An AI-powered educational mobile application powered by Agentic RAG technology. Designed specifically for Class 9 & 10 students in Bangladesh, Dikkha AI provides digital textbook access, drag-to-explain functionality, generalized academic chat, voice-powered Q&A, and intelligent explanations tailored to the NCTB curriculum. Our smart system understands your intent and rewrites queries for better results.
              </p>
              <ul className="mb-8 space-y-3 text-sm">
                <li className="flex items-center">
                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  Agentic RAG Engine with Smart Query Rewriting
                </li>
                <li className="flex items-center">
                   <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  Drag & Explain Text Analysis
                </li>
                <li className="flex items-center">
                   <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  24/7 Generalized Academic Chat
                </li>
                <li className="flex items-center">
                   <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  Digital Textbook Reader (NCTB-aligned)
                </li>
                <li className="flex items-center">
                   <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  Voice Input & Speech-to-Text
                </li>
                <li className="flex items-center">
                   <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  AI-Generated Flashcards & Study Materials
                </li>
              </ul>
              <div className="mt-auto pt-6">
                <Button asChild className="w-full sm:w-auto">
                  <Link href="/products/dikkha">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* CHHAR Card */}
          <div className="flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-md">
            <div className="aspect-video w-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-8 flex items-center justify-center">
               <span className="text-4xl font-bold text-foreground/20">CHHAR Preview</span>
            </div>
            <div className="flex flex-1 flex-col p-8">
              <div className="mb-4">
                 <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                  Lifestyle
                </span>
              </div>
              <h2 className="mb-4 text-3xl font-bold">CHHAR</h2>
              <p className="mb-6 text-muted-foreground">
                Your ultimate companion for finding the best deals and promotions in Dhaka. CHHAR uses location-based technology to alert you about discounts nearby, helping you save money on dining, shopping, and services you love.
              </p>
              <ul className="mb-8 space-y-3 text-sm">
                <li className="flex items-center">
                   <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  Real-time Location Alerts
                </li>
                <li className="flex items-center">
                   <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  Categorized Deal Finder
                </li>
                <li className="flex items-center">
                   <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  Exclusive Partner Offers
                </li>
              </ul>
              <div className="mt-auto pt-6">
                <Button asChild className="w-full sm:w-auto">
                  <Link href="/products/chhar">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table (Optional/Simple) */}
        <div className="mt-24 rounded-xl border bg-card p-8">
           <h3 className="mb-6 text-xl font-bold">Quick Comparison</h3>
           <div className="overflow-x-auto">
             <table className="w-full min-w-[500px] text-left text-sm">
               <thead>
                 <tr className="border-b">
                   <th className="pb-4 font-medium text-muted-foreground">Feature</th>
                   <th className="pb-4 font-bold">Dikkha AI</th>
                   <th className="pb-4 font-bold">CHHAR</th>
                 </tr>
               </thead>
               <tbody className="divide-y">
                 <tr>
                   <td className="py-4 text-muted-foreground">Core Technology</td>
                   <td className="py-4">Agentic RAG (Retrieval-Augmented Generation)</td>
                   <td className="py-4">Geolocation & Recommendation Engine</td>
                 </tr>
                 <tr>
                    <td className="py-4 text-muted-foreground">Target Audience</td>
                    <td className="py-4">Students (Class 9-10, all groups)</td>
                    <td className="py-4">Shoppers & Diners in Dhaka</td>
                 </tr>
                 <tr>
                    <td className="py-4 text-muted-foreground">Platform</td>
                    <td className="py-4">Mobile App (Android/iOS)</td>
                    <td className="py-4">Mobile App (iOS/Android)</td>
                 </tr>
                 <tr>
                    <td className="py-4 text-muted-foreground">Key Features</td>
                    <td className="py-4">Drag & Explain, Generalized Chat, Digital Textbooks, Voice Q&A</td>
                    <td className="py-4">Location-based Deals, Real-time Alerts</td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>
      </Container>
    </div>
  )
}

