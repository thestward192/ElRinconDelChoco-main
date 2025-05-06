// src/hooks/useMovies.js
import { useQuery } from '@tanstack/react-query';
import { getPopularMovies } from '../services/movieService';

export const useMovies = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['popularMovies'],
    queryFn: getPopularMovies,
  });

  return {
    movies: data,
    loadingMovies: isLoading,
  };
};
