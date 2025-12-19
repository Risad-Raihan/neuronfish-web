import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"

export const metadata = {
  title: "Blog",
  description: "News, updates, and insights from the NeuronFish team.",
}

export default function BlogPage() {
  return (
    <div className="py-16 md:py-24">
      <Container className="text-center">
        <SectionHeading
          title="Our Blog"
          subtitle="Updates coming soon. Stay tuned for insights on AI and our journey."
          className="mb-12"
        />
        <div className="mx-auto max-w-md rounded-xl border border-dashed p-12">
          <p className="text-muted-foreground">
            We are working on some exciting content. Check back later!
          </p>
        </div>
      </Container>
    </div>
  )
}

