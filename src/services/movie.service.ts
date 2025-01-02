'use server';

import moviesData from '@/data/movies-2020s.json';
import { cookies } from 'next/headers';
import { getMovieKey } from '../../utils/movie.utils';

export interface MovieDto {
  title: string;
  year: number;
  cast: string[];
  genres: string[];
  href?: string | null;
  extract?: string;
  thumbnail?: string;
  thumbnail_width?: number;
  thumbnail_height?: number;
}

export interface MovieSearchOptions {
  query?: string;
  offset?: number;
  limit?: number;
}

// Transform movies data into map to  optimize search
const allMoviesMap = new Map<string, MovieDto>(
  moviesData.map((movie) => [getMovieKey(movie), movie]),
);

export const getMovieByKey = (key: string) => Promise.resolve(allMoviesMap.get(key) ?? null);

export const getRandomMovies = (count: number = 10) => {
  // disable cache for this server action
  const _ = cookies();

  const moviesMap = new Map<string, MovieDto>();

  const countLimit = 1000;
  if (count > countLimit) {
    throw new Error(`Max allowed "count" is ${countLimit}`);
  }

  try {
    while (moviesMap.size < count) {
      const randomMovieIdx = Math.floor(Math.random() * (moviesData.length - 0.01));
      const randomMovie = moviesData[randomMovieIdx];

      const movieKey = getMovieKey(randomMovie);

      if (!moviesMap.has(movieKey)) {
        moviesMap.set(movieKey, randomMovie);
      }
    }
    return Promise.resolve(Array.from(moviesMap.values()));
  } catch (e) {
    console.error(e);
    return Promise.resolve([]);
  }
};

const getFilteredMoviesByName = (query?: string) => {
  if (!query) {
    return moviesData;
  }

  return moviesData.filter((movie) => movie.title.includes(query));
};

const paginateMovies = (movies: MovieDto[], offset = 0, limit = 20) => {
  return movies.slice(offset, offset + limit);
};

export const searchMovies = ({ query = '', offset = 0, limit = 20 }: MovieSearchOptions) => {
  const filteredMovies = getFilteredMoviesByName(query);

  const ensureOffset = Math.max(0, offset);
  const ensureLimit = Math.max(0, limit);

  return Promise.resolve(paginateMovies(filteredMovies, ensureOffset, ensureLimit));
};
