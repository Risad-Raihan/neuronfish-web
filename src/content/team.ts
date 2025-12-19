export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  linkedin?: string
  github?: string
  photoUrl?: string
  initials: string
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "risad",
    name: "Risad Raihan Malik",
    role: "Founder, CTO",
    bio: "Passionate about building scalable AI solutions. Leading the technical vision at NeuronFish.",
    initials: "RM",
    linkedin: "#", // Placeholder
    github: "#", // Placeholder
  },
  {
    id: "saif",
    name: "Saif Rashid",
    role: "Co-founder, CMO",
    bio: "Driving growth and brand strategy. Focused on bringing AI products to the Bangladeshi market.",
    initials: "SR",
    linkedin: "#", // Placeholder
    github: "#", // Placeholder
  },
  {
    id: "mrittika",
    name: "Mrittika Roy",
    role: "Lead, AI Department",
    bio: "Expert in machine learning and natural language processing. Spearheading our AI research initiatives.",
    initials: "MR",
    linkedin: "#", // Placeholder
    github: "#", // Placeholder
  },
  {
    id: "nafis",
    name: "Nafis Radoan",
    role: "Lead, Full-Stack Department",
    bio: "Full-stack wizard ensuring robust and seamless application experiences across our product suite.",
    initials: "NR",
    linkedin: "#", // Placeholder
    github: "#", // Placeholder
  },
]

