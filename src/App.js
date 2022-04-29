import "./App.css"
import { Header } from "./components/Header";
import { PokemonList } from "./components/PokemonList";
import Search from "./components/Search";


function App() {

  return (
      <div className="App">
        <Header />
        <Search />
        <PokemonList />
      </div>
  );
}

export default App;
