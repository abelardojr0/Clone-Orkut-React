import React from "react";
import AmigosComunidades from "./Amigos-Comunidades";
import Dados from "./Dados";
import Descricao from "./Descricao";
import { EstruturaComponent } from "./styles";

const Estrutura = () => {
  return (
    <>
      <EstruturaComponent>
        <Dados></Dados>
        <Descricao></Descricao>
        <AmigosComunidades></AmigosComunidades>
      </EstruturaComponent>
    </>
  );
};

export default Estrutura;
