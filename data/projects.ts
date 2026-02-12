export interface ProjectLabel {
  name: string;
  color?: string;
}

export interface Project {
  title: string;
  description: string;
  shortDescription?: string;
  imageUrl: string;
  projectUrl: string;
  labels: ProjectLabel[];
}

export const projectsData: Project[] = [
  {
    title: 'Strong Hands, Soft Heart',
    description:
      "A lifestyle brand and platform honoring the fusion of strength and compassion. SH&SH is home to handcrafted soap boxes, bilingual children's stories, original music, and heartfelt reflections — all built around a philosophy of legacy, love, and craftsmanship.",
    shortDescription:
      'A lifestyle brand and content platform built around legacy, love, and craftsmanship.',
    imageUrl: '/images/projects/artisanal-hands.avif',
    projectUrl:
      'https://www.stronghandssoftheart.com/?utm_source=builds.software&utm_medium=referral&utm_campaign=portfolio_click',
    labels: [
      { name: 'Brand', color: 'vegeta-blue' },
      { name: 'Ecommerce', color: 'gold' },
      { name: 'Content Platform', color: 'primary' },
    ],
  },
  {
    title: 'JuanAngustia.com',
    description:
      'When my friend at Google asked me to bring his vibrant portfolio designs to life, I knew this would be a good opportunity to stretch my animation skills. Using React and Framer Motion, I crafted particle effects and fluid transitions that respond well across all device sizes. The technical challenges were considerable—implementing animations, optimizing performance, and ensuring accessibility while maintaining the creative design. This project reinforced my belief that with the right approach, creative design visions can be successfully translated into performant code.',
    shortDescription:
      'A technically challenging portfolio site featuring complex animations and responsive particle effects.',
    imageUrl: '/images/projects/jangustia-desktop.avif',
    projectUrl: 'https://juanangustia.com',
    labels: [
      { name: 'React', color: 'vegeta-blue' },
      { name: 'Framer Motion', color: 'primary' },
      { name: 'Portfolio', color: 'gold' },
    ],
  },
  {
    title: 'AbogadaJulia.com',
    description:
      'I designed this multilingual immigration law site in Figma and built it with a customized WordPress Twenty-Twenty-Four Theme. The challenge was creating a site that was both beautiful and highly functional across languages. I implemented advanced SEO techniques, content authoring workflows, and performance optimizations that resulted in a 92/100 average on Google PageSpeed Insights.',
    shortDescription:
      'A high-performance multilingual website for an immigration attorney that balances elegant design with technical excellence.',
    imageUrl: '/images/projects/abogadajulia-desktop.avif',
    projectUrl: 'https://abogadajulia.com',
    labels: [
      { name: 'WordPress', color: 'vegeta-blue' },
      { name: 'Multilingual', color: 'gold' },
      { name: 'SEO', color: 'primary' },
    ],
  },
  {
    title: 'Mia, the Sun, and the Moon',
    description:
      "This bilingual e-book was a labor of love created for my daughter and nephew. Using React and Styled Components, I built an interactive reading experience that remembers the user's language preference and last page visited. The technical challenge was creating a seamless, responsive experience across devices. The creative challenge? Writing an engaging children's story and directing AI to generate illustrations. The most fun part was watching my daughter literally direct and curate the AI-generated images—she had strong opinions about which illustrations captured her vision and rejected dozens until they met her standards!",
    shortDescription:
      'A heartfelt interactive bilingual e-book built for my daughter and nephew with React and AI-generated illustrations she personally directed and curated.',
    imageUrl: '/images/projects/mia-ebook-desktop.avif',
    projectUrl: 'https://mia-the-sun-and-the-moon.antoniorodriguez.us',
    labels: [
      { name: 'React', color: 'vegeta-blue' },
      { name: 'AI-Generated Art', color: 'gold' },
      { name: 'Bilingual', color: 'primary' },
    ],
  },
  {
    title: 'Word Game (Practice Exercise)',
    description:
      "This Wordle clone was my playground for mastering React fundamentals from Josh W Comeau's 'The Joy of React' course. Beyond just following tutorials, I challenged myself to implement additional features and optimizations. I used Parcel for minimal build configuration and focused on React hooks, state management, and creating an engaging UI. The project taught me the elegance of well-structured React code and the importance of thoughtful component design. What started as a learning exercise turned into a fun game that friends and family enjoyed playing for a bit.",
    shortDescription:
      'A Wordle clone that evolved from a learning exercise into a fun game that friends and family enjoyed.',
    imageUrl: '/images/projects/wordle-clone-desktop.avif',
    projectUrl: 'https://wordle-clone-arm.netlify.app',
    labels: [
      { name: 'React', color: 'vegeta-blue' },
      { name: 'Game', color: 'primary' },
      { name: 'Parcel', color: 'gold' },
    ],
  },
  {
    title: 'Builds.Software',
    description:
      "This portfolio site—Next.js, Tailwind—demonstrates AI-augmented development. I used v0 for UI scaffolding, Cursor for code suggestions and debugging, and Copilot for acceleration. AI reduces load without replacing clarity: components stay maintainable, architecture stays deliberate. Built for performance and readability.",
    shortDescription:
      'Portfolio built with Next.js and AI tooling (v0, Cursor, Copilot). AI that reduces load, not adds noise.',
    imageUrl: '/images/projects/antonio-builds-software-desktop.avif',
    projectUrl: 'https://builds.software',
    labels: [
      { name: 'Next.js', color: 'vegeta-blue' },
      { name: 'v0', color: 'gold' },
      { name: 'Cursor', color: 'primary' },
    ],
  },
];
