import { Button, Section, SectionTitle } from '../components/ui'
import { finalCta } from '../data'
import { reveal } from '../lib/reveal'

/** Chamada final (#cta): bloco lima, uma mensagem e um botão. */
export function CtaFinal() {
  return (
    <Section
      id="cta"
      tone="lime"
      labelledBy="cta-titulo"
      containerClassName="flex flex-col items-center text-center"
    >
      <SectionTitle
        id="cta-titulo"
        size="display"
        tone="lime"
        align="center"
        title={finalCta.title}
        description={finalCta.description}
      />
      <div className="mt-10" {...reveal(150)}>
        <Button href={finalCta.cta.href} size="lg" arrow>
          {finalCta.cta.label}
        </Button>
      </div>
    </Section>
  )
}
