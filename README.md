## 📂 Projeto de Roteamento com Express.js
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)
- Este projeto demonstra um servidor Node.js usando Express.js para roteamento básico, servindo páginas HTML estáticas com rotas dinâmicas.

## 🚀 Funcionalidades
- **Rota principal** (/): Retorna a página home.html.
- **Rota dinâmica** (/:id): Retorna a página user.html para qualquer ID passado na URL.
- **Arquivos estáticos:** A pasta public é usada para servir CSS, JS e outros assets.
  
## Rota	Método	Descrição	Página Retornada:
- /	GET	Página inicial	home.html
- /:id	GET	Página de usuário (qualquer ID)	user.html

Exemplos de acesso:
- **http://localhost:5000** → Mostra home.html
- **http://localhost:5000/123** → Mostra user.html (ID dinâmico)
- **http://localhost:5000/abc** → Também mostra user.html (qualquer valor)

## 🚀 Como Executar
Pré-requisitos
- Node.js (v18+)
- NPM ou Yarn
