import { src, dest, parallel, series, watch } from 'gulp'
import browserSync from 'browser-sync'
import htmlInjector from 'bs-html-injector'
import size from 'gulp-size'
import del from 'del'

import { scripts, serviceWorker, lintScripts } from './scripts'
import { docs, buildJsdoc } from './docs'
import { styles, lintStyles } from './styles'
import { images } from './images'
import revision from './revision'
import markup from './markup'

import config from './config'

let build
const server = browserSync.create(config.packageName)

browserSync.use(htmlInjector, {
  files: `${config.paths.markup.dest}**/*.html`
})

/**
 * Copy all assets for the root level
 */
export const copy = () => {
  return src(config.paths.copy, { dot: true })
    .pipe(dest(config.paths.base.dest))
    .pipe(size({ title: 'copy' }))
}

// Clean output directory
export const clean = () => {
  return del([config.paths.base.dest, `!${config.paths.base.dest}/.git`], {
    dot: true
  })
}

export const projectSize = () => {
  return src(`${config.paths.base.dest}/**/*`, { read: false }).pipe(size())
}

const watchFiles = () => {
  watch(config.paths.scripts.all, scripts)
  watch(config.paths.styles.all, styles)
  watch(config.paths.markup.all, markup)
  watch(config.paths.images.src, copy)
}

if (config.isProduction()) {
  build = series(
    clean,
    parallel(styles, scripts, copy),
    // revision,
    markup,
    serviceWorker
  )
} else {
  build = series(clean, parallel(styles, scripts, copy), markup)
}

function serve(done) {
  server.init({
    watch: true,
    open: true,
    // Customize the Browsersync console logging prefix
    logPrefix: config.packageName,
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: `./${config.paths.base.dest}`,
    port: config.port,
    logLevel: config.debug ? 'debug' : 'info'
  })

  done()
}

const dev = series(build, serve, watchFiles)

export {
  build as default,
  build,
  docs,
  markup,
  styles,
  lintStyles,
  scripts,
  buildJsdoc,
  lintScripts,
  revision,
  images,
  dev,
  serve,
  watchFiles
}
