import React from "react";

const Search = ({ onSubmit, onChange, location }) => {
  return (
    <div className="flex flex-row flex-nowrap">
      <form onSubmit={onSubmit}>
        <input type="search" value={location} onChange={onChange} />
        <button type="submit">search</button>
      </form>
    </div>
  );
};

export default Search;
