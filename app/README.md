# Gulp Boilerplate

Esse projeto destinasse a contrução de landing pages e websites e contém as
seguintes features:

* Desenvovilmento em multiplas plataformas (Windows, OS X, Linux);
[[VS Code](https://code.visualstudio.com/), [Git](https://git-scm.com/),
[cross-env](https://github.com/kentcdodds/cross-env),
[Node](http://nodejs.org)]

* Transpilação de código _Ecmascript 2015_, _Ecmascript 2016_, _Ecmascript 2017_
etc. para ES5 que é a versão compatível com maioria dos navegadores;
[[Babel](https://babeljs.io/)]

* Versionamento de assets para _cache busting_;
[[gulp-rev](https://github.com/sindresorhus/gulp-rev),
[gulp-rev-delete-original](https://github.com/nib-health-funds/gulp-rev-delete-original),
[gulp-rev-rewrite](https://github.com/TheDancingCode/gulp-rev-rewrite)]

* [Sintaxe SCSS](https://sass-lang.com/documentation/file.SASS_REFERENCE.html#syntax)
para uma melhor manutenabilidade de códigos de estilo;
[[gulp-dart-sass](https://github.com/mattdsteele/gulp-dart-sass)]

* Autoprefixador para que códigos CSS sejam compatíveis _cross browser_;
[[Autoprefixer](https://autoprefixer.github.io/)]

* Linting e formatação automática de códigos Javascript e SCSS;
[[Eslint](https://eslint.org/),
[StandardJS](https://standardjs.com/)
[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier),
[Prettier](https://prettier.io/), [Stylelint](https://stylelint.io/),]

* Commit Lint para melhor acompanhamento das mudanças no projeto;
[[Commitlint](https://conventional-changelog.github.io/commitlint/#/),
[@commitlint/config-conventional](https://conventional-changelog.github.io/commitlint/#/)]

* Minificação de builds JavaScript e CSS para produção;
[[Terser](https://github.com/terser-js/terser), [Nano](https://cssnano.co/)]

* Documentações geradas automáticamente; [[JSDoc](http://usejsdoc.org)]

* Configurações básica para
[PWA](https://developers.google.com/web/progressive-web-apps/);
[[workbox-build](https://developers.google.com/web/tools/workbox/modules/workbox-build),
[Web App Manifest](https://developer.mozilla.org/pt-BR/docs/Web/Manifest)]

* Framework pré configurado; [[Bootstrap](https://getbootstrap.com)]

* Otimização de imagens
[WEBP](https://developers.google.com/speed/webp/).
[[Deploying New Image Formats on the Web](https://www.igvita.com/2012/12/18/deploying-new-image-formats-on-the-web/),
[Automatizar a otimização da imagem](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/automating-image-optimization/?hl=pt-br)]

## Get Start

Clone o projeto.
Sempre utilize a _branch master_, pois a _branch develop_ pode apresentar erros
em códigos instáveis.

> Caso já tenha este repositório em sua máquina, verirife se há atualizações
executando o comando `git pull`.

Após clonar ou copiar este repositório, remova a referência à ele no git.
Execute: `git remote remove origin`. Adicione a url remota do novo projeto.
Execute: `git remote add origin URL_REPOSITORIO_REMOTO`.

Instale as dependências do projeto executando o comando `yarn`. Além disso você
deve ter em sua máquina, o [Node](http://nodejs.org)], um editor de texto
([VS Code](https://code.visualstudio.com/) é recomendado),
[Git](https://git-scm.com/) e [Gulp](https://gulpjs.com) na versão
[CLI](https://github.com/gulpjs/gulp-cli) instalado globalmente.

Não esqueça de modificar todos os arquivos de configuração com as informações
específicas do seu projeto:

* `package.json`;

* `gulpfile.babel.js/config.js`;

* `src/assets/manifest.webmanifest`;

* `src/assets/sitemap.xml`;

* `src/assets/humans.txt`.

Utilize o plugin [EdidorConfig](https://editorconfig.org/) para pegar os
padrões de codificação no projeto, como caractere de final de linha, tamanho de
tabulação e conjunto de caracteres (_charset_).

## Desenvolvimento

Durante o desenvolvimento sourcemaps são gerados inline por questão de
performance.

Você pode verificar o estilo dos códigos Javascript com o comando `lint:scripts`
e o estilo dos códigos de estilo SCSS com o comando `lint:styles`.
Para verificar todos os estilos com um só comando, basta executar o comando
`yarn lint`.
`yarn eslint-check` Verifica se há algum conflito nas configurações do eslint
com o prettier.

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
