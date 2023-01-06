import React from "react";
import perfil from "../../img/perfil (1).png";
import iconePerfil from "../../img/perfil.png";
import iconeRecados from "../../img/recados.png";
import iconeFotos from "../../img/fotos.png";
import iconeVideos from "../../img/videos.png";
import iconeDepoimentos from "../../img/depoimentos.png";

import { DadosComponent, DadosInfos, DadosLista, DadosNome } from "./styles";

const Dados = () => {
  return (
    <>
      <DadosComponent>
        <img src={perfil} alt="" />
        <DadosNome>Abelardo Júnior</DadosNome>
        <DadosInfos>masculino, namorando, Caucaia, Ceará, Brasil</DadosInfos>
        <DadosLista>
          <li>
            <a href="">
              <img src={iconePerfil} alt="" />
              Perfil
            </a>
          </li>
          <li>
            <a href="">
              <img src={iconeRecados} alt="" />
              Recados
            </a>
          </li>
          <li>
            <a href="">
              <img src={iconeFotos} alt="" />
              Fotos
            </a>
          </li>
          <li>
            <a href="">
              <img src={iconeVideos} alt="" />
              Vídeos
            </a>
          </li>
          <li>
            <a href="">
              <img src={iconeDepoimentos} alt="" />
              Depoimentos
            </a>
          </li>
        </DadosLista>
      </DadosComponent>
    </>
  );
};

export default Dados;
