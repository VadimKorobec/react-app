import { useEffect, useState } from "react";

import Search from "./components/Search";

const API_BASE_URL = "https://api.themoviedb.org/3/discover/movie";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY} `,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState(null);
  console.log(movies);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_BASE_URL, API_OPTIONS);
        if (!response.ok) {
          return;
        }
        const data = await response.json();
        console.log(data);
        setMovies(data.results);
      } catch (error) {
        console.error(`Error fetching movies:${error} `);
      }
    };
    fetchMovies();
  }, []);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Herro Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
        </header>
        <Search value={searchTerm} onSearch={setSearchTerm} />
        <h1>{searchTerm}</h1>
      </div>
      {movies ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <p className="text-white">{movie.original_title}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-white">Loading...</p>
      )}
    </main>
  );
};

export default App;
