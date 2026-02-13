## Desafio Looqbox Frontend

Aplicação frontend desenvolvida como parte do **desafio técnico da Looqbox**, utilizando uma stack moderna com **React**, **TypeScript**, **Vite**, **Redux Toolkit** e **Tailwind CSS**, além de componentes visuais com **Ant Design**.

O foco do projeto é entregar uma experiência:

- **Rápida** (build com Vite, React 19)
- **Escalável** (Redux Toolkit, arquitetura organizada)
- **Moderna e intuitiva** (design consistente, componentes reutilizáveis, boas práticas de UX)

---

## Tecnologias principais

- **React 19** (`react`, `react-dom`)
- **TypeScript**
- **Vite** (ferramenta de build e dev-server)
- **Redux Toolkit** (`@reduxjs/toolkit`, `react-redux`)
- **React Router** (`react-router`) para navegação
- **Ant Design** (`antd`) para componentes de UI
- **Tailwind CSS 4** (`tailwindcss`, `@tailwindcss/vite`, `tailwind-merge`) para estilização utilitária
- **Axios** para requisições HTTP
- **React Player** (`react-player`) para mídia/vídeo quando necessário

---

## Dependências

**Produção (`dependencies`)**

- `@reduxjs/toolkit`
- `@tailwindcss/vite`
- `antd`
- `axios`
- `lucide-react`
- `react`
- `react-dom`
- `react-player`
- `react-redux`
- `react-router`
- `tailwind-merge`
- `tailwindcss`

**Desenvolvimento (`devDependencies`)**

- `vite`
- `@vitejs/plugin-react`
- `typescript`
- `typescript-eslint`
- `eslint`
- `@eslint/js`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `globals`
- `@types/node`
- `@types/react`
- `@types/react-dom`

---

## Pré-requisitos

Antes de rodar o projeto, garanta que você tem instalado:

- **Node.js** (versão LTS recomendada, ex: 20.x)
- **npm** (ou outro gerenciador compatível, como `pnpm` ou `yarn`)
- Acesso à internet para instalar as dependências

---

## Como executar o projeto

### 1. Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd looqbox-frontend-challenge
```

### 2. Instalar dependências

Com **npm**:

```bash
npm install
```

_(Caso utilize `pnpm` ou `yarn`, adapte o comando conforme o gerenciador de pacotes escolhido.)_

### 3. Rodar em ambiente de desenvolvimento

```bash
npm run dev
```

O Vite irá exibir no terminal o endereço local, normalmente algo como:

```bash
http://localhost:5173
```

Acesse esse endereço no navegador para visualizar a aplicação.

### 4. Gerar build de produção

```bash
npm run build
```

O bundle final será gerado na pasta `dist/`.

### 5. Visualizar o build (preview)

```bash
npm run preview
```

Esse comando sobe um servidor local que serve o build de produção, útil para testar antes de publicar em produção.

---

## Scripts disponíveis

- **`npm run dev`**: inicia o servidor de desenvolvimento do Vite.
- **`npm run build`**: compila o projeto para produção.
- **`npm run preview`**: roda um servidor local servindo o build gerado.
- **`npm run lint`**: executa o ESLint em todo o projeto.

---

## Arquitetura (visão geral)

De forma geral, o projeto segue uma estrutura típica de aplicações React com Vite:

- **`src/`**: código-fonte da aplicação
  - **`components/`**: componentes reutilizáveis de UI
  - **`pages/`** (ou similar): páginas e views principais
  - **`store/`** (ou `redux/`): configuração do Redux Toolkit e slices
  - **`routes/`**: configuração de rotas com `react-router` (se aplicável)
  - **`styles/`**: estilos globais, configuração do Tailwind (quando não centralizado em arquivos root)

Caso você esteja avaliando o desafio, recomenda-se começar a leitura pelo arquivo de entrada principal (geralmente `main.tsx` ou equivalente) e seguir as importações para entender o fluxo.

---

## Padrões de código e qualidade

- **TypeScript** para tipagem estática e melhor manutenção.
- **ESLint** configurado para garantir um estilo consistente e evitar problemas comuns.
- **React Hooks** com `eslint-plugin-react-hooks` para boas práticas de hooks.
- **Organização de estado global** com Redux Toolkit, priorizando reducers enxutos e actions bem definidas.

Para rodar a análise estática:

```bash
npm run lint
```

---

## Experiência de uso (UX)

A aplicação foi pensada para ser:

- **Responsiva**: adaptável a diferentes tamanhos de tela.
- **Clara**: textos, ícones (`lucide-react`) e componentes visuais (`antd`) usados para guiar o usuário.
- **Consistente**: Tailwind e Ant Design ajudam a manter um design unificado em todas as telas.

Sinta-se à vontade para ajustar cores, espaçamentos e tipografia nos arquivos de estilo/Tailwind para alinhar à identidade visual desejada.

---

## Como contribuir / adaptar

- **Fork** o repositório ou crie uma nova branch.
- Faça suas alterações seguindo os padrões de código existentes.
- Execute `npm run lint` e `npm run build` para garantir que tudo continua funcionando.
- Abra um Pull Request descrevendo de forma objetiva o que foi alterado.

---

## Licença

Este projeto é de uso específico para o **desafio técnico Looqbox**. Consulte o mantenedor do repositório antes de reutilizar o código em outros contextos.
