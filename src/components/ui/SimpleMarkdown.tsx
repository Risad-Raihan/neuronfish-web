import { ReactNode } from "react"

interface SimpleMarkdownProps {
  content: string
}

export function SimpleMarkdown({ content }: SimpleMarkdownProps) {
  const lines = content.split("\n")
  const elements: ReactNode[] = []
  let currentParagraph: string[] = []
  let listItems: ReactNode[] = []
  let listKey = 0

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(" ").trim()
      if (text) {
        elements.push(
          <p key={elements.length} className="leading-7 [&:not(:first-child)]:mt-6 text-foreground/80 font-medium">
            {parseInlineMarkdown(text)}
          </p>
        )
      }
      currentParagraph = []
    }
  }

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${listKey++}`} className="my-6 ml-6 list-disc space-y-2">
          {listItems}
        </ul>
      )
      listItems = []
    }
  }

  const parseInlineMarkdown = (text: string): ReactNode => {
    const parts: ReactNode[] = []
    let currentIndex = 0
    const boldRegex = /\*\*(.+?)\*\*/g
    let match

    while ((match = boldRegex.exec(text)) !== null) {
      // Add text before the match
      if (match.index > currentIndex) {
        parts.push(text.slice(currentIndex, match.index))
      }
      // Add the bold text
      parts.push(
        <strong key={match.index} className="font-bold text-foreground">
          {match[1]}
        </strong>
      )
      currentIndex = match.index + match[0].length
    }
    // Add remaining text
    if (currentIndex < text.length) {
      parts.push(text.slice(currentIndex))
    }

    return parts.length > 0 ? <>{parts}</> : text
  }

  lines.forEach((line) => {
    const trimmed = line.trim()

    // Handle horizontal rules
    if (trimmed === "---") {
      flushParagraph()
      flushList()
      elements.push(
        <hr key={elements.length} className="my-8 border-t-2 border-black/20" />
      )
      return
    }

    // Handle headers
    if (trimmed.startsWith("# ")) {
      flushParagraph()
      flushList()
      elements.push(
        <h1 key={elements.length} className="scroll-m-20 text-4xl font-black tracking-tight lg:text-6xl text-foreground mt-12 mb-6">
          {trimmed.slice(2)}
        </h1>
      )
      return
    }

    if (trimmed.startsWith("## ")) {
      flushParagraph()
      flushList()
      elements.push(
        <h2 key={elements.length} className="scroll-m-20 pb-2 text-3xl font-extrabold tracking-tight first:mt-0 text-foreground mt-10 mb-4">
          {parseInlineMarkdown(trimmed.slice(3))}
        </h2>
      )
      return
    }

    if (trimmed.startsWith("### ")) {
      flushParagraph()
      flushList()
      elements.push(
        <h3 key={elements.length} className="scroll-m-20 text-2xl font-bold tracking-tight text-foreground mt-8 mb-3">
          {parseInlineMarkdown(trimmed.slice(4))}
        </h3>
      )
      return
    }

    if (trimmed.startsWith("#### ")) {
      flushParagraph()
      flushList()
      elements.push(
        <h4 key={elements.length} className="scroll-m-20 text-xl font-bold tracking-tight text-foreground mt-6 mb-2">
          {parseInlineMarkdown(trimmed.slice(5))}
        </h4>
      )
      return
    }

    // Handle list items
    if (trimmed.startsWith("- ")) {
      flushParagraph()
      const listContent = trimmed.slice(2)
      listItems.push(
        <li key={listItems.length} className="text-foreground/80 font-medium">
          {parseInlineMarkdown(listContent)}
        </li>
      )
      return
    }

    // Handle empty lines
    if (trimmed === "") {
      flushParagraph()
      flushList()
      return
    }

    // Regular paragraph content
    currentParagraph.push(trimmed)
  })

  // Flush any remaining content
  flushParagraph()
  flushList()

  return <div className="prose prose-gray max-w-none dark:prose-invert">{elements}</div>
}

