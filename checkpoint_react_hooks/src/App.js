import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";

const initialMovies = [
  {
    id: 1,
    title: "Inception",
    description:
      "A thief who steals corporate secrets through dream-sharing technology gets a final chance to erase his criminal history.",
    posterURL:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80",
    rating: 5,
  },
  {
    id: 2,
    title: "The Queen's Gambit",
    description:
      "A gifted chess player rises through the competitive chess world while facing personal struggles.",
    posterURL:
      "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80",
    rating: 4,
  },
  {
    id: 3,
    title: "Interstellar",
    description:
      "A team of explorers travels through a wormhole in space to secure humanity's future.",
    posterURL:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    rating: 5,
  },
];

const emptyMovie = {
  title: "",
  description: "",
  posterURL: "",
  rating: 1,
};

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filters, setFilters] = useState({ title: "", rating: 0 });
  const [newMovie, setNewMovie] = useState(emptyMovie);

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(filters.title.toLowerCase().trim());
    const matchesRating = Number(movie.rating) >= Number(filters.rating);

    return matchesTitle && matchesRating;
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;

    setFilters((currentFilters) => ({
      ...currentFilters,
      [name]: value,
    }));
  };

  const handleMovieChange = (event) => {
    const { name, value } = event.target;

    setNewMovie((currentMovie) => ({
      ...currentMovie,
      [name]: name === "rating" ? Number(value) : value,
    }));
  };

  const handleAddMovie = (event) => {
    event.preventDefault();

    if (!newMovie.title.trim() || !newMovie.description.trim()) {
      return;
    }

    const movieToAdd = {
      ...newMovie,
      id: Date.now(),
      posterURL:
        newMovie.posterURL.trim() ||
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
    };

    setMovies((currentMovies) => [movieToAdd, ...currentMovies]);
    setNewMovie(emptyMovie);
  };

  return (
    <main className="app">
      <section className="app-header">
        <p className="eyebrow">React Hooks Checkpoint</p>
        <h1>Favorite Movies & TV Shows</h1>
      </section>

      <section className="controls">
        <Filter filters={filters} onFilterChange={handleFilterChange} />

        <form className="movie-form" onSubmit={handleAddMovie}>
          <h2>Add a Movie</h2>

          <label>
            Title
            <input
              type="text"
              name="title"
              value={newMovie.title}
              onChange={handleMovieChange}
              placeholder="Movie or TV show title"
            />
          </label>

          <label>
            Description
            <textarea
              name="description"
              value={newMovie.description}
              onChange={handleMovieChange}
              placeholder="Short description"
              rows="4"
            />
          </label>

          <label>
            Poster URL
            <input
              type="url"
              name="posterURL"
              value={newMovie.posterURL}
              onChange={handleMovieChange}
              placeholder="https://example.com/poster.jpg"
            />
          </label>

          <label>
            Rating
            <select
              name="rating"
              value={newMovie.rating}
              onChange={handleMovieChange}
            >
              <option value="1">1 star</option>
              <option value="2">2 stars</option>
              <option value="3">3 stars</option>
              <option value="4">4 stars</option>
              <option value="5">5 stars</option>
            </select>
          </label>

          <button type="submit">Add Movie</button>
        </form>
      </section>

      <MovieList movies={filteredMovies} />
    </main>
  );
}

export default App;
