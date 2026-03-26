"use client"

import Link from "next/link"
import { ArrowRight, Bot, Smartphone, GraduationCap, MapPin, ShieldCheck, Users, Sparkles, WandSparkles, Play } from "lucide-react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { TeamCard } from "@/components/site/TeamCard"
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/AnimateOnScroll"
import { GridPattern } from "@/components/ui/GridPattern"
import { GlowCard } from "@/components/ui/GlowCard"
import { TEAM_MEMBERS } from "@/content/team"

const BG_SLIDES = [
  "/products/dikkha/slides/slide1.png",
  "/products/dikkha/slides/slide2.png",
  "/products/dikkha/slides/slide3.png",
  "/products/dikkha/slides/slide4.png",
  "/products/dikkha/slides/slide5.png",
  "/products/dikkha/slides/slide6.png",
  "/products/dikkha/slides/slide7.png",
  "/products/dikkha/slides/slide8.png",
]

const TEASER_SLIDES = [...BG_SLIDES, ...BG_SLIDES]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-24 md:py-32">

        {/* ── BG layer 1: rich mesh gradient ── */}
        <div className="absolute inset-0 -z-30 pointer-events-none">
          {/* Primary violet bloom — right side where phones live */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_75%_45%,rgba(120,40,200,0.26),transparent_60%)]" />
          {/* Indigo spill — bottom left */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_-5%_85%,rgba(79,70,229,0.18),transparent_58%)]" />
          {/* Teal whisper — top right */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_100%_5%,rgba(20,184,166,0.09),transparent_55%)]" />
          {/* Warm amber accent — far left centre */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_35%_35%_at_0%_50%,rgba(251,146,60,0.05),transparent_55%)]" />
          {/* Deep magenta core — centre */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(168,85,247,0.06),transparent_60%)]" />
        </div>

        {/* ── BG layer 2: ghost slide marquee — pure atmosphere ── */}
        <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none opacity-[0.055]">
          <div className="absolute top-[5%] left-0 right-0 flex gap-5 animate-marquee-left-slow">
            {TEASER_SLIDES.map((s, i) => (
              <img key={i} src={s} alt="" aria-hidden className="shrink-0 w-[130px] rounded-xl object-cover" />
            ))}
          </div>
          <div className="absolute top-[38%] left-0 right-0 flex gap-5 animate-marquee-right-slow">
            {[...TEASER_SLIDES].reverse().map((s, i) => (
              <img key={i} src={s} alt="" aria-hidden className="shrink-0 w-[130px] rounded-xl object-cover" />
            ))}
          </div>
          <div className="absolute top-[68%] left-0 right-0 flex gap-5 animate-marquee-left-slow" style={{ animationDelay: "-30s" }}>
            {TEASER_SLIDES.map((s, i) => (
              <img key={i} src={s} alt="" aria-hidden className="shrink-0 w-[130px] rounded-xl object-cover" />
            ))}
          </div>
        </div>

        {/* ── BG layer 3: directional dark vignette so text is always crisp ── */}
        <div className="absolute inset-0 -z-10 pointer-events-none bg-[linear-gradient(to_right,rgba(11,15,20,0.97)_0%,rgba(11,15,20,0.88)_40%,rgba(11,15,20,0.30)_75%,transparent_100%)]" />
        {/* Bottom fade to page bg */}
        <div className="absolute inset-x-0 bottom-0 h-40 -z-10 pointer-events-none bg-gradient-to-t from-background to-transparent" />

        <GridPattern className="absolute inset-0 -z-10 opacity-[0.09] pointer-events-none" />

        <Container className="relative w-full">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* ── Left: copy ── */}
            <div className="max-w-lg">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-sm text-zinc-300 backdrop-blur-sm"
              >
                <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400 animate-gentle-pulse" />
                Innovating from Bangladesh
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.06] mb-6"
              >
                Building agentic{" "}
                <span className="bg-gradient-to-r from-[#a78bfa] via-[#c4b5fd] to-[#7c3aed] bg-clip-text text-transparent">
                  AI solutions
                </span>
                {" "}&{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  next-gen apps
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2 }}
                className="text-lg leading-relaxed text-zinc-300 mb-8 max-w-md"
              >
                Creating powerful AI agents, smart applications, and innovative solutions tailored for Bangladesh. Experience the future with NeuronFish.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.3 }}
                className="flex flex-col gap-3 sm:flex-row mb-10"
              >
                <Button size="lg" variant="glow" asChild className="bg-violet-600 hover:bg-violet-500 text-white">
                  <Link href="/products" className="flex items-center gap-2">
                    Explore Products <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>

              {/* Product pills */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.4 }}
                className="flex flex-wrap gap-2.5"
              >
                <Link href="/products/dikkha" className="group inline-flex items-center gap-2 rounded-xl border border-[#8b38bc]/35 bg-[#8b38bc]/12 px-3 py-1.5 text-xs font-semibold text-[#d09be8] hover:border-[#8b38bc]/60 hover:bg-[#8b38bc]/20 transition-all duration-200">
                  <img src="/products/dikkha/dikkha-logo.svg" className="h-4 w-4 rounded" alt="" />
                  Dikkha AI
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </Link>
                <Link href="/products/chhar" className="group inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400 hover:border-emerald-500/55 hover:bg-emerald-500/18 transition-all duration-200">
                  <span className="text-sm leading-none">🏷️</span>
                  CHHAR
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </Link>
              </motion.div>
            </div>

            {/* ── Right: two tilted floating phones ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-[380px] h-[520px]">
                {/* Ambient colour pool */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-72 h-72 rounded-full bg-violet-600/30 blur-[90px]" />
                </div>
                <div className="absolute top-0 right-4 w-44 h-44 rounded-full bg-indigo-500/18 blur-[65px] pointer-events-none" />
                <div className="absolute bottom-0 left-4 w-36 h-36 rounded-full bg-fuchsia-500/15 blur-[55px] pointer-events-none" />

                {/* Back phone — AI explain, tilted right, slightly translucent */}
                <img
                  src="/products/dikkha/slides/slide4.png"
                  alt=""
                  aria-hidden
                  className="absolute right-0 top-8 w-[215px] rounded-2xl rotate-[9deg] opacity-60 z-0"
                  style={{ filter: "drop-shadow(0 24px 60px rgba(0,0,0,0.65))" }}
                />

                {/* Front phone — Library, tilted left, floating */}
                <img
                  src="/products/dikkha/slides/slide2.png"
                  alt="Dikkha AI — subject library"
                  className="absolute left-2 top-10 w-[255px] rounded-3xl -rotate-[7deg] z-10 animate-float-slow"
                  style={{
                    boxShadow: "0 32px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(139,56,188,0.22), 0 0 60px rgba(120,40,200,0.15)",
                  }}
                />

                {/* Floating feature badge — top left */}
                <div className="absolute -left-4 top-6 z-20 hidden xl:block rounded-2xl border border-[#8b38bc]/35 bg-background/88 px-3 py-2 text-[11px] font-medium text-foreground shadow-xl backdrop-blur-md">
                  <span className="flex items-center gap-1.5 text-[#d09be8]">
                    <WandSparkles className="h-3.5 w-3.5" />
                    Select → AI Explain
                  </span>
                </div>

                {/* Floating feature badge — bottom right */}
                <div className="absolute -right-2 bottom-14 z-20 hidden xl:block rounded-2xl border border-[#8b38bc]/35 bg-background/88 px-3 py-2 text-[11px] font-medium text-foreground shadow-xl backdrop-blur-md">
                  <span className="flex items-center gap-1.5 text-[#d09be8]">
                    <Sparkles className="h-3.5 w-3.5" />
                    Instant Flashcards
                  </span>
                </div>

                {/* SSC urgency badge */}
                <div className="absolute right-8 top-2 z-20 hidden xl:block rounded-2xl border border-amber-500/40 bg-amber-950/75 px-3 py-2 text-[11px] font-semibold text-amber-300 shadow-xl backdrop-blur-md">
                  SSC 2026 Ready
                </div>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* ── Products Showcase ── */}
      <section className="py-20 md:py-28 section-gradient-bottom">
        <Container>
          <AnimateOnScroll>
            <SectionHeading
              title="Our Products"
              subtitle="Solutions designed to solve real problems for the Bangladeshi community."
              className="mb-14"
            />
          </AnimateOnScroll>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Dikkha card */}
            <AnimateOnScroll delay={100}>
              <GlowCard className="flex flex-col h-full overflow-hidden">
                {/* Screenshot preview */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src="/products/dikkha/slides/slide2.png"
                    alt="Dikkha AI — My Library"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  {/* Product badge overlay */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 rounded-xl border border-[#8b38bc]/40 bg-background/80 px-2.5 py-1.5 backdrop-blur-sm">
                    <img src="/products/dikkha/dikkha-logo.svg" alt="Dikkha AI" className="h-5 w-5 rounded" />
                    <span className="text-xs font-bold text-[#d09be8]">Dikkha AI</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-[#8b38bc]/12 px-2.5 py-0.5 text-xs font-medium text-[#c786e0]">Education</span>
                    <span className="inline-flex items-center rounded-full bg-[#8b38bc]/12 px-2.5 py-0.5 text-xs font-medium text-[#c786e0]">AI</span>
                    <span className="inline-flex items-center rounded-full bg-amber-500/12 px-2.5 py-0.5 text-xs font-medium text-amber-400">SSC 2026</span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">Dikkha AI</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    AI study assistant for all Class 9-10 groups with textbook-based AI Explain, flashcards, formula support, and infographic learning.
                  </p>
                  <div className="mt-auto pt-6 flex gap-3">
                    <Button
                      asChild
                      className="flex-1 group/btn bg-[#8b38bc] text-white hover:bg-[#7b2ea8]"
                    >
                      <Link href="/products/dikkha" className="flex items-center gap-2">
                        Discover Dikkha AI
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-[#8b38bc]/35 hover:border-[#8b38bc]/60">
                      <Link href="/products/dikkha#video" className="flex items-center gap-2">
                        <Play className="h-4 w-4 text-[#c786e0]" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </GlowCard>
            </AnimateOnScroll>

            {/* CHHAR card */}
            <AnimateOnScroll delay={200}>
              <GlowCard className="flex flex-col h-full overflow-hidden">
                <div className="relative h-60 bg-gradient-to-br from-emerald-950/60 to-teal-900/40 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(16,185,129,0.15),transparent)]" />
                  <div className="text-center relative z-10">
                    <div className="text-7xl mb-3">🏷️</div>
                    <span className="text-2xl font-black tracking-tight text-emerald-300">ছাড়</span>
                  </div>
                  <div className="absolute top-3 left-3 flex items-center gap-2 rounded-xl border border-emerald-500/35 bg-background/80 px-2.5 py-1.5 backdrop-blur-sm">
                    <span className="text-sm leading-none">🏷️</span>
                    <span className="text-xs font-bold text-emerald-400">CHHAR</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">Lifestyle</span>
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">Savings</span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">CHHAR — ছাড়</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Location-based discounts and promotions app focused on Dhaka. Find deals near you instantly.
                  </p>
                  <div className="mt-auto pt-6">
                    <Button
                      asChild
                      className="w-full group/btn bg-[#4C8E4F] text-white hover:bg-[#417a43]"
                    >
                      <Link href="/products/chhar" className="flex items-center gap-2">
                        Explore CHHAR
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </GlowCard>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* ── One-row screenshot teaser strip ── */}
      <div className="relative overflow-hidden py-2 border-y border-white/[0.05]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_50%_50%,rgba(139,56,188,0.07),transparent)]" />
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-3 shrink-0 animate-marquee-left py-3" style={{ animationDuration: "45s" }}>
            {TEASER_SLIDES.map((s, i) => (
              <Link key={i} href="/products/dikkha" className="shrink-0 block">
                <img
                  src={s}
                  alt=""
                  aria-hidden
                  className="w-[110px] h-[160px] rounded-xl object-cover object-top border border-[#8b38bc]/20 hover:border-[#8b38bc]/50 transition-all duration-200 hover:scale-[1.04]"
                />
              </Link>
            ))}
          </div>
        </div>
        <p className="text-center text-[11px] text-muted-foreground mt-1 mb-2 tracking-wide">
          Swipe through Dikkha AI →{" "}
          <Link href="/products/dikkha" className="text-[#c786e0] hover:text-[#d9b5ed] underline underline-offset-2">
            See full product
          </Link>
        </p>
      </div>

      {/* ── Why NeuronFish ── */}
      <section className="py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <SectionHeading
              title="Why NeuronFish?"
              subtitle="We combine cutting-edge AI with deep local understanding."
              className="mb-14"
            />
          </AnimateOnScroll>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Bot, title: "Advanced AI", desc: "Leveraging state-of-the-art models to deliver intelligent, adaptive experiences." },
              { icon: MapPin, title: "Local Focus", desc: "Built specifically for the context and needs of Bangladesh and Dhaka." },
              { icon: Smartphone, title: "User Centric", desc: "Intuitive, fast, and accessible designs that work for everyone." },
              { icon: ShieldCheck, title: "Trust & Privacy", desc: "Committed to data security and ethical AI practices." },
              { icon: GraduationCap, title: "Empowering Growth", desc: "Helping students learn better and businesses grow faster." },
              { icon: Users, title: "Community First", desc: "Driven by feedback from our users to constantly improve." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <GlowCard className="p-6 h-full">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ── Our Approach ── */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimateOnScroll>
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-6">
                  Building AI Responsibly
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  At NeuronFish, we believe technology should serve people, not the other way around. Our approach is grounded in:
                </p>
                <ul className="space-y-4">
                  {[
                    "Transparency in how our AI models work",
                    "Inclusivity for diverse user groups",
                    "Continuous ethical review of our products",
                    "Data protection as a fundamental right",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-primary/15 p-10 flex flex-col items-center justify-center text-center">
                <div className="mb-6 text-6xl md:text-7xl">🇧🇩</div>
                <p className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">Made in Bangladesh</p>
                <p className="text-xl text-muted-foreground">For the World</p>
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* ── Team Preview ── */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <SectionHeading
              title="Meet the Team"
              subtitle="The minds behind NeuronFish."
              align="left"
              className="mb-0"
            />
            <Button variant="outline" asChild>
              <Link href="/about">View All Members</Link>
            </Button>
          </div>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_MEMBERS.slice(0, 4).map((member) => (
              <StaggerItem key={member.id}>
                <TeamCard member={member} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28">
        <Container>
          <AnimateOnScroll variant="scale-in">
            <div className="cta-dark relative overflow-hidden rounded-2xl px-6 py-20 text-center border border-white/[0.08]">
              <GridPattern className="opacity-[0.06] fill-white" />
              <div className="relative">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white mb-4">
                  Ready to transform your experience?
                </h2>
                <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Whether you are a student looking to ace your exams or a shopper hunting for the best deals, we have something for you.
                </p>
                <Button size="lg" variant="glow" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  )
}
