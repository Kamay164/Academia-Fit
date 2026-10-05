import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrolled } from '../../hooks/useScrolled'
import { cn } from '../../lib/cn'
import { a11y, nav, navCta } from '../../data/site'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'

const sectionIds = nav.map((link) => link.href.slice(1))

/** Elementos focáveis visíveis dentro de `root` (para o ciclo de Tab do menu mobile). */
function getFocusable(root: HTMLElement) {
  return [...root.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')].filter(
    (el) => el.offsetParent !== null,
  )
}

/**
 * Navbar fixa. Transparente (texto claro) sobre o hero escuro; sólida (branca) depois de rolar
 * ou com o menu mobile aberto. Destaca no menu a seção que está no meio da tela.
 */
export function Navbar() {
  const scrolled = useScrolled(8)
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const solid = scrolled || open
  const onDark = !solid

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (event.key !== 'Tab' || !headerRef.current) return
      const items = getFocusable(headerRef.current)
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    const desktop = window.matchMedia('(min-width: 1024px)')
    const onBreakpoint = () => {
      if (desktop.matches) setOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onBreakpoint)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onBreakpoint)
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        solid ? 'border-line bg-white/90 backdrop-blur-md' : 'border-transparent bg-transparent',
      )}
    >
      <Container className="h-nav flex items-center justify-between gap-6">
        <a href="#inicio" className="flex min-h-11 shrink-0 items-center" onClick={closeMenu}>
          <Logo tone="dark" className={cn('h-9 w-auto', !onDark && 'hidden')} />
          <Logo tone="light" className={cn('h-9 w-auto', onDark && 'hidden')} />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((link) => {
              const isActive = active === link.href.slice(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={cn(
                      'border-b-2 py-1 text-sm font-medium transition-colors duration-200',
                      onDark
                        ? 'hover:border-white/50 hover:text-white'
                        : 'hover:border-stone hover:text-ink',
                      onDark &&
                        (isActive ? 'border-lime text-white' : 'border-transparent text-white/85'),
                      !onDark &&
                        (isActive ? 'border-ink text-ink' : 'text-moss border-transparent'),
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* O Button define `inline-flex`; por isso o `hidden` fica num wrapper, não no Button. */}
          <div className="hidden lg:block">
            <Button href={navCta.href} tone={onDark ? 'dark' : 'light'}>
              {navCta.label}
            </Button>
          </div>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? a11y.menuClose : a11y.menuOpen}
            onClick={() => setOpen((value) => !value)}
            className={cn(
              'inline-flex size-11 items-center justify-center rounded-full transition-colors duration-200 lg:hidden',
              onDark ? 'text-white hover:bg-white/10' : 'text-ink hover:bg-mist',
            )}
          >
            {open ? (
              <X aria-hidden="true" className="size-6" />
            ) : (
              <Menu aria-hidden="true" className="size-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Fundo escurecido: clicar fora fecha o menu. É `absolute` (e não `fixed`) porque o
          backdrop-blur do header cria um bloco de contenção para filhos fixed. */}
      <div
        hidden={!open}
        aria-hidden="true"
        onClick={closeMenu}
        className="bg-ink/50 absolute inset-x-0 top-full h-dvh lg:hidden"
      />

      <div
        id="menu-mobile"
        hidden={!open}
        className="border-line shadow-lift absolute inset-x-0 top-full border-b bg-white lg:hidden"
      >
        <nav
          aria-label="Principal"
          className="px-gutter max-h-[calc(100dvh-var(--spacing-nav))] overflow-y-auto py-6"
        >
          <ul>
            {nav.map((link) => {
              const isActive = active === link.href.slice(1)
              return (
                <li key={link.href} className="border-line border-b">
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={isActive ? 'location' : undefined}
                    className={cn(
                      'text-h3 font-display block py-4 font-bold',
                      isActive ? 'text-lime-deep' : 'text-ink',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
          <Button href={navCta.href} size="lg" fullWidth className="mt-6" onClick={closeMenu}>
            {navCta.label}
          </Button>
        </nav>
      </div>
    </header>
  )
}
