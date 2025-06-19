const MovieCard = ({ movie }) => {
  const { title, vote_average, poster_path, release_date, original_language } =
    movie;

  return (
    <li className="movie-card">
      <img
        src={
          poster_path
            ? `http://image.tmdb.org/t/p/w500/${poster_path}`
            : "/no-movie.png"
        }
        alt={title}
      />
      <div className="mt-4">
        <h3>{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : "NN"}</p>
          </div>
        </div>
        <p className="lang"> Original language: {original_language}</p>
        <p className="year">
          {release_date ? release_date.split("-")[0] : "N/A"}
        </p>
      </div>
    </li>
  );
};

export default MovieCard;
