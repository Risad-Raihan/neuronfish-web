import Link from "next/link"
import { CheckCircle2, ArrowRight, BookOpen, Mic, Sparkles, Brain, Zap, BarChart3, ImageIcon, GraduationCap } from "lucide-react"
import { FAQAccordion } from "@/components/ui/FAQAccordion"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"

export const metadata = {
  title: "DIKKHA AI - AI Tutor for Class 9 & 10",
  description: "Your personal AI tutor powered by Agentic RAG. Digital textbooks, voice Q&A, and smart explanations for the NCTB curriculum.",
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
                An AI-powered educational mobile application with digital textbook reader, voice input, and intelligent assistance. Powered by Agentic RAG technology that understands your intent and rewrites queries for the perfect answer. Tailored for Class 9-10 students following the NCTB curriculum.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-white hover:bg-white/90 text-pop-royal border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1" asChild>
                  <Link href="/contact?subject=DIKKHA%20AI%20Early%20Access">
                    Get Early Access
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

      {/* Technology Spotlight */}
      <section className="py-20 md:py-28 bg-pop-navy text-white border-b-2 border-black">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white text-pop-navy border-2 border-black shadow-funky-sm text-sm py-1 px-3">
              Powered by Agentic RAG
            </Badge>
            <h2 className="mb-6 text-4xl font-extrabold sm:text-5xl text-white">
              Smart Intelligence That Understands You
            </h2>
            <p className="mb-8 text-xl text-white/90 font-medium leading-relaxed">
              Our advanced Agentic RAG system goes beyond simple question-answering. It intelligently understands your intent, rewrites queries when needed, and retrieves the perfect answers from NCTB-aligned educational content. This ensures you get accurate, contextually relevant explanations every time.
            </p>
            <div className="grid gap-6 md:grid-cols-3 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 p-6">
                <Brain className="h-8 w-8 mb-4 mx-auto text-white" />
                <h3 className="text-lg font-bold mb-2">Intent Understanding</h3>
                <p className="text-sm text-white/80">Analyzes what you really mean, not just what you type</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 p-6">
                <Sparkles className="h-8 w-8 mb-4 mx-auto text-white" />
                <h3 className="text-lg font-bold mb-2">Query Rewriting</h3>
                <p className="text-sm text-white/80">Automatically improves your questions for better results</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 p-6">
                <Zap className="h-8 w-8 mb-4 mx-auto text-white" />
                <h3 className="text-lg font-bold mb-2">Precise Retrieval</h3>
                <p className="text-sm text-white/80">Finds the exact information from NCTB textbooks</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-28 bg-white border-b-2 border-black">
        <Container>
          <SectionHeading
            title="Why Students Love DIKKHA AI"
            subtitle="Everything you need to excel in your academic journey."
            className="mb-16"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
             {[
               {
                 title: "Digital Textbook Reader",
                 desc: "Access NCTB-aligned educational content in Bangla and English directly in the app. Read chapters, browse subjects, and study at your own pace.",
                 color: "bg-pop-lavender",
                 icon: BookOpen
               },
               {
                 title: "Voice-Powered Learning",
                 desc: "Ask questions using speech-to-text functionality in Bangla or English. Perfect for when typing is difficult or you're on the go.",
                 color: "bg-pop-navy text-white",
                 icon: Mic
               },
               {
                 title: "AI-Powered Assistance",
                 desc: "Select text from textbooks or ask questions to get instant explanations and problem-solving help. Our Agentic RAG ensures accurate, contextual answers.",
                 color: "bg-pop-royal text-white",
                 icon: Brain
               },
               {
                 title: "Smart Revision Tools",
                 desc: "Generate AI-powered flashcards automatically from your study materials. Organize by subject and topic for efficient revision.",
                 color: "bg-pop-lavender",
                 icon: Sparkles
               }
             ].map((feature, i) => (
               <div key={i} className="rounded-xl border-2 border-black p-8 shadow-funky bg-white hover:-translate-y-1 hover:shadow-funky-hover transition-all">
                 <div className={`mb-6 inline-flex rounded-full ${feature.color} p-3 text-foreground border-2 border-black shadow-funky-sm`}>
                   <feature.icon className="h-6 w-6" />
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
                { step: "01", title: "Sign Up", desc: "Create your account with your phone number. Select your class (9 or 10), group (Science, Commerce, or Humanities), and education board.", color: "bg-pop-royal" },
                { step: "02", title: "Read & Ask", desc: "Browse digital textbooks or select text for explanations. Ask questions via text or voice. Our Agentic RAG understands your intent and finds the perfect answer.", color: "bg-pop-lavender" },
                { step: "03", title: "Study & Revise", desc: "Generate flashcards from your study materials, organize chat sessions by subject, and track your reading progress across chapters.", color: "bg-pop-navy" }
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

      {/* Future Enhancements */}
      <section className="py-20 md:py-28 bg-white border-b-2 border-black">
        <Container>
          <SectionHeading
            title="Coming Soon"
            subtitle="Exciting features we're building to enhance your learning experience."
            className="mb-16"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Graphical Animation Learning",
                desc: "Visual animations and interactive graphics to help you understand complex concepts better.",
                color: "bg-pop-lavender",
                icon: GraduationCap
              },
              {
                title: "Chapter & Topic-wise Quizzes",
                desc: "Automated quizzes organized by chapters and topics to test your understanding and prepare for exams.",
                color: "bg-pop-navy text-white",
                icon: BarChart3
              },
              {
                title: "Infographic Generation",
                desc: "AI-generated visual summaries and infographics from your study materials for quick revision.",
                color: "bg-pop-royal text-white",
                icon: ImageIcon
              },
              {
                title: "Personal Assessment Dashboard",
                desc: "Comprehensive analytics showing your strengths, weaknesses, and progress across all subjects and topics.",
                color: "bg-pop-lavender",
                icon: BarChart3
              }
            ].map((feature, i) => (
              <div key={i} className="rounded-xl border-2 border-black border-dashed p-8 shadow-funky bg-white/50 hover:-translate-y-1 hover:shadow-funky-hover transition-all opacity-90">
                <div className={`mb-6 inline-flex rounded-full ${feature.color} p-3 text-foreground border-2 border-black shadow-funky-sm`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <Badge className="mb-3 bg-black text-white text-xs">Coming Soon</Badge>
                <h3 className="mb-3 text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-foreground/70 font-medium leading-relaxed text-sm">{feature.desc}</p>
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
      <section className="py-20 md:py-28 bg-pop-royal text-white">
        <Container>
          <div className="rounded-2xl bg-white/10 px-6 py-16 text-center text-white border-2 border-white/20 shadow-none max-w-4xl mx-auto backdrop-blur-sm">
            <h2 className="mb-6 text-4xl font-extrabold sm:text-5xl text-white drop-shadow-md">Ready to boost your grades?</h2>
            <p className="mb-10 text-xl font-bold text-white/90">Join students learning smarter with Dikkha AI. Get early access to the future of education.</p>
            <Button size="lg" variant="secondary" asChild className="bg-white text-pop-royal hover:bg-gray-100 border-2 border-white shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1">
               <Link href="/contact?subject=Dikkha%20AI%20Early%20Access">
                 Get Early Access <ArrowRight className="ml-2 h-5 w-5" />
               </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
