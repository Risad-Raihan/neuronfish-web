import Link from "next/link"
import { ArrowRight, BookOpen, Mic, Sparkles, Brain, ScanText, MessageCircle, GraduationCap, BarChart3, ImageIcon } from "lucide-react"
import { FAQAccordion } from "@/components/ui/FAQAccordion"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { GridPattern } from "@/components/ui/GridPattern"
import { GlowCard } from "@/components/ui/GlowCard"

export const metadata = {
  title: "DIKKHA AI - AI Tutor for Class 9 & 10",
  description: "Your personal AI tutor powered by Agentic RAG. Digital textbooks, voice Q&A, and smart explanations for the NCTB curriculum.",
}

export default function DikkhaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28 section-gradient-light">
        <GridPattern className="opacity-30" />
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px] animate-float-slow" />
        </div>
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge className="mb-4">
                For Class 9 & 10 Students
              </Badge>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Master Your Studies with <span className="text-gradient">DIKKHA</span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                An AI-powered educational mobile application with digital textbook reader, voice input, and intelligent assistance. Powered by Agentic RAG technology that understands your intent and rewrites queries for the perfect answer.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" variant="glow" asChild>
                  <Link href="/contact?subject=DIKKHA%20AI%20Early%20Access">
                    Get Early Access
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="device-phone">
                <div className="flex h-full items-center justify-center pt-8 bg-gradient-to-b from-primary/5 to-transparent">
                  <div className="text-center">
                    <span className="block text-6xl mb-3">📚</span>
                    <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Dikkha AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Technology Spotlight */}
      <section className="border-t border-border bg-muted/30 py-20 md:py-28">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">
              Powered by Agentic RAG
            </Badge>
            <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">
              Smart Intelligence That <span className="text-gradient">Understands You</span>
            </h2>
            <p className="mb-12 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our advanced Agentic RAG system goes beyond simple question-answering. It intelligently understands your intent, rewrites queries when needed, and retrieves the perfect answers from NCTB-aligned educational content.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Brain, title: "Intent Understanding", desc: "Analyzes what you really mean, not just what you type" },
                { icon: Sparkles, title: "Query Rewriting", desc: "Automatically improves your questions for better results" },
                { icon: ScanText, title: "Contextual Explanations", desc: "Select any text to get instant, grade-appropriate explanations" },
                { icon: MessageCircle, title: "Academic Chat Assistant", desc: "Ask any question to our specialized subject tutors" },
              ].map((item, i) => (
                <GlowCard key={i} className="p-6 text-center">
                  <item.icon className="h-6 w-6 mx-auto mb-3 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Why Students Love DIKKHA AI"
            subtitle="Everything you need to excel in your academic journey."
            className="mb-14"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Digital Textbook Reader",
                desc: "Access NCTB-aligned educational content in Bangla and English directly in the app. Read chapters, browse subjects, and study at your own pace.",
                icon: BookOpen
              },
              {
                title: "Drag & Explain Technology",
                desc: "Stuck on a specific paragraph? Simply drag and select any portion of your textbook chapter. Our AI tutor analyzes the context and provides instant explanations.",
                icon: ScanText
              },
              {
                title: "24/7 Academic Chat Assistant",
                desc: "Have a broader question? Chat with our intelligent tutor about any academic topic. It acts as your personal guide for solving problems.",
                icon: MessageCircle
              },
              {
                title: "Voice-Powered Learning",
                desc: "Ask questions using speech-to-text functionality in Bangla or English. Perfect for when typing is difficult or you're on the go.",
                icon: Mic
              },
              {
                title: "Smart Revision Tools",
                desc: "Generate AI-powered flashcards automatically from your study materials. Organize by subject and topic for efficient revision.",
                icon: Sparkles
              }
            ].map((feature, i) => (
              <GlowCard key={i} className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </GlowCard>
            ))}
          </div>
        </Container>
      </section>

      {/* How it Works */}
      <section className="border-t border-border bg-muted/30 py-20 md:py-28">
        <Container>
          <SectionHeading title="How It Works" className="mb-14" />
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { step: "01", title: "Sign Up", desc: "Create your account with your phone number. Select your class (9 or 10), group (Science, Commerce, or Humanities), and education board." },
              { step: "02", title: "Read & Ask", desc: "Browse digital textbooks or select text for explanations. Ask questions via text or voice. Our Agentic RAG understands your intent and finds the perfect answer." },
              { step: "03", title: "Study & Revise", desc: "Generate flashcards from your study materials, organize chat sessions by subject, and track your reading progress across chapters." }
            ].map((item, i) => (
              <div key={i} className="relative">
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-px bg-gradient-to-r from-primary/30 to-transparent" />
                )}
                <GlowCard className="flex flex-col items-center text-center p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-extrabold text-primary">
                    {item.step}
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </GlowCard>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Coming Soon */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Coming Soon"
            subtitle="Exciting features we're building to enhance your learning experience."
            className="mb-14"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Graphical Animation Learning",
                desc: "Visual animations and interactive graphics to help you understand complex concepts better.",
                icon: GraduationCap
              },
              {
                title: "Chapter & Topic-wise Quizzes",
                desc: "Automated quizzes organized by chapters and topics to test your understanding and prepare for exams.",
                icon: BarChart3
              },
              {
                title: "Infographic Generation",
                desc: "AI-generated visual summaries and infographics from your study materials for quick revision.",
                icon: ImageIcon
              },
              {
                title: "Personal Assessment Dashboard",
                desc: "Comprehensive analytics showing your strengths, weaknesses, and progress across all subjects.",
                icon: BarChart3
              }
            ].map((feature, i) => (
              <div key={i} className="rounded-xl border border-dashed border-primary/20 bg-card/50 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-sm">
                <div className="mb-4 inline-flex rounded-lg bg-muted p-2.5 text-muted-foreground">
                  <feature.icon className="h-5 w-5" />
                </div>
                <Badge variant="secondary" className="mb-2 text-xs">Coming Soon</Badge>
                <h3 className="mb-2 text-base font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-border bg-muted/30 py-20 md:py-28">
        <Container className="max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" className="mb-12" />
          <FAQAccordion
            items={[
              {
                question: "Who can use Dikkha AI?",
                answer: "Dikkha AI is designed for Class 9 and Class 10 students in Bangladesh. The app supports all study groups: Science, Commerce, and Humanities. Users must be at least 13 years old, and those under 18 should use the app under parental supervision."
              },
              {
                question: "Is the content aligned with the Bangladeshi curriculum?",
                answer: "Yes! All educational content is aligned with the NCTB (National Curriculum and Textbook Board) curriculum. The digital textbooks and AI responses are specifically tailored for Class 9-10 students following the Bangladesh National Curriculum."
              },
              {
                question: "How does the Agentic RAG technology work?",
                answer: "Our Agentic RAG (Retrieval-Augmented Generation) system intelligently understands your questions, rewrites them when needed for better clarity, and retrieves accurate answers from NCTB-aligned textbooks. This ensures you get contextually relevant and educationally sound responses every time."
              },
              {
                question: "What information do you collect?",
                answer: "We collect your phone number for account creation, your name, educational information (grade, group, board), and chat conversations. We also track reading progress and app usage. All data is handled according to our Privacy Policy. You can delete your account and all associated data at any time through the Profile section."
              },
              {
                question: "Can I use voice input?",
                answer: "Yes! Dikkha AI supports speech-to-text functionality. You can ask questions using voice commands in Bangla or English. Voice recordings are processed locally and not stored on our servers."
              },
              {
                question: "Is my data secure?",
                answer: "Absolutely. We use Firebase for secure authentication and data storage. All data transmission is encrypted using HTTPS/TLS. Your chat conversations are stored securely and can be deleted at any time. Please review our Privacy Policy for complete details."
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
              <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl text-white">Ready to boost your grades?</h2>
              <p className="mb-8 text-lg text-zinc-400">Join students learning smarter with Dikkha AI. Get early access to the future of education.</p>
              <Button size="lg" variant="glow" asChild>
                <Link href="/contact?subject=Dikkha%20AI%20Early%20Access" className="flex items-center gap-2">
                  Get Early Access <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
