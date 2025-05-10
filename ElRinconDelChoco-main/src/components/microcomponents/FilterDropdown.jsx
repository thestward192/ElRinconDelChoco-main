// src/components/FilterDropdown.jsx
const FilterDropdown = ({ mode, setMode }) => {
  return (
    <div className="flex space-x-12">
      <button
        onClick={() => setMode('books')}
        className={`pb-1 border-b-2 transition-all duration-300 text-lg font-medium hover: cursor-pointer ${
          mode === 'books'
            ? 'border-white text-white'
            : 'border-transparent text-gray-300 hover:text-white'
        }`}
      >
        Libros
      </button>
      <button
        onClick={() => setMode('movies')}
        className={`pb-1 border-b-2 transition-all duration-300 text-lg font-medium hover: cursor-pointer ${
          mode === 'movies'
            ? 'border-white text-white'
            : 'border-transparent text-gray-300 hover:text-white'
        }`}
      >
        Películas
      </button>
    </div>
  );
};

export default FilterDropdown;
