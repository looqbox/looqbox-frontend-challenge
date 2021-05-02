# Looqbox FrontEnd Challenge

![Looqbox](https://github.com/looqbox/looqbox-frontend-challenge/blob/master/logo.png)

## Challenge

Desafio de criar uma single page application usando [ReactJS](https://reactjs.org/docs/getting-started.html) e a [Pokeapi](https://pokeapi.co/)

## How to start

Para iniciar esse projeto na sua máquina, clone esse repositório utilizando o comando
`git clone https://github.com/Matheus-SS/looqbox-frontend-challenge.git` ou baixe-o utilizando as outras opções do github.

Após isso abra seu terminal e instale todas as dependências.
Se estiver usando o yarn, apenas digite:

- `yarn`

Se estiver utilizando npm, digite:

- `npm install`

Utilize o gerenciador de pacote da sua preferência, no meu caso eu utilizarei o yarn.

Após instalar todas as dependências para rodar o projeto, utilize o comando:

- `yarn dev` ou `npm run dev`, isso fará com que rode no modo de desenvolvedor.

- `yarn build`ou `npm run build` isso fará com que rode no modo de produção,assim gerando um arquivo dist do projeto.

### As principais bibliotecas utilizadas:

- [react-apexcharts](https://apexcharts.com/docs/react-charts/)
- [axios](https://github.com/axios/axios)
- [react](https://reactjs.org/docs/getting-started.html)
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-modal](https://github.com/reactjs/react-modal)
- [babel](https://babeljs.io/docs/en/)
- [eslint](https://eslint.org/docs/user-guide/getting-started)
- [prettier](https://prettier.io/docs/en/install.html)
- [webpack](https://webpack.js.org/)
- [react-refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin)
- [typescript](https://www.typescriptlang.org/)

## Componentes:

**Card**: Componente que contém algumas informações dos pokemon,as cores das letras de todos os
cards são baseadas no tipo do pokemon, exemplo: pokemon de fogo, letras em vermelho, pokemon de água letras em azul.
Esse componente recebe uma propriedade `onPokemon` que recebe as informações do pokemon.
Ao clicar nesse componente o um modal será aberto com mais informações sobre o pokemon.

**Loader**: Um componente que contém uma imagem de loading.

**Modal**: Um componente que contem várias informações do pokemon.
Contém a propriedade `onHandleModalToggle` que recebe uma função de abrir e fechar o modal.
Uma propriedade `onModalIsOpen` que recebe um valor boolean se o modal está aberto ou não.
Uma propriedade `onPokemon` que recebe as informações do pokemon.

**MoreButton**: Um componente que contém um botão de "load more" e
contém uma propriedade `onLoadMore` que recebe uma função que carrega mais pokemons.

## Funcionalidades:

**Reload**: Ao clicar na imagem da logo os pokemons serão carregados para sua versão original,
ou seja, se você buscar por algum pokemon ou carregar vários pokemon,quando clicar na logo
será renderizado sempre os primeiros 6 pokemons.

**Search**: Será buscado um pokemon na api, caso não encontre aparecerá uma mensagem de erro.

**LoadMore**: Ao clicar nesse botão será carregado mais 6 pokemon.

**Loading**: Ao carregar os pokemons tanto na listagem como na busca, aprecerá uma mensagem de loading.

**Up to top**: Ao descer a scroll bar até certo ponto aparecerá um botão para subir até o início da página.
Obs.: Para visualizar o efeito de "smooth" do scroll, caso esteja utilizando o google chrome copie e cole isso no navegador `chrome://flags/#smooth-scrolling`. Aparecerá opções de flag do chrome ative a opção "Smooth Scrolling" para que o chrome reconheça esse tipo de scroll. Ele pedirá para reiniciar o navegador, ao reiniciar o navegador o efeito de scroll já estará funcionando.

**Open Modal**: Ao clicar em algum card do pokemon abrirá um modal com mais informações do pokemon.
