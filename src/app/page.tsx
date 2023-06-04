import Image from 'next/image';
import FetchHello from './example';

export default function Home() {
  return (
    <div>
      <h1>Next.js + TypeScript + Tailwind CSS + trpc</h1>
      <p>
        Get started by editing <code>pages/index.tsx</code>
      </p>
      <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
      <FetchHello />
    </div>
  );
}
