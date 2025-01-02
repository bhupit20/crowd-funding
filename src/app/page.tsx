import Hero from '@/components/layout/Hero';
import RandomMoviesSection from '@/components/movies/RandomMoviesSection';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero
        title="Hello there!"
        text="Welcome to our little movie library. Here everyone will be able to find a movie to their taste."
        button={
          <Link className="btn btn-primary" href="#random-movies">
            Get Started
          </Link>
        }
      />
      <Suspense>
        <RandomMoviesSection count={8} id="random-movies" canReload />
      </Suspense>
    </main>
  );
}
