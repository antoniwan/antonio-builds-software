'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.currentTarget.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={cn('w-full', className)}>
      <div className="space-y-4">
        <div className="text-left">
          <p className="text-body text-muted-foreground">
            Whether you're a founder, team lead, or visionary with a plan — I help you build it
            right. Clear systems. Clear process. Quiet execution.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-body-small font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-3 py-2 border rounded-md bg-background"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-body-small font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 border rounded-md bg-background"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-body-small font-medium">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              required
              className="w-full px-3 py-2 border rounded-md bg-background"
            >
              <option value="">Select a subject</option>
              <option value="project">Project Inquiry</option>
              <option value="mentorship">Mentorship Inquiry</option>
              <option value="partnership">Partnership</option>
              <option value="consulting">Consulting</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-body-small font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-3 py-2 border rounded-md bg-background"
              placeholder="Your message..."
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>

          {submitStatus === 'success' && (
            <p className="text-body-small text-green-600 text-center">
              Thank you for your message! I'll get back to you soon.
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="text-body-small text-red-600 text-center">
              Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
