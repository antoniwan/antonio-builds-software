import { MessageCircle, Share2 } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { ContactForm } from './contact-form';
import { SocialLinks } from './social-links';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-12 lg:pb-16 scroll-mt-20 bg-[hsl(var(--muted))]"
    >
      <div className="container space-y-12 md:space-y-16">
        {/* Social Links Section */}
        <div className="space-y-4 fade-in max-w-2xl mx-auto pt-4 pb-6">
          <SectionHeader
            icon={<Share2 className="h-6 w-6 text-[hsl(var(--gold))]" />}
            title="Connect With Me"
          />
          <SocialLinks />
        </div>

        {/* Contact Form Section */}
        <div className="space-y-4 fade-in max-w-2xl mx-auto pt-4 pb-6">
          <SectionHeader
            icon={<MessageCircle className="h-6 w-6 text-[hsl(var(--gold))]" />}
            title="Send Me a Message"
          />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
