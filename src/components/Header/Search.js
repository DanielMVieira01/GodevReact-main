import React from "react";
const Search = () => {
  return (
    <div className="search-container">
      <a className="search-btn" href="#">
        <i className="fas fa-search search"></i>
      </a>
      <input type="text" className="input" name="searchBox" placeholder="Pesquisar Produtos" />
    </div>
  );
}

export default Search;
