# Teste Looqbox

> OBS: A base de código utilizada para build desse projeto, foi copiada do
seguinte repositório: [rivajunior/gulp-boilerplate](https://github.com/rivajunior/gulp-boilerplate)

## Get Start

Clone o projeto.

> Caso já tenha este repositório em sua máquina, verirife se há atualizações
executando o comando `git pull`.

Instale as dependências do projeto executando o comando `yarn`. Além disso você
deve ter em sua máquina, o [Node](http://nodejs.org), um editor de texto
([VS Code](https://code.visualstudio.com/) é recomendado),
[Git](https://git-scm.com/) e [Gulp CLI](https://github.com/gulpjs/gulp-cli)
instalados globalmente.

Execute o comando `yarn serve` para abrir uma aba no seu navegador padrão,
executando um servidor _localhost_ na porta 3000, servindo os arquivos presentes
na pasta `dist`.

## Desenvolvimento

`yarn start` abre uma nova aba no seu navegador padrão rodando um servidor local
(_localhost_) na porta 3000. Além disso o gulp ficará vigiando todas as
modificações no projeto e refletirá as mesmas no navegador.

Durante o desenvolvimento sourcemaps são gerados inline por questão de
performance.

Você pode verificar o estilo dos códigos Javascript com o comando `lint:scripts`
e o estilo dos códigos de estilo SCSS com o comando `lint:styles`.
Para verificar todos os estilos com um só comando, basta executar o comando
`yarn lint`. Verifique se há algum conflito nas configurações do eslint
com o prettier rodando o comando `yarn eslint-check`.

## Produção

`yarn build` faz o build do projeto para produção:

* Transforma os templates escritos em com nunjunks para HTML normal;

* Transforma o javascript para ES5, compatível com mais navegadores, porém mais
pesado que o código ES2015;

* Minifica JavasSript e CSS;

* Copia _assets_ estáticos para a pasta de saída (normalmnte é a `dist` mas você
pode configurar isso).

## Estrutura do projeto

* `src/` - Contém os códigos fonte da aplicação;

* `dist/` - Efêmero, onde os arquivos já processados ficam e podem ser acessados
por um navegador;*¹

* `node_modules/` - Contém todas as depências gerenciadas pelo yarn;*²

* `gulpfile.babel.js/` - Contém todas as configurações do gulp, suas tasks e
funções.

* `docs/` - Contém a documentação JSDoc;*³

1 - Gerado após a execução do comando `yarn start` ou `yarn build` .

2 - Gerado após instalar as dependências.

3 - Gerado após executar qualquer uma das seguinte gulp tasks `docs` ou `buildJsdoc`.

## [Git Hooks](https://git-scm.com/book/pt-br/v1/Customizando-o-Git-Hooks-do-Git)

O projeto está configurado para executar hooks (ganchos, gatilhos) em alguns
eventos do git, como o comando `lint-staged` que é executado no evento
`pre-commit`.

Todos os scripts que não executarem com sucesso, causarão o cancelamento do
evento que o acionou.

Para pular esses gatilhos, adicione o parâmetro `--no-verify` no comando git.
**Atenção** essa ação não é recomendada. Se o hooks estão aí, têm motivo.

O plugin utilizado para executar scripts pelo node é o
[Husky](https://github.com/typicode/husky).

No entanto, também estão sendo executados alguns scripts diretamento nos hooks
do git.

### Eventos configurados

#### pre-commit

Este evento é acionado ao executar um comando de commit do git.

##### Scripts executados

* [lint-staged](https://github.com/okonet/lint-staged) é um plugin
[node](http://nodejs.org) para o uso de
[linters](https://en.wikipedia.org/wiki/Lint_(software)) em arquivos _stageds_
(marcados para commit).

Os linters utilizados são:

* [Eslint](https://eslint.org/) + [Prettier](https://prettier.io/)

* [Stylelint](https://stylelint.io/)

Eles servem para evitar que você faça caquinha 🚫💩.
