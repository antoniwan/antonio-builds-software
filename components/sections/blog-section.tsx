import { BookOpen } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { Button } from '@/components/ui/button';
import { posts } from '@/data/posts';
import Link from 'next/link';

export function BlogSection() {
  return (
    <section id="blog" className="py-12 md:py-16 lg:py-24">
      <div className="container space-y-8 md:space-y-10">
        <div className="flex items-center fade-in">
          <SectionHeader
            icon={<BookOpen className="h-6 w-6 text-[hsl(var(--vegeta-blue))]" />}
            title="Latest Thoughts"
          />
        </div>
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className="fade-in p-6 rounded-lg border border-border bg-card hover:bg-card/80 transition-colors flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-grow">
                <h3 className="text-heading-3 mb-2 text-[hsl(var(--vegeta-blue))]">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-[hsl(var(--vegeta-blue-light))] text-[hsl(var(--vegeta-blue-dark))]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm text-muted-foreground">{post.readingTime}</span>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-primary/20 hover:bg-primary/5 dark:text-foreground"
                >
                  <Link href={`/blog/${post.slug}`}>Read Post</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
