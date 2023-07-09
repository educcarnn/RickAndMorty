import { CharacterProvider } from "./contexts/RickAndMortyContext";
import ChardCard from "./components/ChardCard";




function App() {
  return (
    <div >
       
      <CharacterProvider>
        <ChardCard />
      </CharacterProvider>
    
    </div>
  );
}

export default App;
