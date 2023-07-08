import { CharacterProvider } from "./contexts/RickAndMortyContext";
import ChardCard from "./components/ChardCard";
import "./App.css";



function App() {
  return (
    <div className="App-header">
       
      <CharacterProvider>
        <ChardCard />
      </CharacterProvider>
    
    </div>
  );
}

export default App;
