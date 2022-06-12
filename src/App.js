
import { useState } from 'react';
import { useEffect } from 'react';
import ChardCard from './components/ChardCard';
import './App.css';

function App() {
  const [characters, setCharacters] = useState()

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/`)
      .then((response) => response.json())
      .then((response) => setCharacters(response))
      .catch((err) => console.log(err));
  }, [characters]);


  return (
    <div className="App">
      <header className="App-header">
          <ChardCard characters={characters}/>
      </header>
    </div>
  );
}

export default App;
