import { readFile } from "fs/promises"
import { join } from "path"
import { Container } from "@/components/ui/Container"
import { SimpleMarkdown } from "@/components/ui/SimpleMarkdown"

export const metadata = {
  title: "Terms and Conditions - Chhar",
  description: "Terms and Conditions for Chhar mobile application",
}

export default async function ChharTermsPage() {
  const filePath = join(process.cwd(), "Chhar_TERMS_AND_CONDITIONS.md")
  const content = await readFile(filePath, "utf-8")

  return (
    <div className="py-16 md:py-24">
      <Container className="max-w-4xl">
        <SimpleMarkdown content={content} />
      </Container>
    </div>
  )
}
