const HeroSection = ({ mode }) => {
  const isMovies = mode === 'movies';

  return (
    <section className="bg-gradient-to-tr from-[#515B51] via-[#19191a] to-[#19191a] text-white py-16 md:py-24 px-10 md:px-36 flex flex-col md:flex-row items-start md:items-center justify-start gap-10 md:gap-32">
      {/* Texto desplazado a la derecha */}
      <div className="max-w-xl ml-4 md:ml-12">
        <h1 className="text-4xl font-bold mb-4">EL RINCÓN DEL CHOCO</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Sumérgete en un universo de historias: aquí reunimos películas que te harán vibrar y libros que encenderán tu imaginación.
          Explora nuestras recomendaciones diarias y encuentra tu próxima gran aventura, ya sea en la pantalla o entre las páginas.
        </p>
      </div>

      {/* Imágenes más grandes y más a la derecha */}
      <div className="relative w-64 h-96 md:w-72 md:h-[28rem] ml-64">
        {/* Imagen trasera */}
        <img
          src="/Book1.jpeg"
          alt="Libro destacado"
          className={`absolute top-2 left-10 w-full h-full object-cover rounded-md shadow-xl transition-all duration-700
            ${isMovies ? 'scale-100 opacity-60 z-0' : 'scale-100 opacity-100 z-10'}
          `}
        />
        {/* Imagen frontal */}
        <img
          src="/Movie1.jpeg"
          alt="Película destacada"
          className={`absolute top-0 left-0 w-full h-full object-cover rounded-md shadow-xl transition-all duration-700
            ${isMovies ? 'scale-100 opacity-100 z-10' : 'scale-100 opacity-60 z-0'}
          `}
        />
      </div>
    </section>
  );
};

export default HeroSection;
