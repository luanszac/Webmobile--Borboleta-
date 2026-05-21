export async function GET() {

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

  return Response.json(estados);

}
