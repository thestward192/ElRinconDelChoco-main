// src/App.jsx
import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Modal from './components/microcomponents/Modal';
import { useAppLogic } from './hooks/useAppLogic';
import HeroSection from './components/sections/HeroSection';
import MovieSection from './components/sections/MovieSection';
import BookSection from './components/sections/BookSection';
import PreferencesModal from './components/microcomponents/PreferencesModal';
import PreferencesSection from './components/sections/PreferencesSection';
import { searchMoviesByPreferences } from './services/movieService';
import { searchBooksByPreferences } from './services/bookService';

const App = () => {
  const {
    mode, setMode, showModal, openModal, closeModal,
    movies, loadingMovies, books, loadingBooks,
    selectedItem
  } = useAppLogic();

  const [showPreferencesModal, setShowPreferencesModal] = useState(false);
  const [moviePreferences, setMoviePreferences] = useState(null);
  const [bookPreferences, setBookPreferences] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  // Resetear recomendaciones al cambiar de modo
  useEffect(() => {
    setRecommendations([]);
  }, [mode]);

  useEffect(() => {
    const currentPreferences = mode === 'movies' ? moviePreferences : bookPreferences;
    
    const fetchRecommendations = async () => {
      if (!currentPreferences || !currentPreferences.genres.length) return;

      const query = mode === 'movies' 
        ? currentPreferences.actors || currentPreferences.genres[0]
        : currentPreferences.authors || currentPreferences.genres[0];
        
      if (!query) return;

      const fetchFn = mode === 'movies' ? searchMoviesByPreferences : searchBooksByPreferences;

      try {
        const result = await fetchFn({ query });
        setRecommendations(result?.slice(0, 10) || []);
      } catch (error) {
        console.error('Error obteniendo recomendaciones:', error);
        setRecommendations([]);
      }
    };

    fetchRecommendations();
  }, [mode, moviePreferences, bookPreferences]);

  const handleSavePreferences = (prefs) => {
    if (mode === 'movies') {
      setMoviePreferences(prefs);
    } else {
      setBookPreferences(prefs);
    }
  };

  const currentPreferences = mode === 'movies' ? moviePreferences : bookPreferences;

  return (
    <div className="min-h-screen text-white bg-gradient-to-tr from-[#515B51] via-[#0a0a0a] to-[#0a0a0a]">
      <Navbar mode={mode} setMode={setMode} openPreferences={() => setShowPreferencesModal(true)} />
      
      <HeroSection mode={mode}/>

      <div className="p-4 space-y-10">
        {currentPreferences && (
          <PreferencesSection 
            preferences={currentPreferences} 
            recommendations={recommendations} 
            onSelect={openModal} 
          />
        )}

        {mode === 'movies' && !loadingMovies && movies && (
          <MovieSection movies={movies} openModal={openModal} />
        )}

        {mode === 'books' && !loadingBooks && books && (
          <BookSection books={books} openModal={openModal} />
        )}
      </div>

      <Modal isOpen={showModal} closeModal={closeModal} item={selectedItem} type={mode} />

      <PreferencesModal
        isOpen={showPreferencesModal}
        onClose={() => setShowPreferencesModal(false)}
        type={mode}
        initialPreferences={currentPreferences}
        onSave={handleSavePreferences}
      />
    </div>
  );
};

export default App;
