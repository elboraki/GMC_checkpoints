import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link className="movie-card-link" to={`/movie/${movie.id}`}>
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
    </Link>
  );
}

export default MovieCard;
