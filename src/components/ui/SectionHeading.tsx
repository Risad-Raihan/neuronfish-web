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
        "flex flex-col space-y-3",
        {
          "items-center text-center": align === "center",
          "items-start text-left": align === "left",
          "items-end text-right": align === "right",
        },
        className
      )}
      {...props}
    >
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="max-w-[600px] text-lg text-muted-foreground">{subtitle}</p>
      )}
    </div>
  )
}
