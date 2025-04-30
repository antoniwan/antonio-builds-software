'use client';

import Link from 'next/link';

export function NotFoundContent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4 text-lg">Page not found</p>
      <Link href="/" className="mt-8 text-sm text-muted-foreground hover:underline">
        Return home
      </Link>
    </div>
  );
}
