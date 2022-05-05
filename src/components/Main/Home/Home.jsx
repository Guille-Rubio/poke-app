import React, { useState, useEffect } from "react";
import Card from '../Card/Card';
import fetchData from '../../../hooks/fetchData';
import { useDebounce } from 'use-debounce';
import { v4 as uuidv4 } from 'uuid';


const Home = () => {

  const [pokelist, setPokelist] = useState([]);
  const [input, setInput] = useState("");
  const [value] = useDebounce(input, 3000);

  useEffect(() => {
    if (value !== "") {
      const filtered = pokelist.filter(pokemon => pokemon.name !== value)
      if (filtered.length === pokelist.length) {
        (async () => {
          setPokelist([...pokelist, await fetchData(`https://pokeapi.co/api/v2/pokemon/${value}`)])
        })()
      }
    }
  }, [value])


  const inputHandler = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  }


  return <div className="home">
    <h1>Poke App</h1>
    <input type="text" name="input" placeholder="Type your liked pokemon here" onChange={inputHandler} className="home__input" />
    <p>input: {input} </p>
    <p>value:{value}</p>

    <div className="home__card-container">
      {pokelist.map(pokemon => <Card value={pokemon} key={uuidv4()} />)}
    </div>

  </div>;
};

export default Home;
