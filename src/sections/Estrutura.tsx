import { PhotoImage, Section, SectionTitle } from '../components/ui'
import { facilities, facilityPhotos } from '../data'

/** Estrutura (#estrutura): fundo escuro, três fotos do espaço e os seis ambientes da academia. */
export function Estrutura() {
  return (
    <Section id={facilities.id} tone="dark" labelledBy="estrutura-titulo">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
        <SectionTitle
          id="estrutura-titulo"
          size="h1"
          tone="dark"
          eyebrow={facilities.eyebrow}
          title={facilities.title}
          className="lg:col-span-7"
        />
        <p className="text-lead text-fog max-w-prose lg:col-span-5 lg:self-end">
          {facilities.description}
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3 lg:mt-20 lg:gap-6">
        {facilityPhotos.map((photo, i) => (
          <div
            key={photo.src}
            className={`aspect-[16/10] overflow-hidden rounded-xl ${i === 0 ? 'md:col-span-3 md:aspect-[21/9]' : ''}`}
          >
            <PhotoImage
              photo={photo}
              sizes={i === 0 ? '(min-width: 1216px) 1152px, 92vw' : '(min-width: 768px) 30vw, 92vw'}
            />
          </div>
        ))}
      </div>

      <ul className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {facilities.items.map(({ icon: Icon, title, description }) => (
          <li key={title} className="flex gap-4 border-t border-white/15 pt-6">
            <Icon aria-hidden="true" className="text-lime size-7 shrink-0" strokeWidth={1.75} />
            <div>
              <h3 className="font-display text-xl font-bold">{title}</h3>
              <p className="text-fog mt-2">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
