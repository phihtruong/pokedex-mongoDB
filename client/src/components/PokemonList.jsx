import React from 'react';
import PokemonListEntry from './PokemonListEntry.jsx';

const PokemonList = ({ pokemons }) => (
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
      <tbody>
        {pokemons.map((pokemon, i) => <PokemonListEntry pokemon={pokemon} key={i} /> )}
      </tbody>
    </table>
  </div>
);

export default PokemonList;