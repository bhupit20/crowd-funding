import MovieSection from '@/components/movies/MovieSection';
import RandomMoviesSection from '@/components/movies/RandomMoviesSection';
import { getMovieByKey } from '@/services/movie.service';
import { notFound } from 'next/navigation';

interface MoviePageProps {
  params: { key: string };
}

export default async function MoviePage({ params }: MoviePageProps) {
  const movieKey = decodeURIComponent(params.key);

  const movie = await getMovieByKey(movieKey);

  if (!movie) {
    return notFound();
  }
  return (
    <main className="flex-grow">
      <MovieSection movie={movie} />
      <RandomMoviesSection count={4} title="You may also like these movies" />
    </main>
  );
}
