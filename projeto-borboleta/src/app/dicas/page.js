// src/app/dicas/page.js

"use client";

import Link from "next/link";

export default function Dicas() {
  const dicas = [
    {
      nome: "alimentacao",
      titulo: "Alimentação",
      descricao: "Aprenda a economizar nas compras e refeições.",
      imagem:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    },

    {
      nome: "transporte",
      titulo: "Transporte",
      descricao: "Reduza gastos com transporte e combustível.",
      imagem:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },

    {
      nome: "moradia",
      titulo: "Moradia",
      descricao: "Veja dicas para economizar dentro de casa.",
      imagem:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    },

    {
      nome: "lazer",
      titulo: "Lazer",
      descricao: "Economize sem deixar de se divertir.",
      imagem:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    },
  ];

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
        <h1 id="titulo">Dicas de Economia</h1>
        <h2>Escolha um tema</h2>
      </section>

      <img
          className="imagem"
          src="https://habitability.com.br/wp-content/uploads/2022/04/Cidadade-compacta.png"
        />

      <main>
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {dicas.map((dica) => (
            <Link
              key={dica.nome}
              href={`/dicas/${dica.nome}`}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div className="secao">
                <img
                  src={dica.imagem}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

                <h2 style={{ marginTop: "15px" }}>
                  {dica.titulo}
                </h2>

                <p>{dica.descricao}</p>
              </div>
            </Link>
          ))}
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