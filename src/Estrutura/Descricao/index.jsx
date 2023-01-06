import React from "react";
import iconeRecados from "../../img/recados.png";
import iconeFotos from "../../img/fotos.png";
import iconeVideos from "../../img/videos.png";
import iconeFas from "../../img/fas.png";
import iconeConfiavel from "../../img/confiavel-completo.png";
import iconeLegal from "../../img/legal-completo.png";
import iconeSexy from "../../img/sexy-completo.png";

import {
  DescricaoComponent,
  DescricaoInformacoes,
  DescricaoLista1,
  DescricaoLista2,
  DescricaoListas,
  DescricaoTitulo,
  ListaNomes,
  ListaNumeros,
} from "./styles";

const Descricao = () => {
  return (
    <>
      <DescricaoComponent>
        <DescricaoTitulo>Abelardo Júnior</DescricaoTitulo>
        <DescricaoListas>
          <DescricaoLista1>
            <li>
              <a href="">
                <ListaNomes>recados</ListaNomes>
                <img src={iconeRecados} alt="" />
                <ListaNumeros>84</ListaNumeros>
              </a>
            </li>
            <li>
              <a href="">
                <ListaNomes>fotos</ListaNomes>
                <img src={iconeFotos} alt="" />
                <ListaNumeros>5</ListaNumeros>
              </a>
            </li>
            <li>
              <a href="">
                <ListaNomes>fotos</ListaNomes>
                <img src={iconeVideos} alt="" />
                <ListaNumeros>9</ListaNumeros>
              </a>
            </li>
            <li>
              <a href="">
                <ListaNomes>fotos</ListaNomes>
                <img src={iconeFas} alt="" />
                <ListaNumeros>50</ListaNumeros>
              </a>
            </li>
          </DescricaoLista1>
          <DescricaoLista2>
            <li>
              <a href="">
                <ListaNomes>confiavel</ListaNomes>
                <img src={iconeConfiavel} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <ListaNomes>legal</ListaNomes>
                <img src={iconeLegal} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <ListaNomes>sexy</ListaNomes>
                <img src={iconeSexy} alt="" />
              </a>
            </li>
          </DescricaoLista2>
        </DescricaoListas>
        <DescricaoInformacoes>
          <h2>social</h2>
          <hr />
          <ul>
            <li>
              <p>
                relacionamento: <span>namorando</span>
              </p>
            </li>
            <li>
              <p>
                aniversário: <span>10 agosto</span>
              </p>
            </li>
            <li>
              <p>
                idade: <span>27</span>
              </p>
            </li>
            <li>
              <p>
                interesses: <span>conhecer amigos</span>
              </p>
            </li>
            <li>
              <p>
                quem sou eu: <span>um cara legal</span>
              </p>
            </li>
            <li>
              <p>
                filhos: <span>não</span>
              </p>
            </li>
            <li>
              <p>
                etnia: <span>caucasiano</span>
              </p>
            </li>
            <li>
              <p>
                humor: <span>extrovertido</span>
              </p>
            </li>
            <li>
              <p>
                orientação sexual: <span>heterosexual</span>
              </p>
            </li>
            <li>
              <p>
                estilo: <span>urbano</span>
              </p>
            </li>
            <li>
              <p>
                fumo: <span>não</span>
              </p>
            </li>
            <li>
              <p>
                bebo: <span>não</span>
              </p>
            </li>
            <li>
              <p>
                animais: <span>gatos</span>
              </p>
            </li>
            <li>
              <p>
                moro: <span>Caucaia-CE</span>
              </p>
            </li>
            <li>
              <p>
                cidade natal: <span>Caucaia-CE</span>
              </p>
            </li>
            <li>
              <p>
                página web:{" "}
                <span>
                  {" "}
                  <a
                    target="_blank"
                    href="https://portfolio-abelardojr0.vercel.app/"
                  >
                    Portfólio
                  </a>{" "}
                </span>
              </p>
            </li>
            <li>
              <p>
                paixões: <span>Boardgames e RPG</span>
              </p>
            </li>
          </ul>
        </DescricaoInformacoes>
      </DescricaoComponent>
    </>
  );
};
export default Descricao;
