import { Button, Section, SectionTitle } from '../components/ui'
import { finalCta } from '../data'

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
      <Button href={finalCta.cta.href} size="lg" arrow className="mt-10">
        {finalCta.cta.label}
      </Button>
    </Section>
  )
}
