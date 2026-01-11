"use client"

import Link from "next/link"
import { ArrowRight, Bot, Smartphone, GraduationCap, MapPin, ShieldCheck, Users } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { ProductCard } from "@/components/site/ProductCard"
import { TeamCard } from "@/components/site/TeamCard"
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll"
import { TEAM_MEMBERS } from "@/content/team"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 lg:py-40 border-b-2 border-black bg-background">
         {/* Industrial/Funky decorative elements with animations */}
        <div className="absolute top-20 left-10 h-32 w-32 rounded-none bg-primary opacity-10 -rotate-12 animate-float" />
        <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-secondary opacity-10 animate-float" style={{ animationDelay: '1s' }} />
        
        <Container className="flex flex-col items-center text-center relative z-10">
          <div className="inline-flex items-center rounded-none border-2 border-black px-4 py-1.5 text-sm font-bold text-black bg-white mb-8 shadow-funky -rotate-2 animate-bounce-in hover:animate-wiggle cursor-default">
            <span className="flex h-3 w-3 rounded-full bg-primary mr-2 border border-black animate-pulse-glow"></span>
            Innovating for Bangladesh <span className="ml-2 text-lg">🇧🇩</span>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-black mb-6 animate-slide-up">
            Building agentic AI solutions <br className="hidden md:block" />
            <span className="text-primary underline decoration-secondary decoration-wavy decoration-4 underline-offset-8 inline-block hover:scale-105 transition-transform duration-300">
              & next-gen apps
            </span>
          </h1>
          <p className="mt-8 max-w-[700px] text-xl text-foreground/80 font-bold md:text-2xl leading-relaxed opacity-0 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Creating powerful AI agents, smart applications, and innovative solutions tailored for Bangladesh. Experience the future with NeuronFish.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center opacity-0 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white border-2 border-black shadow-funky" asChild>
              <Link href="/products" className="flex items-center">
                Explore Products <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white hover:bg-gray-50 text-black border-2 border-black shadow-funky" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Products Section */}
      <section className="bg-white py-20 md:py-28 border-b-2 border-black">
        <Container>
          <AnimateOnScroll>
            <SectionHeading
              title="Our Products"
              subtitle="Solutions designed to solve real problems for the Bangladeshi community."
              className="mb-16"
            />
          </AnimateOnScroll>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
            <AnimateOnScroll delay={100}>
              <ProductCard
                title="Dikkha AI"
                description="Agentic AI study companion with digital textbooks and smart query understanding for Class 9 & 10 students."
                features={[
                  "Agentic RAG Engine",
                  "NCTB Textbooks",
                  "Voice Q&A",
                  "Smart Query Rewriting"
                ]}
                href="/products/dikkha"
                ctaText="Discover Dikkha AI"
                badges={["Education", "AI"]}
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <ProductCard
                title="CHHAR"
                description="Location-based discounts and promotions app focused on Dhaka."
                features={[
                  "Real-time Nearby Deals",
                  "Exclusive Promotions",
                  "Map View Integration",
                  "Instant Notifications"
                ]}
                href="/products/chhar"
                ctaText="Explore CHHAR"
                badges={["Lifestyle", "Savings"]}
              />
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* Why NeuronFish Section */}
      <section className="py-20 md:py-28 bg-muted/50 border-b-2 border-black">
        <Container>
          <AnimateOnScroll>
            <SectionHeading
              title="Why NeuronFish?"
              subtitle="We combine cutting-edge AI with deep local understanding."
              className="mb-16"
            />
          </AnimateOnScroll>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Bot,
                title: "Advanced AI",
                desc: "Leveraging state-of-the-art models to deliver intelligent, adaptive experiences.",
                color: "bg-secondary"
              },
              {
                icon: MapPin,
                title: "Local Focus",
                desc: "Built specifically for the context and needs of Bangladesh and Dhaka.",
                color: "bg-primary text-white"
              },
              {
                icon: Smartphone,
                title: "User Centric",
                desc: "Intuitive, fast, and accessible designs that work for everyone.",
                color: "bg-pop-royal text-white"
              },
              {
                icon: ShieldCheck,
                title: "Trust & Privacy",
                desc: "Committed to data security and ethical AI practices.",
                color: "bg-pop-lavender"
              },
              {
                icon: GraduationCap,
                title: "Empowering Growth",
                desc: "Helping students learn better and businesses grow faster.",
                color: "bg-pop-navy text-white"
              },
              {
                icon: Users,
                title: "Community First",
                desc: "Driven by feedback from our users to constantly improve.",
                color: "bg-white text-black"
              },
            ].map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div 
                  className="flex flex-col items-center text-center p-8 rounded-xl bg-white border-2 border-black shadow-funky hover:shadow-[10px_10px_0px_0px_#000000] hover:-translate-y-2 hover:scale-105 transition-all duration-300 group cursor-default"
                >
                <div className={`mb-6 rounded-full ${item.color} p-4 text-foreground border-2 border-black shadow-funky-sm group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 group-hover:animate-pulse-glow`}>
                  <item.icon className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                <p className="text-muted-foreground font-medium text-lg leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Approach - Vibrant Teal */}
      <section className="relative py-20 md:py-28 border-b-2 border-black overflow-hidden bg-secondary text-white">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -z-10" />
        
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimateOnScroll>
              <div>
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-8 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
                  Building AI Responsibly
                </h2>
                <p className="text-xl text-white/95 mb-8 font-medium leading-relaxed">
                  At NeuronFish, we believe technology should serve people, not the other way around. Our approach is grounded in:
                </p>
                <ul className="space-y-4">
                  {[
                    "Transparency in how our AI models work",
                    "Inclusivity for diverse user groups",
                    "Continuous ethical review of our products",
                    "Data protection as a fundamental right"
                  ].map((item, i) => (
                    <li 
                      key={i} 
                      className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300 cursor-default group"
                    >
                      <div className="h-4 w-4 rounded-none bg-primary group-hover:scale-125 group-hover:rotate-45 transition-all duration-300 group-hover:bg-white" />
                      <span className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={200}>
              <div className="relative aspect-video rounded-none bg-white border-t-2 border-b-2 border-secondary p-8 flex flex-col items-center justify-center shadow-[12px_12px_0px_0px_#000000] hover:shadow-[16px_16px_0px_0px_#000000] hover:-translate-y-2 transition-all duration-300 group">
                {/* Corner brackets */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-4 border-l-4 border-primary" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-4 border-r-4 border-secondary" />
                
                {/* Corner dots */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full" />
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-secondary rounded-full" />
                
                {/* Flag */}
                <div className="mb-6">
                  <div className="text-7xl md:text-8xl">
                    🇧🇩
                  </div>
                </div>
                
                {/* Main text */}
                <div className="text-center space-y-3">
                  {/* Made in Bangladesh */}
                  <p className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground">
                    Made in Bangladesh
                  </p>
                  
                  {/* For the World */}
                  <div>
                    <p className="text-2xl md:text-3xl font-medium text-foreground">
                      For the World
                    </p>
                    {/* Three dots below */}
                    <div className="flex gap-2 justify-center mt-4">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* Team Preview */}
      <section className="py-20 md:py-28 bg-white border-b-2 border-black">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
             <SectionHeading
              title="Meet the Team"
              subtitle="The minds behind NeuronFish."
              align="left"
              className="mb-0"
            />
            <Button variant="outline" size="lg" asChild className="border-2 border-black shadow-funky">
              <Link href="/about">View All Members</Link>
            </Button>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_MEMBERS.slice(0, 4).map((member, i) => (
              <div 
                key={member.id} 
                className="animate-scale-in"
                style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
              >
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section - Vermilion Pop */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <Container>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
             <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
                Ready to transform your experience?
             </h2>
             <p className="text-xl text-white/95 mb-10 font-medium leading-relaxed">
               Whether you are a student looking to ace your exams or a shopper hunting for the best deals, we have something for you.
             </p>
             <Button size="lg" className="h-16 px-10 text-lg bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_#000] opacity-0 animate-bounce-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }} asChild>
                <Link href="/contact">Get in Touch</Link>
             </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
