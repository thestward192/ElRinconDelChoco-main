// src/services/movieService.js
import apiClient from './apiClient';
import { TMDB_API_KEY, TMDB_BASE_URL } from '../utils/constants';

export const getPopularMovies = async () => {
  const response = await apiClient.get(`${TMDB_BASE_URL}/movie/popular`, {
    params: {
      api_key: TMDB_API_KEY,
      language: 'es-ES',
    },
  });
  return response.data.results;
};

export const searchMoviesByPreferences = async (preferences) => {
  const response = await apiClient.get(`${TMDB_BASE_URL}/search/movie`, {
    params: {
      api_key: TMDB_API_KEY,
      query: preferences.query,
      language: 'es-ES',
    },
  });
  return response.data.results;
};
