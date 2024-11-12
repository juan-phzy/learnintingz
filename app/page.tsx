"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [animeData, setAnimeData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAnime() {
      try {
        const response = await fetch("/api/anilist");
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        setAnimeData(data.data.Media); // Assuming the API response has "data.Media"
      } catch (error) {
        console.error("Error fetching anime:", error);
        setError(error.message);
      }
    }

    fetchAnime();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!animeData) return <p>Loading...</p>;

  return (
    <section className="home-container">
      <div className="wrapper-container">
        <div>{animeData.title.english || animeData.title.romaji}</div>
        <div>ID: {animeData.id}</div>
        <div>Title (Native): {animeData.title.native}</div>
      </div>
    </section>
  );
}
