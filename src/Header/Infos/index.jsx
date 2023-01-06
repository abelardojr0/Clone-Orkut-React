import React from "react";
import lupa from "../../img/lupa.png";
import {
  HeaderEmail,
  HeaderInfosComponent,
  HeaderSair,
  Pesquisa,
} from "./styles";

export default function HeaderInfos() {
  return (
    <HeaderInfosComponent>
      <HeaderEmail to="">abelardo.junior.181@gmail.com</HeaderEmail>
      <HeaderSair to="/">Sair</HeaderSair>
      <Pesquisa>
        <input type="text" name="pesquise" id="pesquisa" />
        <img src={lupa} alt="" />
      </Pesquisa>
    </HeaderInfosComponent>
  );
}
