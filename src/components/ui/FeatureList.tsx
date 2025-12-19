import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureListProps extends React.HTMLAttributes<HTMLUListElement> {
  features: string[]
}

export function FeatureList({ features, className, ...props }: FeatureListProps) {
  return (
    <ul className={cn("space-y-3", className)} {...props}>
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check className="mr-2 h-5 w-5 shrink-0 text-secondary" />
          <span className="text-muted-foreground">{feature}</span>
        </li>
      ))}
    </ul>
  )
}

