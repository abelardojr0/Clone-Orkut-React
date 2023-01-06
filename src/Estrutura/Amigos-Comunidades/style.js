import styled from "styled-components";

export const AmigosComunidadesComponent = styled.aside`
  margin-top: 100px;
  h2 {
    font-weight: bold;
    margin-bottom: 20px;
    span {
      color: #115182;
    }
  }
  img {
    max-width: 120px;
    border-radius: 10px;
    margin-bottom: 5px;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
  }
  li {
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    background-color: #d9e6f6;
    color: #115182;
    border-radius: 10px;
    font-size: 0.7rem;
    max-width: 140px;
    padding: 10px;
    &:hover {
      transform: scale(1.05);
    }
  }
  span {
    text-align: center;
    max-width: 80px;
  }
`;

export const Amigos = styled.article`
  margin-bottom: 30px;
  max-height: 700px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;
export const Comunidades = styled.article`
  margin-bottom: 30px;
  max-height: 450px;
  background-color: white;
  border-radius: 10px;
  padding: 10px 15px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;
