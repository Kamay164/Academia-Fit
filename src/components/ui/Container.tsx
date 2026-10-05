import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

/** Largura máxima do conteúdo (1216px) com margem lateral fluida. */
export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('max-w-content px-gutter mx-auto w-full', className)} {...props} />
}
