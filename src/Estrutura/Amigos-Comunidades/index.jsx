import React from "react";
import AndressaFoto from "../../img/andressa.jpg";
import MaeFoto from "../../img/mae.jpg";
import WagnerFoto from "../../img/wagner.jpg";
import LeoFoto from "../../img/leo.jpg";
import RoniFoto from "../../img/roni.jpg";
import RafaelFoto from "../../img/rafael.jpg";
import GersonFoto from "../../img/gerson.jpg";
import CristinaFoto from "../../img/cristina.jpg";
import TonyFoto from "../../img/tony.jpg";

import AcordarFoto from "../../img/acordar.jpg";
import GeladeiraFoto from "../../img/geladeira.jpg";
import DesceFoto from "../../img/desce.jpg";
import LegalFoto2 from "../../img/legal.jpg";
import BoardgamesFoto from "../../img/boardgames.jpeg";
import CampanhiaFoto from "../../img/campanhia.png";

import { Amigos, AmigosComunidadesComponent, Comunidades } from "./style";

const AmigosComunidades = () => {
  return (
    <>
      <AmigosComunidadesComponent>
        <Amigos>
          <h2>
            Amigos{" "}
            <span>
              <a href="">(9)</a>
            </span>
          </h2>
          <ul>
            <li>
              <a href="">
                <img src={AndressaFoto} alt="" />
              </a>
              <span>Andressa Alencar(300)</span>
            </li>
            <li>
              <a href="">
                <img src={MaeFoto} alt="" />
              </a>
              <span>Marineide Matos (470)</span>
            </li>
            <li>
              <a href="">
                <img src={WagnerFoto} alt="" />
              </a>
              <span>Wagner Mendonça(178)</span>
            </li>
            <li>
              <a href="">
                <img src={LeoFoto} alt="" />
              </a>
              <span>Leonardo Luiz (1234)</span>
            </li>
            <li>
              <a href="">
                <img src={RoniFoto} alt="" />
              </a>
              <span>Roniele Oliveira (759)</span>
            </li>
            <li>
              <a href="">
                <img src={RafaelFoto} alt="" />
              </a>
              <span>Rafael Coelho (601)</span>
            </li>
            <li>
              <a href="">
                <img src={GersonFoto} alt="" />
              </a>
              <span>Gerson Neto (256)</span>
            </li>
            <li>
              <a href="">
                <img src={CristinaFoto} alt="" />
              </a>
              <span>Cristina Teixeira(16)</span>
            </li>
            <li>
              <a href="">
                <img src={TonyFoto} alt="" />
              </a>
              <span>Tony Rodrigues (235)</span>
            </li>
          </ul>
        </Amigos>
        <Comunidades>
          <h2>
            Comunidades{" "}
            <span>
              <a href="">(128)</a>
            </span>
          </h2>
          <ul>
            <li>
              <a href="">
                <img src={AcordarFoto} alt="" />
              </a>
              <span>Eu odeio acordar cedo</span>
            </li>
            <li>
              <a href="">
                <img src={GeladeiraFoto} alt="" />
              </a>
              <span>Eu abro a geladeira para pensar</span>
            </li>
            <li>
              <a href="">
                <img src={DesceFoto} alt="" />
              </a>
              <span>Deus disse, desce e arrasa!</span>
            </li>
            <li>
              <a href="">
                <img src={LegalFoto2} alt="" />
              </a>
              <span>Sou legal, ñ estou te dando mole</span>
            </li>
            <li>
              <a href="">
                <img src={BoardgamesFoto} alt="" />
              </a>
              <span>Eu AMO jogos de tabuleiro</span>
            </li>
            <li>
              <a href="">
                <img src={CampanhiaFoto} alt="" />
              </a>
              <span>Eu tocava campainha e corria</span>
            </li>
          </ul>
        </Comunidades>
      </AmigosComunidadesComponent>
    </>
  );
};
export default AmigosComunidades;
