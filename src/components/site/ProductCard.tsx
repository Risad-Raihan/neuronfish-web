import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

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
    <Card className="flex h-full flex-col bg-white group hover:border-primary transition-all duration-300 hover:scale-[1.02] hover:shadow-[10px_10px_0px_0px_#000000]">
      <CardHeader>
        <div className="mb-4 flex gap-2">
          {badges.map((badge, i) => (
            <Badge 
              key={badge} 
              variant="default" 
              className="border-2 border-black bg-primary text-white hover:bg-primary/90 shadow-funky-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {badge}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-3xl mb-2 group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
        <CardDescription className="text-lg text-foreground/70">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3 text-base font-medium text-foreground/80">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${i * 0.05}s` }}>
              <span className="mr-2 mt-1.5 h-2 w-2 flex-shrink-0 bg-black rotate-45 group-hover:bg-primary group-hover:rotate-90 transition-all duration-300" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full group/btn bg-black text-white hover:bg-primary border-2 border-black shadow-funky">
          <Link href={href} className="flex items-center">
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-2 group-hover/btn:scale-110 duration-300" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
