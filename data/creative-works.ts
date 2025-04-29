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
    description: "A deep dive into authentic leadership, truth, and mercy. I explore the balance between compassion and discipline, and how real leadership sometimes means making tough decisions for long-term growth. Written from my own experience, this piece is about breaking illusions, leading with clarity, and loving fiercely.",
    type: "writing",
    url: "https://wizards777.medium.com/mercy-through-the-blade-the-silent-law-of-leadership-24cef2df828a",
    date: "2025-04-27"
  },
  {
    title: "Forging the Stronghand Terminal: From Chaos to Command",
    description: "A technical and personal story of how I rebuilt my development environment from scratch. I share my process of wiping everything, starting fresh, and building a terminal setup that matches my mindset and discipline. This is about moving with intention, creating a cockpit for serious work, and finding freedom in simplicity.",
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
  },
  {
    title: "Notes From a Man Who Chose Peace (Part I)",
    description: "A stream-of-consciousness essay on simplicity, contentment, and peace of mind. I share what it means to feel whole without owning much, and how I find richness in clarity, health, and inner peace instead of material things. This is me, reflecting on my own journey toward peace, patience, and being enough.",
    type: "writing",
    url: "https://wizards777.medium.com/on-simplicity-and-peace-of-mind-885086031fe9",
    date: "2024-10-04"
  },
  {
    title: "Therapist: 'Try to lighten your load.' Me: adds another plate to the bar",
    description: "A reel of me doing some heavy deadlifts with a funny caption about therapy and lifting.",
    type: "reel",
    url: "https://www.instagram.com/p/DJA8ukEt23K/",
    date: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString().slice(0, 10) // 10 hours ago
  }
]; 