import { useState } from 'react';

const genreOptions = {
  movies: [
    'Acción', 'Aventura', 'Comedia', 'Drama', 'Ciencia ficción', 'Terror', 'Romance', 'Animación'
  ],
  books: [
    'Novela', 'Ciencia ficción', 'Fantasía', 'Historia', 'Biografía', 'Poesía', 'Ensayo', 'Misterio'
  ],
};

const PreferencesModal = ({ type, isOpen, onClose, onSave }) => {
  const [genres, setGenres] = useState([]);
  const [actors, setActors] = useState('');
  const [authors, setAuthors] = useState('');

  const handleGenreChange = (genre) => {
    setGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handleSubmit = () => {
    const preferences = type === 'movies'
      ? { type, genres, actors }
      : { type, genres, authors };

    onSave(preferences);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-black text-white p-6 rounded-lg w-[32rem] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">
            Preferencias de {type === 'movies' ? 'películas' : 'libros'}
          </h2>
          <button
            onClick={onClose}
            className="text-white text-3xl font-bold hover:text-red-500 hover: cursor-pointer"
          >
            &times;
          </button>
        </div>

        <div className="mb-4">
          <p className="font-semibold mb-2">
            Géneros {type === 'movies' ? 'de películas' : 'literarios'}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {genreOptions[type].map((genre) => (
              <label key={genre} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={genres.includes(genre)}
                  onChange={() => handleGenreChange(genre)}
                  className="accent-blue-500 hover: cursor-pointer"
                />
                <span>{genre}</span>
              </label>
            ))}
          </div>
        </div>

        {type === 'movies' ? (
          <input
            className="w-full p-2 mb-3 bg-gray-800 text-white rounded"
            placeholder="Actores favoritos (separados por comas)"
            value={actors}
            onChange={(e) => setActors(e.target.value)}
          />
        ) : (
          <input
            className="w-full p-2 mb-3 bg-gray-800 text-white rounded"
            placeholder="Autores favoritos (separados por comas)"
            value={authors}
            onChange={(e) => setAuthors(e.target.value)}
          />
        )}

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded hover: cursor-pointer"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className="bg-[#515B51] hover:bg-[#434b43] text-white px-4 py-2 rounded hover: cursor-pointer"
          >
            Guardar preferencias
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreferencesModal;
