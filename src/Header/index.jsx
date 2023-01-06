import React from "react";
import HeaderInfos from "./Infos";
import Nav from "./Nav";
import { HeaderComponent } from "./styles";

const Header = () => {
  return (
    <HeaderComponent>
      <Nav></Nav>
      <HeaderInfos></HeaderInfos>
    </HeaderComponent>
  );
};
export default Header;
