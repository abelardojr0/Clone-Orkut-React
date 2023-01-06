import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderInfosComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const HeaderEmail = styled(Link)`
  color: #043154;
  font-weight: bold;
`;
export const HeaderSair = styled(Link)`
  color: white;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
`;
export const Pesquisa = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  background-color: $fonte-destaque;
  margin-right: 20px;
  padding: 5px;
  border-radius: 15px;
  & input {
    border-radius: 15px;
    padding: 5px;
    outline: none;
  }
  & img {
    margin: 0;
    max-width: 20px;
    background-color: transparent;
    padding: 0;
  }
`;
