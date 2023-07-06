// Context.js
import React, { createContext, useState,  useContext, useEffect } from 'react';

const CharacterContext = createContext();

export function CharacterProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
      const data = await response.json();
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <CharacterContext.Provider value={{characters, currentPage, totalPages, nextPage, previousPage}}>
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacterContext() {
  return useContext(CharacterContext);
}

