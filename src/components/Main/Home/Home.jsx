import React from "react";
import Card from '../Card/Card';

const Home = () => {
  return <div className="home">
    <h1>Poke App</h1>

    <input type="text" placeholder="Type your liked pokemon here" className="home__input" />

    <div className="home__card-container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>

  </div>;
};

export default Home;
