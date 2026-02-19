import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { GlowCard } from "@/components/ui/GlowCard"

interface ProductCardProps {
  title: string
  description: string
  features: string[]
  href: string
  ctaText?: string
  badges?: string[]
}

export function ProductCard({
  title,
  description,
  features,
  href,
  ctaText = "Learn More",
  badges = [],
}: ProductCardProps) {
  return (
    <GlowCard className="flex h-full flex-col">
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <Badge key={badge} variant="default">
              {badge}
            </Badge>
          ))}
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h3>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">{description}</p>
        <ul className="mt-4 flex-1 space-y-2.5 text-sm text-muted-foreground">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Button asChild className="w-full group/btn">
            <Link href={href} className="flex items-center gap-2">
              {ctaText}
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </GlowCard>
  )
}
