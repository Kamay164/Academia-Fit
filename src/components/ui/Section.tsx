import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { Container } from './Container'

export type SectionTone = 'light' | 'mist' | 'dark' | 'lime'

const tones: Record<SectionTone, string> = {
  light: 'bg-white text-ink',
  mist: 'bg-mist text-ink',
  dark: 'bg-ink text-white',
  lime: 'bg-lime text-ink',
}

interface SectionProps {
  /** Âncora da seção (ex.: "comunidade" → #comunidade). */
  id?: string
  /** Fundo da seção. `dark` ativa o foco claro nos elementos internos. */
  tone?: SectionTone
  /** `none` remove o espaçamento vertical padrão (para heros com layout próprio). */
  spacing?: 'default' | 'none'
  /** `id` do título da seção, para `aria-labelledby`. */
  labelledBy?: string
  className?: string
  containerClassName?: string
  children: ReactNode
}

/** Seção da página: fundo, espaçamento vertical, âncora com desconto da navbar fixa e Container. */
export function Section({
  id,
  tone = 'light',
  spacing = 'default',
  labelledBy,
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      data-surface={tone === 'dark' ? 'dark' : undefined}
      className={cn('scroll-mt-nav', spacing === 'default' && 'py-section', tones[tone], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
