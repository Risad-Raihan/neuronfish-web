import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import { TeamMember } from "@/content/team"

interface TeamCardProps {
  member: TeamMember
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <Card className="h-full bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_#000000] hover:border-primary hover:scale-[1.02] group">
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        <Avatar className="h-16 w-16 border-2 border-black shadow-funky-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:border-primary group-hover:shadow-[4px_4px_0px_0px_#000000]">
          <AvatarImage src={member.photoUrl} alt={member.name} />
          <AvatarFallback className="bg-primary font-bold text-white text-xl group-hover:bg-secondary transition-colors duration-300">
            {member.initials}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors duration-300">{member.name}</CardTitle>
          <p className="text-sm font-bold text-primary uppercase tracking-wide group-hover:text-secondary transition-colors duration-300">
            {member.role}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-6 text-sm font-medium text-foreground/70 leading-relaxed group-hover:text-foreground transition-colors duration-300">{member.bio}</p>
        <div className="flex gap-4">
          {member.linkedin && (
            <Link
              href={member.linkedin}
              className="text-black transition-all duration-300 hover:scale-125 hover:text-primary hover:rotate-12"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <Linkedin className="h-6 w-6" />
            </Link>
          )}
          {member.github && (
            <Link
              href={member.github}
              className="text-black transition-all duration-300 hover:scale-125 hover:text-secondary hover:rotate-12"
              aria-label={`${member.name}'s GitHub`}
            >
              <Github className="h-6 w-6" />
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
