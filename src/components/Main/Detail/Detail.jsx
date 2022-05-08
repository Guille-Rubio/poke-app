import React, { useEffect, useState,useContext } from "react";
import { useParams, Link } from "react-router-dom";
import fetchData from "../../../hooks/fetchData";
import seed from "../../../assets/seed.json";
import { v4 as uuidv4 } from 'uuid';
import { pokelistContext } from "../../../context/pokelist";


const Detail = (props) => {
  const params = useParams();// Recoge los params del router
  const [id] = useState(params.id);
  const [pokemon, setPokemon] = useState(seed[0])
  const image_not_av = 'https://thumbs.dreamstime.com/b/not-available-red-rubber-stamp-over-white-background-87242466.jpg';
  const {pokelist} = useContext(pokelistContext);
  

  useEffect(() => {
    async function changePokemonToShow() {
      try {
        setPokemon(await fetchData(`https://pokeapi.co/api/v2/pokemon/${id}`))
      } catch (err) {
        console.log(err);
        const pokemonDetails = pokelist.filter(details => details.id=== id)
        setPokemon(pokemonDetails); 
      }
    }
    changePokemonToShow();
    // eslint-disable-next-line
  }, [])

  const { name, abilities, base_experience, forms, game_indices, height, held_items, is_default, location_area_encounters, moves, order, sprites, stats, types, weight } = pokemon;

  return (pokemon ? <div className="detail">
    <h1>Vista detalle</h1>
    <p>{name}</p>
    <p>#{id}</p>
    <div>
      <img className='mainSprite' src={sprites.other.dream_world.front_default || image_not_av} alt={`${pokemon.name} male`}></img>
      <img className='mainSprite' src={sprites.other.dream_world.front_female || image_not_av} alt={`${pokemon.name} female`} />
      <p>Type: {types[0].type.name}</p>
      <p>Type 2: {types[1] ? types[1].type.name : "No type 2"}</p>
    </div>
    <div>
      <h2>General details</h2>
      <p>base experience: {base_experience}</p>
      <p>height: {height}</p>
      <p>is default{is_default}</p>
      <p>location area encounters {location_area_encounters}</p>
      <p>order:{order}</p>
      <p>weight: {weight}</p>
    </div>

    <div>
      <h2>Abilities</h2>
      {abilities.map(ability => <p key={uuidv4()}>{ability.ability.name}</p>)}
    </div>

    <div>
      <h2>forms</h2>
      {forms.map((form, i) => <Link to={{ pathname: form.url }} key={uuidv4()}>{form.name}</Link>)}
    </div>
    <div>
      <h2>game index</h2>
      {// eslint-disable-next-line
        game_indices.map((index, i) => {
          <p key={uuidv4()}>version: {index.version.name}</p>
        })}
    </div>
    <div>
      <h2>Moves</h2>
      <ul className='details__moves'>
        {moves.map((move, i) => <li className='details__moves__p' key={uuidv4()}>{move.move.name}</li>)}
      </ul>
    </div>
    <div>
      <h2>Species</h2>
    </div>
    <div>
      <h2>Sprites</h2>
      <img className="sprite" src={sprites.front_default || image_not_av} alt={`front_default ${pokemon.name}`} />
      <img className="sprite" src={sprites.front_female || image_not_av} alt={`front_female ${pokemon.name}`} />
      <img className="sprite" src={sprites.front_shiny || image_not_av} alt={`front_shiny ${pokemon.name}`} />
      <img className="sprite" src={sprites.front_shiny_female || image_not_av} alt={`front_shiny_female ${pokemon.name}`} />
      <img className="sprite" src={sprites.back_default || image_not_av} alt={`back_default ${pokemon.name}`} />
      <img className="sprite" src={sprites.back_female || image_not_av} alt={`back_female ${pokemon.name}`} />
      <img className="sprite" src={sprites.back_shiny || image_not_av} alt={`back_shiny ${pokemon.name}`} />
      <img className="sprite" src={sprites.back_shiny_female || image_not_av} alt={`back_shiny_female ${pokemon.name}`} />
     
    </div>
    <div>
      <h2>Stats</h2>
      {// eslint-disable-next-line
        stats.map(stat => {
          <>
            <p key={uuidv4()}>{stat.base_stat}</p>
            <p key={uuidv4()}>{stat.effort}</p>
            <p key={uuidv4()}>{stat.stat.name}</p>
          </>
        })}
    </div>
    <div>
      <h2>held items</h2>
      {// eslint-disable-next-line
        held_items.map(item => { <p key={uuidv4()}>{item}</p> })}
    </div>













  </div> : "");
};

export default Detail;
