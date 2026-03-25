Looqbox Frontend Challenge - Pokedex SPA

Projeto desenvolvido para o Desafio Técnico para a vaga de Frontend Developer da Looqbox.
Pokédex virtual: Pesquisa de Pokémons com base nos dados retornados da PokeAPI. Interface dinâmica e responsiva.

Stack e ferramentas:
* React + Typescript
* React Router
* Redux Toolkit
* Ant Design
* Tailwind CSS


Implementação:

- Para gerenciamento de estado, utilizei o Redux, guardando o estado inicial de tela (os 20 pokemons da home) e, dessa forma, evitando requisições desnecessárias à API (economia de dados). Isso foi útil em pesquisas e retornos para a home.

- Conforme solicitado no desafio, a barra de pesquisas que implementei retorna o resultado após o Enter do usuário. Isso está explicado no seu placeholder. Também implementei um estado de "Keep typing" para orientar o usuário enquanto digita, melhorando a interatividade com a plataforma.

-Implementei uma tratativa de erro global para as buscas: Se a busca falha ou o pokemon digitado nao existe, um modal AntD é exibido, permitindo que o usuário pesquise novamente (retorno para a home instantâneo, sem recarregar a aplicação).

- Rotas do projeto:
* /:Home (com grid e paginação)
* /pokemon/:name (detalhes)


Para rodar, você deve:
1- instalar as dependências (npm install / yarn install)
2- rodar o projeto em modo dev (npm run dev / yarn dev)


Extras:
- Plataforma responsiva
- Tipagem de interfaces
- Paginação integrada
