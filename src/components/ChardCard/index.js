import "./style.css";

function ChardCard({ characters }) {
  const itemCard = ({ id, name, status, image }) => {
    return (
      <div key={id}>
        {status === "Alive" ? (
          <>
            <li className="li-Alive">
              <span>{name}</span>
              <img src={image} Alt={image}></img>
            </li>
          </>
        ) : (
          <li className="li-Death">
            <span>{name}</span>
            <img src={image} Alt={image}></img>
          </li>
        )}
      </div>
    );
  };

  return (
    <>
      <h1>Meus personagens</h1>
      <ul className="Ul-Father">{characters?.results?.map(itemCard)}</ul>
    </>
  );
}
export default ChardCard;
