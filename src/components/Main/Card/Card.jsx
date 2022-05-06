import React, { useEffect } from "react";
import { Link } from 'react-router-dom';


const Card = (props) => {

  useEffect(() => {

    console.log(props.value)
  }
  )

  const { name, id } = props.value
  const image = props.value.sprites.other.dream_world.front_default
  const type_1 = props.value.types[0]["type"]["name"] || "";
  const type_2 = props.value.types[1] ? props.value.types[1]["type"]["name"] : "";




  return <div className="card">

    <h2>{name}</h2>
    <img src={image} alt="Pokemon" />
    <p>#{id}</p>
    <p>type: {type_1}</p>
    <p>type: {type_2}</p>
    <Link to={`/pokemon/${id}`}><button>View detail</button></Link>
    <button onClick={()=>console.log("Should remove card")}>Remove</button>

  </div>;
};

export default Card;
