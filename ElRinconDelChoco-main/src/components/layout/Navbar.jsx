import FilterDropdown from '../microcomponents/FilterDropdown';
import PreferencesButton from '../microcomponents/PreferencesButton';

const Navbar = ({ mode, setMode, openPreferences }) => {
  return (
    <nav className="flex items-center justify-between bg-[#020202] p-4 text-white relative">
      {/* Izquierda: Logo + nombre */}
      <div className="flex items-center space-x-3">
        <img
          src="https://i.ibb.co/rG50QY0c/Chat-GPT-Image-4-may-2025-08-54-39-p-m.png"
          alt="Logo El Rincón del Choco"
          className="h-10 w-auto object-contain"
        />
        <span className="text-2xl font-bold">El Rincón del Choco</span>
      </div>

      {/* Centro: Secciones */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <FilterDropdown mode={mode} setMode={setMode} />
      </div>

      {/* Derecha: Botón de preferencias */}
      <div className="flex items-center space-x-4">
        <PreferencesButton openPreferences={openPreferences} />
      </div>
    </nav>
  );
};

export default Navbar;
