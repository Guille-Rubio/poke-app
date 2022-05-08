/* import './App.css'; */
import '../src/styles/styles.scss';
import { BrowserRouter, } from 'react-router-dom';
import { pokelistContext } from './context/pokelist';
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import fetchData from './hooks/fetchData';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


function App() {

  const [pokelist, setPokelist] = useState([]);
  const [queryValue, setQueryValue] = useState("");
  const [apiQuery] = useDebounce(queryValue, 2000);

  const addPokemon = (newPokemon) => {
    setPokelist([...pokelist, newPokemon]);
  }


  const removePokemon = (pokemon) => {
    console.log("should delete pokemon from list")

  }

  const setPokemonToLookFor = (event) => {
    event.preventDefault();
    setQueryValue(event.target.value);
  }

  useEffect(() => {
    if (apiQuery !== "") {
      const filtered = pokelist.filter(pokemon => pokemon.name !== apiQuery)
      if (filtered.length === pokelist.length) {
        (async () => {
          setPokelist([...pokelist, await fetchData(`https://pokeapi.co/api/v2/pokemon/${apiQuery}`)])
        })()
      }
    }
  }, [apiQuery, pokelist]
  )


  const data = {
    pokelist,
    setPokelist,
    queryValue,
    setQueryValue,
    addPokemon,
    removePokemon,
    setPokemonToLookFor,
  }



  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <pokelistContext.Provider value={data}>
          <Main />
        </pokelistContext.Provider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
