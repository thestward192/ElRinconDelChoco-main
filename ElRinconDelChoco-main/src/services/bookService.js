// src/services/bookService.js
import apiClient from './apiClient';
import { GOOGLE_BOOKS_API_KEY, GOOGLE_BOOKS_BASE_URL } from '../utils/constants';

export const getPopularBooks = async () => {
  const response = await apiClient.get(`${GOOGLE_BOOKS_BASE_URL}/volumes`, {
    params: {
      q: 'subject:fiction', // Tema general de libros populares
      orderBy: 'relevance',
      maxResults: 20,
      key: GOOGLE_BOOKS_API_KEY,
    },
  });
  return response.data.items;
};

export const searchBooksByPreferences = async (preferences) => {
  const response = await apiClient.get(`${GOOGLE_BOOKS_BASE_URL}/volumes`, {
    params: {
      q: preferences.query,
      orderBy: 'relevance',
      maxResults: 20,
      key: GOOGLE_BOOKS_API_KEY,
    },
  });
  return response.data.items;
};
