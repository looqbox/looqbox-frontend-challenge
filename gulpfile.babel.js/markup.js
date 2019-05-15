import { src, dest } from 'gulp'
import htmlmin from 'gulp-htmlmin'
import gulpIf from 'gulp-if'
import size from 'gulp-size'

import config from './config'

/**
 * Scan your HTML for assets & optimize them
 */
function markup() {
  return src(config.paths.markup.src, { debug: config.debug })
    .pipe(
      gulpIf(
        config.isProduction(),
        htmlmin({
          minifyCSS: true,
          minifyJS: true,
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          removeEmptyAttributes: false
        })
      )
    )
    .pipe(size({ title: 'html' }))
    .pipe(dest(config.paths.markup.dest))
}

export default markup
