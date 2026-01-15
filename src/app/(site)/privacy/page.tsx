import { readFile } from "fs/promises"
import { join } from "path"
import { Container } from "@/components/ui/Container"
import { SimpleMarkdown } from "@/components/ui/SimpleMarkdown"

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for NeuronFish products and services",
}

export default async function PrivacyPage() {
  const filePath = join(process.cwd(), "PRIVACY_POLICY.md")
  const content = await readFile(filePath, "utf-8")

  return (
    <div className="py-16 md:py-24">
      <Container className="max-w-4xl">
        <SimpleMarkdown content={content} />
      </Container>
    </div>
  )
}

