"use client"

import Link from "next/link"
import { ArrowRight, Bot, Smartphone, GraduationCap, MapPin, ShieldCheck, Users } from "lucide-react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { ProductCard } from "@/components/site/ProductCard"
import { TeamCard } from "@/components/site/TeamCard"
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/AnimateOnScroll"
import { GridPattern } from "@/components/ui/GridPattern"
import { GlowCard } from "@/components/ui/GlowCard"
import { TEAM_MEMBERS } from "@/content/team"

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-28 md:py-36 lg:py-44 section-gradient-light">
        <GridPattern className="opacity-40" />

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 h-[420px] w-[420px] rounded-full bg-primary/5 blur-[120px] animate-float-slow" />
          <div className="absolute bottom-1/4 right-1/4 h-[320px] w-[320px] rounded-full bg-orange-400/4 blur-[100px] animate-float-slow" style={{ animationDelay: "3s" }} />
        </div>

        <Container className="relative flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-border bg-background/80 backdrop-blur-sm px-4 py-1.5 text-sm text-muted-foreground mb-8"
          >
            <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-gentle-pulse" />
            Innovating from Bangladesh
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground"
          >
            We build apps that{" "}
            <span className="text-gradient">millions love</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed"
          >
            From AI-powered education to location-based savings — we create products
            that solve real problems for real people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Button size="lg" variant="glow" asChild>
              <Link href="/products" className="flex items-center gap-2">
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* ── Stats Strip ── */}
      <section className="border-y border-border bg-muted/40">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 sm:divide-x divide-border py-8 sm:py-6">
            {[
              { value: "2", label: "Products" },
              { value: "4", label: "Engineers" },
              { value: "🇧🇩", label: "Made in BD" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-2 sm:px-10 text-center"
              >
                <span className="text-2xl font-extrabold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Products Showcase (Bento) ── */}
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
            <AnimateOnScroll delay={100}>
              <GlowCard className="flex flex-col h-full overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-primary/5 to-primary/15 flex items-center justify-center">
                  <div className="device-phone scale-[0.4] origin-center">
                    <div className="flex h-full items-center justify-center pt-8">
                      <div className="text-center">
                        <span className="block text-4xl mb-2">📚</span>
                        <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Dikkha AI</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">Education</span>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">AI</span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">Dikkha AI</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Agentic AI study companion with digital textbooks, drag-to-explain, and generalized chat for Class 9 & 10 students.
                  </p>
                  <div className="mt-auto pt-6">
                    <Button asChild className="w-full group/btn">
                      <Link href="/products/dikkha" className="flex items-center gap-2">
                        Discover Dikkha AI
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </GlowCard>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <GlowCard className="flex flex-col h-full overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-emerald-500/5 to-teal-500/15 flex items-center justify-center">
                  <div className="device-phone scale-[0.4] origin-center">
                    <div className="flex h-full items-center justify-center pt-8">
                      <div className="text-center">
                        <span className="block text-4xl mb-2">🏷️</span>
                        <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">CHHAR</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">Lifestyle</span>
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">Savings</span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">CHHAR</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Location-based discounts and promotions app focused on Dhaka. Find deals near you instantly.
                  </p>
                  <div className="mt-auto pt-6">
                    <Button asChild className="w-full group/btn">
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
              {
                icon: Bot,
                title: "Advanced AI",
                desc: "Leveraging state-of-the-art models to deliver intelligent, adaptive experiences.",
              },
              {
                icon: MapPin,
                title: "Local Focus",
                desc: "Built specifically for the context and needs of Bangladesh and Dhaka.",
              },
              {
                icon: Smartphone,
                title: "User Centric",
                desc: "Intuitive, fast, and accessible designs that work for everyone.",
              },
              {
                icon: ShieldCheck,
                title: "Trust & Privacy",
                desc: "Committed to data security and ethical AI practices.",
              },
              {
                icon: GraduationCap,
                title: "Empowering Growth",
                desc: "Helping students learn better and businesses grow faster.",
              },
              {
                icon: Users,
                title: "Community First",
                desc: "Driven by feedback from our users to constantly improve.",
              },
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
                    "Data protection as a fundamental right"
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
              <div className="relative rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-orange-500/5 p-10 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="mb-6 text-6xl md:text-7xl">
                  🇧🇩
                </div>
                <p className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
                  Made in Bangladesh
                </p>
                <p className="text-xl text-muted-foreground">
                  For the World
                </p>
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
