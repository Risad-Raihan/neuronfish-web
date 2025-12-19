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
               <span className="text-4xl font-bold text-foreground/20">DIKKHA Preview</span>
            </div>
            <div className="flex flex-1 flex-col p-8">
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                  Education
                </span>
              </div>
              <h2 className="mb-4 text-3xl font-bold">DIKKHA</h2>
              <p className="mb-6 text-muted-foreground">
                An AI-powered educational assistant designed specifically for Class 9 & 10 students in Bangladesh. DIKKHA acts as a personal tutor, providing instant explanations, practice problems, and exam preparation help tailored to the NCTB curriculum.
              </p>
              <ul className="mb-8 space-y-3 text-sm">
                <li className="flex items-center">
                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  24/7 AI Doubt Solving
                </li>
                <li className="flex items-center">
                   <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  Chapter-wise Practice Quizzes
                </li>
                <li className="flex items-center">
                   <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  Progress Analytics Dashboard
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
                   <th className="pb-4 font-bold">DIKKHA</th>
                   <th className="pb-4 font-bold">CHHAR</th>
                 </tr>
               </thead>
               <tbody className="divide-y">
                 <tr>
                   <td className="py-4 text-muted-foreground">Core Technology</td>
                   <td className="py-4">Generative AI (LLMs)</td>
                   <td className="py-4">Geolocation & Recommendation Engine</td>
                 </tr>
                 <tr>
                    <td className="py-4 text-muted-foreground">Target Audience</td>
                    <td className="py-4">Students (Class 9-10)</td>
                    <td className="py-4">Shoppers & Diners in Dhaka</td>
                 </tr>
                 <tr>
                    <td className="py-4 text-muted-foreground">Platform</td>
                    <td className="py-4">Web & Mobile App</td>
                    <td className="py-4">Mobile App (iOS/Android)</td>
                 </tr>
                 <tr>
                    <td className="py-4 text-muted-foreground">Pricing Model</td>
                    <td className="py-4">Freemium</td>
                    <td className="py-4">Free for Users</td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>
      </Container>
    </div>
  )
}

