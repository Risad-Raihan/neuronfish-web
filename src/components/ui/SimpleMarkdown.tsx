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
  let tableRows: string[] = []
  let tableKey = 0

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

  const flushTable = () => {
    if (tableRows.length < 2) {
      // Not a valid table, treat as regular content
      tableRows.forEach(row => currentParagraph.push(row))
      tableRows = []
      return
    }

    // Parse header row
    const headerRow = tableRows[0].split("|").map(c => c.trim()).filter(c => c)
    // Skip separator row (index 1)
    const dataRows = tableRows.slice(2).map(row => 
      row.split("|").map(c => c.trim()).filter(c => c)
    )

    elements.push(
      <div key={`table-${tableKey++}`} className="my-6 overflow-x-auto">
        <table className="min-w-full border-2 border-black">
          <thead>
            <tr className="bg-muted/50">
              {headerRow.map((cell, idx) => (
                <th key={idx} className="border-2 border-black px-4 py-3 text-left text-sm font-bold text-foreground">
                  {parseInlineMarkdown(cell)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataRows.map((row, rowIdx) => (
              <tr key={rowIdx} className="border-t-2 border-black">
                {row.map((cell, cellIdx) => (
                  <td key={cellIdx} className="border-2 border-black px-4 py-3 text-sm text-foreground/80 font-medium">
                    {parseInlineMarkdown(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
    tableRows = []
  }

  const parseInlineMarkdown = (text: string): ReactNode => {
    // First, handle markdown links [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    const linkMatches: Array<{ index: number; length: number; text: string; url: string }> = []
    let match
    while ((match = linkRegex.exec(text)) !== null) {
      linkMatches.push({
        index: match.index,
        length: match[0].length,
        text: match[1],
        url: match[2],
      })
    }

    // Then handle bold **text**
    const boldRegex = /\*\*(.+?)\*\*/g
    const boldMatches: Array<{ index: number; length: number; text: string }> = []
    while ((match = boldRegex.exec(text)) !== null) {
      boldMatches.push({
        index: match.index,
        length: match[0].length,
        text: match[1],
      })
    }

    // Also detect plain URLs (http:// or https://)
    const urlRegex = /https?:\/\/[^\s]+/g
    const urlMatches: Array<{ index: number; length: number; url: string }> = []
    while ((match = urlRegex.exec(text)) !== null) {
      // Check if this URL is not already part of a markdown link
      const isInLink = linkMatches.some(
        lm => match.index >= lm.index && match.index < lm.index + lm.length
      )
      if (!isInLink) {
        urlMatches.push({
          index: match.index,
          length: match[0].length,
          url: match[0],
        })
      }
    }

    // Combine all matches and sort by index
    const allMatches = [
      ...linkMatches.map(m => ({ ...m, type: 'link' as const })),
      ...boldMatches.map(m => ({ ...m, type: 'bold' as const })),
      ...urlMatches.map(m => ({ ...m, type: 'url' as const })),
    ].sort((a, b) => a.index - b.index)

    if (allMatches.length === 0) {
      return text
    }

    const parts: ReactNode[] = []
    let currentIndex = 0

    allMatches.forEach((match, idx) => {
      // Add text before the match
      if (match.index > currentIndex) {
        parts.push(text.slice(currentIndex, match.index))
      }

      // Add the matched content
      if (match.type === 'link') {
        parts.push(
          <a
            key={`link-${idx}`}
            href={match.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            {match.text}
          </a>
        )
      } else if (match.type === 'bold') {
        parts.push(
          <strong key={`bold-${idx}`} className="font-bold text-foreground">
            {match.text}
          </strong>
        )
      } else if (match.type === 'url') {
        parts.push(
          <a
            key={`url-${idx}`}
            href={match.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium break-all"
          >
            {match.url}
          </a>
        )
      }

      currentIndex = match.index + match.length
    })

    // Add remaining text
    if (currentIndex < text.length) {
      parts.push(text.slice(currentIndex))
    }

    return <>{parts}</>
  }

  lines.forEach((line) => {
    const trimmed = line.trim()

    // Handle tables - check if line starts with |
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      flushParagraph()
      flushList()
      tableRows.push(trimmed)
      return
    }

    // If we were building a table but this line isn't a table row, flush the table
    if (tableRows.length > 0) {
      flushTable()
    }

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
      if (tableRows.length > 0) {
        flushTable()
      }
      return
    }

    // Regular paragraph content
    currentParagraph.push(trimmed)
  })

  // Flush any remaining content
  flushParagraph()
  flushList()
  flushTable()

  return <div className="prose prose-gray max-w-none dark:prose-invert">{elements}</div>
}

