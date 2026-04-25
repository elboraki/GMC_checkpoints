import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Filter from "./components/Filter";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";

const initialMovies = [
  {
    id: 1,
    title: "Inception",
    description:
      "Dom Cobb is offered a final chance at redemption if he can plant an idea inside a target's mind. The mission pulls his team into layers of dreams where memory, guilt, and time all bend against them.",
    posterURL:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    id: 2,
    title: "The Queen's Gambit",
    description:
      "Beth Harmon discovers an extraordinary talent for chess and rises through the ranks with fearless precision. Her success is shadowed by loneliness, addiction, and the pressure of proving herself in a hostile world.",
    posterURL:
      "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80",
    rating: 4,
    trailerLink: "https://www.youtube.com/embed/CDrieqwSdgI",
  },
  {
    id: 3,
    title: "Interstellar",
    description:
      "As Earth becomes less livable, Cooper joins a desperate space mission to find a new home for humanity. The journey across galaxies turns into a deeply personal story about time, sacrifice, and love.",
    posterURL:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    trailerLink: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
];

const emptyMovie = {
  title: "",
  description: "",
  posterURL: "",
  rating: 1,
  trailerLink: "",
};

function HomePage({ movies, filters, newMovie, onFilterChange, onMovieChange, onAddMovie }) {
  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(filters.title.toLowerCase().trim());
    const matchesRating = Number(movie.rating) >= Number(filters.rating);

    return matchesTitle && matchesRating;
  });

  return (
    <main className="app">
      <section className="app-header">
        <p className="eyebrow">React Router Checkpoint</p>
        <h1>Favorite Movies & TV Shows</h1>
      </section>

      <section className="controls">
        <Filter filters={filters} onFilterChange={onFilterChange} />

        <form className="movie-form" onSubmit={onAddMovie}>
          <h2>Add a Movie</h2>

          <label>
            Title
            <input
              type="text"
              name="title"
              value={newMovie.title}
              onChange={onMovieChange}
              placeholder="Movie or TV show title"
            />
          </label>

          <label>
            Description
            <textarea
              name="description"
              value={newMovie.description}
              onChange={onMovieChange}
              placeholder="Movie description"
              rows="4"
            />
          </label>

          <label>
            Poster URL
            <input
              type="url"
              name="posterURL"
              value={newMovie.posterURL}
              onChange={onMovieChange}
              placeholder="https://example.com/poster.jpg"
            />
          </label>

          <label>
            Trailer embed link
            <input
              type="url"
              name="trailerLink"
              value={newMovie.trailerLink}
              onChange={onMovieChange}
              placeholder="https://www.youtube.com/embed/..."
            />
          </label>

          <label>
            Rating
            <select
              name="rating"
              value={newMovie.rating}
              onChange={onMovieChange}
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

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filters, setFilters] = useState({ title: "", rating: 0 });
  const [newMovie, setNewMovie] = useState(emptyMovie);

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
      trailerLink:
        newMovie.trailerLink.trim() || "https://www.youtube.com/embed/dQw4w9WgXcQ",
    };

    setMovies((currentMovies) => [movieToAdd, ...currentMovies]);
    setNewMovie(emptyMovie);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            movies={movies}
            filters={filters}
            newMovie={newMovie}
            onFilterChange={handleFilterChange}
            onMovieChange={handleMovieChange}
            onAddMovie={handleAddMovie}
          />
        }
      />
      <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
    </Routes>
  );
}

export default App;
