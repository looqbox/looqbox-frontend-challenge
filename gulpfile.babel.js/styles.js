import { src, dest, series } from 'gulp'
import autoprefixer from 'autoprefixer'
import reporter from 'postcss-reporter'
import browserSync from 'browser-sync'
// import purgecss from 'gulp-purgecss'
import postScss from 'postcss-scss'
import postcss from 'gulp-postcss'
import stylelint from 'stylelint'
import sass from 'gulp-dart-sass'
import rename from 'gulp-rename'
import cssnano from 'cssnano'
import gulpIf from 'gulp-if'
import size from 'gulp-size'

import config from './config'

/**
 * Realiza o linting dos arquivos de estilo SCSS com o plugin Stylelint.
 *
 * @returns {Stream}
 */
const lintStyles = () => {
  return src(config.paths.styles.src, {
    debug: config.debug,
    read: false
  }).pipe(postcss([stylelint(), reporter()], { syntax: postScss }))
}

/**
 * Transpila estilos em Sass para CSS
 *
 * @returns {Stream}
 */
const buildStyles = () => {
  const plugins = [autoprefixer(), reporter({ clearReportedMessages: true })]

  if (config.isProduction()) {
    plugins.push(cssnano())
  }

  return (
    src(config.paths.styles.src, { sourcemaps: true, debug: config.debug })
      .pipe(rename('style'))
      .pipe(
        sass({ includePaths: ['node_modules/'] }).on('error', function(err) {
          console.error(err.message)
          browserSync.notify(err.message, 3000) // Display error in the browser
          this.emit('end') // Prevent gulp from catching the error and exiting the watch process
        })
      )
      // .pipe(gulpIf(config.isProduction(), purgecss(config.purgecss)))
      .pipe(postcss(plugins))
      .pipe(size({ title: 'styles' }))
      .pipe(
        dest(config.paths.styles.dest, {
          sourcemaps: config.sourcemapsOutputStyle()
        })
      )
      .pipe(gulpIf(browserSync.active, browserSync.stream()))
  )
}

/**
 * Serializa a execução do linting antes do build dos arquivos de estilo.
 *
 * @returns {Stream}
 */
const styles = series(lintStyles, buildStyles)

export default styles
export { styles, lintStyles }
