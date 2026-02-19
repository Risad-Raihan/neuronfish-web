import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { GridPattern } from "@/components/ui/GridPattern"

export const metadata = {
  title: "Blog",
  description: "News, updates, and insights from the NeuronFish team.",
}

export default function BlogPage() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <GridPattern className="opacity-20" />
      <Container className="relative text-center">
        <SectionHeading
          title="Our Blog"
          subtitle="Updates coming soon. Stay tuned for insights on AI and our journey."
          className="mb-12"
        />
        <div className="mx-auto max-w-md rounded-xl border border-dashed border-primary/20 p-12 bg-card/50 backdrop-blur-sm">
          <p className="text-sm text-muted-foreground">
            We are working on some exciting content. Check back later!
          </p>
        </div>
      </Container>
    </section>
  )
}
