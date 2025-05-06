// src/components/microcomponents/Modal.jsx
const Modal = ({ isOpen, closeModal, item, type }) => {
  if (!isOpen || !item) return null;

  const isMovie = type === 'movies';

  const imageUrl = isMovie
    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
    : item.volumeInfo?.imageLinks?.thumbnail;

  const title = isMovie ? item.title : item.volumeInfo?.title;
  const description = isMovie
    ? item.overview || 'Sin descripción disponible.'
    : item.volumeInfo?.description || 'Sin descripción disponible.';

  const year = isMovie
    ? item.release_date?.split('-')[0] || 'No disponible'
    : item.volumeInfo?.publishedDate?.split('-')[0] || 'No disponible';

  const genres = isMovie
    ? item.genre_ids?.join(', ') || 'Sin género'
    : item.volumeInfo?.categories?.join(', ') || 'Sin categoría';

  const cast = isMovie
    ? item.cast?.join(', ') || 'Reparto no disponible'
    : item.volumeInfo?.authors?.join(', ') || 'Autor no disponible';

  const rating = isMovie ? item.vote_average || 'N/A' : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={closeModal} // Clic fuera cierra
    >
      <div
        className="relative bg-black text-white rounded-lg overflow-hidden shadow-lg w-full max-w-4xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()} // Bloquea propagación dentro del modal
      >
        {/* Botón cerrar funcional */}
<div className="absolute top-0 right-0 p-4 z-20">
  <button
    onClick={(e) => {
      e.stopPropagation(); // Prevenir que cierre por clic fuera
      closeModal();        // Cierra el modal
    }}
    aria-label="Cerrar modal"
    className="text-white text-3xl font-bold hover:text-red-500 transition duration-200"
  >
    &times;
  </button>
</div>

        {/* Imagen con gradiente suave */}
        <div className="relative w-full md:w-1/2 h-72 md:h-auto">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-black/70 to-transparent pointer-events-none" />
        </div>

        {/* Contenido */}
        <div className="w-full md:w-1/2 p-6 space-y-2 z-10">
          <h2 className="text-3xl font-bold">{title}</h2>

          <p className="text-gray-300 text-sm">
            <span className="font-semibold">Año:</span> {year}
          </p>

          {isMovie ? (
            <>
              <p className="text-gray-300 text-sm">
                <span className="font-semibold">Reparto:</span> {cast}
              </p>
              <p className="text-gray-300 text-sm">
                <span className="font-semibold">Rating:</span> {rating}
              </p>
              <p className="text-gray-300 text-sm">
                <span className="font-semibold">Géneros:</span> {genres}
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-300 text-sm">
                <span className="font-semibold">Autor(es):</span> {cast}
              </p>
              <p className="text-gray-300 text-sm">
                <span className="font-semibold">Categorías:</span> {genres}
              </p>
            </>
          )}

          <p className="mt-4 text-sm text-gray-200 leading-relaxed">
            {description.length > 400 ? description.slice(0, 400) + '...' : description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
