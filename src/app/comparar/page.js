"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Comparar() {
  const [resultadoComparacao, setResultadoComparacao] = useState("");

  const [cidade1, setCidade1] = useState("");
  const [cidade2, setCidade2] = useState("");

  const [nomeCidade1, setNomeCidade1] = useState("");
  const [nomeCidade2, setNomeCidade2] = useState("");

  const [estados, setEstados] = useState([]);

  useEffect(() => {
    fetch("/api/estados")
      .then((res) => res.json())
      .then((data) => setEstados(data));
  }, []);

  function compararCidades() {
    if (!cidade1 || !cidade2) {
      setResultadoComparacao("Selecione os dois estados.");
      return;
    }

    const valor1 = Number(cidade1);
    const valor2 = Number(cidade2);

    if (valor1 > valor2) {
      setResultadoComparacao(
        `${nomeCidade2} é R$ ${valor1 - valor2} mais barata que ${nomeCidade1}.`
      );
    } else if (valor2 > valor1) {
      setResultadoComparacao(
        `${nomeCidade1} é R$ ${valor2 - valor1} mais barata que ${nomeCidade2}.`
      );
    } else {
      setResultadoComparacao(
        `${nomeCidade1} e ${nomeCidade2} possuem o mesmo custo.`
      );
    }
  }

  return (
    <>
      <header>
        <img src="/logomarca.jpg" width="50px" />

        <nav id="main-nav">
          <Link href="/">Inicio</Link>
          <Link href="/comparar">Comparações</Link>
          <Link href="/calcular">Calcular</Link>
          <Link href="/dicas">Dicas</Link>
        </nav>

        <section className="menu-buttons">
          <button>Login</button>
          <button className="register">Registre-se</button>
        </section>
      </header>

      <section id="opcoes">
        <h1 id="titulo">Comparar estados</h1>
        <h2>Compare o custo de vida</h2>

        <img
          className="imagem"
          src="https://habitability.com.br/wp-content/uploads/2022/04/Cidadade-compacta.png"
        />
      </section>

      <main>
        <section id="comparar" className="secao">

          <select
            value={cidade1}
            onChange={(e) => {
              setCidade1(e.target.value);
              setNomeCidade1(
                e.target.options[e.target.selectedIndex].text
              );
            }}
          >
            <option value="">Estado 1</option>

            {estados.map((estado) => (
              <option key={estado.nome} value={estado.valor}>
                {estado.nome}
              </option>
            ))}
          </select>

          <select
            value={cidade2}
            onChange={(e) => {
              setCidade2(e.target.value);
              setNomeCidade2(
                e.target.options[e.target.selectedIndex].text
              );
            }}
          >
            <option value="">Estado 2</option>

            {estados.map((estado) => (
              <option key={estado.nome} value={estado.valor}>
                {estado.nome}
              </option>
            ))}
          </select>

          <br />
          <br />

          <button onClick={compararCidades}>
            Comparar
          </button>

          <p>{resultadoComparacao}</p>
        </section>
      </main>

      <footer>
        <p>Entre em contato</p>
        <p>Nossas redes</p>
        <p>Suporte</p>

        <nav id="footer-nav">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Contato</a>
        </nav>
      </footer>
    </>
  );
}
