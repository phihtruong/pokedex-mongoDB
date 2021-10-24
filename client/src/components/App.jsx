import React from 'react';
import axios from 'axios';
import PokemonList from './PokemonList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      type: 'Sort by Type'
    };

    this.getPokemons = this.getPokemons.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSubmitNameChange = this.handleSubmitNameChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.getPokemons();
  }

  handleTypeChange(e) {
    let newType = e.target.value;
    console.log(newType);
    this.setState({
      type: newType
    });
  }

  getPokemons() {
    axios.get('/get')
      .then(results => {
        console.log('returned from axios get: ', results.data);
        this.setState({
          pokemonList: results.data
        })
      })
      .catch(err => console.error(err));
  }

  handleSubmitNameChange(oldName, newName) {
    axios.put('/update', { oldName, newName })
      .then(() => this.getPokemons())
      .catch(err => console.error(err));
  }

  handleDelete(name) {
    axios.delete('/delete', { data: { name }})
      .then(() => this.getPokemons())
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <div>
          <h1>Pokemon!</h1>
          <h3>Number of pokemons in Pokedex: {this.state.pokemonList.length}</h3>
          <button value="Sort by Type" onClick={this.handleTypeChange}>Show All</button>
          <select id="type" value={this.state.type} onChange={this.handleTypeChange}>
            <option disabled>{this.state.type}</option>
            <option value="Grass" >Grass</option>
            <option value="Fire" >Fire</option>
            <option value="Water" >Water</option>
            <option value="Normal" >Normal</option>
            <option value="Poison" >Poison</option>
            <option value="Electric" >Electric</option>
            <option value="Ground" >Ground</option>
            <option value="Fighting" >Fighting</option>
            <option value="Psychic" >Psychic</option>
            <option value="Rock" >Rock</option>
            <option value="Ghost" >Ghost</option>
            <option value="Dragon" >Dragon</option>
          </select>
          <button>INSERT</button>
          <div>
            <PokemonList
              pokemons={this.state.pokemonList}
              type={this.state.type}
              handleSubmitNameChange={this.handleSubmitNameChange}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;