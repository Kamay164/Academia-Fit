import type { Photo } from '../../data/images'
import { cn } from '../../lib/cn'

interface PhotoImageProps {
  photo: Photo
  /** Atributo `sizes` (largura que a imagem ocupa em cada breakpoint). */
  sizes: string
  /**
   * Imagem principal da primeira dobra (LCP): carrega na hora e com prioridade alta.
   * Só a foto do hero usa isto; o resto da página carrega sob demanda (`loading="lazy"`).
   */
  priority?: boolean
  className?: string
}

/**
 * `<img>` responsivo com srcSet, dimensões (sem salto de layout) e carregamento preguiçoso.
 * `srcSet` e `sizes` vêm antes de `src` de propósito: o React aplica os atributos na ordem, e com
 * `src` primeiro o navegador baixaria a versão de plano B antes de escolher a certa.
 */
export function PhotoImage({ photo, sizes, priority = false, className }: PhotoImageProps) {
  return (
    <img
      srcSet={photo.srcSet}
      sizes={sizes}
      src={photo.src}
      width={photo.width}
      height={photo.height}
      alt={photo.alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      className={cn('size-full object-cover', className)}
    />
  )
}
