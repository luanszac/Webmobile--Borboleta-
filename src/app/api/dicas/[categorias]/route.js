const dicasConteudo = {
  alimentacao: {
    titulo: "Dicas de Alimentação",
    dicas: [
      {
        texto: "Faça uma lista antes de ir ao mercado.",
        imagem: "https://images.unsplash.com/photo-1542838132-92c53300491e",
      },
      {
        texto: "Evite compras por impulso.",
        imagem: "https://images.unsplash.com/photo-1579113800032-c38bd7635818",
      },
      {
        texto: "Busque por atacados e promoções.",
        imagem: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
      },
      {
        texto: "Cozinhe em casa ao invés de pedir delivery.",
        imagem: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
      },
    ],
  },

  transporte: {
    titulo: "Dicas de Transporte",
    dicas: [
      {
        texto: "Use transporte público quando possível.",
        imagem: "https://images.unsplash.com/photo-1474487548417-781cb71495f3",
      },
      {
        texto: "Compartilhe caronas.",
        imagem: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d",
      },
      {
        texto: "Mantenha a manutenção do veículo em dia.",
        imagem: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc",
      },
      {
        texto: "Planeje rotas para economizar combustível.",
        imagem: "https://images.unsplash.com/photo-1628655207872-76a915ecc5e3",
      },
    ],
  },

  moradia: {
    titulo: "Dicas de Moradia",
    dicas: [
      {
        texto: "Apague luzes ao sair dos cômodos.",
        imagem: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      },
      {
        texto: "Reduza o tempo no banho.",
        imagem: "https://images.unsplash.com/photo-1576678433413-202829a1ab98?w=800&auto=format&fit=crop",
      },
      {
        texto: "Use lâmpadas LED.",
        imagem: "https://images.unsplash.com/photo-1513694203232-719a280e022f",
      },
      {
        texto: "Evite desperdício de água.",
        imagem: "https://images.unsplash.com/photo-1521207418485-99c705420785",
      },
    ],
  },

  lazer: {
    titulo: "Dicas de Lazer",
    dicas: [
      {
        texto: "Procure eventos gratuitos na cidade.",
        imagem: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      },
      {
        texto: "Faça passeios ao ar livre.",
        imagem: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      },
      {
        texto: "Use serviços de streaming compartilhados.",
        imagem: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
      },
      {
        texto: "Planeje viagens com antecedência.",
        imagem: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      },
    ],
  },
};

export async function GET(request, { params }) {

  const { categoria } = await params;

  const conteudo = dicasConteudo[categoria];

  if (!conteudo) {
    return Response.json(
      { erro: "Categoria não encontrada" },
      { status: 404 }
    );
  }

  return Response.json(conteudo);

}