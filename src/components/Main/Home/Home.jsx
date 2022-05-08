import React, { useContext } from "react";
import Pokelist from './Pokelist/Pokelist';
import { pokelistContext } from "../../../context/pokelist";
import { TextField } from '@mui/material';

const Home = () => {
  const {
    pokelist, setQueryValue } = useContext(pokelistContext);

  const inputHandler = (event) => {
    event.preventDefault();
    const pokemonToLookFor = event.target.value.toLowerCase()
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

    <TextField id="outlined-basic" label="Pokemon" variant="outlined" name="input" onChange={inputHandler} className="home__input" />

    <Pokelist />

  </div>;
};

export default Home;
