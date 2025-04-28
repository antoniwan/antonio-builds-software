export interface CreativeWork {
  title: string
  description: string
  type: "writing" | "music" | "thread" | "reel"
  url: string
  date?: string // ISO format
}

export const creativeWorks: CreativeWork[] = [
  {
    title: "Mercy Through the Blade: The Silent Law of Leadership",
    description: "An exploration of authentic leadership through the lens of truth and mercy. This essay delves into the delicate balance between compassion and discipline, examining how true leadership often requires making difficult decisions that serve long-term growth over short-term comfort.",
    type: "writing",
    url: "https://wizards777.medium.com/mercy-through-the-blade-the-silent-law-of-leadership-24cef2df828a",
    date: "2025-04-27"
  },
  {
    title: "Forging the Stronghand Terminal: From Chaos to Command",
    description: "A technical and philosophical journey of rebuilding my development environment from the ground up. This essay explores the relationship between our tools and our mindset, detailing how I transformed my Windows 11 terminal into a powerful command center using WezTerm, PowerShell 7, and other modern tools.",
    type: "writing",
    url: "https://wizards777.medium.com/forging-the-stronghand-terminal-from-chaos-to-command-c4e4df4d290c",
    date: "2025-04-28"
  },
  {
    title: `Uncomplete Song #2983`,
    description: `¿y quien dijo que el romanticismo estaba perdido?\n\nHace poco en uno de los días más felices de mi vida me dijeron que me veían mal mentalmente. No se dejen engañar. Tomen su espacio. Vivan. Sientan. Amen. Griten. Pataleteen. La vida es buena.\n\nA romantic, freestyle guitar jam. Just me, the strings, and a moment of feeling alive.`,
    type: "reel",
    url: "https://www.instagram.com/p/DIcqwZcNWoX/",
    date: "2025-04-28"
  }
]; 