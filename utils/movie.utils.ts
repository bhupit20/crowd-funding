import { MovieDto } from '@/services/movie.service';

export const getMovieKey = (movie: Pick<MovieDto, 'title' | 'year'>) =>
  `${movie.title} ${movie.year}`;
