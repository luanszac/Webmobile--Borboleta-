// src/app/page.js

"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [secao, setSecao] = useState("");
  const [resultadoComparacao, setResultadoComparacao] = useState("");
  const [resultadoGastos, setResultadoGastos] = useState("");

  const [cidade1, setCidade1] = useState("");
  const [cidade2, setCidade2] = useState("");

  const [nomeCidade1, setNomeCidade1] = useState("");
  const [nomeCidade2, setNomeCidade2] = useState("");

  const [moradia, setMoradia] = useState("");
  const [alimentacao, setAlimentacao] = useState("");
  const [transporte, setTransporte] = useState("");

  const estados = [
    { nome: "Acre", valor: 3550 },
    { nome: "Alagoas", valor: 2450 },
    { nome: "Amapá", valor: 2830 },
    { nome: "Amazonas", valor: 2990 },
    { nome: "Bahia", valor: 3210 },
    { nome: "Ceará", valor: 2540 },
    { nome: "Distrito Federal", valor: 4920 },
    { nome: "Espírito Santo", valor: 3400 },
    { nome: "Goiás", valor: 3300 },
    { nome: "Maranhão", valor: 2230 },
    { nome: "Mato Grosso", valor: 3360 },
    { nome: "Mato Grosso do Sul", valor: 3330 },
    { nome: "Minas Gerais", valor: 3360 },
    { nome: "Pará", valor: 3050 },
    { nome: "Paraíba", valor: 2820 },
    { nome: "Paraná", valor: 4300 },
    { nome: "Pernambuco", valor: 2840 },
    { nome: "Piauí", valor: 2690 },
    { nome: "Rio de Janeiro", valor: 3340 },
    { nome: "Rio Grande do Norte", valor: 2550 },
    { nome: "Rio Grande do Sul", valor: 3360 },
    { nome: "Rondônia", valor: 3100 },
    { nome: "Roraima", valor: 3710 },
    { nome: "Santa Catarina", valor: 4180 },
    { nome: "São Paulo", valor: 4270 },
    { nome: "Sergipe", valor: 2010 },
    { nome: "Tocantins", valor: 3810 },
  ];

  function mostrarSecao(nome) {
    setSecao(nome);
  }

  function irParaCalcular() {
    router.push("/calcular");
  }

  function irParaComparar() {
    router.push("/comparar");
  }

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
        <h1 id="titulo">Descubra o custo de vida</h1>
        <h2>Do seu estado</h2>

        <img
          className="imagem"
          src="https://habitability.com.br/wp-content/uploads/2022/04/Cidadade-compacta.png"
        />
      </section>

      <main>
        <section>
          <h2>Escolha seu estado</h2>

          <select
            id="cidade"
            value={cidade1}
            onChange={(e) => {
              setCidade1(e.target.value);
              setNomeCidade1(
                e.target.options[e.target.selectedIndex].text
              );

            }}
          >
            <option className="op" value="">Selecione</option>

            {estados.map((estado) => (
              <option className="op" key={estado.nome} value={estado.valor}>
                {estado.nome}
              </option>
            ))}
          </select>

          <p id="resultado"></p>
        </section>

        <section>
          <h2>O que você pode fazer aqui?</h2>

          <ul>
            <li>
              <Link href="/comparar">
                Comparar cidades
              </Link>
            </li>

            <li>
              <Link href="/calcular">
                Calcular gastos mensais
              </Link>
            </li>

            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/dicas");
                }}
              >
                Ver dicas de economia
              </a>
            </li>
          </ul>
        </section>

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