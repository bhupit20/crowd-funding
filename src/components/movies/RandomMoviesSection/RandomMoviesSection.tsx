import { getRandomMovies } from '@/services/movie.service';
import { HTMLAttributes, ReactNode } from 'react';
import MovieCard from '../MovieCard';
import ReloadButton from '@/components/button/ReloadButton';
import { twMerge } from 'tailwind-merge';

export interface RandomMoviesSectionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  // Number of movies to fetch
  count: number;
  title?: ReactNode;
  canReload?: boolean;
}
const RandomMoviesSection = async ({
  count,
  title = 'Movies you may like',
  canReload = false,
  ...domProps
}: RandomMoviesSectionProps) => {
  const movies = await getRandomMovies(count);

  return (
    <section {...domProps} className={twMerge('px-4 py-12', domProps.className)}>
      <div className="text-4xl font-bold pb-12 flex gap-4">
        <h2 className="inline-block">{title}</h2>
        {canReload && <ReloadButton />}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default RandomMoviesSection;
