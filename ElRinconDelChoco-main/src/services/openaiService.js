// src/services/openaiService.js
import axios from 'axios';
import { OPENAI_API_KEY, OPENAI_URL } from '../utils/constants';

const openaiApi = axios.create({
  baseURL: OPENAI_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  },
});

// Función para obtener recomendaciones basadas en preferencias
export const getRecommendationFromOpenAI = async (userInput, type) => {
  const prompt = type === 'movies'
    ? `Sugiere 5 películas populares basadas en estas preferencias: ${userInput}. Da solo los nombres en una lista sencilla.`
    : `Sugiere 5 libros populares basados en estas preferencias: ${userInput}. Da solo los nombres en una lista sencilla.`;

  const response = await openaiApi.post('', {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
    temperature: 0.7,
    max_tokens: 150,
  });

  const recommendations = response.data.choices[0].message.content;
  return recommendations;
};
