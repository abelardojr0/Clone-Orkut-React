import styled from "styled-components";

export const DadosComponent = styled.aside`
  margin-top: 100px;
  width: 100%;
  max-height: 80vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

  & img {
    max-width: 200px;
    border-radius: 10px;
    margin-bottom: 20px;
    align-self: center;
  }
`;

export const DadosNome = styled.p`
  color: #115182;
  font-size: 1.2rem;
`;

export const DadosInfos = styled.p`
  margin-top: 5px;
  margin-bottom: 20px;
  color: $fonte-sem-destaque;
  position: relative;
  font-size: 1rem;
  font-style: italic;
  line-height: 1.4;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: $listras;
    position: absolute;
    bottom: -10px;
  }
`;

export const DadosLista = styled.ul`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 8px;
  & img {
    max-width: 25px;
    margin-bottom: 0px;
    border-radius: 0;
  }
  & a {
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: #d9e6f6;
    padding: 5px 7px;
    border: 1px solid #e4e4e4;
    border-radius: 5px;
    color: #115182;
    font-size: 1.2rem;
    &:hover {
      transform: scale(1.05);
    }
  }
`;
