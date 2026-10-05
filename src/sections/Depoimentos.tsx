import { Quote } from 'lucide-react'
import { Section, SectionTitle } from '../components/ui'
import { testimonials } from '../data'

/** Depoimentos (#depoimentos): quatro histórias fictícias de pertencimento, com aviso na página. */
export function Depoimentos() {
  return (
    <Section id={testimonials.id} labelledBy="depoimentos-titulo">
      <SectionTitle
        id="depoimentos-titulo"
        size="h1"
        eyebrow={testimonials.eyebrow}
        title={testimonials.title}
      />

      <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20">
        {testimonials.items.map(({ name, detail, quote }) => (
          <li key={name} className="bg-mist flex rounded-xl p-8 lg:p-10">
            <figure className="flex flex-col">
              <Quote aria-hidden="true" className="text-lime-deep size-8" strokeWidth={2.25} />
              <blockquote className="font-display mt-5 text-xl leading-snug font-semibold text-pretty lg:text-2xl">
                {quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="bg-ink text-lime grid size-12 shrink-0 place-items-center rounded-full font-bold"
                >
                  {name[0]}
                </span>
                <span>
                  <span className="block font-semibold">{name}</span>
                  <span className="text-moss block text-sm">{detail}</span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <p className="text-moss mt-6 text-sm">{testimonials.disclaimer}</p>
    </Section>
  )
}
