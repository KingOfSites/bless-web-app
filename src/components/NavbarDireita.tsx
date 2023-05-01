import React from "react";
import Lupa from "../assets/lupa.png";
import Reload from "../assets/recarragar.png";
import cardCriador from "../assets/cardCriador.png";

function NavbarDireita() {
  return (
    <div className="container-navDireita">
      <div className="pesquisar">
        <button>
          Pesquisar criadores
          <img src={Lupa} alt="Lupa" />
        </button>
      </div>
      <div className="sugestao-reload">
        <div className="sugestao">
          <h3>Sugestões</h3>
        </div>
        <div className="relaod">
          <img src={Reload} alt="" />
        </div>
      </div>
      <div className="criador-card">
        <div className="card">
          <img src={cardCriador} alt="cardCriador" />
        </div>
        <div className="card">
          <img src={cardCriador} alt="cardCriador" className="card-none" />
        </div>
        <div className="card">
          <img src={cardCriador} alt="cardCriador" className="card-none" />
        </div>
      </div>
    </div>
  );
}

export default NavbarDireita;
