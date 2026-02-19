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
          <p key={elements.length} className="leading-7 [&:not(:first-child)]:mt-4 text-muted-foreground">
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
      tableRows.forEach(row => currentParagraph.push(row))
      tableRows = []
      return
    }

    const headerRow = tableRows[0].split("|").map(c => c.trim()).filter(c => c)
    const dataRows = tableRows.slice(2).map(row => 
      row.split("|").map(c => c.trim()).filter(c => c)
    )

    elements.push(
      <div key={`table-${tableKey++}`} className="my-6 overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              {headerRow.map((cell, idx) => (
                <th key={idx} className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                  {parseInlineMarkdown(cell)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataRows.map((row, rowIdx) => (
              <tr key={rowIdx} className="border-b border-border">
                {row.map((cell, cellIdx) => (
                  <td key={cellIdx} className="px-4 py-3 text-sm text-muted-foreground">
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
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    const linkMatches: Array<{ index: number; length: number; text: string; url: string }> = []
    let match: RegExpExecArray | null
    while ((match = linkRegex.exec(text)) !== null) {
      linkMatches.push({
        index: match.index,
        length: match[0].length,
        text: match[1],
        url: match[2],
      })
    }

    const boldRegex = /\*\*(.+?)\*\*/g
    const boldMatches: Array<{ index: number; length: number; text: string }> = []
    while ((match = boldRegex.exec(text)) !== null) {
      boldMatches.push({
        index: match.index,
        length: match[0].length,
        text: match[1],
      })
    }

    const urlRegex = /https?:\/\/[^\s]+/g
    const urlMatches: Array<{ index: number; length: number; url: string }> = []
    while ((match = urlRegex.exec(text)) !== null) {
      const isInLink = linkMatches.some(
        lm => match!.index >= lm.index && match!.index < lm.index + lm.length
      )
      if (!isInLink) {
        urlMatches.push({
          index: match.index,
          length: match[0].length,
          url: match[0],
        })
      }
    }

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
      if (match.index > currentIndex) {
        parts.push(text.slice(currentIndex, match.index))
      }

      if (match.type === 'link') {
        parts.push(
          <a
            key={`link-${idx}`}
            href={match.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {match.text}
          </a>
        )
      } else if (match.type === 'bold') {
        parts.push(
          <strong key={`bold-${idx}`} className="font-semibold text-foreground">
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
            className="text-primary hover:underline break-all"
          >
            {match.url}
          </a>
        )
      }

      currentIndex = match.index + match.length
    })

    if (currentIndex < text.length) {
      parts.push(text.slice(currentIndex))
    }

    return <>{parts}</>
  }

  lines.forEach((line) => {
    const trimmed = line.trim()

    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      flushParagraph()
      flushList()
      tableRows.push(trimmed)
      return
    }

    if (tableRows.length > 0) {
      flushTable()
    }

    if (trimmed === "---") {
      flushParagraph()
      flushList()
      elements.push(
        <hr key={elements.length} className="my-8 border-t border-border" />
      )
      return
    }

    if (trimmed.startsWith("# ")) {
      flushParagraph()
      flushList()
      elements.push(
        <h1 key={elements.length} className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-foreground mt-10 mb-4">
          {trimmed.slice(2)}
        </h1>
      )
      return
    }

    if (trimmed.startsWith("## ")) {
      flushParagraph()
      flushList()
      elements.push(
        <h2 key={elements.length} className="scroll-m-20 text-2xl font-semibold tracking-tight text-foreground mt-8 mb-3">
          {parseInlineMarkdown(trimmed.slice(3))}
        </h2>
      )
      return
    }

    if (trimmed.startsWith("### ")) {
      flushParagraph()
      flushList()
      elements.push(
        <h3 key={elements.length} className="scroll-m-20 text-xl font-semibold tracking-tight text-foreground mt-6 mb-2">
          {parseInlineMarkdown(trimmed.slice(4))}
        </h3>
      )
      return
    }

    if (trimmed.startsWith("#### ")) {
      flushParagraph()
      flushList()
      elements.push(
        <h4 key={elements.length} className="scroll-m-20 text-lg font-semibold tracking-tight text-foreground mt-4 mb-2">
          {parseInlineMarkdown(trimmed.slice(5))}
        </h4>
      )
      return
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph()
      const listContent = trimmed.slice(2)
      listItems.push(
        <li key={listItems.length} className="text-muted-foreground">
          {parseInlineMarkdown(listContent)}
        </li>
      )
      return
    }

    if (trimmed === "") {
      flushParagraph()
      flushList()
      if (tableRows.length > 0) {
        flushTable()
      }
      return
    }

    currentParagraph.push(trimmed)
  })

  flushParagraph()
  flushList()
  flushTable()

  return <div className="prose prose-zinc dark:prose-invert max-w-none">{elements}</div>
}
