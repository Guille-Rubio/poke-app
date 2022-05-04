import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
  return <nav className="nav">
    <Link to="/" className="nav__link">Home</Link>
    <Link to="/new" className="nav__link">New Pokemon</Link>
    <Link to="/pokemon/:id" className="nav__link">Details</Link>
    <Link to="/search" className="nav__link">Search</Link>

  </nav>;
};

export default Nav;
