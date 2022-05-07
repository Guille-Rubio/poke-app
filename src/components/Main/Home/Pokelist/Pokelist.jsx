import React, { useContext } from "react";
import { pokelistContext } from "../../../../context/pokelist";
import Card from "../../Card/Card";
import { v4 as uuidv4 } from 'uuid';


const Pokelist = (props) => {

  const { pokelist } = useContext(pokelistContext)

  return (
    <div className="home__card-container">
      {pokelist.map((pokemon, i) => <Card value={pokemon} key={uuidv4()} index={i} />)}
    </div>
  )
};

export default Pokelist;


