![image](https://user-images.githubusercontent.com/55189046/118431359-8a8c1b00-b6ac-11eb-9af9-61a21c5dfc03.png)

# Sobre o projeto

Esse projeto foi desenvolvido para o desafio para vaga de desenvolvedor Frontend da LooqBox, o desafio proposto foi implementar uma <a href="https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon">Pokedex</a> utilizando a api <a href="https://pokeapi.co/">PokeApi</a> onde é carregado uma lista de pokemons e também os seus atributos.

## Como utilizar a pokedex

Para utilizar a pokedex online, basta [acessar o site](https://pokedex-online.vercel.app/) e ser feliz :)

## Funcionalidades

Na aplicação desenvolvida contém duas telas
 * Pagina Home - nela inicialmente são apresentados os 20 primeiros pokemons porém ela conta com um botão para carregar mais pokemons de 20 em 20, nessa tela também é possível procurar um pokemon especifico através da Search Bar.

 * Pagina Poke - nela é carregado as informações de um pokemon espefico, sendo essas informações o Tipo, Stats, Cadeia de evolução e Habilidades. Também é possível navegar pro próximo pokemon ou para o anterior de acordo com o Index do pokemon atual.

## Arquitetura do código

Sobre a arquitetura do código ela foi escolhida com base na arquitetura que venho utilizando tanto no meu trabalho quanto nos meus projetos academicos.
  * `src` – nessa pasta fica contido todo o source code da minha aplicação
    *  `pages` – contém as paginas da aplicação
    *  `shared` – nessa pasta fica tudo o que é compartilhado tanto de pagina para pagina como de componente para componente
	* `assets` – nessa pasta contém todas minhas imagens e icones que são utilizados na aplicação
	  * `icons` – nessa pasta fica os icones
	  * `images` – nessa pasta fica as imagens
	* `components` – aqui ficam os components reutilizaveis, eu adotei um padrão de componentes chamado Atomic Design, nele eu separo os componentes entre pastas chamdas atoms / molecules / organisms / templates, o objetivo é facilitar a estrutura para caso o projeto escale
	* `contexts` – aqui ficam os contextos da minha aplicação
	* `DTOs` – nessa pasta eu deixo as minhas interfaces que vou utilizar globalmente
	* `hooks` – nessa pasta ficam os meus hooks personalizados
	* `services` – nessa pasta ficam os meus serviços tanto de auth e api
	* `styles` – nessa pasta fica os meus estilos globais da aplicação
	* `utils` – aqui ficam minhas funções uteis que são utilizados em mais de um local


## Requisitos para rodar o projeto
- [Npm](https://www.npmjs.com/)
- [NodeJs](https://nodejs.org/en/)

## Como rodar o projeto

Para rodar é essencial que tenha o [node](https://nodejs.org/en/) instalado, caso não tenha siga o passo a passo logo abaixo

#### Ubuntu 
```
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Debian, as root
```
curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs
```

#### [Outra distribuição Linux](https://nodejs.org/en/download/package-manager/)

#### Windows
Acesse o site do [NodeJs](https://nodejs.org/en/) e instale a versão LTS

Com tudo já instalado primeiro faça o clone deste repositório
```
https://github.com/LeonardoMessias98/looqbox-frontend-challenge.git
```

Acesse a pasta do repositório pelo terminal
```
  cd looqbox-frontend-challenge
  cd looqbox-pokedex
```

Agora instale as dependencias do projeto
```yarn``` ou ```npm install```

Apos ter instalado as dependencias do projeto é necessário rodar o servidor local do projeto
```
yarn start
```
ou
```
npm start
```

A aplicação rodará na porta 3000 do seu localhost -> [http://localhost:3000](http://localhost:3000/)

## Tecnologias e bibliotecas
* [`typescript`](https://www.typescriptlang.org/)
* [`eslint`](https://eslint.org/)
* [`contextApi`](https://pt-br.reactjs.org/docs/context.html)
* [`react-icons`](https://react-icons.github.io/react-icons/)
* [`axios`](https://github.com/axios/axios)
* [`styled-components`](https://styled-components.com/)

## Duvidas
  Para qualquer duvida estou a total disposição para explicar melhor o meu código e as decisões que tomei de arquitetura. ![Webp net-resizeimage](https://user-images.githubusercontent.com/55189046/118434090-d2ae3c00-b6b2-11eb-8d61-276863c2cd27.png)

