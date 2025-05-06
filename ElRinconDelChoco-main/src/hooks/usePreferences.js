// src/hooks/usePreferences.js
import { useState } from 'react';
import { getRecommendationFromOpenAI } from '../services/openAIService';

export const usePreferences = () => {
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitPreferences = async (userInput, type) => {
    try {
      setLoading(true);
      const response = await getRecommendationFromOpenAI(userInput, type);
      setRecommendations(response);
    } catch (error) {
      console.error('Error obteniendo recomendaciones:', error);
      setRecommendations(null);
    } finally {
      setLoading(false);
    }
  };

  const resetRecommendations = () => {
    setRecommendations(null);
  };

  return {
    recommendations,
    loading,
    submitPreferences,
    resetRecommendations,
  };
};
