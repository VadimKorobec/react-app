const Search = ({ value, onSearch }) => {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />
        <input
          type="text"
          placeholder="Search through thousends of movies"
          value={value}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
