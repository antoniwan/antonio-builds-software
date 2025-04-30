import { Share2 } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { SocialLinks } from './social-links';

export function ConnectWithMeSection() {
  return (
    <section
      id="connect"
      className="py-20 md:py-28 lg:py-36 bg-white dark:bg-background relative scroll-mt-20"
    >
      <div className="container space-y-10 md:space-y-12">
        <div>
          <SectionHeader
            icon={<Share2 className="h-6 w-6 text-[hsl(var(--gold))]" />}
            title="Connect With Me"
          />
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
