// src/hooks/useAppLogic.js
import { useState } from 'react';
import { useBooks } from './useBooks';
import { useMovies } from './useMovies';

export const useAppLogic = () => {
  const [mode, setMode] = useState('movies');
  const [showPreferences, setShowPreferences] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const { movies, loadingMovies } = useMovies();
  const { books, loadingBooks } = useBooks();

  const openPreferences = () => setShowPreferences(true);
  const closePreferences = () => setShowPreferences(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setShowModal(false);
  };

  return {
    mode,
    setMode,
    showPreferences,
    openPreferences,
    closePreferences,
    showModal,
    openModal,
    closeModal,
    selectedItem,
    movies,
    loadingMovies,
    books,
    loadingBooks,
  };
};
