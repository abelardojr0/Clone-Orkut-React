import React from "react";
import logo from "../../img/orkut-logo-nome.png";
import { Menu, MenuOpcoes } from "./styles";
const Nav = () => {
  return (
    <>
      <Menu>
        <img src={logo} alt="" />
        <MenuOpcoes>
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="/">Página de Recados</a>
          </li>
          <li>
            <a href="/">Amigos</a>
          </li>
          <li>
            <a href="/">Comuniades</a>
          </li>
        </MenuOpcoes>
      </Menu>
    </>
  );
};
export default Nav;
