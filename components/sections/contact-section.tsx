import { MessageCircle, Share2 } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { ContactForm } from './contact-form';
import { SocialLinks } from './social-links';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 lg:py-36 bg-white dark:bg-background relative scroll-mt-20"
    >
      <div className="container space-y-10 md:space-y-12">
        {/* Social Links Section */}
        <div className="fade-in">
          <SectionHeader
            icon={<Share2 className="h-6 w-6 text-[hsl(var(--gold))]" />}
            title="Connect With Me"
          />
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="fade-in">
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
