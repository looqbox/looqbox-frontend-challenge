![image](https://github.com/darkmoonsk/darkmoonsk/assets/101902194/424fc1f5-21f3-4747-b9ab-d499e12eca7b)

# Projeto Pokedex

Este projeto é uma implementação de uma Pokedex, usando React, TypeScript, Tailwind CSS, Ant Design e React Router, consumindo a API publica da PokeAPI para obter informações sobre os Pokemons.

### Recursos

- Lista de todos os Pokemons
- Detalhes de cada Pokemon, incluindo suas tipos, habilidades e Ataques.
- Pesquisa de Pokemon por nome.
- Paginação para navegar entre os Pokemons.
- Interface amigável e fácil de usar.
- Responsivo para dispositivos móveis.
- Locais de pokemons (Hoenn, Sinnoh, Unova).

### Instalação

Para instalar e rodar o projeto, siga os seguintes passos:

1. Clone o repositório para a sua máquina local.
2. Navegue até a pasta do projeto
3. Instale as dependências com `npm install`
4. Inicie o servidor com `npm start`
5. Abra o navegador e acesse http://localhost:5173

### Teste

1. `npm test` ou `npm run test:ui`
2. Para verificar a cobertura de teste `npm run test:coverage`

### Tecnologias usadas

- React
- TypeScript
- Tailwind CSS
- Ant Design
- React Router
- Axios
- Tabler Icons
- PokeAPI
- Vite
- React Query
- Vitest
- prettier
- eslint

### Estrutura do projeto

O projeto está estruturado da seguinte maneira:

- src/components: Contém componentes reutilizáveis da UI, como Footer, Menu, e cartões de Pokémon.
- src/constants: Mantém constantes relacionadas aos tipos de Pokémon.
- src/contexts: Inclui o PokemonContextProvider para gerenciar o estado relacionado a Pokémon.
- src/core: Contém modelos para Locais, PokeAPI, e Pokémon, além de casos de uso para buscar locais e dados de Pokémon.
- src/data: Contém um arquivo JSON com nomes de Pokémon (Usado no autocomplete da barra de busca).
- src/hooks: Personaliza hooks para gerenciar dados de Pokémon, localizações, busca, etc.
- src/routes: Define as rotas da aplicação usando React Router.
- src/screens: Contém diferentes telas como HomeScreen, LocationsScreen, PokemonInfoScreen, e PokemonsScreen.
- src/utils: Utilitários.
- test: Contém testes unitários para componentes e os casos de uso.
