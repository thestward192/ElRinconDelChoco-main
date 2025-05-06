// src/components/sections/PreferencesSection.jsx
import Carousel from '../microcomponents/Carousel';

const PreferencesSection = ({ preferences, recommendations, onSelect }) => {
  if (!preferences) return null;

  return (
    <section className="bg-[#19191a] p-6 rounded-md text-white shadow-md">
      <h3 className="text-xl font-semibold mb-3">
        Recomendaciones para ti
      </h3>
      <Carousel items={recommendations} type={preferences.type} onSelect={onSelect} />
    </section>
  );
};

export default PreferencesSection;
