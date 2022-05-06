import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../../../hooks/fetchData";
import seed from "../../../assets/seed.json";

const Detail = (props) => {
  const params = useParams();
  const [id] = useState(params.id);
  const [pokemon, setPokemon] = useState(seed[0])


  console.log(id);
  console.log("pokemon", pokemon)

  useEffect(() => {
    async function changePokemonToShow() {
      setPokemon(await fetchData(`https://pokeapi.co/api/v2/pokemon/${id}`));
    }
    changePokemonToShow()
  } //Se declara e invoca la función dentro del useEffect porque no permite que el primer argumento devuelva una promesa

    , [id]
  )


 
  const sprite = pokemon.sprites.other.dream_world.front_default

  return <div className="detail">
    <div>
      <h1>{pokemon.name}</h1>
      <p># {pokemon.order}</p>
      <img src={sprite} alt="Pokemon" />
    </div>
    <div>
      <h2>Basic information</h2>
      <p>Weight:{pokemon.weight}</p>
      <p>height:{pokemon.height}</p>
      <p>Tipo 1:</p>
      <p>Tipo 2:</p>
      <p>Desplegable ver mas</p>
    </div>
    <div>
      <h2>Forms</h2>
      


    </div>
   





  </div>;
};

export default Detail;
