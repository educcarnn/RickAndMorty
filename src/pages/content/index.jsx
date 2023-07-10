import { useHistory } from "react-router-dom";
import rickandmorty from "../../assets/imgs/rickandmorty.png";
import "./index.css";
import ParticleEffect from "../../components/Particles";
import Typewriter from "typewriter-effect";

export default function Content() {
  let history = useHistory();
  const handleHome = () => {
    history.push("/rickandmorty");
  };

  return (
    <div className="contentApp">
      <div className="titleContent">Rick and Morty</div>
    
      <div className="textContent">
      <img src={rickandmorty} alt={rickandmorty} className="imageContent" />
          <button onClick={handleHome} className="buttonContent">
            Ação
          </button>
        </div>
        <div className="my-typewriter">
          <Typewriter
             
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Rick and Morty se tornou um fenômeno cultural que conquistou milhões"
                )
                .pauseFor(1000)
                .deleteAll()
                .typeString("Seja bem-vindo! Começe a ação")
                .start();
            }}
          />
      </div>
      <p className="copyright">Desenvolvido por &copy; Eduardo Carneiro</p>
      <ParticleEffect />
    </div>
  );
}
