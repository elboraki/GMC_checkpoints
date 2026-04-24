function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <img src={movie.posterURL} alt={`${movie.title} poster`} />

      <div className="movie-content">
        <div className="movie-heading">
          <h3>{movie.title}</h3>
          <span>{movie.rating}/5</span>
        </div>

        <p>{movie.description}</p>
      </div>
    </article>
  );
}

export default MovieCard;
