import logoDark from '../../assets/brand/logo-dark.svg'
import logoLight from '../../assets/brand/logo.svg'

interface LogoProps {
  /** Fundo em que o logo está: `light` usa o texto grafite; `dark` usa o texto branco. */
  tone?: 'light' | 'dark'
  className?: string
  alt?: string
}

/** Logo +fit completo. Proporção 1670:750 — defina só a altura (ex.: `h-9 w-auto`). */
export function Logo({ tone = 'light', className, alt = '+Fit' }: LogoProps) {
  return (
    <img
      src={tone === 'dark' ? logoDark : logoLight}
      alt={alt}
      width={167}
      height={75}
      className={className}
    />
  )
}
