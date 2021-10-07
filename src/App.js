import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import NavBtn from './NavBtn';

function App() {
  return (
    <div className="App">
      <h1> Pokedex VQV</h1>
      <section className="content">
        <NavBtn dir='prev' />
        <Pokedex pokemons={pokemons} />
        <NavBtn dir='next' />
      </section>      
    </div>
  );
}

export default App;