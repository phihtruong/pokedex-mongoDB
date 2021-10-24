import React from 'react';

const PokemonListEntry = ({ pokemon }) => (
  <tr>
    <td> { pokemon.name } </td>
    <td> <img src={ pokemon.img } /> </td>
    <td> { pokemon.type } </td>
  </tr>
);

export default PokemonListEntry;