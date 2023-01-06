import styled from "styled-components";

export const DescricaoComponent = styled.section`
  padding: 10px 15px;
  border-radius: 5px 60px 5px 60px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  margin-top: 100px;
  height: 100%;
  background-color: white;
`;

export const DescricaoTitulo = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: rgb(73, 73, 73);
  margin-bottom: 20px;
  padding-left: 10px;
`;

export const DescricaoListas = styled.article`
  border-top: 1px solid $listras;
  border-bottom: 1px solid $listras;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  img {
    margin-top: 2px;
    max-width: 18px;
    grid-row: 2;
  }
`;

export const DescricaoLista1 = styled.ul`
  display: flex;
  gap: 20px;
  a {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 5px;
    color: rgb(73, 73, 73);
  }
`;

export const DescricaoLista2 = styled.ul`
  display: flex;
  gap: 20px;
  a {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  img {
    margin-top: 2px;
    max-width: 50px;
    grid-row: 2;
  }
`;
export const ListaNomes = styled.span`
  grid-column: 1/-1;
`;
export const ListaNumeros = styled.span`
  grid-column: 2;
  grid-row: 2;
`;

export const DescricaoInformacoes = styled.article`
  h2 {
    margin-top: 5px;
    background-color: #5c9ecf;
    text-align: center;
    padding: 10px;
    width: 60px;
    border-radius: 10px 10px 0px 0px;
    color: white;
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
    margin-left: 10px;
  }
  ul {
    background-color: #d9e6f6;
    border: 2px solid white;
    border-radius: 15px;
  }
  hr {
    background-color: #989898;
    height: 5px;
    margin-top: 0px;
  }
  li {
    padding: 12px 30px;
    border-radius: 15px;
    :nth-child(odd) {
      background-color: #b9d8ff;
    }
  }
  p {
    color: #555555;
    span {
      color: black;
    }
  }
`;
