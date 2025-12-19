import Link from "next/link"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { TeamCard } from "@/components/site/TeamCard"
import { TEAM_MEMBERS } from "@/content/team"

export const metadata = {
  title: "About Us",
  description: "Learn about NeuronFish's mission to build AI-powered products for Bangladesh. Meet our team.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              We are <span className="text-primary">NeuronFish</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A team of dreamers and builders dedicated to bringing the power of Artificial Intelligence to everyday life in Bangladesh.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/30 py-16 md:py-24">
        <Container>
           <div className="grid gap-12 md:grid-cols-2">
             <div className="rounded-2xl border bg-card p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-primary">Our Mission</h2>
                <p className="text-muted-foreground">
                  To democratize access to advanced technology by building intuitive, localized, and impactful AI products that solve real problems for students, consumers, and businesses in Bangladesh.
                </p>
             </div>
             <div className="rounded-2xl border bg-card p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-secondary-foreground">Our Vision</h2>
                <p className="text-muted-foreground">
                  To be the leading AI product company in Bangladesh, fostering a culture of innovation and creating a digital ecosystem that empowers everyone to achieve more.
                </p>
             </div>
           </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <Container>
           <SectionHeading title="Our Journey" className="mb-16" />
           <div className="relative mx-auto max-w-4xl border-l-2 border-muted pl-8 md:pl-0 md:border-l-0 md:border-t-2 md:pt-8">
              <div className="grid gap-8 md:grid-cols-4">
                 {[
                   { year: "2023", title: "Inception", desc: "NeuronFish was founded with a small team and a big dream." },
                   { year: "2024 Q1", title: "DIKKHA Prototype", desc: "Launched the first alpha version of our AI tutor." },
                   { year: "2024 Q3", title: "CHHAR Pilot", desc: "Started pilot testing deal finding in Dhaka." },
                   { year: "Future", title: "Growth", desc: "Scaling our products to serve millions nationwide." }
                 ].map((item, i) => (
                   <div key={i} className="relative">
                      <div className="absolute -left-[41px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-4 ring-background md:-top-[45px] md:left-1/2 md:-translate-x-1/2">
                         <div className="h-2 w-2 rounded-full bg-white" />
                      </div>
                      <div className="md:text-center">
                         <span className="mb-2 block text-sm font-bold text-primary">{item.year}</span>
                         <h3 className="text-lg font-bold">{item.title}</h3>
                         <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </Container>
      </section>

      {/* Team */}
      <section className="bg-muted/30 py-16 md:py-24">
        <Container>
          <SectionHeading
            title="Meet the Team"
            subtitle="The passionate individuals driving our innovation."
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_MEMBERS.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </Container>
      </section>

      {/* Hiring & Press */}
      <section className="py-16 md:py-24">
        <Container>
           <div className="grid gap-8 md:grid-cols-2">
              {/* Hiring */}
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed p-8 text-center">
                 <h3 className="mb-2 text-2xl font-bold">We&apos;re Hiring!</h3>
                 <p className="mb-6 text-muted-foreground">
                   Passionate about AI and building for Bangladesh? We are always looking for talented engineers and designers.
                 </p>
                 <Button variant="outline" asChild>
                   <Link href="/contact?subject=Careers">Contact Us</Link>
                 </Button>
              </div>

              {/* Press Kit */}
              <div className="flex flex-col items-center justify-center rounded-2xl border bg-card p-8 text-center shadow-sm">
                 <h3 className="mb-2 text-2xl font-bold">Media & Press</h3>
                 <p className="mb-6 text-muted-foreground">
                   Download our brand assets, logos, and official colors for media usage.
                 </p>
                 <Button variant="secondary" className="gap-2">
                   <Download className="h-4 w-4" /> Download Press Kit
                 </Button>
              </div>
           </div>
        </Container>
      </section>
    </>
  )
}

