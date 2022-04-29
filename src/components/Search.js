import React from "react";

const Search = () => {
  return (
    <>
      <div className="container-input">
        <input className="search" type="text" placeholder="Buscar" />
        <button>
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
    </>
  );
};

export default Search;
