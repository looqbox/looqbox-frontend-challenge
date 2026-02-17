# Pokédex

Single Page Application (SPA) que exibe uma lista de Pokémon e permite buscar por nome ou ID, consumindo dados da [PokeAPI](https://pokeapi.co/). A aplicação é dinâmica: todo o conteúdo é atualizado sem recarregar a página.

## Funcionalidades

- **Página inicial**: barra de busca e lista pré-carregada de Pokémon (com paginação)
- **Busca**: digite nome ou ID do Pokémon e pressione **Enter** para ver o resultado no lugar da lista
- **Detalhes**: clique em qualquer Pokémon para abrir uma página com informações completas (tipos, altura, peso, habilidades, estatísticas base e descrição)
- **Rotas**:
  - `/` — Home (lista e busca)
  - `/pokemon/:id` — Detalhes do Pokémon

## Tecnologias

- **React 19** + **TypeScript**
- **Vite** — build e dev server
- **React Router DOM** — rotas (SPA)
- **Redux Toolkit** — estado global (lista, busca, paginação)
- **Ant Design** — componentes de UI (cards, input, paginação, alertas)
- **Tailwind CSS** — estilização
- **PokeAPI** — fonte de dados dos Pokémon

## Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado: LTS)
- npm ou yarn

## Como rodar

1. **Instalar dependências**

   ```bash
   npm install
   ```

2. **Subir o servidor de desenvolvimento**

   ```bash
   npm run dev
   ```

   Acesse no navegador o endereço indicado (geralmente `http://localhost:5173`).

3. **Build para produção**

   ```bash
   npm run build
   ```

4. **Visualizar o build**

   ```bash
   npm run preview
   ```

## Scripts disponíveis

| Comando            | Descrição                            |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Inicia o servidor de desenvolvimento |
| `npm run build`    | Gera o build de produção             |
| `npm run preview`  | Serve o build localmente             |
| `npm run lint`     | Executa o ESLint                     |
| `npm run test`     | Roda os testes (Vitest)              |
| `npm run test:run` | Roda os testes uma vez               |

## Estrutura do projeto (resumo)

```
src/
├── components/     # SearchBar, PokemonCard
├── pages/          # Home, PokemonDetails
├── store/          # Redux (pokemonSlice, types)
├── services/       # apiMon.ts (chamadas à PokeAPI)
├── utils/          # constantes (cores, imagens)
├── App.tsx         # rotas principais
└── main.tsx        # entrada da aplicação
```

## API utilizada

- [PokeAPI](https://pokeapi.co/) — endpoints usados:
  - `GET /pokemon?offset=&limit=` — lista de Pokémon
  - `GET /pokemon/{id ou name}` — dados do Pokémon
  - `GET /pokemon-species/{id}` — descrição e texto de sabor

## Licença

Projeto de estudo. Dados dos Pokémon © Pokémon / Nintendo / Game Freak; API mantida pela comunidade PokeAPI.
