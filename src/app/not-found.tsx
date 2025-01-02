import Hero from '@/components/layout/Hero';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex-grow">
      <Hero
        title="Sorry"
        text="This page does not exist"
        button={
          <Link className="btn btn-primary" href="/">
            Bring me home!
          </Link>
        }
      />
    </main>
  );
}
