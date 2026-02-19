"use client"

import { cn } from "@/lib/utils"

interface GridPatternProps {
  className?: string
  dotSize?: number
  gap?: number
}

export function GridPattern({ className, dotSize = 1.2, gap = 28 }: GridPatternProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-muted-foreground/20",
        className
      )}
    >
      <defs>
        <pattern
          id="grid-dot-pattern"
          x="0"
          y="0"
          width={gap}
          height={gap}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={gap / 2} cy={gap / 2} r={dotSize} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-dot-pattern)" />
      <rect
        width="100%"
        height="100%"
        fill="url(#grid-fade)"
        style={{ mixBlendMode: "multiply" }}
      />
      <defs>
        <radialGradient id="grid-fade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
