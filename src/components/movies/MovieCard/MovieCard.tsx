import { MovieDto } from '@/services/movie.service';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import MovieThumbnail from '../MovieThumbnail';
import { twMerge } from 'tailwind-merge';
import { getMovieKey } from '../../../../utils/movie.utils';

export interface MovieCardProps extends HTMLAttributes<HTMLDivElement> {
  isLoading?: boolean;
  movie?: MovieDto;
}

const MovieCard = ({ movie, isLoading, ...domProps }: MovieCardProps) => {
  if (isLoading) {
    return 'Loading...';
  }
  if (!movie) {
    return null;
  }

  return (
    <div
      {...domProps}
      className={twMerge('card bg-base-100 shadow-xl overflow-hidden', domProps.className)}
    >
      <MovieThumbnail
        src={movie.thumbnail}
        alt={movie.title}
        errorText="No Image"
        className="min-h-96"
        imageClassName="object-cover"
      />
      <div className="card-body">
        <h2 className="card-title">
          {movie.title}
          <div className="badge badge-secondary">{movie.year}</div>
        </h2>
        <div className="card-actions ">
          {movie.genres.map((genre) => (
            <div className="badge badge-outline" key={genre}>
              {genre}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end mt-auto pt-6">
          <Link
            href={`/movie/${encodeURIComponent(getMovieKey(movie))}`}
            className="btn w-full btn-outline btn-primary"
          >
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
