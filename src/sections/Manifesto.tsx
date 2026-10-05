import { Section, SectionTitle } from '../components/ui'
import { about } from '../data'
import { reveal, stagger } from '../lib/reveal'

/**
 * Manifesto (#sobre): o "porquê" da +Fit. Fundo branco e muito respiro, em contraste com o hero.
 * Título grande à esquerda, texto à direita e os três pilares em colunas com linha no topo.
 */
export function Manifesto() {
  return (
    <Section id={about.id} labelledBy="sobre-titulo">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
        <SectionTitle
          id="sobre-titulo"
          size="h1"
          eyebrow={about.eyebrow}
          title={about.title}
          className="lg:col-span-7"
        />
        <p className="text-lead text-moss max-w-prose lg:col-span-5 lg:self-end" {...reveal(120)}>
          {about.description}
        </p>
      </div>

      <ul className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8 lg:mt-24 lg:gap-12">
        {about.pillars.map(({ icon: Icon, title, description }, i) => (
          <li key={title} className="border-line border-t pt-8" {...reveal(stagger(i))}>
            <div className="flex items-center justify-between">
              <span className="bg-lime text-ink grid size-12 place-items-center rounded-full">
                <Icon aria-hidden="true" className="size-6" strokeWidth={2} />
              </span>
              <span aria-hidden="true" className="font-display text-moss text-sm font-semibold">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <h3 className="text-h3 mt-6">{title}</h3>
            <p className="text-moss mt-3">{description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
