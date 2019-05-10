import { src, dest } from 'gulp'
import revDel from 'gulp-rev-delete-original'
import revRewrite from 'gulp-rev-rewrite'
import gulpIf from 'gulp-if'
import path from 'path'
import rev from 'gulp-rev'

import config from './config'

const isNotIndex = file => {
  file = path.parse(file.path)

  // root files, html and .map must not be hashed
  if (
    file.ext === '.html' ||
    file.dir.endsWith('dist') ||
    file.ext === '.map'
  ) {
    return false
  }

  return true
}

export default function revision() {
  return src(`${config.paths.base.dest}/**`)
    .pipe(gulpIf(isNotIndex, rev()))
    .pipe(revDel())
    .pipe(revRewrite())
    .pipe(dest(config.paths.base.dest))
    .pipe(rev.manifest())
    .pipe(dest(config.paths.base.dest))
}
