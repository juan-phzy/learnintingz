"use client"

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [animeData, setAnimeData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAnime() {
      try {
        const response = await fetch('/api/anilist');
        if (!response.ok) throw new Error('Failed to fetch data');
        
        const data = await response.json();
        setAnimeData(data.data.Media);  // Assuming the API response has "data.Media"
      } catch (error) {
        console.error('Error fetching anime:', error);
        setError(error.message);
      }
    }

    fetchAnime();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!animeData) return <p>Loading...</p>;

  return (
    <div>
      <h1>{animeData.title.english || animeData.title.romaji}</h1>
      <p>ID: {animeData.id}</p>
      <p>Title (Native): {animeData.title.native}</p>
    </div>
  );
}
