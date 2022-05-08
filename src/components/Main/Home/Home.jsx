import React, { useContext } from "react";
import Pokelist from './Pokelist/Pokelist';
import { pokelistContext } from "../../../context/pokelist";

const Home = () => {
  const {
    pokelist,setQueryValue } = useContext(pokelistContext);

  const inputHandler = (event) => {
    event.preventDefault();
    const pokemonToLookFor = event.target.value
    //check whether pokemon is in pokelist
    console.log(pokemonToLookFor)
    const filtered = pokelist.filter(pokemon => pokemon.name !== pokemonToLookFor && pokemon.id !== pokemonToLookFor)
    if (filtered.length === pokelist.length) {
      //buscar pokemon en API
      setQueryValue(pokemonToLookFor)
 
    }




  }

  return <div className="home">
    <h1>Poke App</h1>

    <input type="text" name="input" placeholder="Type your liked pokemon here" onChange={inputHandler} className="home__input" />

    <Pokelist />

  </div>;
};

export default Home;
