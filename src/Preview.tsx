/**
 * PRÉVIA TEMPORÁRIA (Etapa 4).
 * Blocos vazios de cada seção + vitrine dos componentes, para testar âncoras, navbar, rolagem
 * e o ritmo claro/escuro. Cada bloco é substituído pela seção real na Etapa 5; este arquivo
 * é apagado ao final da Etapa 5B.
 */
import type { ReactNode } from 'react'
import { Badge, Button, Section, SectionTitle } from './components/ui'
import type { SectionTone } from './components/ui'
import {
  about,
  community,
  facilities,
  faq,
  finalCta,
  hero,
  modalities,
  plans,
  testimonials,
} from './data'
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
      <Section
        id="inicio"
        tone="dark"
        spacing="none"
        className="pb-section pt-40"
        labelledBy="inicio-titulo"
      >
        <Badge tone="glass" className="mb-6">
          Etapa 4 · layout base
        </Badge>
        <SectionTitle
          id="inicio-titulo"
          as="h1"
          size="display"
          eyebrow={hero.eyebrow}
          title={hero.title}
          description={hero.description}
          tone="dark"
        />
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={hero.primaryCta.href} tone="dark" size="lg" arrow>
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.secondaryCta.href} tone="dark" variant="secondary" size="lg">
            {hero.secondaryCta.label}
          </Button>
        </div>
        <p className="text-fog mt-8 text-sm">{hero.socialProof}</p>
      </Section>

      <Section id="componentes" tone="mist" labelledBy="componentes-titulo">
        <SectionTitle
          id="componentes-titulo"
          eyebrow="Prévia temporária"
          title={{ text: 'Componentes de', highlight: 'UI' }}
          description="Botões, etiquetas e títulos nos três fundos da página. Esta seção some na Etapa 5."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl bg-white p-8">
            <p className="text-eyebrow text-moss mb-6 font-semibold uppercase">Fundo claro</p>
            <div className="flex flex-wrap gap-3">
              <Button href="#planos" arrow>
                Primário
              </Button>
              <Button href="#planos" variant="secondary">
                Secundário
              </Button>
              <Button size="lg" disabled>
                Desabilitado
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge tone="lime">Mais escolhido</Badge>
              <Badge tone="ink">Todos os níveis</Badge>
              <Badge tone="mist">Turmas de até 14</Badge>
              <Badge tone="outline">+40 por semana</Badge>
            </div>
          </div>
          <div data-surface="dark" className="bg-ink rounded-xl p-8 text-white">
            <p className="text-eyebrow text-fog mb-6 font-semibold uppercase">Fundo escuro</p>
            <div className="flex flex-wrap gap-3">
              <Button href="#planos" tone="dark" arrow>
                Primário
              </Button>
              <Button href="#planos" tone="dark" variant="secondary">
                Secundário
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge tone="lime">Mais escolhido</Badge>
              <Badge tone="glass">Todos os níveis</Badge>
            </div>
          </div>
          <div className="bg-lime rounded-xl p-8">
            <p className="text-eyebrow mb-6 font-semibold uppercase">Fundo lima</p>
            <div className="flex flex-wrap gap-3">
              <Button href="#planos" arrow>
                Primário
              </Button>
              <Button href="#planos" variant="secondary">
                Secundário
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge tone="ink">Mais escolhido</Badge>
            </div>
          </div>
        </div>
      </Section>

      <Block
        id="sobre"
        tone="light"
        eyebrow={about.eyebrow}
        title={about.title}
        description={about.description}
      />
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
