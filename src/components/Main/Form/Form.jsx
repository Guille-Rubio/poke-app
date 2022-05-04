import React from "react";

const Form = () => {
  return <div className="form">
    <form action="">
      <div>
        <label htmlFor="">ID</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Name</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Image URL</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Type One</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Type Two (if applicable)</label>
      </div>
      <input type="text" />
      <button type="submit">Añadir</button>
    </form>
    <div className="form__preview">
      <span>Vista previa</span>
      <img src="https://m.media-amazon.com/images/I/51qwyXpJNHL._AC_SL1000_.jpg" alt="vista previa"></img>
    </div>
  </div>;
};

export default Form;
