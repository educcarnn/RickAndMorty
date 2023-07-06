import React from 'react';
import { useCharacterContext } from './../../contexts/RickAndMortyContext';
import "./style.css"

function ChardCard() {
  const { characters, currentPage, totalPages, nextPage, previousPage } = useCharacterContext();

  const itemCard = ({ id, name, status, image }) => {
    return (
      <div key={id}>
        {status === 'Alive' ? (
          <li className='li-Alive'>
            <span>{name}</span>
            <img src={image} alt={image} className='image'></img>
          </li>
        ) : (
          <li className='li-Death'>
            <span>{name}</span>
            <img src={image} alt={image} className='image'></img>
          </li>
        )}
      </div>
    );
  };

  return (
    <>
      <h1 className="title">Meus personagens</h1>
      <ul className="Ul-Father">{characters?.map(itemCard)}</ul>
      <div>
        <button onClick={previousPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Próxima
        </button>
      </div>
    </>
  );
}

export default ChardCard;