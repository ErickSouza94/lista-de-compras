import styled from "styled-components";

export const Container = styled.div`
  background-color: #df7816c1;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  height: auto;
  max-width: 500px; // Evita que a lista fique larga demais~
  max-height: 570px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  h1 {
    color: #fff;
  }

  input {
    height: 35px;
    margin: 8px;
    border-radius: 5px;
    border: none;
    // margin-top: 30px;
    outline: none;
    padding-left: 10px;
    font-weight: bold;
  }

  span {
    padding: 5px;
    font-weight: bolder;
  }

  .quantidade {
    font-size: 18px;
    background-color: #ffffff70;
  }
`;

// Criei um componente específico para os botões de + e -
// assim eles não bagunçam o estilo dos outros botões
export const QntButton = styled.button.attrs({ className: "addProduto" })`
  width: 36px; /* Aumentei de 35px para 45px */
  height: 40px; /* Aumentei de 35px para 45px */
  display: inline-flex; /* Para centralizar o símbolo perfeitamente */
  align-items: center;
  justify-content: center;

  margin: 0 10px; /* Mais espaço nas laterais */
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 8px; /* Ficou menos circular, mais moderno */
  cursor: pointer;

  font-size: 24px; /* Aumenta o tamanho do + e do - */
  font-weight: bold;
  color: #333;

  &:hover {
    background-color: #ddd;
  }

  &:active {
    background-color: #ccc;
    transform: scale(0.95); /* Efeito de clique */
  }
`;

export const AddButton = styled.button`
  background-color: #70eb0bbe;
  color: #000;
  height: 40px;
  padding: 0 15px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }
`;

export const ListContainer = styled.div`
  max-height: 300px; /* Define a altura máxima da lista antes de aparecer o scroll */
  overflow-y: auto; /* Ativa o scroll vertical quando necessário */
  margin-top: 20px;
  padding-right: 5px; /* Espaço para a barra de scroll não cobrir o botão da lixeira */

  /* Personalização da barra de scroll (opcional, para ficar mais bonito) */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
  }
`;

export const CheckInput = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #70eb0b;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-top: 15px;
  background-color: #fff;
  border-radius: 5px;
  padding: 0 10px;

  .infoProduto {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  span {
    text-decoration: ${(props) =>
      props.$isComprado ? "line-through" : "none"};
    color: ${(props) => (props.$isComprado ? "#999" : "#000")};
    transition: all 0.3s;
  }

  .lixeira {
    background-color: #df0f0fe1;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    padding: 5px 10px;
    font-size: 18px;
  }
`;

export const ClearButton = styled.button`
  background-color: #303531da;
  color: #fff;
  border: none;
  border-radius: 8px;
  height: 45px;
  padding: 0 30px;
  cursor: pointer;
  margin: 30px auto 10px;
  display: block;
  width: fit-content;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    background-color: #000;
  }
`;
