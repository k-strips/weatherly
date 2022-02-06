import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = ({ onSubmit, onChange, location }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-nowrap justify-center w-full s:w-full m-2 space-x-2"
    >
      <input
        type="search"
        value={location}
        onChange={onChange}
        className="py-1 px-3 border rounded-md w-1/2 focus:outline-none focus:shadow-lg"
      />
      <button
        type="submit"
        className="bg-blue-400 hover:bg-blue-600 py-1 px-3 rounded-md text-white hover:shadow-lg"
      >
        <BsSearch />
      </button>
    </form>
  );
};

export default Search;
