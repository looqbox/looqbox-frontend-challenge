# O projeto

O LooqPoke foi criado para o challenge da Lockbox, onde o desafio era criar um SPA consumindo a [Poke Api](https://pokeapi.co/), assim podendo os pokemons serem listados em tela, com uma barra de pesquisa para que seja possível fazer a busca por nome ou código do mesmo.

> ## Tecnologia utilizada
Para o projeto foi utilizada as seguintes tecnologias
>
> - React js
> - Sass
> - Axios

### Iniciando o projeto

Para o iniciar o projeto é bem simples.
Primeiro passo - Você terá que rodar o comando para instalar as dependências do projeto, sendo assim : 
```javascript
    yarn install
```
ou 

```javascript
   npm install
```

Logo após as dependências serem instaladas com êxito, basta rodar apenas mais um comando para o projeto se iniciar automaticamente em modo watch. assim abrindo uma porta 3000.
sendo assim : 
```javascript
    yarn start
```
ou 

```javascript
   npm start
```

### App
Início - A aplicação é bem simples, quando entrar terá um loading para fazer a busca inicial dos pokémons assim sendo listados em telas. 
Barra de pesquisa - Podendo pesquisar o Pokemon a partir do Nome ou ID após o enter ser pressionado.
[IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) - Foi utilizado para a partir do scroll identificar o final e assim fazer a busca dos próximos 50 pokemons.
Pokemon/Item - A cada item/pokemon listado, terá um botão de "more info" assim podendo abrir cada um deles e mostrando as especificações dos base stats