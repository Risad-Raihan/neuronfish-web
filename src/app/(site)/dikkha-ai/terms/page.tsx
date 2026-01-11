import { readFile } from "fs/promises"
import { join } from "path"
import { Container } from "@/components/ui/Container"
import { SimpleMarkdown } from "@/components/ui/SimpleMarkdown"

export const metadata = {
  title: "Terms and Conditions - Dikkha AI",
  description: "Terms and Conditions for Dikkha AI mobile application",
}

export default async function DikkhaAITermsPage() {
  const filePath = join(process.cwd(), "TERMS_AND_CONDITIONS.md")
  const content = await readFile(filePath, "utf-8")

  return (
    <div className="py-16 md:py-24">
      <Container className="max-w-4xl">
        <SimpleMarkdown content={content} />
      </Container>
    </div>
  )
}

