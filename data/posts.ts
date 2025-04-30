export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    slug: 'building-systems-that-last',
    title: 'Building Systems That Last',
    excerpt:
      'Exploring the principles of creating maintainable, scalable systems that stand the test of time.',
    date: '2024-03-15',
    readingTime: '5 min read',
    tags: ['Systems Design', 'Architecture', 'Best Practices'],
  },
  {
    slug: 'code-as-communication',
    title: 'Code as Communication',
    excerpt:
      'How writing clear, intentional code creates better developer experiences and more maintainable systems.',
    date: '2024-02-28',
    readingTime: '4 min read',
    tags: ['Code Quality', 'Documentation', 'Team Culture'],
  },
  {
    slug: 'legacy-by-design',
    title: 'Legacy by Design',
    excerpt:
      'Strategies for building software that others can understand, maintain, and build upon for years to come.',
    date: '2024-01-10',
    readingTime: '6 min read',
    tags: ['Software Design', 'Maintenance', 'Future-Proofing'],
  },
];
