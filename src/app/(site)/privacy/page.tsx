import { readFile } from "fs/promises"
import { join } from "path"
import { Container } from "@/components/ui/Container"
import { SimpleMarkdown } from "@/components/ui/SimpleMarkdown"

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for NeuronFish products and services",
}

export default async function PrivacyPage() {
  const newFilePath = join(process.cwd(), "new_PRIVACY_POLICY.md")
  const oldFilePath = join(process.cwd(), "PRIVACY_POLICY.md")
  
  const [newContent, oldContent] = await Promise.all([
    readFile(newFilePath, "utf-8"),
    readFile(oldFilePath, "utf-8"),
  ])

  // Combine both versions with a separator
  const combinedContent = `${newContent}

---

# Previous Version

${oldContent}`

  return (
    <div className="py-16 md:py-24">
      <Container className="max-w-4xl">
        <SimpleMarkdown content={combinedContent} />
      </Container>
    </div>
  )
}

