# Looqbox FrontEnd Challenge
![Screenshot](https://user-images.githubusercontent.com/51219408/116856384-74bd2700-abd1-11eb-9769-ac856fbd35f3.png)

## Deploy
Veja aqui como ficou o projeto! 
- [deploy](https://loqboxtest.vercel.app/)

## Instalação das dependências :wrench:
<p>Execute esse comando em seu terminal na pasta do projeto</p>

```sh
yarn 
```

## Funcionamento das Paginas
**Index**: Na pagina principal, existem dois componentes, ```<IndexPageDektop/> ``` e ```<IndexPageMobile/>``` . Elas são responsivas, aparecendo somente em um tamanho de tela especifico

**Search.tsx**: Esta é a pagina de pesquisa de pokémons, temos as seguintes funcionalidades:
- Ao entrar na tela, é carregado os 6 primeiros pokémons;
- O Botão pesquisar encontra um pokemon de acordo com o valor do input ao lado;
- Caso não seja encontrado algum pokemon, é exibido um erro na tela, o mesmo vale se o usuário deixar o input vazio;
- O botão "Carregar mais pokemons" faz uma nova pesquisa procurando mais 6 pokemons com a paginação da API
- Cada Card de pokemon contém o nome, os types e sua Imagem, respectivamente. A Cor dos cards e das tag types mudam de acordo com o valor do tipo do pokémon. Por exemplo, se o pokemon for do tipo FIRE, o card será Vermelho claro, se for GRASS, será verde e etc.
- Os nomes dos pokemons contém um link que carrega a proxima pagina, baseado nos dados que contém na propriedade do componente CardPokemon

**Pokemons/pokemon.tsx** : Dentro da pasta POKEMON, existe um arquivo chamado [pokemon].tsx que será explicado como funciona logo abaixo:
- O NextJS é um framework capaz de criar Static Pages. São paginas estaticas onde não é necessario comsumir uma api para carregar os dados da mesma;
- Quando colocamos '[]' entre o nome do arquivo, indicamos que a pagina recebe um Params, que terá seus dados dinamicamente alterados de acordo com o valor do parâmetro;
- Dentro desse arquivo, encontra-se duas funções importantes: **getStaticProps** e **getStaticPaths**;
- **getStaticProps**: É uma função interna do  NextJS que realiza uma criação de dados estaticos. Dentro da função, é informado qual o parâmetro que esta vindo da URL da pagina, a partir dele é realizado uma busca na API onde ira retornar os dados que consta na API correspondente aquele pârametro
- No NextJS, quando temos uma pagina com parâmtro, é obrigatorio a função **getStaticPaths**. Esta função é responsavel por informar quias paginas estaticas o NextJS vai gerar no momento do comando Yarn Build. Essa build é composta por paginas que serão estaticas de acordo com cada informação que o Next encontrar na chamada da API na função **getStaticPaths**
- Neste caso, para cada resultado que a função encontrar na poke API, ele ir gerar uma nova pagina com as informações daquele pokemon baseado no  ```api.get(`pokemon/${pokemon}```
- Temos o seguinte codigo neste arquivo:
```
export default function Pokemon({ poke }) {
    const { isFallback } = useRouter();
    if (isFallback) {
        return (
            <Box padding="6" boxShadow="lg" bg="white">
                <SkeletonCircle size="10" />
                <SkeletonText mt="4" noOfLines={8} spacing="4" />
            </Box>
        );
    }
 ``` 
 - Dentro da função **getStaticPaths**, temos:
 ``` return {
        paths,
        fallback: true,
    };
  ``` 
 - Quando deixamos o fallback com o valor TRUE, indicamos que, caso o Next não encontre uma pagina estatica que foi gerada por ele no momento da BUILD, ele irá procurar na api com os Parms informado e gerar uma nova pagina estatica. Temos que indicar também que tela o Next irá mostrar enquanto ele estiver buscando este novo dado, no caso deixamos uma '<Box>' carregando enquanto ele gera essa pagina

## Tecnologias utilizadas
- [React docs](https://reactjs.org/docs/getting-started.html)
- [PokeApi docs](https://pokeapi.co/docs/v2.html)
- [NextJS](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Axios](https://www.google.com/url?sa=t&source=web&rct=j&url=https://github.com/axios/axios&ved=2ahUKEwiTl6_WxK3wAhXhLLkGHUNlBgIQFjAHegQIDBAC&usg=AOvVaw266wVW3XPRY46nOw2ULXdh)
- [Eslint](https://eslint.org/)
- [Typescript](https://www.typescriptlang.org/)
