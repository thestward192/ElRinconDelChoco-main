import { useRef } from 'react';
import Card from './Card';

const Carousel = ({ items, type, onSelect }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="relative group">
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-0 bottom-0 bg-black/50 hover:bg-black/70 text-white px-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center"
        aria-label="Desplazar a la izquierda"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <div ref={scrollContainerRef} className="overflow-x-auto no-scrollbar py-2 px-1">
        <div className="flex gap-4">
          {items?.map((item) => (
            <Card
              key={item.id || item.id_book}
              item={item}
              type={type}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>

      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-0 bottom-0 bg-black/50 hover:bg-black/70 text-white px-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center"
        aria-label="Desplazar a la derecha"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;