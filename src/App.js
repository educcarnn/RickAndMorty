import { CharacterProvider } from "./contexts/RickAndMortyContext";
import "./App.css"

import Routes from "./routes";
function App() {
  return (
    <div className="App">
      <CharacterProvider>
        <Routes />
      </CharacterProvider>
    </div>
  );
}

export default App;
