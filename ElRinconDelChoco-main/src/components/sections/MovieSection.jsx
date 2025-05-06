import Carousel from "../microcomponents/Carousel";

const MovieSection = ({ movies, openModal }) => {
  const filterByGenre = (genreName) => {
    const genreMap = {
      Acción: 28,
      Aventura: 12,
      Infantiles: 16, // Infantil típicamente se representa con Animación (id 16)
    };

    const genreId = genreMap[genreName];
    return movies?.filter((movie) => movie.genre_ids?.includes(genreId));
  };

  return (
    <>
      <section>
        <h2 className="text-2xl font-bold mb-4">Más vistas</h2>
        <Carousel items={movies} type="movies" onSelect={openModal} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Acción</h2>
        <Carousel items={filterByGenre("Acción")} type="movies" onSelect={openModal} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Aventura</h2>
        <Carousel items={filterByGenre("Aventura")} type="movies" onSelect={openModal} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Infantiles</h2>
        <Carousel items={filterByGenre("Infantiles")} type="movies" onSelect={openModal} />
      </section>
    </>
  );
};

export default MovieSection;
