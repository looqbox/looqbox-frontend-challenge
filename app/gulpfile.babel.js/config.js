import pkg from '../package.json'

const isProduction = () => {
  return (
    (process.env.NODE_ENV || 'development').trim().toLowerCase() ===
    'production'
  )
}

let paths = {
  base: {
    src: 'src',
    dest: 'dist'
  },
  scripts: {
    src: 'src/scripts/index.js',
    dest: 'dist/js',
    all: 'src/scripts/**/*.{js, mjs}'
  },
  styles: {
    // For best performance, don't add Sass partials to `gulp.src`
    src: 'src/styles/app.scss',
    dest: 'dist/css/',
    all: 'src/styles/*.scss'
  },
  images: {
    src: 'src/assets/images/**',
    dest: 'src/assets/images/'
  },
  markup: {
    src: 'src/markup/*.html',
    dest: 'dist/',
    all: 'src/markup/**/*.html'
  },
  copy: ['src/assets/**/*', 'src/styles/*.{jpg,jpeg,png,gif,svg,webp}']
}

export default {
  debug: false,
  isProduction,
  /**
   * Define, a partir da verificação se o ambiente é de desenvolvimento ou
   * produção, se os sourcemaps devem ser gerados inline ou em arquivo externo.
   *
   * @returns {String|Boolean} `true` (inline) se o ambiente for diferente de
   * `'production'` e `'./'` (external) para o ambiente de produção.
   */
  sourcemapsOutputStyle: function() {
    const external = './'
    const inline = true

    return isProduction() ? external : inline
  },
  port: 3000,
  purgecss: {
    rejected: true,
    keyframes: true,
    content: [paths.scripts.all, paths.markup.all],
    whitelistPatterns: [
      /^arrow$/,
      /^modal-backdrop$/,
      /^modal-open$/,
      /^show$/,
      /^collapsing$/
    ],
    whitelistPatternsChildren: [/tooltip/]
  },
  packageName: pkg.name,
  paths
}
