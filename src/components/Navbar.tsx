import React from "react";
import Home from "../assets/logo-home.png";
import Noticacao from "../assets/logo-notificacao.png";
import Assinatura from "../assets/logo-assinatura.png";
import Favoritos from "../assets/logo-favoritos.png";
import Usuario from "../assets/logo-usuario.png";
import Button from "../assets/button.png";

function Navbar() {
  return (
    <div className="container-navbar">
      <div className="name-usuario">
        <button> He</button>
        <h2>Herbert Carnaúba</h2>
      </div>
      <div className="opcoes-usuario">
        <div className="container-usuarios">
          <img src={Home} alt="Home" />
          <h3>Página Inicial</h3>
        </div>
        <div className="container-usuarios">
          <img src={Noticacao} alt="Noticacao" />
          <h3>Notificações</h3>
        </div>
        <div className="container-usuarios">
          <img src={Assinatura} alt="Assinatura" className="assinatura" />
          <h3>Assinaturas</h3>
        </div>
        <div className="container-usuarios">
          <img src={Favoritos} alt="Favoritos" />
          <h3>Favoritos</h3>
        </div>
        <div className="container-usuarios">
          <img src={Favoritos} alt="Favoritos" />
        </div>
        <div className="container-usuarios">
          <img src={Usuario} alt="Usuario" />
          <h3>Meu pefil</h3>
        </div>
      </div>
      <div className="container-button">
        <a href="/feed">
          <button>
            <img src={Button} alt="button-logo" />
            Nova Publicação
          </button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
