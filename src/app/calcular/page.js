// src/app/calcular/page.js

"use client";

import { useState } from "react";
import Link from "next/link";

export default function Calcular() {
  const [moradia, setMoradia] = useState("");
  const [alimentacao, setAlimentacao] = useState("");
  const [transporte, setTransporte] = useState("");

  const [resultado, setResultado] = useState("");

  function calcularGastos() {
    const total =
      Number(moradia) +
      Number(alimentacao) +
      Number(transporte);

    setResultado(`Total mensal: R$ ${total}`);
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
        <h1 id="titulo">Calcular gastos mensais</h1>

        <h2>Descubra seu custo mensal</h2>

        <img
          className="imagem"
          src="https://habitability.com.br/wp-content/uploads/2022/04/Cidadade-compacta.png"
        />
      </section>

      <main>
        <section className="secao">
          <h2>Informe seus gastos</h2>

          <input
            type="number"
            placeholder="Moradia"
            onChange={(e) => setMoradia(e.target.value)}
          />

          <input
            type="number"
            placeholder="Alimentação"
            onChange={(e) => setAlimentacao(e.target.value)}
          />

          <input
            type="number"
            placeholder="Transporte"
            onChange={(e) => setTransporte(e.target.value)}
          />

          <br />
          <br />

          <button onClick={calcularGastos}>
            Calcular
          </button>

          <p>{resultado}</p>
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