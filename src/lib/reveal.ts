import type { CSSProperties } from 'react'

/**
 * Props para revelar um elemento ao entrar na tela: `<li {...reveal(80)}>`.
 * `delay` (ms) escalona itens de uma mesma lista. O efeito é aplicado por `useReveal`.
 */
export const reveal = (delay = 0) => ({
  'data-reveal': '',
  style: { '--reveal-delay': `${delay}ms` } as CSSProperties,
})

/** Atraso escalonado para o item `i` de uma lista (limitado, para não demorar demais). */
export const stagger = (i: number, step = 90, max = 4) => Math.min(i, max) * step
