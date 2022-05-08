import React, { useContext } from "react";
import { useForm } from 'react-hook-form';
import { pokelistContext } from "../../../context/pokelist";
import fetchData from "../../../hooks/fetchData";
import { TextField, Select, MenuItem, InputLabel } from "@mui/material";

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

    if (dataInApi || dataInApp) {
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
      <h1>Add a new pokemon to the pokelist</h1>

      <div className="form__preview">
        <img src={preview ? preview : defaultPreview} alt="vista previa"></img>
      </div>

      <div className="form__input-box">
        <TextField id="outlined-basic" label="id" variant="outlined" {...register("id", { required: true, valueAsNumber: true })} type="number" name="id" />
        <p>{errors.id?.message}</p>
      </div>

      <div className="form__input-box">
        <TextField id="outlined-basic" label="name" variant="outlined" {...register("name", { required: true, minLength: { value: 3, message: "Pokemon's name must be 3 long at least." } })} type="text" name="name" />
        <p>{errors.name?.message}</p>
      </div>

      <div className="form__input-box">
        <TextField id="outlined-basic" label="image URL" variant="outlined" {...register("image", { required: true })} type="text" name="image" />
        <p>{errors.image?.message}</p>
      </div>

      <div className="form__input-box">
      <InputLabel id="type1">Type 1</InputLabel>
        <Select labelId="type1" id="demo-simple-select" label="type 1" {...register("type1", { required: true, options: { types } })} name="type1">
          {/* {types.map(type => { <option value={type}>{type}</option> })}
           */}
          <MenuItem value="Bug">Bug</MenuItem>
          <MenuItem value="Dark">Dark</MenuItem>
          <MenuItem value="Dragon">Dragon</MenuItem>
          <MenuItem value="Electric">Electric</MenuItem>
          <MenuItem value="Fairy">Fairy</MenuItem>
          <MenuItem value="Fighting">Fighting</MenuItem>
          <MenuItem value="Fire">Fire</MenuItem>
          <MenuItem value="Flying">Flying</MenuItem>
          <MenuItem value="Ghost">Ghost</MenuItem>
          <MenuItem value="Grass">Grass</MenuItem>
          <MenuItem value="Ground">Ground</MenuItem>
          <MenuItem value="Ice">Ice</MenuItem>
          <MenuItem value="Normal">Normal</MenuItem>
          <MenuItem value="Poison">Poison</MenuItem>
          <MenuItem value="Psychic">Psychic</MenuItem>
          <MenuItem value="Rock">Rock</MenuItem>
          <MenuItem value="Steel">Steel</MenuItem>
          <MenuItem value="Water">Water</MenuItem>
        </Select>
        <p>{errors.type1?.message}</p>
      </div>

      <div className="form__input-box">
      <InputLabel id="type2">Type 2</InputLabel>
        <Select {...register("type2", { required: false })} type="text" name="type2" >
          {/*  {()=>{types.map(type=>{<><option>{type}</option></>})}} */}
          <MenuItem value=""></MenuItem>
          <MenuItem value="Bug">Bug</MenuItem>
          <MenuItem value="Dark">Dark</MenuItem>
          <MenuItem value="Dragon">Dragon</MenuItem>
          <MenuItem value="Electric">Electric</MenuItem>
          <MenuItem value="Fairy">Fairy</MenuItem>
          <MenuItem value="Fighting">Fighting</MenuItem>
          <MenuItem value="Fire">Fire</MenuItem>
          <MenuItem value="Flying">Flying</MenuItem>
          <MenuItem value="Ghost">Ghost</MenuItem>
          <MenuItem value="Grass">Grass</MenuItem>
          <MenuItem value="Ground">Ground</MenuItem>
          <MenuItem value="Ice">Ice</MenuItem>
          <MenuItem value="Normal">Normal</MenuItem>
          <MenuItem value="Poison">Poison</MenuItem>
          <MenuItem value="Psychic">Psychic</MenuItem>
          <MenuItem value="Rock">Rock</MenuItem>
          <MenuItem value="Steel">Steel</MenuItem>
          <MenuItem value="Water">Water</MenuItem>
        </Select>
      </div>
      <div className='form__button-container'>
        <button className="form__button" type="submit">Añadir</button>
      </div>
    </form>

  </div>;
};

export default Form;

