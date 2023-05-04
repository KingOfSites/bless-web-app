import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.scss";
import Lupa from "../../assets/lupa.png";
import Reload from "../../assets/recarragar.png";
import cardCriador from "../../assets/cardCriador.png";

function SideBar() {
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

      <Swiper
        grabCursor={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        loopedSlides={5}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        }}
      >
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}

export default SideBar;
