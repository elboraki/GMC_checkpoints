import { Link, useParams } from "react-router-dom";

function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies.find((currentMovie) => currentMovie.id === Number(id));

  if (!movie) {
    return (
      <main className="details-page">
        <div className="details-card">
          <h1>Movie not found</h1>
          <p>The movie you selected does not exist in the current list.</p>
          <Link className="back-link" to="/">
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="details-page">
      <article className="details-card">
        <Link className="back-link" to="/">
          Back to home
        </Link>

        <div className="details-layout">
          <img className="details-poster" src={movie.posterURL} alt={`${movie.title} poster`} />

          <div className="details-content">
            <p className="eyebrow">Movie Details</p>
            <h1>{movie.title}</h1>
            <p className="details-rating">Rating: {movie.rating}/5</p>
            <p className="details-description">{movie.description}</p>

            <div className="trailer-frame">
              <iframe
                src={movie.trailerLink}
                title={`${movie.title} trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default MovieDetails;
