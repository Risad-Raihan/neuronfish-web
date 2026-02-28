import Link from "next/link"
import { ArrowRight, BookOpen, Brain, CalendarClock, FileText, ImageIcon, NotebookPen, ScanText, Sparkles, Rocket, WandSparkles } from "lucide-react"
import { DIKKHA_PLAY_STORE_URL } from "@/lib/constants"
import { FAQAccordion } from "@/components/ui/FAQAccordion"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { GridPattern } from "@/components/ui/GridPattern"
import { GlowCard } from "@/components/ui/GlowCard"

export const metadata = {
  title: "Dikkha AI - Study Assistant for Class 9-10",
  description:
    "Dikkha AI is an efficient AI study assistant for all Class 9-10 students in Bangladesh with textbook reading, AI Explain, flashcards, formula support, and infographics.",
}

export default function DikkhaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28 section-gradient-light">
        <GridPattern className="opacity-30" />
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#8b38bc]/20 blur-[120px] animate-float-slow" />
          <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-[#b26ed4]/20 blur-[130px] animate-float-slow" style={{ animationDelay: "1.6s" }} />
          <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#8b38bc]/10 blur-[140px]" />
        </div>
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge className="mb-4 border-[#8b38bc]/40 bg-[#8b38bc]/15 text-[#d9b5ed]">
                For All Class 9-10 Students (Science, Commerce, Arts)
              </Badge>
              <div className="mb-5 flex items-center gap-4">
                <img
                  src="/products/dikkha/dikkha-logo.svg"
                  alt="Dikkha AI logo"
                  className="h-14 w-auto rounded-md"
                />
                <span className="text-base font-semibold tracking-wide text-muted-foreground uppercase">Dikkha AI</span>
              </div>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
                The smart study assistant for{" "}
                <span className="bg-gradient-to-r from-[#a252d0] via-[#c786e0] to-[#8b38bc] bg-clip-text text-transparent">
                  Class 9-10 success
                </span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                Dikkha AI helps students learn faster with textbook-based AI support. Read NCTB content, select any topic directly from the book, and instantly generate explanations, flashcards, formula help, and visual learning materials.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  variant="glow"
                  className="group/btn bg-[#8b38bc] text-white hover:bg-[#7b2ea8] hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(139,56,188,0.4)] transition-all duration-200"
                  asChild
                >
                  <a
                    href={DIKKHA_PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Get the APP <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {["Textbook-first AI", "Selection-based workflow", "All Class 9-10 groups"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-[#8b38bc]/35 bg-[#8b38bc]/10 px-3 py-1 text-xs font-medium text-[#e8d5f3]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="pointer-events-none absolute -left-8 top-10 hidden rounded-xl border border-[#8b38bc]/35 bg-background/90 p-3 text-xs font-medium text-foreground shadow-sm backdrop-blur lg:block">
                  <span className="inline-flex items-center gap-1.5"><Rocket className="h-3.5 w-3.5 text-[#b26ed4]" /> Fast learning loop</span>
                </div>
                <div className="pointer-events-none absolute -right-8 bottom-10 hidden rounded-xl border border-[#8b38bc]/35 bg-background/90 p-3 text-xs font-medium text-foreground shadow-sm backdrop-blur lg:block">
                  <span className="inline-flex items-center gap-1.5"><WandSparkles className="h-3.5 w-3.5 text-[#b26ed4]" /> AI-assisted revision</span>
                </div>
                <div className="device-phone">
                <div className="h-full overflow-hidden bg-gradient-to-b from-[#8b38bc]/10 to-transparent">
                  <img
                    src="/products/dikkha/homepage.jpeg"
                    alt="Dikkha AI app homepage showing class 9-10 study library"
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
      <section className="relative overflow-hidden border-t border-[#8b38bc]/20 bg-gradient-to-b from-[#1b1322] via-background to-background py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-12 left-1/3 h-72 w-72 rounded-full bg-[#8b38bc]/15 blur-[130px]" />
          <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-[#b26ed4]/12 blur-[120px]" />
        </div>
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 border-[#8b38bc]/35 bg-[#8b38bc]/15 text-[#d9b5ed]">
              Powered by Agentic RAG
            </Badge>
            <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">
              Built for real textbook learning,{" "}
              <span className="bg-gradient-to-r from-[#a252d0] to-[#c786e0] bg-clip-text text-transparent">
                not generic chat
              </span>
            </h2>
            <p className="mb-12 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Dikkha AI understands student intent, rewrites unclear queries, and answers from curriculum-aligned sources. Every feature is designed around how Class 9-10 students actually study.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Brain, title: "Intent Understanding", desc: "Interprets student intent from selected textbook context and questions." },
                { icon: Sparkles, title: "Smart Query Rewriting", desc: "Refines unclear prompts before retrieval for better responses." },
                { icon: ScanText, title: "Selection-Based Learning", desc: "Generate support directly from highlighted textbook portions." },
                { icon: BookOpen, title: "NCTB Context", desc: "Grounded in class 9-10 learning flow and curriculum language." },
              ].map((item, i) => (
                <GlowCard key={i} className="group relative overflow-hidden p-6 text-center border-[#8b38bc]/25 bg-gradient-to-b from-card to-[#8b38bc]/[0.06]">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#8b38bc]/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <item.icon className="h-6 w-6 mx-auto mb-3 text-[#b26ed4]" />
                  <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Visual Feature Stories */}
      <section id="features" className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[#8b38bc]/10 blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#b26ed4]/10 blur-[150px]" />
        </div>
        <Container>
          <SectionHeading
            title="What students can do with Dikkha AI"
            subtitle="A visual walkthrough of the core learning experiences."
            className="mb-14"
          />
          <div className="space-y-8">
            <GlowCard className="relative overflow-hidden p-6 md:p-8 border-[#8b38bc]/25 bg-gradient-to-br from-card to-[#8b38bc]/[0.06]">
              <div className="absolute right-5 top-5 rounded-full border border-[#8b38bc]/30 bg-[#8b38bc]/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[#c786e0]">01</div>
              <div className="mb-6 flex items-center gap-3">
                <div className="inline-flex rounded-lg bg-[#8b38bc]/15 p-2.5 text-[#c786e0]">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">App homepage and subject library</h3>
              </div>
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                Students can start from a structured library, pick subjects quickly, and continue learning from where they left off.
              </p>
              <div className="flex justify-center">
                <div className="w-full max-w-[250px] rounded-2xl border border-border bg-card p-2 shadow-sm">
                  <div className="overflow-hidden rounded-xl border border-border/60">
                    <img
                      src="/products/dikkha/homepage.jpeg"
                      alt="Dikkha AI homepage with class 9-10 subject cards"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </GlowCard>

            <GlowCard className="relative overflow-hidden p-6 md:p-8 border-[#8b38bc]/25 bg-gradient-to-br from-card to-[#8b38bc]/[0.06]">
              <div className="absolute right-5 top-5 rounded-full border border-[#8b38bc]/30 bg-[#8b38bc]/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[#c786e0]">02</div>
              <div className="mb-6 flex items-center gap-3">
                <div className="inline-flex rounded-lg bg-[#8b38bc]/15 p-2.5 text-[#c786e0]">
                  <ScanText className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">AI Explain from selected textbook text</h3>
              </div>
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                Students drag-highlight a difficult section from an NCTB chapter and use AI Explain to get clearer, context-aware explanations in seconds.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="mx-auto w-full max-w-[240px]">
                  <p className="mb-2 text-center text-xs font-medium text-muted-foreground uppercase tracking-wide">Selection</p>
                  <div className="rounded-2xl border border-border bg-card p-2 shadow-sm">
                    <div className="overflow-hidden rounded-xl border border-border/60">
                      <img
                        src="/products/dikkha/ai-explain-page.jpeg"
                        alt="Dikkha AI explain selection flow"
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="mx-auto w-full max-w-[240px]">
                  <p className="mb-2 text-center text-xs font-medium text-muted-foreground uppercase tracking-wide">Answer</p>
                  <div className="rounded-2xl border border-border bg-card p-2 shadow-sm">
                    <div className="overflow-hidden rounded-xl border border-border/60">
                      <img
                        src="/products/dikkha/ai-explain-answer.jpeg"
                        alt="Dikkha AI explain answer output"
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>

            <GlowCard className="relative overflow-hidden p-6 md:p-8 border-[#8b38bc]/25 bg-gradient-to-br from-card to-[#8b38bc]/[0.06]">
              <div className="absolute right-5 top-5 rounded-full border border-[#8b38bc]/30 bg-[#8b38bc]/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[#c786e0]">03</div>
              <div className="mb-6 flex items-center gap-3">
                <div className="inline-flex rounded-lg bg-[#8b38bc]/15 p-2.5 text-[#c786e0]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Flashcards from selected content</h3>
              </div>
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                The same highlighted text can instantly become revision-ready flashcards, helping students move from reading to active recall.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="mx-auto w-full max-w-[240px]">
                  <p className="mb-2 text-center text-xs font-medium text-muted-foreground uppercase tracking-wide">Question</p>
                  <div className="rounded-2xl border border-border bg-card p-2 shadow-sm">
                    <div className="overflow-hidden rounded-xl border border-border/60">
                      <img
                        src="/products/dikkha/flashcard-ques.jpeg"
                        alt="Dikkha AI flashcard question view"
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="mx-auto w-full max-w-[240px]">
                  <p className="mb-2 text-center text-xs font-medium text-muted-foreground uppercase tracking-wide">Answer</p>
                  <div className="rounded-2xl border border-border bg-card p-2 shadow-sm">
                    <div className="overflow-hidden rounded-xl border border-border/60">
                      <img
                        src="/products/dikkha/flashcard-answer.jpeg"
                        alt="Dikkha AI flashcard answer view"
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>

            <div className="grid gap-8 lg:grid-cols-2">
              <GlowCard className="relative overflow-hidden p-6 md:p-8 border-[#8b38bc]/25 bg-gradient-to-br from-card to-[#8b38bc]/[0.06]">
                <div className="absolute right-5 top-5 rounded-full border border-[#8b38bc]/30 bg-[#8b38bc]/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[#c786e0]">04</div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="inline-flex rounded-lg bg-[#8b38bc]/15 p-2.5 text-[#c786e0]">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Formula chart + explain support</h3>
                </div>
                <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                  Formula mode collects formulas from book content so students can revise fast, then use AI Explain and math-focused clarification when needed.
                </p>
                <div className="flex justify-center">
                  <div className="w-full max-w-[250px] rounded-2xl border border-border bg-card p-2 shadow-sm">
                    <div className="overflow-hidden rounded-xl border border-border/60">
                      <img
                        src="/products/dikkha/formula-page.jpeg"
                        alt="Dikkha AI formula chart and explain interface"
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </GlowCard>

              <GlowCard className="relative overflow-hidden p-6 md:p-8 border-[#8b38bc]/25 bg-gradient-to-br from-card to-[#8b38bc]/[0.06]">
                <div className="absolute right-5 top-5 rounded-full border border-[#8b38bc]/30 bg-[#8b38bc]/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[#c786e0]">05</div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="inline-flex rounded-lg bg-[#8b38bc]/15 p-2.5 text-[#c786e0]">
                    <ImageIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Infographics generation</h3>
                </div>
                <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                  Students can choose topics, pick suggested prompts, or write custom prompts to generate high-quality infographic visuals for quick understanding.
                </p>
                <div className="flex justify-center">
                  <div className="w-full max-w-[250px] rounded-2xl border border-border bg-card p-2 shadow-sm">
                    <div className="overflow-hidden rounded-xl border border-border/60">
                      <img
                        src="/products/dikkha/infographics-page.jpeg"
                        alt="Dikkha AI infographic generation result"
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </Container>
      </section>

      {/* How it Works */}
      <section className="relative overflow-hidden border-t border-[#8b38bc]/20 bg-gradient-to-b from-background via-[#1a1220] to-background py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#8b38bc]/12 blur-[140px]" />
        </div>
        <Container>
          <SectionHeading title="How It Works" className="mb-14" />
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { step: "01", title: "Read from your book", desc: "Open chapter content and focus on the exact line or paragraph you need to understand." },
              { step: "02", title: "Choose a learning action", desc: "Use AI Explain, Flashcards, Formula tools, or Infographics directly from selected text or prompts." },
              { step: "03", title: "Revise smarter", desc: "Review answers, save key outputs, and revisit difficult topics with a structured study flow." }
            ].map((item, i) => (
              <div key={i} className="relative">
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-px bg-gradient-to-r from-[#8b38bc]/30 to-transparent" />
                )}
                <GlowCard className="flex flex-col items-center text-center p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#8b38bc]/12 text-lg font-extrabold text-[#b26ed4]">
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

      {/* Roadmap */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-10 right-1/4 h-72 w-72 rounded-full bg-[#8b38bc]/12 blur-[130px]" />
          <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[#b26ed4]/10 blur-[120px]" />
        </div>
        <Container>
          <SectionHeading
            title="Future updates"
            subtitle="Major features planned to make Dikkha AI an even stronger study ecosystem."
            className="mb-14"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Board Question Bank Solver",
                desc: "Practice from board-style question banks and get guided solving support with explanations.",
                icon: BookOpen
              },
              {
                title: "AI Study Planner",
                desc: "Generate personalized study schedules based on chapter load, exam date, and weak areas.",
                icon: CalendarClock
              },
              {
                title: "Smart Note-taker",
                desc: "Capture, organize, and summarize notes from textbook content and AI sessions automatically.",
                icon: NotebookPen
              },
              {
                title: "And more",
                desc: "Ongoing improvements across revision workflows, exam prep, and student productivity tools.",
                icon: Sparkles
              }
            ].map((feature, i) => (
              <div key={i} className="rounded-xl border border-dashed border-[#8b38bc]/30 bg-gradient-to-br from-card to-[#8b38bc]/[0.04] p-6 transition-all duration-300 hover:border-[#b26ed4]/50 hover:shadow-sm">
                <div className="mb-4 inline-flex rounded-lg bg-[#8b38bc]/15 p-2.5 text-[#c786e0]">
                  <feature.icon className="h-5 w-5" />
                </div>
                <Badge variant="secondary" className="mb-2 text-xs border-[#8b38bc]/30 bg-[#8b38bc]/15 text-[#d9b5ed]">Coming Soon</Badge>
                <h3 className="mb-2 text-base font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-[#8b38bc]/20 bg-gradient-to-b from-[#1a1220] to-background py-20 md:py-28">
        <Container className="max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" className="mb-12" />
          <FAQAccordion
            items={[
              {
                question: "Who can use Dikkha AI?",
                answer: "Dikkha AI is designed for all Class 9-10 students in Bangladesh across Science, Commerce, and Arts/Humanities groups."
              },
              {
                question: "How does AI Explain work?",
                answer: "Students can drag-highlight a specific section of textbook content and request AI Explain. The system uses context-aware retrieval and response generation to provide clearer, student-friendly explanations."
              },
              {
                question: "Can students generate revision materials automatically?",
                answer: "Yes. Dikkha AI can generate flashcards from selected content, provide formula-focused study support, and create infographic-style outputs for faster revision."
              },
              {
                question: "Is this only for science students?",
                answer: "No. Dikkha AI supports Class 9-10 students from all major study groups. The product is positioned as a complete study assistant, not a science-only tool."
              },
              {
                question: "Why use Dikkha AI instead of a generic AI chatbot?",
                answer: "Dikkha AI is built around textbook-first flows for Class 9-10. It combines selection-based actions, educational context, and structured revision tools that generic chat tools usually do not provide."
              }
            ]}
          />
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="relative overflow-hidden rounded-2xl px-6 py-16 text-center max-w-3xl mx-auto border border-[#b26ed4]/35 bg-gradient-to-br from-[#251530] via-[#1e1426] to-[#120b17]">
            <GridPattern className="opacity-[0.06] fill-white" />
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-[#8b38bc]/25 blur-[90px]" />
              <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-[#b26ed4]/20 blur-[110px]" />
            </div>
            <div className="relative">
              <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl text-white">Ready to study smarter with Dikkha AI?</h2>
              <p className="mb-8 text-lg text-zinc-400">Bring AI Explain, flashcards, formula help, and infographics into one practical Class 9-10 learning workflow.</p>
              <Button
                size="lg"
                variant="glow"
                className="group/btn bg-[#8b38bc] text-white hover:bg-[#7b2ea8] hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(139,56,188,0.4)] transition-all duration-200"
                asChild
              >
                <a
                  href={DIKKHA_PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Get the APP <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
