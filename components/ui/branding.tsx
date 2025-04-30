import Image from 'next/image';

export function Branding() {
  return (
    <div className="flex flex-col items-center md:items-start space-y-2">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Antonio Rodriguez Martinez</h1>
      <p className="text-lg text-muted-foreground">Founder, Builder of Strong Hands, Soft Heart</p>
      <div className="mt-2">
        <Image
          src="/images/sh-sh-logo-vector.svg"
          width={40}
          height={40}
          alt="SH&SH Logo"
          className="w-8 h-8 md:w-10 md:h-10"
        />
      </div>
    </div>
  );
}
