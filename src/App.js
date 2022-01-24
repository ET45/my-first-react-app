import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";
import Pokedata from "./components/Pokedata";

function App() {
  return (
    <div className="App">
      <main>
        <Title content="My Title" />
        {Pokedata.map((pokemon) => (
          <Pokemon
            name={pokemon.name}
            picture={pokemon.picture}
            weight={pokemon.weight}
            awesome={pokemon.awesome}
            terrifying={pokemon.terrifying}
            abilities={pokemon.abilities}
          />
        ))}
      </main>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Codaisseur
        </a>
        <p>Hello World</p>
        <p>Its cool</p>
      </header>
    </div>
  );
}

export default App;
