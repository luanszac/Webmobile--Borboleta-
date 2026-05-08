// src/app/dicas/[page]/page.js

"use client";

import { useParams } from "next/navigation";
import Header from "../../../componentes/Header";
import Footer from "../../../componentes/Footer";

const conteudo = {
  alimentacao: {
    titulo: "Alimentação",
    dicas: [
      "Faça uma lista de compras antes de ir ao mercado",
      "Evite comprar com fome",
      "Prefira alimentos da estação",
      "Cozinhe em casa ao invés de pedir delivery",
    ],
  },
  transporte: {
    titulo: "Transporte",
    dicas: [
      "Use transporte público sempre que possível",
      "Considere a bicicleta para trajetos curtos",
      "Faça revisões periódicas no carro para evitar gastos maiores",
    ],
  },
  moradia: {
    titulo: "Moradia",
    dicas: [
      "Desligue aparelhos da tomada quando não usar",
      "Compare contas de energia e água mensalmente",
      "Negocie o aluguel antes de renovar",
    ],
  },
  lazer: {
    titulo: "Lazer",
    dicas: [
      "Pesquise eventos gratuitos na sua cidade",
      "Use serviços de streaming ao invés de cinema toda semana",
      "Combine passeios com amigos para dividir custos",
    ],
  },
};

export default function DicaDetalhe() {
  const { page } = useParams();

  const pagina = conteudo[page];

  if (!pagina) {
    return <p>Dica não encontrada.</p>;
  }

  return (
    <>
      <Header />
      <main>
        <h1>{pagina.titulo}</h1>
        <ul>
          {pagina.dicas.map((dica, index) => (
            <li key={index}>{dica}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
