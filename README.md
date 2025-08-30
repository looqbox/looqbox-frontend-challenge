# 🚀 Looqbox Test SPA

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0.6-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Node.js](https://img.shields.io/badge/Node.js-18.3+-green?style=for-the-badge&logo=node.js)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**Bem-vindo ao Looqbox Test SPA!** 🎉

_Uma aplicação React + Vite + Tailwind focada em Pokémons, Berries e Itens, com arquitetura moderna, i18n, componentes reutilizáveis e experiência de usuário responsiva._

</div>

---

## 🗂️ Estrutura do Projeto

```
lookbox-test/
├── tests/
│   ├── helpers/               # Testes unitários dos helpers
│   └── hooks/                 # Testes unitários dos hooks customizados
├── messages/                  # Arquivos de internacionalização (en, pt)
├── public/                    # Assets estáticos (favicon, imagens, etc)
├── src/
│   ├── api/                   # APIs para Pokémons, Berries, etc
│   ├── components/            # Componentes de UI e módulos de domínio
│   ├── helpers/               # Funções utilitárias
│   ├── hooks/                 # React hooks customizados
│   ├── pages/                 # Páginas principais da aplicação
│   ├── routes/                # Rotas e layouts
│   ├── styles/                # Estilos globais (Tailwind)
│   ├── types/                 # Tipos TypeScript
│   └── utils/                 # Utilidades gerais
├── ... (configs, scripts, etc)
```

### 🧩 Arquitetura & Princípios

- **Componentização**: UI dividida em módulos reutilizáveis (Cards, Tabelas, Filtros, Sidebar, etc)
- **Hooks customizados**: `usePagination`, `useMobile`, `useThemeToggle`, `useProcessedData` e outros
- **i18n**: Suporte a inglês e português via arquivos em `messages/`
- **SOLID & Clean Code**: Separação de responsabilidades, nomes claros, funções pequenas, tipagem forte
- **Tailwind CSS**: Design moderno, responsivo, com tokens customizados e animações
- **Acessibilidade**: ARIA, navegação por teclado, foco visível

---

## ✨ Funcionalidades

- � **Pokémons, Berries e Itens**: Listagem, busca, filtros e detalhes
- 🔍 **Busca & Filtros**: Por nome, tipo, status, etc
- � **Detalhes**: Painéis detalhados com informações, stats, sprites e ações
- 🕹️ **Estados de UX**: Loading, erro, vazio, feedback visual
- 💾 **Persistência**: Filtros e preferências salvos no localStorage
- 📱 **Responsivo**: Layout adaptado para desktop e mobile
- 🌍 **Internacionalização**: Troca de idioma em tempo real

---

## ⚡ Performance & Qualidade

- 🔄 **Estados de carregamento** com loadings
- ❌ **Tratamento de erros** com mensagens claras
- � **Validação em tempo real** nos formulários
- 🎭 **Feedback visual** para todas as ações
- ♿ **Acessibilidade total**
- 🧹 **Linting e formatação** automáticos

---

## 💻 Instalação & Execução

### Pré-requisitos

- **Node.js 18.3+**
- **npm** ou **yarn**
- **Git**

### Passos rápidos

```bash
# 1. Clone o repositório:
git clone https://github.com/Ftarganski/looqbox.git
cd looqbox

# 2. Instale as dependências:
npm install
# ou
yarn

# 3. Inicie o servidor de desenvolvimento:
npm run dev
# ou
yarn dev

# 4. Acesse no navegador:
http://localhost:5173
```

---

## 🧪 Testes Automatizados

O projeto possui cobertura de testes unitários para helpers, hooks e lógica de domínio usando **Jest** e **Testing Library**.

### Rodando os testes

Execute todos os testes:

```bash
npm run test
# ou
npx jest --config=jest.config.cjs
```

Execute apenas os testes de helpers:

```bash
npx jest --config=jest.config.cjs __tests__/helpers
```

### Exemplos de cobertura

- Testes de helpers: extração de ID de URL, truncamento de texto, internacionalização, sprites, etc.
- Testes de hooks: paginação, responsividade, tema, queries de API (mockadas).

### Boas práticas

- Use mocks para APIs e localStorage.
- Separe testes por domínio (helpers, hooks, components).
- Utilize `jest.spyOn` para funções globais e side effects.
- Garanta que todos os novos helpers e hooks tenham testes!

---

## 📜 Scripts Disponíveis

| Script    | Descrição                            | Comando           |
| --------- | ------------------------------------ | ----------------- |
| `dev`     | Inicia o servidor de desenvolvimento | `npm run dev`     |
| `build`   | Gera build de produção               | `npm run build`   |
| `preview` | Preview do build de produção         | `npm run preview` |
| `test`    | Executa todos os testes unitários    | `npm run test`    |

---

## 🤝 Contribuição

1. **Fork** o projeto
2. Crie uma **branch** (`git checkout -b feature/SuaFeature`)
3. **Commit** suas alterações (`git commit -m 'feat: SuaFeature'`)
4. **Push** para o repositório (`git push origin feature/SuaFeature`)
5. Abra um **Pull Request**

### Padrões de Código

- **ESLint** para lint
- **Prettier** para formatação
- **Commits convencionais**
- **JSDoc** para documentação

---

## 👨‍💻 Autor

Desenvolvido com ❤️ por [Ftarganski](https://github.com/Ftarganski)

- 📧 Email: [dev@targanski.com](mailto:dev@targanski.com)
- 💼 LinkedIn: [Ftarganski](https://www.linkedin.com/in/targanski/)
- 🐱 GitHub: [Ftarganski](https://github.com/Ftarganski)

---

## 📄 Licença

Projeto licenciado sob **MIT License** - veja o arquivo [LICENSE](LICENSE).

---

## 🙏 Agradecimentos

- **Looqbox** pela oportunidade
- **React** pelo framework
- **Vite** pelo build tool
- **Tailwind CSS** pelo design system
- **Comunidade Open Source** pelas ferramentas

---

<div align="center">

**⭐ Se este projeto te ajudou, deixe uma estrela!**

Feito com ☕ por **Ftarganski**
s
