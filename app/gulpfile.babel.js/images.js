import { src, dest, parallel } from 'gulp'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imagemin from 'gulp-imagemin'
import webp from 'gulp-webp'

import config from './config'

/**
 * Cria versão WEBP das imagens do projeto.
 * Defina a varável de ambiente LOSSY como true, para haver maior comprensão do arquivo final.
 *
 * @see {@link https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/automating-image-optimization/#what-is-webp} Para mais informações sobre o formato
 */
export const imagesToWebp = () => {
  let webpConfig = {
    quality: 80,
    preset: 'photo',
    method: 6
  }

  if (process.env.LOSSLESS) {
    webpConfig = { lossless: true }
  }

  return src(config.paths.images.src)
    .pipe(webp(webpConfig))
    .pipe(dest(config.paths.images.dest))
}

const imagesmin = () => {
  return src(config.paths.images.src)
    .pipe(
      imagemin(
        [
          imagemin.gifsicle({ interlaced: true }),
          // imagemin.jpegtran({ progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 }),
          imagemin.svgo({
            plugins: [{ removeViewBox: true }, { cleanupIDs: true }]
          }),
          imageminMozjpeg({ quality: 85 })
        ],
        {
          verbose: config.debug
        }
      )
    )
    .pipe(dest(config.paths.images.dest))
}

/**
 * Optimize images
 */
export const images = parallel(imagesmin, imagesToWebp)
