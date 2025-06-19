import { useEffect, useState } from "react";

import Search from "./components/Search";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";
import { useDebounce } from "react-use";
import { updateSearchCount } from "./appwrite";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchedTerm, setDebauncedSearchTerm] = useState("");

  useDebounce(() => setDebauncedSearchTerm(searchTerm), 500, [searchTerm]);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const endpoint = searchTerm
          ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(
              searchTerm
            )}`
          : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

        const response = await fetch(endpoint, API_OPTIONS);
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setMovieList(data.results);
        updateSearchCount();
      } catch (error) {
        console.error(`Error fetching movies: ${error}`);
        setErrorMessage("Error fetching movies. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [searchTerm]);

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
          <Search value={searchTerm} onSearch={setSearchTerm} />
        </header>
        <section className="all-movies">
          <h2 className="mt-20 text-center">All Movies</h2>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {!isLoading && movieList.length === 0 && (
            <p className="text-white">No movies found</p>
          )}
          {isLoading ? (
            <Spinner />
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
