// src/hooks/useBooks.js
import { useQuery } from '@tanstack/react-query';
import { getPopularBooks } from '../services/bookService';

export const useBooks = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['popularBooks'],
    queryFn: getPopularBooks,
  });

  return {
    books: data,
    loadingBooks: isLoading,
  };
};
