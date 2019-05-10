import { src, parallel } from 'gulp'
import jsdoc from 'gulp-jsdoc3'

import config from './config'

const buildJsdoc = () => {
  return src(['README.md', config.paths.scripts.all], {
    read: false
  }).pipe(jsdoc())
}

const docs = () => parallel(buildJsdoc)

export default docs
export { docs, buildJsdoc }
