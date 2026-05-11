import Link from "next/link";

const dicasConteudo = {
  alimentacao: {
    titulo: "Dicas de Alimentação",

    dicas: [
      {
        texto: "Faça uma lista antes de ir ao mercado.",
        imagem:
          "https://images.unsplash.com/photo-1542838132-92c53300491e",
      },

      {
        texto: "Evite compras por impulso.",
        imagem:
          "https://images.unsplash.com/photo-1579113800032-c38bd7635818",
      },

      {
        texto: "Prefira alimentos da estação.",
        imagem:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
      },

      {
        texto: "Cozinhe em casa ao invés de pedir delivery.",
        imagem:
          "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
      },
    ],
  },

  transporte: {
    titulo: "Dicas de Transporte",

    dicas: [
      {
        texto: "Use transporte público quando possível.",
        imagem:
          "https://images.unsplash.com/photo-1474487548417-781cb71495f3",
      },

      {
        texto: "Compartilhe caronas.",
        imagem:
          "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d",
      },

      {
        texto: "Mantenha a manutenção do veículo em dia.",
        imagem:
          "https://images.unsplash.com/photo-1487754180451-c456f719a1fc",
      },

      {
        texto: "Planeje rotas para economizar combustível.",
        imagem:
          "https://images.unsplash.com/photo-1502920917128-1aa500764ce7",
      },
    ],
  },

  moradia: {
    titulo: "Dicas de Moradia",

    dicas: [
      {
        texto: "Apague luzes ao sair dos cômodos.",
        imagem:
          "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      },

      {
        texto: "Reduza o tempo no banho.",
        imagem:
          "https://images.unsplash.com/photo-1576678433413-202829a1ab98?w=800&auto=format&fit=cropgi",
      },

      {
        texto: "Use lâmpadas LED.",
        imagem:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f",
      },

      {
        texto: "Evite desperdício de água.",
        imagem:
          "https://images.unsplash.com/photo-1521207418485-99c705420785",
      },
    ],
  },

  lazer: {
    titulo: "Dicas de Lazer",

    dicas: [
      {
        texto: "Procure eventos gratuitos na cidade.",
        imagem:
          "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      },

      {
        texto: "Faça passeios ao ar livre.",
        imagem:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      },

      {
        texto: "Use serviços de streaming compartilhados.",
        imagem:
          "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
      },

      {
        texto: "Planeje viagens com antecedência.",
        imagem:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      },
    ],
  },
};

export default async function Page({ params }) {
  const { page } = await params;

  const conteudo = dicasConteudo[page];

  if (!conteudo) {
    return <h1>Categoria não encontrada</h1>;
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
        <h1 id="titulo">{conteudo.titulo}</h1>
        <h2>Aprenda a economizar</h2>
      </section>

      <img
        className="imagem"
        src="https://habitability.com.br/wp-content/uploads/2022/04/Cidadade-compacta.png"
      />

      <main
        style={{
          padding: "40px",
          backgroundColor: "#f1f5f9",
          minHeight: "100vh",
        }}
      >
        <section
          style={{
            marginTop: "30px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "25px",
          }}
        >
          {conteudo.dicas.map((dica, index) => (
            <div
              key={index}
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                transition: "0.3s",
              }}
            >
              <img
                src={dica.imagem}
                alt="Imagem da dica"
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  padding: "25px",
                }}
              >
                <h3
                  style={{
                    marginBottom: "15px",
                    color: "#0f172a",
                    fontSize: "22px",
                  }}
                >
                  Dica {index + 1}
                </h3>

                <p
                  style={{
                    color: "#475569",
                    lineHeight: "28px",
                    fontSize: "16px",
                  }}
                >
                  {dica.texto}
                </p>
              </div>
            </div>
          ))}
        </section>

        <Link
          href="/dicas"
          style={{
            marginTop: "40px",
            display: "inline-block",
            padding: "12px 24px",
            borderRadius: "10px",
            border: "1px solid #cbd5e1",
            background: "#ffffff",
            cursor: "pointer",
            textDecoration: "none",
            color: "#1e293b",
            transition: "all 0.3s ease",
            fontSize: "15px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          ← Ver outras dicas
        </Link>
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