import type { Photo } from '../../data/images'
import { cn } from '../../lib/cn'

interface PhotoImageProps {
  photo: Photo
  /** Atributo `sizes` (largura que a imagem ocupa em cada breakpoint). */
  sizes: string
  /** Use `eager` só para imagens da primeira dobra. */
  loading?: 'lazy' | 'eager'
  className?: string
}

/**
 * `<img>` responsivo com srcSet, dimensões (sem salto de layout) e carregamento preguiçoso.
 * `srcSet` e `sizes` vêm antes de `src` de propósito: o React aplica os atributos na ordem, e com
 * `src` primeiro o navegador baixaria a maior versão antes de escolher a certa.
 */
export function PhotoImage({ photo, sizes, loading = 'lazy', className }: PhotoImageProps) {
  return (
    <img
      srcSet={photo.srcSet}
      sizes={sizes}
      src={photo.src}
      width={photo.width}
      height={photo.height}
      alt={photo.alt}
      loading={loading}
      decoding="async"
      className={cn('size-full object-cover', className)}
    />
  )
}
