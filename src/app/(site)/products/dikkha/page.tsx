import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { FAQAccordion } from "@/components/ui/FAQAccordion"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"

export const metadata = {
  title: "DIKKHA - AI Tutor for Class 9 & 10",
  description: "Your personal AI tutor for mastering the NCTB curriculum. Get instant help, practice exams, and progress tracking.",
}

export default function DikkhaPage() {
  return (
    <>
      {/* Hero - Royal/Indigo Industrial */}
      <section className="bg-pop-royal text-white py-20 md:py-28 border-b-2 border-black relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 h-64 w-64 rounded-none rotate-45 bg-white/10 blur-xl -z-10" />
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge className="mb-6 bg-white text-pop-royal border-2 border-black hover:bg-gray-100 shadow-funky-sm text-sm py-1 px-3">
                For Class 9 & 10 Students
              </Badge>
              <h1 className="mb-8 text-5xl font-extrabold tracking-tight sm:text-6xl text-white">
                Master Your Studies with <span className="text-white underline decoration-wavy decoration-white decoration-2 underline-offset-4">DIKKHA</span>
              </h1>
              <p className="mb-10 text-xl text-white/90 font-medium leading-relaxed">
                The intelligent AI companion that helps you understand tough concepts, solve problems, and prepare for exams with confidence. Tailored for the Bangladesh National Curriculum.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-white hover:bg-white/90 text-pop-royal border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1" asChild>
                  <Link href="/contact?subject=DIKKHA%20Demo">
                    Request a Demo
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-white border-2 border-white hover:bg-white/10 shadow-none hover:-translate-y-1" asChild>
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl bg-white border-2 border-black flex items-center justify-center p-8 shadow-funky">
               <div className="text-center opacity-70">
                  <span className="block text-9xl mb-4">📚</span>
                  <span className="text-lg font-bold uppercase tracking-widest text-foreground">App Interface</span>
               </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-28 bg-white border-b-2 border-black">
        <Container>
          <SectionHeading
            title="Why Students Love DIKKHA"
            subtitle="Everything you need to excel in your academic journey."
            className="mb-16"
          />
          <div className="grid gap-8 md:grid-cols-3">
             {[
               {
                 title: "Instant Explanations",
                 desc: "Stuck on a physics formula or math problem? Just ask DIKKHA and get clear, step-by-step explanations instantly.",
                 color: "bg-pop-lavender"
               },
               {
                 title: "Exam Preparation",
                 desc: "Generate practice tests based on previous years' board questions and potential new patterns to test your readiness.",
                 color: "bg-pop-navy text-white"
               },
               {
                 title: "Progress Tracking",
                 desc: "Visualize your strengths and weaknesses with our smart dashboard that adapts to your learning pace.",
                 color: "bg-pop-royal text-white"
               }
             ].map((feature, i) => (
               <div key={i} className="rounded-xl border-2 border-black p-8 shadow-funky bg-white hover:-translate-y-1 hover:shadow-funky-hover transition-all">
                 <div className={`mb-6 inline-flex rounded-full ${feature.color} p-3 text-foreground border-2 border-black shadow-funky-sm`}>
                   <CheckCircle2 className="h-6 w-6" />
                 </div>
                 <h3 className="mb-3 text-2xl font-bold text-foreground">{feature.title}</h3>
                 <p className="text-foreground/70 font-medium leading-relaxed">{feature.desc}</p>
               </div>
             ))}
          </div>
        </Container>
      </section>

      {/* How it Works */}
      <section className="bg-pop-lavender/10 py-20 md:py-28 border-b-2 border-black">
        <Container>
           <SectionHeading title="How It Works" className="mb-16" />
           <div className="grid gap-12 md:grid-cols-3 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-black -z-10" />
              
              {[
                { step: "01", title: "Sign Up", desc: "Create your account and select your class and group (Science, Arts, Commerce).", color: "bg-pop-royal" },
                { step: "02", title: "Ask & Learn", desc: "Type your question or upload a photo of your problem. Our AI analyzes it instantly.", color: "bg-pop-lavender" },
                { step: "03", title: "Practice", desc: "Take quizzes tailored to your weak areas and track your improvement over time.", color: "bg-pop-navy" }
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center bg-white p-6 rounded-xl border-2 border-black shadow-funky">
                   <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${item.color} text-2xl font-black text-white border-2 border-black shadow-funky-sm`}>
                     {item.step}
                   </div>
                   <h3 className="mb-3 text-xl font-bold text-foreground">{item.title}</h3>
                   <p className="text-foreground/70 font-medium">{item.desc}</p>
                </div>
              ))}
           </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white border-b-2 border-black">
        <Container className="max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" className="mb-16" />
          <FAQAccordion
            items={[
              {
                question: "Is DIKKHA free to use?",
                answer: "We offer a generous free tier that includes basic Q&A and limited practice tests. Our premium plan unlocks unlimited access and advanced analytics."
              },
              {
                question: "Does it cover all subjects?",
                answer: "Currently, we focus on Physics, Chemistry, Math, and Biology for Science students, with plans to expand to other subjects soon."
              },
              {
                question: "Is the content aligned with the Bangladeshi curriculum?",
                answer: "Yes, our AI models are fine-tuned on the NCTB curriculum and textbooks used in Class 9 and 10."
              },
              {
                question: "Can I use it on my phone?",
                answer: "Absolutely! DIKKHA is fully responsive and works great on any smartphone, tablet, or computer."
              }
            ]}
          />
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-pop-royal text-white">
        <Container>
          <div className="rounded-2xl bg-white/10 px-6 py-16 text-center text-white border-2 border-white/20 shadow-none max-w-4xl mx-auto backdrop-blur-sm">
            <h2 className="mb-6 text-4xl font-extrabold sm:text-5xl text-white drop-shadow-md">Ready to boost your grades?</h2>
            <p className="mb-10 text-xl font-bold text-white/90">Join thousands of students learning smarter with DIKKHA.</p>
            <Button size="lg" variant="secondary" asChild className="bg-white text-pop-royal hover:bg-gray-100 border-2 border-white shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1">
               <Link href="/contact?subject=DIKKHA%20Demo">
                 Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
               </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
