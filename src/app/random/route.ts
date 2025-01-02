import { MovieDto, getRandomMovies } from '@/services/movie.service';
import { NextResponse } from 'next/server';
import { getMovieKey } from '../../../utils/movie.utils';

const buildAbsoluteMovieUrl = (requestUrl: string, movie: MovieDto) => {
  const url = new URL(requestUrl);
  const movieKey = getMovieKey(movie);
  return `${url.origin}/movie/${encodeURIComponent(movieKey)}`;
};

export const GET = async (request: Request) => {
  const [movie] = await getRandomMovies(1);

  return NextResponse.redirect(buildAbsoluteMovieUrl(request.url, movie));
};
