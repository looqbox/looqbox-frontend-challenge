import { src, dest, series } from 'gulp'
import { generateSW } from 'workbox-build'
import sourcemaps from 'gulp-sourcemaps'
import source from 'vinyl-source-stream'
import browserify from 'browserify'
import buffer from 'vinyl-buffer'
import eslint from 'gulp-eslint'
import terser from 'gulp-terser'
import gulpIf from 'gulp-if'
import size from 'gulp-size'
import path from 'path'

import config from './config'

const CYAN = '\x1b[36m%s\x1b[0m'

const lintScripts = () => {
  return src([config.paths.scripts.all])
    .pipe(eslint({ fix: true }))
    .pipe(
      eslint.results(results => {
        // Called once for all ESLint results.
        console.info(CYAN, 'Total Results: ', results.length)
        console.info(CYAN, 'Total Warnings: ', results.warningCount)
        console.info(CYAN, 'Total Errors: ', results.errorCount)
      })
    )
    .pipe(eslint.format())
}

/**
 * Transpila scripts modernos para serem compatíveis com uma maior gama de
 * navegadores.
 *
 * @returns {Promise}
 */
const buildScripts = () => {
  // Input file.
  const bundler = browserify(config.paths.scripts.src, {
    debug: true // ativa sourcemaps
  })

  bundler.transform('babelify', {
    global: true,
    sourceMaps: true,
    ignore: [/\/node_modules\//],
    presets: [
      [
        '@babel/preset-env',
        {
          forceAllTransforms: true,
          debug: config.debug
        }
      ]
    ]
  })

  return bundler
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(
      gulpIf(
        config.isProduction,
        terser({
          warnings: false, // or "verbose",
          ecma: 5,
          toplevel: true,
          compress: {
            drop_console: true,
            unsafe: true
          }
        })
      )
    )
    .pipe(
      dest(config.paths.scripts.dest, {
        sourcemaps: config.sourcemapsOutputStyle()
      })
    )
    .pipe(size({ title: 'scripts' }))
}

/**
 * Serializa a execução do linting de arquivos de script antes do build dos
 * mesmos.
 *
 * @returns {Stream}
 */
const scripts = series(lintScripts, buildScripts)

/**
 * Gera o arquivo de sw.js com o código de Service Work para realizar cache dos
 * assets do projeto.
 *
 * @returns {Promise}
 */
const serviceWorker = () => {
  return generateSW({
    globDirectory: config.paths.base.dest,
    globPatterns: ['**/*.{html,js,css,jpg,jpeg,png,gif,svg,webp}'],
    swDest: path.join(config.paths.base.dest, 'sw.js')
  })
    .then(({ count, size, warnings }) => {
      // log de warnings e detalhes.
      warnings.forEach(console.warn)
      console.log(`${count} files will be precached, totaling ${size} bytes.`)
    })
    .catch(error => {
      console.warn('Service worker generation failed:', error)
    })
}

export { lintScripts, scripts, serviceWorker }
