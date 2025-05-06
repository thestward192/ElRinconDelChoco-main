import Carousel from "../microcomponents/Carousel";

const BookSection = ({ books, openModal }) => {
  return (
    <>
      <section>
        <h2 className="text-2xl font-bold mb-4">Más vistas</h2>
        <Carousel items={books} type="books" onSelect={openModal} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Recomendadas</h2>
        <Carousel items={books} type="books" onSelect={openModal} />
      </section>
    </>
  );
};

export default BookSection;
