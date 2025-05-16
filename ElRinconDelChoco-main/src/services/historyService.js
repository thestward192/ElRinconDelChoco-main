// src/services/historyService.js
import { collection, addDoc, getDocs, query, where, Timestamp } from 'firebase/firestore';
import { db } from './firebaseService.js';

// Guardar Preferencias en Firestore
export const savePreferenceHistory = async (userId = 'anonymous', preferences) => {
  try {
    await addDoc(collection(db, 'preferenceHistory'), {
      userId,
      preferences,
      timestamp: Timestamp.now(),
    });
    console.log('Preferencias guardadas correctamente.');
  } catch (error) {
    console.error('Error al guardar preferencias:', error);
  }
};

// Obtener Historial de Preferencias
export const getPreferenceHistory = async (userId = 'anonymous') => {
  try {
    const q = query(collection(db, 'preferenceHistory'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);

    const history = [];
    querySnapshot.forEach((doc) => history.push(doc.data()));
    return history;
  } catch (error) {
    console.error('Error al obtener historial:', error);
    return [];
  }
};
