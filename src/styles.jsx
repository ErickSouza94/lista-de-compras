import styled from "styled-components";

export const Container = styled.div`
  background-color: #df7816c1;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 500px; // Evita que a lista fique larga demais

  h1 {
    color: #fff;
  }

  input {
    height: 35px;
    border-radius: 5px;
    border: none;
    margin-top: 30px;
    outline: none;
    padding-left: 10px;
  }

  span {
    padding: 5px;
    font-weight: bolder;
  }
`;

// Criei um componente específico para os botões de + e -
// assim eles não bagunçam o estilo dos outros botões
export const QntButton = styled.button`
  padding: 8px;
  margin: 5px;
  height: 35px;
  width: 35px;
  border-radius: 25%;
  border: none;
  cursor: pointer;
  background-color: #eee;

  &:hover {
    background-color: #ddd;
  }
`;

export const AddButton = styled.button`
  background-color: #70eb0bbe;
  color: #000;
  height: 40px;
  padding: 0 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
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
