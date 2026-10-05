import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  value: number
  prefix?: string
  suffix?: string
  /** Duração da contagem, em ms. */
  duration?: number
}

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t))
const format = (n: number) => Math.round(n).toLocaleString('pt-BR')

/**
 * Número que conta de 0 até `value` quando entra na tela. A largura é reservada pelo valor final
 * (sem salto de layout) e leitores de tela recebem só o valor final. Com movimento reduzido,
 * mostra o valor direto.
 */
export function CountUp({ value, prefix = '', suffix = '', duration = 1600 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [current, setCurrent] = useState(() => (reducedMotion() ? value : 0))

  useEffect(() => {
    const el = ref.current
    if (!el || reducedMotion()) return

    let frame = 0
    const run = () => {
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1)
        setCurrent(value * easeOutExpo(t))
        if (t < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }

    if (!('IntersectionObserver' in window)) {
      frame = requestAnimationFrame(run)
      return () => cancelAnimationFrame(frame)
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        run()
      },
      { threshold: 0.6 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value, duration])

  const finalText = `${prefix}${format(value)}${suffix}`
  return (
    <span ref={ref} className="inline-grid tabular-nums">
      <span aria-hidden="true" className="invisible col-start-1 row-start-1">
        {finalText}
      </span>
      <span aria-hidden="true" className="col-start-1 row-start-1">
        {prefix}
        {format(current)}
        {suffix}
      </span>
      <span className="sr-only">{finalText}</span>
    </span>
  )
}
