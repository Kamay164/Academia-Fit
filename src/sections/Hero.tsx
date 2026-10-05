import { Button, Container, SectionTitle } from '../components/ui'
import { community, hero, heroPhoto, testimonials } from '../data'

/** Inicial de quem deu depoimento ("Camila R." → "C") para a pilha de avatares da prova social. */
const avatars = testimonials.items.map(({ name }) => name[0])
const avatarColors = [
  'bg-lime text-ink',
  'bg-white text-ink',
  'bg-ink-soft text-white',
  'bg-fog text-ink',
]

/** "+1.200 pessoas treinando…" → número em destaque + resto da frase. */
const [proofCount, ...proofRest] = hero.socialProof.split(' ')

const ritual = community.rituals[0]

/**
 * Primeira dobra: foto de aula em grupo + promessa ("Mais forte quando é junto.") + CTA.
 * Mobile: foto ao fundo com gradiente grafite e texto embaixo, CTA visível sem rolar (375×667).
 * Desktop: texto à esquerda sobre grafite, foto ocupando a direita e se dissolvendo no fundo.
 */
export function Hero() {
  const RitualIcon = ritual.icon
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-titulo"
      data-surface="dark"
      className="bg-ink relative isolate flex min-h-svh flex-col overflow-hidden text-white lg:min-h-[min(100svh,58rem)]"
    >
      <div className="absolute inset-0 -z-10 lg:left-[36%]">
        <img
          src={heroPhoto.src}
          srcSet={heroPhoto.srcSet}
          sizes="(min-width: 1024px) 64vw, 100vw"
          width={heroPhoto.width}
          height={heroPhoto.height}
          alt={heroPhoto.alt}
          fetchPriority="high"
          decoding="async"
          className="size-full object-cover object-[50%_30%] lg:object-[62%_30%]"
        />
        {/* Gradientes: garantem contraste do texto (mobile: de baixo; desktop: da esquerda) */}
        <div
          aria-hidden="true"
          className="from-ink via-ink/85 to-ink/25 absolute inset-0 bg-linear-to-t via-55% lg:hidden"
        />
        <div
          aria-hidden="true"
          className="from-ink via-ink/90 absolute inset-0 hidden bg-linear-to-r via-28% to-transparent to-70% lg:block"
        />
        <div
          aria-hidden="true"
          className="from-ink absolute inset-x-0 bottom-0 hidden h-48 bg-linear-to-t to-transparent lg:block"
        />
      </div>

      <Container className="flex flex-1 flex-col justify-end pt-[calc(var(--spacing-nav)+4rem)] pb-10 lg:justify-center lg:pb-14">
        <div className="max-w-2xl">
          <SectionTitle
            id="inicio-titulo"
            as="h1"
            size="display"
            tone="dark"
            eyebrow={hero.eyebrow}
            title={hero.title}
            description={hero.description}
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-10">
            <Button href={hero.primaryCta.href} tone="dark" size="lg" arrow>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} tone="dark" variant="secondary" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-4 lg:mt-14">
            <div aria-hidden="true" className="flex -space-x-2.5">
              {avatars.map((initial, i) => (
                <span
                  key={i}
                  className={`ring-ink grid size-10 place-items-center rounded-full text-sm font-bold ring-3 ${avatarColors[i % avatarColors.length]}`}
                >
                  {initial}
                </span>
              ))}
            </div>
            <p className="text-fog text-sm leading-snug">
              <strong className="font-display block text-xl font-extrabold text-white">
                {proofCount}
              </strong>
              {proofRest.join(' ')}
            </p>
          </div>
        </div>
      </Container>

      {/* Card de ritual sobre a foto (só desktop): reforça "comunidade" sem competir com o CTA */}
      <div className="pointer-events-none absolute inset-x-0 bottom-14 hidden lg:block">
        <Container className="flex justify-end">
          <div className="bg-ink/55 flex max-w-xs items-start gap-4 rounded-lg border border-white/15 p-5 backdrop-blur-md">
            <span className="bg-lime text-ink grid size-10 shrink-0 place-items-center rounded-full">
              <RitualIcon aria-hidden="true" className="size-5" />
            </span>
            <div>
              <p className="font-display font-bold">{ritual.title}</p>
              <p className="mt-1 text-sm leading-snug text-white/80">{ritual.description}</p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
