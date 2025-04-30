import { MessageCircle, Share2 } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { ContactForm } from './contact-form';
import { SocialLinks } from './social-links';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 scroll-mt-20 bg-[hsl(var(--muted))]">
      <div className="container space-y-16 md:space-y-20">
        {/* Social Links Section */}
        <div className="flex items-center fade-in">
          <SectionHeader
            icon={<Share2 className="h-6 w-6 text-[hsl(var(--gold))]" />}
            title="Connect With Me"
          />
        </div>
        <SocialLinks />

        {/* Contact Form Section */}
        <div className="flex items-center fade-in">
          <SectionHeader
            icon={<MessageCircle className="h-6 w-6 text-[hsl(var(--gold))]" />}
            title="Send Me a Message"
          />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
