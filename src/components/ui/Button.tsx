import { ArrowRight } from 'lucide-react'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary'
/** Fundo em que o botão está: `light` (branco, mist, lima) ou `dark` (grafite). */
type Tone = 'light' | 'dark'
type Size = 'md' | 'lg'

interface CommonProps {
  variant?: Variant
  tone?: Tone
  size?: Size
  /** Mostra a seta à direita. */
  arrow?: boolean
  fullWidth?: boolean
  className?: string
  children: ReactNode
}

type LinkProps = CommonProps & { href: string } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof CommonProps
  >
type NativeButtonProps = CommonProps & { href?: undefined } & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    keyof CommonProps
  >

export type ButtonProps = LinkProps | NativeButtonProps

const base =
  'group inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Tone, Record<Variant, string>> = {
  light: {
    primary: 'bg-ink text-white hover:bg-ink-soft',
    secondary: 'border border-ink text-ink hover:bg-mist',
  },
  dark: {
    primary: 'bg-lime text-ink hover:bg-lime-strong',
    secondary: 'border border-white/40 text-white hover:border-white hover:bg-white/10',
  },
}

const sizes: Record<Size, string> = {
  md: 'px-6 py-3 text-base',
  lg: 'px-5 py-4 text-[0.9375rem] min-[360px]:px-6 min-[360px]:text-base sm:px-8 sm:text-lg',
}

/**
 * Botão ou link com aparência de botão (renderiza `<a>` quando recebe `href`).
 * Atenção: o botão já define `display: inline-flex`; para escondê-lo em certos breakpoints,
 * coloque `hidden lg:block` num elemento ao redor (uma classe `hidden` aqui perderia a disputa).
 */
export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    tone = 'light',
    size = 'md',
    arrow = false,
    fullWidth = false,
    className,
    children,
    ...rest
  } = props

  const classes = cn(base, variants[tone][variant], sizes[size], fullWidth && 'w-full', className)
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </>
  )

  if (rest.href !== undefined) {
    return (
      <a className={classes} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  )
}
