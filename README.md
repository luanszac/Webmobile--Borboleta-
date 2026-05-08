# Webmobile--Borboleta-

## 1 - Nome e RA dos Integrantes

•⁠  ⁠Letícia Sampaio Cosmo – RA: 10438865  
•⁠  ⁠Henrique Nellessen – RA: 10388168  
•⁠  ⁠Yasmin Reis Toledo – RA: 10419669  
•⁠  ⁠Luan Souza Costa – RA: 10750029  
•⁠  ⁠João Guilherme Leal – RA: 10439526  

---

## 2 - Parte 1.

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

## 2 - 

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
