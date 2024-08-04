function SearchBar({ onSearch }) {
  return (
    <div className="flex justify-center items-center mt-4 px-5">
      <input
        className="form-input px-5 py-2 min-w-full border-2 border-gray-300 rounded"
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBar; // Ensure this line is like this if you're importing as default
