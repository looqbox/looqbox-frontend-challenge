# Looqbox Frontend Challenge

Este projeto é uma solução para o desafio técnico frontend da Looqbox. Ele consiste em uma aplicação React moderna, utilizando TypeScript, Vite, Ant Design, Redux Toolkit, React Query, TailwindCSS e testes automatizados com Vitest e Testing Library.

## Vídeo de Demonstração

Confira o vídeo de demonstração da aplicação clicando na imagem abaixo:

[![Vídeo de Demonstração](https://i.postimg.cc/43bYpCQ0/Captura-de-tela-2025-08-17-011512.png)](https://youtu.be/HCTDbauTnVo)

## Índice

-   [Sobre o Projeto](#sobre-o-projeto)
-   [Tecnologias Utilizadas](#tecnologias-utilizadas)
-   [Como Rodar o Projeto](#como-rodar-o-projeto)
-   [Scripts Disponíveis](#scripts-disponíveis)
-   [Estrutura de Pastas](#estrutura-de-pastas)
-   [Testes](#testes)
-   [Padrões e Boas Práticas](#padrões-e-boas-práticas)

## Sobre o Projeto

O objetivo do projeto é listar, filtrar e exibir detalhes de Pokémons consumindo a API pública [PokeAPI](https://pokeapi.co/). O usuário pode favoritar Pokémons, visualizar detalhes, filtrar por tipo, altura e peso, além de navegar por páginas.

## Tecnologias Utilizadas

-   [React 19](https://react.dev/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Vite](https://vitejs.dev/)
-   [Ant Design](https://ant.design/)
-   [Redux Toolkit](https://redux-toolkit.js.org/)
-   [React Query](https://tanstack.com/query/latest)
-   [TailwindCSS](https://tailwindcss.com/)
-   [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)

## Como Rodar o Projeto

1. **Clone o repositório:**

```sh
git clone <url-do-repo>
cd looqbox-frontend-challenge
```

2. **Instale as dependências:**

```sh
npm install
```

3. **Inicie o servidor de desenvolvimento:**

```sh
npm run dev
```

O app estará disponível em `http://localhost:5173` (ou porta informada no terminal).

## Scripts Disponíveis

-   `npm run dev` — Inicia o servidor de desenvolvimento
-   `npm run build` — Gera a build de produção
-   `npm run preview` — Visualiza a build de produção localmente
-   `npm run test` — Executa todos os testes automatizados
-   `npm run test:watch` — Executa os testes em modo watch
-   `npm run lint` — Executa o linter

## Estrutura de Pastas

```
├── src
│   ├── @tests                # Todos os testes automatizados centralizados
│   │   ├── components
│   │   ├── hooks
│   │   └── lib
│   ├── components            # Componentes React reutilizáveis
│   ├── hooks                 # Hooks customizados
│   ├── lib                   # Redux, store, slices, utilitários
│   ├── services              # Serviços de API
│   ├── constants             # Constantes globais
│   ├── @types                # Tipos TypeScript globais
│   ├── pages                 # Páginas da aplicação
│   └── router.tsx            # Configuração das rotas da aplicação
├── public                    # Arquivos estáticos
├── vite.config.ts            # Configuração do Vite
├── vitest.config.ts          # Configuração do Vitest 
└── README.md                 # Este arquivo
```

## Testes

-   Os testes estão centralizados em `src/@tests` e cobrem componentes, hooks e lógica de estado.
-   Para rodar os testes:
    ```sh
    npm run test
    ```
-   Para rodar em modo watch:
    ```sh
    npm run test:watch
    ``` 

## Padrões e Boas Práticas

-   **Componentização:** Componentes pequenos, reutilizáveis e com responsabilidade única.
-   **Tipagem Estrita:** Uso extensivo de TypeScript para segurança e clareza.
-   **Gerenciamento de Estado:** Redux Toolkit para favoritos e React Query para dados remotos.
-   **Estilização:** TailwindCSS para agilidade e consistência visual.
-   **Testes:** Cobertura de lógica e UI, com mocks para dependências externas.
-   **Aliases:** Imports com `@/` para facilitar a navegação e manutenção do código.