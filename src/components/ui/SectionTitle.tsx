import { cn } from '../../lib/cn'
import { reveal } from '../../lib/reveal'
import type { Heading } from '../../data/types'

export type TitleTone = 'light' | 'dark' | 'lime'

interface SectionTitleProps {
  eyebrow?: string
  title: Heading
  description?: string
  /** Fundo em que o título está: define cores e o estilo do destaque. */
  tone?: TitleTone
  align?: 'left' | 'center'
  /** Nível semântico: `h1` só uma vez por página (no hero). */
  as?: 'h1' | 'h2'
  /** Tamanho visual do título. */
  size?: 'display' | 'h1' | 'h2'
  /** `id` do título (usado por `aria-labelledby` na Section). */
  id?: string
  /** Revela o bloco ao entrar na tela (desligue no hero, que tem animação própria). */
  reveal?: boolean
  className?: string
}

const sizes = {
  display: 'text-display',
  h1: 'text-h1',
  h2: 'text-h2',
} as const

const eyebrowColors: Record<TitleTone, string> = {
  light: 'text-lime-deep',
  dark: 'text-lime',
  lime: 'text-ink',
}

const descriptionColors: Record<TitleTone, string> = {
  light: 'text-moss',
  dark: 'text-fog',
  lime: 'text-ink',
}

/**
 * Destaque do final do título:
 *  - fundo escuro → texto lima;
 *  - fundo claro → "marca-texto" lima com texto grafite (lima nunca é texto sobre claro);
 *  - fundo lima → bloco grafite com texto lima.
 * O marca-texto é um gradiente com 84% da altura da linha, para as faixas de linhas
 * diferentes não se encostarem quando o título quebra.
 */
const marker =
  'box-decoration-clone bg-linear-to-b bg-center bg-no-repeat px-[0.12em] [background-size:100%_84%]'

const highlightStyles: Record<TitleTone, string> = {
  dark: 'text-lime',
  light: cn(marker, 'from-lime to-lime text-ink'),
  lime: cn(marker, 'from-ink to-ink text-lime'),
}

/** Eyebrow + título (com palavra-chave destacada) + descrição opcional. */
export function SectionTitle({
  eyebrow,
  title,
  description,
  tone = 'light',
  align = 'left',
  as: Tag = 'h2',
  size = 'h2',
  id,
  reveal: revealOnScroll = true,
  className,
}: SectionTitleProps) {
  const centered = align === 'center'
  return (
    <div
      className={cn('flex flex-col gap-5', centered && 'items-center text-center', className)}
      {...(revealOnScroll ? reveal() : {})}
    >
      {eyebrow && (
        <p className={cn('text-eyebrow font-semibold uppercase', eyebrowColors[tone])}>{eyebrow}</p>
      )}
      <Tag id={id} className={cn(sizes[size], 'max-w-[18ch]', centered && 'mx-auto')}>
        {title.text}
        {title.highlight && (
          <>
            {' '}
            <span className={highlightStyles[tone]}>{title.highlight}</span>
          </>
        )}
      </Tag>
      {description && (
        <p className={cn('text-lead max-w-prose', descriptionColors[tone])}>{description}</p>
      )}
    </div>
  )
}
