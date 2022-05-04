import React from "react";
import Card from '../Card/Card';

const Search = () => {
  return <div className="search">
    <h1>Search pokemon</h1>
    <form className="search__form">
      <input type="text" placeholder="look for a pokemon" />
      <button>Add to collection</button>
    </form>
    <section className="search__card-container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  </div>;
};

export default Search;
