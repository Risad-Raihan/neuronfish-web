'use client'

import { useEffect, useRef } from 'react'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTED_PROMPTS = [
  'What is Dikkha AI?',
  'Tell me about CHHAR',
  "What's NeuronFish's mission?",
  'How do I download Dikkha AI?',
  "What products are coming next?",
  'Who is on the team?',
]

interface ChatMessagesProps {
  messages: Message[]
  isStreaming: boolean
  onPromptClick: (prompt: string) => void
}

export function ChatMessages({ messages, isStreaming, onPromptClick }: ChatMessagesProps) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isStreaming])

  if (messages.length === 0) return null

  const usedPrompts = new Set(
    messages.filter((m) => m.role === 'user').map((m) => m.content.trim())
  )
  const remainingPrompts = SUGGESTED_PROMPTS.filter((p) => !usedPrompts.has(p))

  const lastAssistantIdx = messages.reduce(
    (acc, m, i) => (m.role === 'assistant' ? i : acc),
    -1
  )

  return (
    <div className="flex flex-col gap-3 px-4 py-3">
      {messages.map((msg, idx) => (
        <div key={msg.id} className="flex flex-col gap-1.5">
        <div
          className={cn(
            'flex items-end gap-2',
            msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
          )}
        >
          {msg.role === 'assistant' && (
            <img
              src="/pluto-avatar.jpg"
              alt="Pluto"
              className="h-6 w-6 shrink-0 rounded-full object-contain bg-[#080e18] shadow-md self-start mt-0.5"
            />
          )}

          <div
            className={cn(
              'max-w-[82%] rounded-2xl text-sm',
              msg.role === 'user'
                ? 'rounded-br-sm bg-blue-600 px-3.5 py-2.5 text-white leading-relaxed'
                : 'rounded-bl-sm bg-[#161b27] px-3.5 py-2.5 text-[#d1d9e6] ring-1 ring-white/6'
            )}
          >
            {msg.role === 'assistant' ? (
              <PlutoMessage content={msg.content} />
            ) : (
              <span className="leading-relaxed">{msg.content}</span>
            )}
          </div>
        </div>

        {/* Suggested prompts after the last assistant message, only when not streaming */}
        {idx === lastAssistantIdx && !isStreaming && remainingPrompts.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pl-8">
            {remainingPrompts.slice(0, 3).map((prompt) => (
              <button
                key={prompt}
                onClick={() => onPromptClick(prompt)}
                className={cn(
                  'rounded-full border border-white/10 bg-white/4 px-2.5 py-1',
                  'text-[11px] text-[#7c8fa8] leading-none',
                  'transition-all duration-150',
                  'hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300',
                  'active:scale-95'
                )}
              >
                {prompt}
              </button>
            ))}
          </div>
        )}
        </div>
      ))}

      {isStreaming && messages[messages.length - 1]?.role !== 'assistant' && (
        <div className="flex items-end gap-2">
          <img
            src="/pluto-avatar.jpg"
            alt="Pluto"
            className="h-6 w-6 shrink-0 rounded-full object-contain bg-[#080e18] shadow-md"
          />
          <div className="rounded-2xl rounded-bl-sm bg-[#161b27] px-3.5 py-3 ring-1 ring-white/6">
            <TypingDots />
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  )
}

// ── Structured message renderer ───────────────────────────────────────────────

type Block =
  | { type: 'text'; content: string }
  | { type: 'bullet'; items: { label: string | null; body: string }[] }
  | { type: 'link'; label: string; url: string }

function parsePlutoMessage(raw: string): Block[] {
  const blocks: Block[] = []
  const lines = raw.split('\n').filter((l) => l.trim() !== '')

  let bulletBuffer: { label: string | null; body: string }[] = []

  function flushBullets() {
    if (bulletBuffer.length > 0) {
      blocks.push({ type: 'bullet', items: [...bulletBuffer] })
      bulletBuffer = []
    }
  }

  for (const line of lines) {
    const trimmed = line.trim()

    // [LINK: label | url]
    const linkMatch = trimmed.match(/^\[LINK:\s*(.+?)\s*\|\s*(https?:\/\/\S+)\s*\]$/)
    if (linkMatch) {
      flushBullets()
      blocks.push({ type: 'link', label: linkMatch[1], url: linkMatch[2] })
      continue
    }

    // Bullet line: starts with "- "
    if (trimmed.startsWith('- ')) {
      const body = trimmed.slice(2)
      // "- **Label:** description" → split label from body
      const boldLabel = body.match(/^\*\*(.+?):\*\*\s*(.*)$/)
      if (boldLabel) {
        bulletBuffer.push({ label: boldLabel[1], body: boldLabel[2] })
      } else {
        bulletBuffer.push({ label: null, body })
      }
      continue
    }

    // Plain text
    flushBullets()
    blocks.push({ type: 'text', content: trimmed })
  }

  flushBullets()
  return blocks
}

function InlineText({ text }: { text: string }) {
  // Handle **bold** inline
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') ? (
          <strong key={i} className="font-semibold text-white">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  )
}

function PlutoMessage({ content }: { content: string }) {
  const blocks = parsePlutoMessage(content)

  return (
    <div className="flex flex-col gap-2">
      {blocks.map((block, i) => {
        if (block.type === 'text') {
          return (
            <p key={i} className="leading-relaxed text-[13px]">
              <InlineText text={block.content} />
            </p>
          )
        }

        if (block.type === 'bullet') {
          return (
            <ul key={i} className="flex flex-col gap-1.5">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-[13px] leading-snug">
                  <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/70" />
                  <span className="text-[#b8c3d6]">
                    {item.label && (
                      <span className="font-semibold text-[#d8e0ed]">
                        {item.label}:{' '}
                      </span>
                    )}
                    <InlineText text={item.body} />
                  </span>
                </li>
              ))}
            </ul>
          )
        }

        if (block.type === 'link') {
          return (
            <a
              key={i}
              href={block.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-1.5 self-start',
                'rounded-lg bg-cyan-600/15 px-3 py-1.5',
                'text-[12px] font-medium text-cyan-300',
                'ring-1 ring-cyan-500/30',
                'hover:bg-cyan-600/25 hover:text-cyan-200 transition-colors duration-150'
              )}
            >
              <ExternalLink className="h-3 w-3 shrink-0" />
              {block.label}
            </a>
          )
        }

        return null
      })}
    </div>
  )
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-cyan-400/70"
          style={{
            animation: 'pluto-bounce 1.2s ease-in-out infinite',
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  )
}
