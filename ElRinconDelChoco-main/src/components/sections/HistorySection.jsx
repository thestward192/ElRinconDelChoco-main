// src/components/sections/HistorySection.jsx
import { useEffect, useState } from 'react';
import { getPreferenceHistory } from '../../services/historyService';

const HistorySection = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const data = await getPreferenceHistory('anonymous');
      setHistory(data);
    };

    fetchHistory();
  }, []);

  return (
    <section className="p-8 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Historial de Búsquedas</h2>

      {history.length === 0 ? (
        <p className="text-center text-gray-400">Aún no hay historial de preferencias.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {history.map((item, index) => (
            <div key={index} className="bg-[#1a1a1a] p-4 rounded-lg shadow-lg space-y-2">
              <p><span className="font-semibold">Tipo:</span> {item.preferences.type}</p>
              <p><span className="font-semibold">Géneros:</span> {item.preferences.genres?.join(', ')}</p>
              {item.preferences.actors && (
                <p><span className="font-semibold">Actores:</span> {item.preferences.actors}</p>
              )}
              {item.preferences.authors && (
                <p><span className="font-semibold">Autores:</span> {item.preferences.authors}</p>
              )}
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Fecha:</span>{' '}
                {item.timestamp?.toDate ? item.timestamp.toDate().toLocaleString() : 'Sin fecha'}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default HistorySection;
