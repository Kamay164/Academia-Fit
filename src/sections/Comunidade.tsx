import { CountUp, PhotoImage, Section, SectionTitle } from '../components/ui'
import { community, communityPhotos } from '../data'
import { reveal, stagger } from '../lib/reveal'

const sizes = '(min-width: 1024px) 25vw, 50vw'

/** Posições do mosaico: fotos em retrato ocupam duas linhas; a 2ª ocupa duas colunas no desktop. */
const tiles = ['row-span-2', 'md:col-span-2', '', '', 'md:col-start-4 md:row-start-1 md:row-span-2']

/**
 * Comunidade (#comunidade): prova de que a +Fit é um lugar de pertencimento — números, mosaico de
 * fotos de grupo e os rituais da academia.
 */
export function Comunidade() {
  return (
    <Section id={community.id} tone="mist" labelledBy="comunidade-titulo">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
        <SectionTitle
          id="comunidade-titulo"
          size="h1"
          eyebrow={community.eyebrow}
          title={community.title}
          description={community.description}
          className="lg:col-span-7"
        />
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:col-span-5 lg:self-end">
          {community.stats.map((stat, i) => (
            <div key={stat.label} className="border-ink border-t-2 pt-4" {...reveal(stagger(i))}>
              <dd className="font-display text-h1 order-first leading-none font-extrabold tracking-tight">
                <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </dd>
              <dt className="text-moss mt-2 text-sm">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>

      <figure className="mt-16 lg:mt-24">
        <div className="grid auto-rows-[11rem] grid-cols-2 gap-3 sm:auto-rows-[14rem] md:auto-rows-[15rem] md:grid-cols-4 md:gap-4 lg:auto-rows-[17rem]">
          {communityPhotos.map((photo, i) => (
            <div
              key={photo.src}
              className={`overflow-hidden rounded-xl ${tiles[i] ?? ''}`}
              {...reveal(stagger(i, 70))}
            >
              <PhotoImage photo={photo} sizes={sizes} />
            </div>
          ))}
        </div>
        <figcaption className="text-moss mt-4 text-sm" {...reveal()}>
          {community.galleryCaption}
        </figcaption>
      </figure>

      <ul className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-20 lg:gap-12">
        {community.rituals.map(({ icon: Icon, title, description }, i) => (
          <li key={title} className="flex gap-5" {...reveal(stagger(i))}>
            <span className="bg-ink text-lime grid size-12 shrink-0 place-items-center rounded-full">
              <Icon aria-hidden="true" className="size-6" />
            </span>
            <div>
              <h3 className="text-h3">{title}</h3>
              <p className="text-moss mt-2">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
