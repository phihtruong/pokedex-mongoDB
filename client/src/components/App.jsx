import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: []
    };

    this.getPokemons = this.getPokemons.bind(this);
  }

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons() {
    axios.get('/get')
      .then(results => {
        console.log('returned from axios get: ', results.data);
        this.setState({
          pokemonList: results.data
        })
      })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Pokemon!</h1>
          <h3>Number of pokemons in Pokedex: {this.state.pokemonList.length}</h3>
          <button>Show All</button>
          <select id="type">
            <option>Sort by Type</option>
            <option>Grass</option>
            <option>Fire</option>
            <option>Water</option>
            <option>Normal</option>
            <option>Poison</option>
            <option>Electric</option>
            <option>Ground</option>
            <option>Fighting</option>
            <option>Psychic</option>
            <option>Rock</option>
            <option>Ghost</option>
            <option>Dragon</option>
          </select>
          <button>INSERT</button>
          <div>
            <h3>Bulbasaur</h3>
            <img src="http://vignette4.wikia.nocookie.net/nintendo/images/4/43/Bulbasaur.png/revision/latest?cb=20141002083518&path-prefix=en" />
          </div>
          <div>
            <h3>Ivysaur</h3>
            <img src="http://vignette3.wikia.nocookie.net/nintendo/images/8/86/Ivysaur.png/revision/latest?cb=20141002083450&path-prefix=en" />
          </div>
          <div>
            <h3>Venusaur</h3>
            <img src="http://vignette2.wikia.nocookie.net/nintendo/images/b/be/Venusaur.png/revision/latest?cb=20141002083423&path-prefix=en" />
          </div>
        </div>
      </div>
    )
  }
}

export default App;