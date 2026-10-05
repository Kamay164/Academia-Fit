import { Badge, PhotoImage, Section, SectionTitle } from '../components/ui'
import { modalities, modalityPhotos } from '../data'

/** Modalidades (#modalidades): quatro cartões com foto, etiqueta e destaques de cada forma de treinar. */
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
        {modalities.items.map(({ id, icon: Icon, name, tag, description, highlights }) => {
          const photo = modalityPhotos[id as keyof typeof modalityPhotos]
          return (
            <li
              key={id}
              className="border-line group flex flex-col overflow-hidden rounded-xl border bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[4/3]">
                <PhotoImage
                  photo={photo}
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 46vw, 92vw"
                  className="ease-out-expo transition-transform duration-700 group-hover:scale-105"
                />
                <Badge tone="lime" className="absolute top-4 left-4">
                  {tag}
                </Badge>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="bg-lime text-ink grid size-10 shrink-0 place-items-center rounded-full">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="text-h3">{name}</h3>
                </div>
                <p className="text-moss mt-4">{description}</p>
                <ul className="mt-6 flex flex-wrap gap-2 pt-1">
                  {highlights.map((item) => (
                    <li key={item}>
                      <Badge tone="mist">{item}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
