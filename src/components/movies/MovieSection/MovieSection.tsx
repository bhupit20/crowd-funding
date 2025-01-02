import { MovieDto } from '@/services/movie.service';
import { HTMLAttributes } from 'react';
import MovieThumbnail from '../MovieThumbnail';

export interface MovieSectionProps extends HTMLAttributes<HTMLDivElement> {
  movie: MovieDto;
}

const MovieSection = ({ movie }: MovieSectionProps) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-12">
      <MovieThumbnail
        width={movie.thumbnail_width}
        height={movie.thumbnail_height}
        src={movie.thumbnail}
        alt={movie.title}
        errorText="No Image"
        className="min-h-96 rounded-lg overflow-hidden"
        imageClassName="w-full"
      />
      <div className="lg:col-span-2">
        <div className="flex gap-4">
          <h1 className="text-4xl font-bold inline-block">{movie.title}</h1>
          <div className="badge badge-secondary">{movie.year}</div>
        </div>
        <div className="flex gap-2 flex-wrap py-4 items-bottom">
          <span className="font-bold">Genres:</span>
          {movie.genres.map((genre) => (
            <div className="badge badge-outline" key={genre}>
              {genre}
            </div>
          ))}
        </div>
        <p className="pb-4">{movie.extract}</p>
        <span className="font-bold">Starring:</span>
        <ul className="list-disc list-inside">
          {movie.cast.map((actor) => (
            <li key={actor}>{actor}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MovieSection;
