# National Pokédex

Uma aplicação web simples, destinada a exibir itens retornados da PokéAPI (https://pokeapi.co/docs/v2).

É possível navegar em páginas específicas de cada pokémon, como também pesquisar por algum específico que não esteja presente na lista.

## Requisitos mínimos

- [x] In the main page you need a search bar and a loaded list of pokemons (random or just hardcoded)
- [x] Clicking on any pokemon shows a card/modal/page with that pokemon's info
- [x] Searching and pressing enter on the search bar will show the result instead of the list
- [x] Your app needs at least two different routes (/home /more for example -> be creative!)

You can use any dependency you want, (axios, bootstrap, material ui...)

### Bonus points!

- [x] Documentation
- [x] Linting
- [ ] Charts
- [ ] Unit Testing
- [ ] Ant Design

### Stack

- React
- TypeScript
- Vite
- ESLint/Prettier
- TailwindCSS
- shadcn
- Axios
- React Query
- Recharts

## Detalhes do projeto

### Sobre

Este é o v2 do projeto, iniciado em 11/03/2024. Eu decidi reiniciar o projeto, devido à minha insatisfação com os resultados anteriores na v1.

A adoção de TailwindCSS/shadcn ocorreu devido ao interesse em agilizar o desenvolvimento, garantir consistência e facilitar a criação de interfaces de alta qualidade. Além disso, shadcn implementa várias considerações de acessibilidade, o que é sempre um bônus em diferentes métricas.

Já que quase 100% do estado na aplicação é proveniente do servidor, React Query é a opção mais apropriada. Além de gerenciar o estado, também é eficiente no cacheamento, memoização e deduplicação, além de fornecer várias formas de lidar com os diferentes estados da requisição. A integração com o Axios fornece um melhor error handling e facilita ainda mais o manuseio dos resultados.

Zod fornece validação de schemas, permitindo uma validação de tipos mais forte que o TypeScript em casos específicos.

React Hook Form foi escolhido pela facilidade de uso e ganho de performance na manipulação de formulários.

### Estrutura de pastas

#### api

Armazena funções reutilizáveis, relacionados à requisições para a API.

#### assets

Imagens e ícones de uso geral.

#### components

Contém os vários componentes da aplicação. Possui subdivisões associados a cada página ou categoria: por exemplo, "ui" armazena componentes instalados pelo shadcn.

Componentes reutilizados em todas as páginas não pertencem a nenhuma subdivisão. Caso houvessem mais de 3, uma pasta "miscellaneous" ou semelhante seria apropriada.

#### lib

Possui os arquivos de configuração para cada biblioteca.

#### pages

Contém as páginas as quais o usuário irá navegar.

A subpasta "layouts" possui um template a ser reutilizado.

### Performance

O Lighthouse foi essencial para o desenvolvimento. Em conjunto com uma aba anônima e o modo **preview** fornecido pelo vite, é possível obter um resultado mais confiável e sem interferência externa (extensões, por exemplo).

Várias otimizações foram realizadas em diversos aspectos, desde a largura e altura fixas em cada imagem como o uso de React.lazy().

O objetivo foi atingir o mínimo de 90 em cada métrica, considerando a possibilidade de variância momentânea.

A Home exibe apenas 41 pokemóns, por causa do impacto na performance; renderizar apenas os 151 originais de Kanto afetou significativamente as métricas do Lighthouse.

### Patterns

A Composition Pattern foi bastante utilizada, tanto pelo shadcn quanto por componentes próprios. A intenção é repartir cada parte do componente e importá-las de forma modular, facilitando a manutenção e melhorando a legibilidade do código. Especialmente visível em "pokemon-details".

### Outros

env.ts: responsável por validar se a variável de ambiente existe ou foi carregada corretamente.

### Dev

`pnpm i`, então `pnpm dev`.

### Prod

`pnpm build`

### Links úteis

https://stackoverflow.com/questions/71275687/type-of-handlesubmit-parameter-in-react-hook-form

https://web.dev/articles/code-splitting-suspense?hl=pt-br

https://tkdodo.eu/blog/practical-react-query#treat-the-query-key-like-a-dependency-array

https://stackoverflow.com/questions/71967007/how-to-fetch-with-parameters-using-react-query
