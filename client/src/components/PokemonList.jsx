import React from 'react';
import PokemonListEntry from './PokemonListEntry.jsx';

const PokemonList = ({ pokemons, type, handleSubmitNameChange, handleDelete }) => {

  const filterType = () => {
    return pokemons.filter(pokemon => pokemon.type === type)
  }

  let render;
  if (type === 'Sort by Type') {
    render = <tbody>
      {pokemons.map((pokemon, i) =>
        <PokemonListEntry
          pokemon={pokemon}
          key={i}
          handleSubmitNameChange={handleSubmitNameChange}
          handleDelete={handleDelete}
        />
      )}
    </tbody>
  } else if (pokemons.length) {
    render = <tbody>
      {filterType().map((pokemon, i) =>
        <PokemonListEntry
          pokemon={pokemon}
          key={i}
          handleSubmitNameChange={handleSubmitNameChange}
          handleDelete={handleDelete}
        />
      )}
    </tbody>
  }

  return (
    <div>
      <style>{`
        table, td{
        border: 2px solid black;
        border-collapse: collapse;
        }
        table {
          width: 400px;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Image</td>
            <td>Type</td>
          </tr>
        </thead>
        {render}
      </table>
    </div>
  )
};

export default PokemonList;