import { Plus } from 'lucide-react'
import { Section, SectionTitle } from '../components/ui'
import { faq } from '../data'

/** Perguntas frequentes (#faq): acordeão nativo (`<details>`), acessível por teclado sem JavaScript. */
export function Faq() {
  return (
    <Section id={faq.id} labelledBy="faq-titulo">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <SectionTitle
          id="faq-titulo"
          eyebrow={faq.eyebrow}
          title={faq.title}
          className="lg:col-span-5"
        />
        <div className="lg:col-span-7">
          {faq.items.map(({ question, answer }) => (
            <details key={question} className="group border-line border-b first:border-t">
              <summary className="font-display flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-bold marker:hidden [&::-webkit-details-marker]:hidden">
                {question}
                <span className="bg-mist group-open:bg-lime grid size-9 shrink-0 place-items-center rounded-full transition-colors">
                  <Plus
                    aria-hidden="true"
                    className="ease-out-expo size-5 transition-transform duration-300 group-open:rotate-45"
                  />
                </span>
              </summary>
              <p className="text-moss max-w-prose pb-6">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  )
}
