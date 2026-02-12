import { MessageCircle } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { ContactForm } from './contact-form';

export function SendMessageSection() {
  return (
    <section
      id="message"
      className="py-20 md:py-28 lg:py-36 bg-muted/30 dark:bg-muted/20 relative scroll-mt-20"
    >
      <div className="container space-y-10 md:space-y-12">
        <div>
          <SectionHeader
            icon={<MessageCircle className="h-6 w-6 text-[hsl(var(--gold))]" />}
            title="Send Me a Message"
          />
          <div className="mt-6 max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
