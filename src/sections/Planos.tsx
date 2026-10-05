import { Check } from 'lucide-react'
import { Badge, Button, Section, SectionTitle } from '../components/ui'
import { formatPrice, plans } from '../data'
import { reveal, stagger } from '../lib/reveal'

/** Planos (#planos): três cartões; o plano em destaque ganha fundo grafite e etiqueta. */
export function Planos() {
  return (
    <Section id={plans.id} tone="mist" labelledBy="planos-titulo">
      <SectionTitle
        id="planos-titulo"
        size="h1"
        eyebrow={plans.eyebrow}
        title={plans.title}
        description={plans.description}
      />

      <ul className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3 lg:items-stretch">
        {plans.items.map((plan, i) => {
          const dark = Boolean(plan.featured)
          return (
            <li key={plan.id} className="flex" {...reveal(stagger(i))}>
              {/* A revelação fica no <li>; o hover, neste cartão interno (transições separadas) */}
              <div
                data-surface={dark ? 'dark' : undefined}
                className={`ease-out-expo flex w-full flex-col rounded-xl p-8 transition duration-300 hover:-translate-y-1 xl:p-10 ${
                  dark
                    ? 'bg-ink shadow-lift text-white'
                    : 'border-line hover:shadow-lift border bg-white'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                  <h3 className="text-h3">{plan.name}</h3>
                  {plan.badge && <Badge tone="lime">{plan.badge}</Badge>}
                </div>
                <p className={`mt-2 ${dark ? 'text-fog' : 'text-moss'}`}>{plan.audience}</p>
                <p className="mt-8 flex flex-wrap items-baseline gap-x-1.5">
                  <span className="font-display text-h2 xl:text-h1 leading-none font-extrabold tracking-tight">
                    {formatPrice(plan.price)}
                  </span>
                  <span className={dark ? 'text-fog' : 'text-moss'}>/mês</span>
                </p>
                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <Check
                        aria-hidden="true"
                        className={`mt-0.5 size-5 shrink-0 ${dark ? 'text-lime' : 'text-lime-deep'}`}
                        strokeWidth={2.5}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href={plan.cta.href}
                  tone={dark ? 'dark' : 'light'}
                  variant={dark ? 'primary' : 'secondary'}
                  fullWidth
                  className="mt-10"
                >
                  {plan.cta.label}
                </Button>
              </div>
            </li>
          )
        })}
      </ul>
      <p className="text-moss mt-8 text-sm">{plans.note}</p>
    </Section>
  )
}
