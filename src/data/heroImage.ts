/**
 * Larguras e `sizes` da foto do hero. Ficam num arquivo sem nada específico do Vite porque dois
 * lugares precisam concordar: o `<img>` do Hero e o preload que `vite.config.ts` gera no build.
 * Se forem diferentes, o navegador pode baixar a foto duas vezes.
 */
export const heroImage = {
  widths: [768, 1280, 1920],
  sizes: '(min-width: 1024px) 64vw, 100vw',
}
