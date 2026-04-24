function Filter({ filters, onFilterChange }) {
  return (
    <form className="filter-panel">
      <h2>Filter</h2>

      <label>
        Title
        <input
          type="search"
          name="title"
          value={filters.title}
          onChange={onFilterChange}
          placeholder="Search by title"
        />
      </label>

      <label>
        Minimum rating
        <select
          name="rating"
          value={filters.rating}
          onChange={onFilterChange}
        >
          <option value="0">All ratings</option>
          <option value="1">1 star and up</option>
          <option value="2">2 stars and up</option>
          <option value="3">3 stars and up</option>
          <option value="4">4 stars and up</option>
          <option value="5">5 stars only</option>
        </select>
      </label>
    </form>
  );
}

export default Filter;
