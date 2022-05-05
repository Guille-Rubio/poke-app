import React, { useEffect } from "react";


const Card = (props) => {

  useEffect(() => {

    console.log("hello")
    console.log(props.value)
  }
  )

  const { name, order } = props.value
  const image = props.value.sprites.other.dream_world.front_default
  const type_1 = props.value.types[0]["type"]["name"] || "";
  const type_2 = props.value.types[1]?props.value.types[1]["type"]["name"]:"";

 


  return <div className="card">

    <h2>{name}</h2>
    <img src={image} alt="Pokemon" />
    <p>#{order}</p>
    <p>type: {type_1}</p>
    <p>type: {type_2}</p>
    <button>View detail</button>

  </div>;
};

export default Card;
