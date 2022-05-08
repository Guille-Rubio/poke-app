import React, { useContext } from "react";
import { useForm } from 'react-hook-form';
import { pokelistContext } from "../../../context/pokelist";
import fetchData from "../../../hooks/fetchData";

const Form = () => {
  const { pokelist, addPokemon } = useContext(pokelistContext)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const defaultPreview = 'https://thumbs.dreamstime.com/b/sello-rojo-del-avance-95567456.jpg'

  const onSubmit = async data => {

    console.log(data)

    if (data.type1 === data.type2) {
      return alert("Both types are the same")
    }

    const pokemonExistsInApi = async () => {
      try {
        await fetchData(`https://pokeapi.co/api/v2/pokemon/${data.id}`)
        await fetchData(`https://pokeapi.co/api/v2/pokemon/${data.name}`)
        return true
      } catch (err) {
        return false
      }
    }

    const pokemonExistsInApp = () => {
      const pokelistFilteredById = pokelist.filter(pokemon => pokemon.id !== data.id);
      const pokelistFilteredByName = pokelist.filter(pokemon => pokemon.name !== data.name);
     
      const nameInUse = pokelistFilteredById.length !== pokelist.length;
      const idInUse = pokelistFilteredByName.length !== pokelist.length;
      
      return nameInUse || idInUse ? true : false
    }

    const dataInApi = await pokemonExistsInApi();
    const dataInApp = pokemonExistsInApp();

    if (dataInApi||dataInApp){
      alert("The id/name provided is already assigned to a pokemon")
      return
    }
    
    const pokemon = {
      name: data.name,
      id: data.id,
      types: [{
        type: { name: data.type1 }
      }, {
        type: { name: data.type2 }
      }],
      sprites: { other: { dream_world: { front_default: data.image } } }

    }

    addPokemon(pokemon)
    alert(`Your pokemon ${pokemon.name} has been saved`)


  };



  const preview = watch().image

  const types = ["Bug", "Dark", "Dragon", "Electric", "Fairy", "Fighting", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Steel", "Water"]

  return <div className="form">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form__input-box">
        <label htmlFor="">ID</label>
        <input {...register("id", { required: true, valueAsNumber: true })} type="number" name="id" />
        <p>{errors.id?.message}</p>
      </div>
      <div className="form__input-box">
        <label htmlFor="">Name</label>
        <input {...register("name", { required: true, minLength: { value: 3, message: "Pokemon's name must be 3 long at least." } })} type="text" name="name" />
        <p>{errors.name?.message}</p>
      </div>
      <div className="form__input-box">
        <label htmlFor="">Image URL</label>
        <input {...register("image", { required: true })} type="text" name="image" />
        <p>{errors.image?.message}</p>
      </div>


      <div className="form__input-box">
        <label htmlFor="">Type One</label>
        <select {...register("type1", { required: true, options: { types } })} name="type1">
          {/* {types.map(type => { <option value={type}>{type}</option> })}
           */}
          <option value="Bug">Bug</option>
          <option value="Dark">Dark</option>
          <option value="Dragon">Dragon</option>
          <option value="Electric">Electric</option>
          <option value="Fairy">Fairy</option>
          <option value="Fighting">Fighting</option>
          <option value="Fire">Fire</option>
          <option value="Flying">Flying</option>
          <option value="Ghost">Ghost</option>
          <option value="Grass">Grass</option>
          <option value="Ground">Ground</option>
          <option value="Ice">Ice</option>
          <option value="Normal">Normal</option>
          <option value="Poison">Poison</option>
          <option value="Psychic">Psychic</option>
          <option value="Rock">Rock</option>
          <option value="Steel">Steel</option>
          <option value="Water">Water</option>
        </select>
        <p>{errors.type1?.message}</p>
      </div>


      <div className="form__input-box">
        <label htmlFor="">Type Two (if applicable)</label>
        <select {...register("type2", { required: false })} type="text" name="type2" >
          {/*  {()=>{types.map(type=>{<><option>{type}</option></>})}} */}
          <option></option>
          <option value="Bug">Bug</option>
          <option value="Dark">Dark</option>
          <option value="Dragon">Dragon</option>
          <option value="Electric">Electric</option>
          <option value="Fairy">Fairy</option>
          <option value="Fighting">Fighting</option>
          <option value="Fire">Fire</option>
          <option value="Flying">Flying</option>
          <option value="Ghost">Ghost</option>
          <option value="Grass">Grass</option>
          <option value="Ground">Ground</option>
          <option value="Ice">Ice</option>
          <option value="Normal">Normal</option>
          <option value="Poison">Poison</option>
          <option value="Psychic">Psychic</option>
          <option value="Rock">Rock</option>
          <option value="Steel">Steel</option>
          <option value="Water">Water</option>
        </select>
      </div>
      <button type="submit">Añadir</button>
    </form>
    <div className="form__preview">
      <span>Vista previa</span>
      <img src={preview ? preview : defaultPreview} alt="vista previa"></img>
    </div>
  </div>;
};

export default Form;

