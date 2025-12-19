import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-4",
        {
          "items-center text-center": align === "center",
          "items-start text-left": align === "left",
          "items-end text-right": align === "right",
        },
        className
      )}
      {...props}
    >
      <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl border-b-4 border-primary pb-2 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">{title}</h2>
      {subtitle && (
        <p className="max-w-[700px] text-xl text-muted-foreground font-medium">{subtitle}</p>
      )}
    </div>
  )
}
