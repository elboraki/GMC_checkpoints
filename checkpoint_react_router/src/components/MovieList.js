import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  if (movies.length === 0) {
    return <p className="empty-state">No movies match your filters.</p>;
  }

  return (
    <section className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
}

export default MovieList;
