// src/app/page.js

"use client";

import { useState } from "react";

export default function Home() {
  const [secao, setSecao] = useState("");
  const [resultadoComparacao, setResultadoComparacao] = useState("");
  const [resultadoGastos, setResultadoGastos] = useState("");

  const [cidade1, setCidade1] = useState("");
  const [cidade2, setCidade2] = useState("");

  const [moradia, setMoradia] = useState("");
  const [alimentacao, setAlimentacao] = useState("");
  const [transporte, setTransporte] = useState("");

  function mostrarSecao(nome) {
    setSecao(nome);
  }

  function compararCidades() {
    if (!cidade1 || !cidade2) {
      setResultadoComparacao("Selecione os dois estados.");
      return;
    }

    const valor1 = Number(cidade1);
    const valor2 = Number(cidade2);

    if (valor1 > valor2) {
      setResultadoComparacao(`Cidade 2 é R$ ${valor1 - valor2} mais barata.`);
    } else if (valor2 > valor1) {
      setResultadoComparacao(`Cidade 1 é R$ ${valor2 - valor1} mais barata.`);
    } else {
      setResultadoComparacao("Os custos são iguais.");
    }
  }

  function calcularGastos() {
    const total =
      Number(moradia) +
      Number(alimentacao) +
      Number(transporte);

    setResultadoGastos(`Total mensal: R$ ${total}`);
  }

  return (
    <>
      <header>
        <img src="/logomarca.jpg" width="50px" />

        <nav id="main-nav">
          <a href="#">Inicio</a>
          <a href="#">Estados</a>
          <a href="#">Comparações</a>
          <a href="#">Contato</a>
        </nav>

        <section className="menu-buttons">
          <button>Login</button>
          <button className="register">Registre-se</button>
        </section>
      </header>

      <section id="opcoes">
        <h1 id="titulo">Descubra o custo de vida</h1>
        <h2>Do seu estado</h2>

        <nav id="hero-buttons">
          <a href="#" onClick={() => mostrarSecao("comparar")}>
            Comparar
          </a>

          <a
            href="#"
            id="calcular"
            onClick={() => mostrarSecao("calcularSecao")}
          >
            Calcular
          </a>
        </nav>

        <img
          className="imagem"
          src="https://habitability.com.br/wp-content/uploads/2022/04/Cidadade-compacta.png"
        />
      </section>

      <main>
        <section>
          <h2>Escolha seu estado</h2>

          <select id="cidade">
            <option value="">Selecione</option>
            <option>Acre</option>
            <option>Alagoas</option>
            <option>Amapá</option>
            <option>Amazonas</option>
            <option>Bahia</option>
            <option>Ceará</option>
            <option>Distrito Federal</option>
            <option>Espírito Santo</option>
            <option>Goiás</option>
            <option>Maranhão</option>
            <option>Mato Grosso</option>
            <option>Mato Grosso do Sul</option>
            <option>Minas Gerais</option>
            <option>Pará</option>
            <option>Paraíba</option>
            <option>Paraná</option>
            <option>Pernambuco</option>
            <option>Piauí</option>
            <option>Rio de Janeiro</option>
            <option>Rio Grande do Norte</option>
            <option>Rio Grande do Sul</option>
            <option>Rondônia</option>
            <option>Roraima</option>
            <option>Santa Catarina</option>
            <option>São Paulo</option>
            <option>Sergipe</option>
            <option>Tocantins</option>
          </select>

          <p id="resultado"></p>
        </section>

        <section>
          <h2>O que você pode fazer aqui?</h2>

          <ul>
            <li>
              <a href="#" onClick={() => mostrarSecao("comparar")}>
                Comparar cidades
              </a>
            </li>

            <li>
              <a href="#" onClick={() => mostrarSecao("calcularSecao")}>
                Calcular gastos mensais
              </a>
            </li>

            <li>
              <a href="#" onClick={() => mostrarSecao("dicas")}>
                Ver dicas de economia
              </a>
            </li>
          </ul>
        </section>

        {secao === "comparar" && (
          <section id="comparar" className="secao">
            <h2>Comparar estados</h2>

            <select onChange={(e) => setCidade1(e.target.value)}>
              <option value="3550">Acre</option>
                <option value="2450">Alagoas</option>
                <option value="2830">Amapá</option>
                <option value="2990">Amazonas</option>
                <option value="3210">Bahia</option>
                <option value="2540">Ceará</option>
                <option value="4920">Distrito Federal</option>
                <option value="3400">Espírito Santo</option>
                <option value="3300">Goiás</option>
                <option value="2230">Maranhão</option>
                <option value="3360">Mato Grosso</option>
                <option value="3330">Mato Grosso do sul</option>
                <option value="3360">Minas Gerais</option>
                <option value="3050">Pará</option>
                <option value="2820">Paraíba</option>
                <option value="4300">Paraná</option>
                <option value="2840">Pernambuco</option>
                <option value="2690">Piauí</option>
                <option value="3340">Rio de Janeiro</option>
                <option value="2550">Rio Grande do Norte</option>
                <option value="3360">Rio Grande do Sul</option>
                <option value="3100">Rondônia</option>
                <option value="3710">Roraima</option>
                <option value="4180">Santa Catarina</option>
                <option value="4270">São Paulo</option>
                <option value="2010">Sergipe</option>
                <option value="3810">Tocantins</option>
            </select>

            <select onChange={(e) => setCidade2(e.target.value)}>
              <option value="">Cidade 2</option>
              <option value="3550">Acre</option>
                <option value="2450">Alagoas</option>
                <option value="2830">Amapá</option>
                <option value="2990">Amazonas</option>
                <option value="3210">Bahia</option>
                <option value="2540">Ceará</option>
                <option value="4920">Distrito Federal</option>
                <option value="3400">Espírito Santo</option>
                <option value="3300">Goiás</option>
                <option value="2230">Maranhão</option>
                <option value="3360">Mato Grosso</option>
                <option value="3330">Mato Grosso do sul</option>
                <option value="3360">Minas Gerais</option>
                <option value="3050">Pará</option>
                <option value="2820">Paraíba</option>
                <option value="4300">Paraná</option>
                <option value="2840">Pernambuco</option>
                <option value="2690">Piauí</option>
                <option value="3340">Rio de Janeiro</option>
                <option value="2550">Rio Grande do Norte</option>
                <option value="3360">Rio Grande do Sul</option>
                <option value="3100">Rondônia</option>
                <option value="3710">Roraima</option>
                <option value="4180">Santa Catarina</option>
                <option value="4270">São Paulo</option>
                <option value="2010">Sergipe</option>
                <option value="3810">Tocantins</option>
            </select>

            <br />
            <br />

            <button onClick={compararCidades}>Comparar</button>

            <p>{resultadoComparacao}</p>
          </section>
        )}

        {secao === "calcularSecao" && (
          <section id="calcularSecao" className="secao">
            <h2>Calcular gastos mensais</h2>

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

            <button onClick={calcularGastos}>Calcular</button>

            <p>{resultadoGastos}</p>
          </section>
        )}

        {secao === "dicas" && (
          <section id="dicas" className="secao">
            <h2>Dicas de economia</h2>

            <ul>
              <li>Evite compras por impulso</li>
              <li>Use transporte público</li>
              <li>Pesquise preços</li>
              <li>Tenha reserva financeira</li>
            </ul>
          </section>
        )}
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