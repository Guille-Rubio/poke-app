import React, { useState, useRef } from "react";



const Form = () => {

  const [newPokemon, setNewPokemon] = useState({});
  const name = React.createRef()

  //guardar pokemon en pokelist. Primero guardar pokemon


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("event", event.target)
    const {id, name, image, type1, type2} = event.target
    setNewPokemon({newPokemon:{
      id:id.value,
      name:name.value,
      image:image.value,
      type1:type1.value,
      type2:type2.value

    }})

  }



  return <div className="form">
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">ID</label>
        <input type="text" name="id"/>
      </div>
      <div>
        <label htmlFor="">Name</label>
        <input type="text" name="name"/>
      </div>
      <div>
        <label htmlFor="">Image URL</label>
        <input type="text" name="image" />
      </div>
      <div>
        <label htmlFor="">Type One</label>
        <input type="text" name="type1"/>
      </div>
      <div>
        <label htmlFor="">Type Two (if applicable)</label>
      </div>
      <input type="text" name="type2"/>
      <button type="submit">Añadir</button>
    </form>
    <div className="form__preview">
      <span>Vista previa</span>
      <img src="https://m.media-amazon.com/images/I/51qwyXpJNHL._AC_SL1000_.jpg" alt="vista previa"></img>
    </div>
  </div>;
};

export default Form;
