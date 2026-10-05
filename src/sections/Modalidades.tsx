import { Badge, PhotoImage, Section, SectionTitle } from '../components/ui'
import { modalities, modalityPhotos } from '../data'
import { reveal, stagger } from '../lib/reveal'

/**
 * Modalidades (#modalidades): quatro cartões com foto, etiqueta e destaques de cada forma de treinar.
 * A partir de `sm`, cada cartão usa as linhas da grade da lista (subgrid): título, texto e
 * destaques ficam alinhados entre cartões vizinhos mesmo quando um título ocupa só uma linha.
 */
export function Modalidades() {
  return (
    <Section id={modalities.id} labelledBy="modalidades-titulo">
      <SectionTitle
        id="modalidades-titulo"
        size="h1"
        eyebrow={modalities.eyebrow}
        title={modalities.title}
        description={modalities.description}
      />

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
        {modalities.items.map(({ id, icon: Icon, name, tag, description, highlights }, i) => (
          <li
            key={id}
            className="border-line group grid grid-rows-[auto_auto_1fr_auto] gap-0 overflow-hidden rounded-xl border bg-white sm:row-span-4 sm:grid-rows-subgrid"
            {...reveal(stagger(i))}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <PhotoImage
                photo={modalityPhotos[id]}
                sizes="(min-width: 1024px) 24vw, (min-width: 640px) 46vw, 92vw"
                className="ease-out-expo transition-transform duration-700 group-hover:scale-105"
              />
              <Badge tone="lime" className="absolute top-4 left-4">
                {tag}
              </Badge>
            </div>
            <div className="flex items-center gap-3 px-6 pt-6">
              <span className="bg-ink text-lime grid size-10 shrink-0 place-items-center rounded-full">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <h3 className="text-h3">{name}</h3>
            </div>
            <p className="text-moss mt-4 px-6">{description}</p>
            <ul className="mt-6 flex flex-wrap content-start gap-2 px-6 pt-1 pb-6">
              {highlights.map((item) => (
                <li key={item}>
                  <Badge tone="mist">{item}</Badge>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
