import React from 'react';

const PokemonListEntry = ({ pokemon, handleSubmitNameChange, handleDelete }) => {


  const toggleNameChangeInput = (e) => {
    let oldName = e.target.innerText;
    let newName = prompt('enter new name');
    handleSubmitNameChange(oldName, newName);
  }

  return (
    <tr>
      <td> <div onClick={toggleNameChangeInput}> { pokemon.name } </div></td>
      <td> <img src={ pokemon.img } /> </td>
      <td> { pokemon.type } </td>
      <td> <button onClick={() => handleDelete(pokemon.name)}>Delete</button></td>
    </tr>
  )
};

export default PokemonListEntry;