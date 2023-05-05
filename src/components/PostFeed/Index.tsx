import React from "react";
import "./style.scss";
import Reload from "../../assets/recarragar.png";
import Baixar from "../../assets/logo-baixar.png";
import PostImagem from "../../assets/post-imagem.png";
import Curtida from "../../assets/curtida.png";
import Comentario from "../../assets/comentario.png";

function Post() {
  return (
    <div className="container-post">
      <div className="main-post">
        <div className="publi-post">
          <div className="h1">
            <h1>Feed</h1>
          </div>
          <div className="reload">
            <img src={Reload} alt="Reload" />
          </div>
        </div>
        <div className="nova-publi">
          <p>Criar nova publicação...</p>
        </div>
        <div className="baixar-publi">
          <img src={Baixar} alt="Baixar" />
        </div>
      </div>
      <div className="container-button">
        <div className="btn-div">
          <button className="button-feed">Fenimino</button>
          <button className="">Masculino </button>
          <button className="button-feed">LGBTAIA+</button>
        </div>
      </div>
      <div className="container-postagem">
        <div className="info-postagem">
          <div className="criador">
            <button></button>
            <h3>
              Criador nome <br />
              <span className="span-h3">@criador</span>
            </h3>
          </div>
          <div className="data-postagem">
            <p>14 de abril</p>
          </div>
        </div>
        <div className="text-publi">
          <p>
            A Sobriety Story | Why I Quit Alcohol | Julian ShawIf you've been
            thinking about sobriety, watch @julianshaw's video on his journey to
            sobriety and everything he has gained since leaving alcohol behind!
            ...
          </p>
        </div>
        <div className="foto-postagem">
          <img src={PostImagem} alt="PostImagem" />
        </div>
        <div className="curtida-cometario">
          <img src={Curtida} alt="Curtida" />{" "}
          <img src={Comentario} alt="Comentario" />{" "}
        </div>
      </div>
      <div className="container-postagem">
        <div className="info-postagem">
          <div className="criador">
            <button></button>
            <h3>
              Criador nome <br />
              <span>@criador</span>
            </h3>
          </div>
          <div className="data-postagem">
            <p>14 de abril</p>
          </div>
        </div>
        <div className="text-publi">
          <p>
            A Sobriety Story | Why I Quit Alcohol | Julian ShawIf you've been
            thinking about sobriety, watch @julianshaw's video on his journey to
            sobriety and everything he has gained since leaving alcohol behind!
            ...
          </p>
        </div>
        <div className="foto-postagem">
          <img src={PostImagem} alt="PostImagem" />
        </div>
        <div className="curtida-cometario">
          <img src={Curtida} alt="Curtida" />{" "}
          <img src={Comentario} alt="Comentario" />{" "}
        </div>
      </div>
      <div className="container-postagem">
        <div className="info-postagem">
          <div className="criador">
            <button></button>
            <h3>
              Criador nome <br />
              <span>@criador</span>
            </h3>
          </div>
          <div className="data-postagem">
            <p>14 de abril</p>
          </div>
        </div>
        <div className="text-publi">
          <p>
            A Sobriety Story | Why I Quit Alcohol | Julian ShawIf you've been
            thinking about sobriety, watch @julianshaw's video on his journey to
            sobriety and everything he has gained since leaving alcohol behind!
            ...
          </p>
        </div>
        <div className="foto-postagem">
          <img src={PostImagem} alt="PostImagem" />
        </div>
        <div className="curtida-cometario">
          <img src={Curtida} alt="Curtida" />{" "}
          <img src={Comentario} alt="Comentario" />{" "}
        </div>
      </div>
    </div>
  );
}

export default Post;
