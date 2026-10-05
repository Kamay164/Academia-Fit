import { useEffect } from 'react'

/**
 * Revela com transição todo elemento `[data-reveal]` quando ele entra na tela (uma vez só).
 * Chame uma vez, no App. Sem IntersectionObserver ou com `prefers-reduced-motion`, mostra tudo.
 */
export function useReveal() {
  useEffect(() => {
    const items = [...document.querySelectorAll<HTMLElement>('[data-reveal]')]
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.removeAttribute('data-reveal'))
      return
    }

    const show = (el: HTMLElement) => {
      el.dataset.reveal = 'in'
      // `once` não serve: transições de filhos (hover etc.) também disparam transitionend aqui.
      const done = (event: TransitionEvent) => {
        if (event.target !== el || event.propertyName !== 'opacity') return
        el.removeAttribute('data-reveal')
        el.style.removeProperty('--reveal-delay')
        el.removeEventListener('transitionend', done)
      }
      el.addEventListener('transitionend', done)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          show(entry.target as HTMLElement)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
