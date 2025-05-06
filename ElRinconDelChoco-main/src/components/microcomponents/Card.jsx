// src/components/microcomponents/Card.jsx
const Card = ({ item, type, onSelect }) => {
  const isMovie = type === 'movies';
  const imageUrl = isMovie
    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
    : item.volumeInfo?.imageLinks?.thumbnail;

  const title = isMovie ? item.title : item.volumeInfo?.title;

  return (
    <div
      onClick={() => onSelect(item)}
      className="w-36 md:w-40 flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300"
    >
      <div className="w-full h-56 md:h-64 overflow-hidden rounded-md shadow-md bg-gray-800">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="mt-2 text-sm font-medium text-gray-200 truncate">{title}</p>
    </div>
  );
};

export default Card;
