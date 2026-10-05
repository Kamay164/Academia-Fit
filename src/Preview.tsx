/**
 * PRÉVIA TEMPORÁRIA (Etapa 4).
 * Blocos vazios das seções que ainda não existem, para testar âncoras, navbar, rolagem
 * e o ritmo claro/escuro. Hero e Manifesto já são reais (Etapa 5A). Cada bloco é substituído pela seção real na Etapa 5; este arquivo
 * é apagado ao final da Etapa 5B.
 */
import type { ReactNode } from 'react'
import { Button, Section, SectionTitle } from './components/ui'
import type { SectionTone } from './components/ui'
import { community, facilities, faq, finalCta, modalities, plans, testimonials } from './data'
import { contactSection } from './data/contactForm'

function Placeholder({ dark }: { dark?: boolean }) {
  return (
    <div
      className={`mt-12 rounded-lg border border-dashed p-10 text-center text-sm ${
        dark ? 'text-fog border-white/30' : 'border-stone text-moss'
      }`}
    >
      O conteúdo desta seção entra na Etapa 5.
    </div>
  )
}

interface BlockProps {
  id: string
  tone: SectionTone
  eyebrow?: string
  title: { text: string; highlight?: string }
  description?: string
  children?: ReactNode
}

function Block({ id, tone, eyebrow, title, description, children }: BlockProps) {
  const titleTone = tone === 'dark' ? 'dark' : tone === 'lime' ? 'lime' : 'light'
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-titulo`}>
      <SectionTitle
        id={`${id}-titulo`}
        eyebrow={eyebrow}
        title={title}
        description={description}
        tone={titleTone}
      />
      {children ?? <Placeholder dark={tone === 'dark'} />}
    </Section>
  )
}

export default function Preview() {
  return (
    <>
      <Block
        id="comunidade"
        tone="mist"
        eyebrow={community.eyebrow}
        title={community.title}
        description={community.description}
      />
      <Block
        id="modalidades"
        tone="light"
        eyebrow={modalities.eyebrow}
        title={modalities.title}
        description={modalities.description}
      />
      <Block
        id="estrutura"
        tone="dark"
        eyebrow={facilities.eyebrow}
        title={facilities.title}
        description={facilities.description}
      />
      <Block
        id="depoimentos"
        tone="light"
        eyebrow={testimonials.eyebrow}
        title={testimonials.title}
      />
      <Block
        id="planos"
        tone="mist"
        eyebrow={plans.eyebrow}
        title={plans.title}
        description={plans.description}
      />
      <Block id="faq" tone="light" eyebrow={faq.eyebrow} title={faq.title} />

      <Section id="cta" tone="lime" labelledBy="cta-titulo">
        <SectionTitle
          id="cta-titulo"
          size="h1"
          title={finalCta.title}
          description={finalCta.description}
          tone="lime"
        />
        <Button href={finalCta.cta.href} size="lg" arrow className="mt-10">
          {finalCta.cta.label}
        </Button>
      </Section>

      <Block
        id="contato"
        tone="light"
        eyebrow={contactSection.eyebrow}
        title={contactSection.title}
        description={contactSection.description}
      />
    </>
  )
}
