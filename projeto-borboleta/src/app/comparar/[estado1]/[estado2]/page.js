// src/app/comparar/[estado1]/[estado2]/page.js

"use client";

import { useParams } from "next/navigation";
import Header from "../../../../componentes/Header";
import Footer from "../../../../componentes/Footer";

const estados = {
  "acre": { nome: "Acre", valor: 3550 },
  "alagoas": { nome: "Alagoas", valor: 2450 },
  "amapa": { nome: "Amapá", valor: 2830 },
  "amazonas": { nome: "Amazonas", valor: 2990 },
  "bahia": { nome: "Bahia", valor: 3210 },
  "ceara": { nome: "Ceará", valor: 2540 },
  "distrito-federal": { nome: "Distrito Federal", valor: 4920 },
  "espirito-santo": { nome: "Espírito Santo", valor: 3400 },
  "goias": { nome: "Goiás", valor: 3300 },
  "maranhao": { nome: "Maranhão", valor: 2230 },
  "mato-grosso": { nome: "Mato Grosso", valor: 3360 },
  "mato-grosso-do-sul": { nome: "Mato Grosso do Sul", valor: 3330 },
  "minas-gerais": { nome: "Minas Gerais", valor: 3360 },
  "para": { nome: "Pará", valor: 3050 },
  "paraiba": { nome: "Paraíba", valor: 2820 },
  "parana": { nome: "Paraná", valor: 4300 },
  "pernambuco": { nome: "Pernambuco", valor: 2840 },
  "piaui": { nome: "Piauí", valor: 2690 },
  "rio-de-janeiro": { nome: "Rio de Janeiro", valor: 3340 },
  "rio-grande-do-norte": { nome: "Rio Grande do Norte", valor: 2550 },
  "rio-grande-do-sul": { nome: "Rio Grande do Sul", valor: 3360 },
  "rondonia": { nome: "Rondônia", valor: 3100 },
  "roraima": { nome: "Roraima", valor: 3710 },
  "santa-catarina": { nome: "Santa Catarina", valor: 4180 },
  "sao-paulo": { nome: "São Paulo", valor: 4270 },
  "sergipe": { nome: "Sergipe", valor: 2010 },
  "tocantins": { nome: "Tocantins", valor: 3810 },
};

export default function ComparacaoDetalhe() {
  const { estado1, estado2 } = useParams();

  const e1 = estados[estado1];
  const e2 = estados[estado2];

  if (!e1 || !e2) {
    return <p>Estado não encontrado.</p>;
  }

  const diferenca = Math.abs(e1.valor - e2.valor);
  const maisCaro = e1.valor > e2.valor ? e1.nome : e2.nome;
  const maisBarato = e1.valor < e2.valor ? e1.nome : e2.nome;
  const iguais = e1.valor === e2.valor;

  return (
    <>
      <Header />
      <main>
        <section className="secao">
          <h1>{e1.nome} vs {e2.nome}</h1>

          <p>Custo médio de {e1.nome}: <strong>R$ {e1.valor}</strong></p>
          <p>Custo médio de {e2.nome}: <strong>R$ {e2.valor}</strong></p>

          <br />

          {iguais ? (
            <p>{e1.nome} e {e2.nome} possuem o mesmo custo de vida.</p>
          ) : (
            <p>
              <strong>{maisBarato}</strong> é R$ {diferenca} mais barata que{" "}
              <strong>{maisCaro}</strong>.
            </p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
