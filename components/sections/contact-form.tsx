'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

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
      const response = await fetch('https://formspree.io/f/manoqalw', {
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
    <div className={cn(className)}>
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
                className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
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
                className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
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
              className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="">What brings you here?</option>
              <option value="project">Let's Build Something Together</option>
              <option value="mentorship">Share Your Wisdom</option>
              <option value="partnership">Join Forces</option>
              <option value="consulting">Need a Fresh Perspective</option>
              <option value="other">Something Else on Your Mind</option>
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
              className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Your message..."
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full relative">
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </Button>

          {submitStatus === 'success' && (
            <div className="flex items-center gap-2 text-green-600 text-body-small">
              <CheckCircle2 className="h-4 w-4" />
              <p>Thank you for your message! I'll get back to you soon.</p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="flex items-center gap-2 text-red-600 text-body-small">
              <AlertCircle className="h-4 w-4" />
              <p>Something went wrong. Please try again later.</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
