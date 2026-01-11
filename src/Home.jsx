import { useEffect, useRef } from "react";
import { useState } from "react";
import { v4 } from "uuid";
import {
  AddButton,
  Container,
  CheckInput,
  Product,
  ClearButton,
} from "./styles";

function Home() {
  const [produtos, setProdutos] = useState(() => {
    const produtosSalvos = localStorage.getItem("listaCompras");
    return produtosSalvos ? JSON.parse(produtosSalvos) : [];
  });

  const refProduto = useRef();
  const [quantidade, setQuantidade] = useState(1);

  useEffect(() => {
    localStorage.setItem("listaCompras", JSON.stringify(produtos));
  }, [produtos]);

  function botaoAdicionar() {
    if (!refProduto.current.value) return; // Evita adicionar item vazio
    console.log(v4());
    setProdutos([
      {
        id: v4(),
        nome: refProduto.current.value,
        quantidade: quantidade,
        comprado: false,
      },
      ...produtos,
    ]);

    // RESET Fomulário
    refProduto.current.value = "";
    setQuantidade(1);
  }

  function produtoComprado(id) {
    setProdutos(
      produtos.map((produto) =>
        produto.id === id
          ? { ...produto, comprado: !produto.comprado }
          : produto
      )
    );
  }

  function deletarProduto(id) {
    setProdutos(produtos.filter((produto) => produto.id !== id));
  }

  function limparLista() {
    if (window.confirm("Tem certeza que deseja apagar a lista? ")) {
      setProdutos([]);
    }
  }
  return (
    <Container>
      <div>
        <h1>Lista de Compras</h1>
        <input placeholder="produto..." ref={refProduto} />
        <button onClick={() => quantidade > 1 && setQuantidade(quantidade - 1)}>
          {" "}
          -{" "}
        </button>
        <span>{quantidade}</span>
        <button onClick={() => setQuantidade(quantidade + 1)}>+</button>
        <AddButton onClick={botaoAdicionar}>Adicionar</AddButton>
      </div>

      <div>
        {produtos.map((produto) => (
          <Product key={produto.id} $isComprado={produto.comprado}>
            <div className="infoProduto">
              <CheckInput
                type="checkbox"
                checked={produto.comprado}
                onChange={() => produtoComprado(produto.id)}
              />

              <span>
                {produto.nome} {produto.quantidade}x
              </span>
            </div>
            <button
              className="lixeira"
              onClick={() => deletarProduto(produto.id)}
            >
              🗑️
            </button>
          </Product>
        ))}
      </div>
      <div>
        <ClearButton className="clear" onClick={limparLista}>
          Limpar Lista
        </ClearButton>
      </div>
    </Container>
  );
}

export default Home;
