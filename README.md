<<<<<<< HEAD
# Webmobile--Borboleta-

## 1 - Nome e RA dos Integrantes

•⁠  ⁠Letícia Sampaio Cosmo – RA: 10438865  
•⁠  ⁠Henrique Nellessen – RA: 10388168  
•⁠  ⁠Yasmin Reis Toledo – RA: 10419669  
•⁠  ⁠Luan Souza Costa – RA: 10750029  
•⁠  ⁠João Guilherme Leal – RA: 10439526  

---

## 2 - Estrutura inicial em Next.js e migração do HTML e CSS geral.

Como evolução do projeto, foram implementadas rotas simples para simular navegação entre diferentes telas da aplicação, sem a necessidade de recarregar a página.

Foram criadas novas interfaces acessadas por meio dos botões principais do sistema, proporcionando melhor organização e experiência do usuário.

Rotas implementadas

•⁠ ⁠*/comparar* → acessada ao clicar no botão “Comparar cidades”, direciona para uma nova tela dedicada à comparação

•⁠ ⁠*/calcular* → acessada ao clicar em “Calcular gastos mensais”, exibindo uma tela específica para inserção e cálculo de despesas

•⁠ ⁠*/dicas* → acessada ao clicar em “Ver dicas de economia”, apresentando sugestões para redução de custos

Rota dinâmica

Também foi implementada uma rota dinâmica:

•⁠ ⁠*/comparar/:cidade*

Essa rota permite carregar informações de acordo com a cidade selecionada pelo usuário, tornando o sistema mais dinâmico e preparado para futuras expansões, como integração com dados reais.

<img width="1068" height="1600" alt="WhatsApp Image 2026-04-23 at 22 06 35" src="https://github.com/user-attachments/assets/4b176ad3-9e12-4113-827b-6422197b271b" />

<img width="842" height="1600" alt="WhatsApp Image 2026-04-23 at 22 07 13" src="https://github.com/user-attachments/assets/5dd0f9d0-dea1-4681-b8b1-9a4a0fb9ccd7" />

---

## 2 - Avanço do projeto.

Como continuidade da evolução do projeto, realizamos a migração completa da estrutura original desenvolvida em HTML, CSS e JavaScript puro para o framework Next.js, modernizando a aplicação e preparando o sistema para futuras expansões.

Essa transição exigiu a adaptação de diversas diferenças entre as tecnologias utilizadas anteriormente e a nova arquitetura baseada em React/Next.js. Elementos antes construídos de forma estática passaram a ser organizados em componentes reutilizáveis, melhorando a manutenção do código, a escalabilidade e a produtividade no desenvolvimento.

Além disso, houve a reorganização dos arquivos de estilo e scripts, separando responsabilidades entre interface, lógica e navegação. Com isso, a aplicação passou a contar com uma estrutura mais profissional, otimizada e alinhada às práticas atuais do desenvolvimento web.

Principais melhorias obtidas com a migração para Next.js

• Organização modular do projeto em páginas e componentes
• Melhor reaproveitamento de código
• Navegação interna mais rápida, sem recarregamento de página
• Melhor desempenho e escalabilidade da aplicação

Implementação das rotas simples

Após a migração, também foram implementadas rotas simples de navegação, permitindo que os botões principais da aplicação direcionem o usuário para novas páginas específicas dentro do sistema.

As rotas criadas foram:

• /comparar → acessada ao clicar no botão “Comparar cidades”, levando o usuário para uma tela dedicada à comparação entre cidades, permitindo futuras análises de custo de vida, oportunidades e indicadores urbanos.

• /calcular → acessada ao clicar em “Calcular gastos mensais”, direcionando para uma página voltada ao preenchimento de despesas mensais, possibilitando cálculos personalizados e controle financeiro.

• /dicas → acessada ao clicar em “Ver dicas de economia”, abrindo uma nova interface destinada à exibição de sugestões para redução de gastos e melhor planejamento financeiro.

Aprofundamento da rota /dicas

A rota /dicas foi pensada como um espaço interativo para orientar o usuário com boas práticas financeiras. Nela, o sistema poderá apresentar conteúdos como:

• Sugestões para economizar em contas básicas
• Organização de orçamento mensal
• Planejamento de compras
• Controle de gastos desnecessários
• Comparação de preços e consumo consciente
• Métodos de reserva de emergência

---

## 3 - Avanço do projeto.

Como evolução recente do projeto, foram realizadas melhorias importantes na estrutura e na experiência do usuário, com foco em tornar a aplicação mais dinâmica, organizada e próxima de um sistema real de orientação financeira.
A principal atualização foi a implementação de uma rota dinâmica na seção /dicas, permitindo que o conteúdo seja carregado de forma personalizada de acordo com a categoria selecionada pelo usuário. Agora, ao acessar caminhos como:


• /dicas/alimentacao
• /dicas/transporte
• /dicas/moradia
• /dicas/lazer

O sistema exibe automaticamente dicas específicas relacionadas ao tema escolhido, com textos e imagens correspondentes. As dicas também foram reestruturadas para um formato mais completo, incluindo texto e imagem em cada card, deixando a interface mais visual e intuitiva.
Além disso, a interface foi aprimorada com a organização em cards e melhor hierarquia visual, contribuindo para uma navegação mais clara e uma experiência mais agradável ao usuário.

Durante o desenvolvimento do projeto, foi utilizado apoio de Inteligência Artificial (ChatGPT) como ferramenta auxiliar. A IA foi empregada principalmente para:

• Correção de erros de código e estrutura (debug)
• Sugestões de melhoria na organização da interface
• Apoio na explicação e documentação do README
• Orientação sobre boas práticas de desenvolvimento em Next.js

---

## 4 - Implementação da API

Como evolução recente do projeto, foi implementada uma API própria para tornar a aplicação mais dinâmica e próxima de um sistema real de mercado.

Com essa implementação, a aplicação passou a contar com uma separação mais clara entre frontend e backend, permitindo que os dados utilizados nas funcionalidades sejam fornecidos por requisições à API, em vez de depender exclusivamente de informações estáticas no código.

A API foi desenvolvida para centralizar a lógica de fornecimento de dados da aplicação, permitindo:

• Retorno de informações para comparação entre cidades  
• Disponibilização de dados para cálculo de gastos mensais  
• Fornecimento de dicas financeiras de forma dinâmica  
• Melhor organização da estrutura do projeto  

Benefícios obtidos com a implementação:

• Separação entre interface e lógica de negócio  
• Código mais organizado e escalável  
• Facilidade de manutenção e futuras melhorias  
• Estrutura mais próxima de aplicações reais utilizadas no mercado  
• Preparação para futura integração com banco de dados externo  

## Tutorial.

1. Pré-requisitos

Antes de começar, é necessário ter instalado:

• Node.js (versão 16 ou superior)
• npm ou yarn
• Git (opcional, mas recomendado)

---

2. Se o projeto estiver no GitHub:

• git clone https://github.com/luanszac/Webmobile--Borboleta-

Depois entre na pasta:

• cd Webmobile--Borboleta-

---
3. Instalando dependências

Instale todas as dependências do projeto:

• npm install

---

4. Rodando o projeto

Para iniciar o servidor de desenvolvimento:

• npm run dev

Depois acesse no navegador:

• http://localhost:3000

---

5. Executando a API

Para iniciar a API do projeto:

• npm run server

Após iniciar, a API ficará disponível localmente para atender as requisições da aplicação frontend. Exemplo: 

• http://localhost:5000

=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> ae50ec1 (finalizacao do projeto)
