import { type ImgHTMLAttributes, useEffect, useState } from 'react'

import skeletonImage from '../../../assets/icons/pokeball-gray.svg'

interface IProgressiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  placeholderSrc?: string
  src: string
}

export default function ProgressiveImage ({ placeholderSrc = skeletonImage, src, ...props }: IProgressiveImageProps) {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setImgSrc(src)
    }
  }, [src])

  return (
    <img
        alt={props.alt}
        src={imgSrc}
        width={props.width}
        height={props.height}
    />
  )
}
