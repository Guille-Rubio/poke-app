import React, { useState } from "react";
import { Link } from 'react-router-dom';
import burger from '../../../assets/img/burger.png'

const Nav = () => {
  let [visible, setVisible] = useState("hidden")

  const open = () => {
    visible === "visible" ? setVisible("hidden") : setVisible("visible")
    
  }

  return <nav className="nav">
    <img src={burger} alt="burger menu" onClick={open} className="nav__burger"/>
    <div className="nav__link-container"></div>

    <Link to="/" className={`nav__link ${visible}`}>Home</Link>
    <Link to="/new" className={`nav__link ${visible}`}>New Pokemon</Link>
    <Link to="/search" className={`nav__link ${visible}`}>Search</Link>

  </nav>;
};

export default Nav;
