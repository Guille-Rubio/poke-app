import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Form from './Form/Form';
import Detail from './Detail';
import Search from './Search/Search';

const Main = () => {
  return <div>
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Form />} path='/new' />
      <Route element={<Detail />} exact path='/pokemon/:id' />
      <Route element={<Search />} path='/search' />
    </Routes>
  </div>;
};

export default Main;
