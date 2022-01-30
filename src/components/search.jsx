import React from "react";

const Search = ({ onSubmit, onChange, location }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-nowrap justify-center w-full s:w-full m-2"
    >
      <input
        type="search"
        value={location}
        onChange={onChange}
        className="py-1 px-3 border rounded w-1/2"
      />
      <button
        type="submit"
        className="bg-blue-400 hover:bg-blue-600 py-1 px-3 rounded text-white"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
