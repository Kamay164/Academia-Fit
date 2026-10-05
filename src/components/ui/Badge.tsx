import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type BadgeTone = 'lime' | 'ink' | 'mist' | 'outline' | 'glass'

const tones: Record<BadgeTone, string> = {
  lime: 'bg-lime text-ink',
  ink: 'bg-ink text-white',
  mist: 'bg-mist text-ink',
  outline: 'border border-stone text-moss',
  glass: 'bg-white/10 text-white',
}

interface BadgeProps {
  /** `lime`/`ink`/`mist`/`outline` em fundo claro; `glass` e `lime` em fundo escuro. */
  tone?: BadgeTone
  className?: string
  children: ReactNode
}

/** Etiqueta em pílula (ex.: "Mais escolhido", "Turmas de até 14"). */
export function Badge({ tone = 'mist', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
