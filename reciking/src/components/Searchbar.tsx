const SearchBar = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="flex items-center justify-center space-x-2"
    >
      <input
        type="text"
        placeholder="검색할 월드컵을 입력해 주세요."
        className="input input-bordered w-full max-w-xs"
      />
      <button type="submit" className="btn btn-primary">
        <span className="material-icons-round">search</span>
      </button>
    </form>
  );
};

export default SearchBar;
