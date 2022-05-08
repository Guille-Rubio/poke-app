import React, { useContext } from "react";
import { pokelistContext } from "../../../context/pokelist";
import { Link } from 'react-router-dom';


const Card = (props) => {

  const { removePokemon } = useContext(pokelistContext)

  const { name, id } = props.value
  const image = props.value.sprites.other.dream_world.front_default || props.image
  const type_1 = props.value.types[0]["type"]["name"] || "";
  const type_2 = props.value.types[1] ? props.value.types[1]["type"]["name"] : "";

  return <div className="card">

    <h2><Link to={`/pokemon/${id}`}>{name}</Link></h2>
    <img src={image} alt="Pokemon" />
    <p>#{id}</p>
    <p>type: {type_1}</p>
    <p>type: {type_2}</p>

    <button onClick={() => removePokemon}>Remove</button>

  </div>;
};

export default Card;
