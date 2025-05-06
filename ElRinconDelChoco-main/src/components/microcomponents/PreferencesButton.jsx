const PreferencesButton = ({ openPreferences }) => {
  return (
    <button
      onClick={openPreferences}
      className="bg-[#515B51] hover:bg-[#434b43] text-white px-4 py-2 rounded-md transition-colors duration-200"
    >
      Preferencias
    </button>
  );
};

export default PreferencesButton;
