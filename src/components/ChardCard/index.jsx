import { useCharacterContext } from "./../../contexts/RickAndMortyContext";
import ParticleEffect from "../Particles";
import "./style.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function ChardCard() {
  const { characters, currentPage, totalPages, nextPage, previousPage } =
    useCharacterContext()
    
  const shouldShowCarousel = useMediaQuery({ maxWidth: 800 });

  let history = useHistory();
  const handleContent = () => {
    history.push("/");
  };

  const itemCard = ({ id, name, status, image }) => {
    return (
      <div key={id} className="carousel-image">
        {status === "Alive" ? (
          <li className="li-alive">
            <span className="text-card">{name}</span>
            <img src={image} alt={image} className="image"></img>
          </li>
        ) : (
          <li className="li-death">
            <span className="text-card">{name}</span>
            <img src={image} alt={image} className="image"></img>
          </li>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="content">
        <h1 onClick={handleContent} className="title" >Rick and Morty</h1>
        {shouldShowCarousel ? (
          <Carousel>
            {characters?.map(itemCard)}
          </Carousel>
        ) : (
          <ul className="Ul-Father">{characters?.map(itemCard)}</ul>
        )}
        <div className="button">
          <button onClick={previousPage} disabled={currentPage === 1}>
            Anterior
          </button>
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            Próxima
          </button>
        </div>
      </div>
      <ParticleEffect />
    </>
  );
}

export default ChardCard;
