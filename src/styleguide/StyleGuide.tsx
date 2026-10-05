/**
 * Página TEMPORÁRIA de style guide (Etapa 1).
 * Serve para visualizar e aprovar os tokens. Será removida quando a landing page
 * começar a ser montada (Etapa 4) — ver CLAUDE.md.
 */
import { ArrowRight, Users } from 'lucide-react'
import type { ReactNode } from 'react'
import logoDark from '../assets/brand/logo-dark.svg'
import logo from '../assets/brand/logo.svg'
import symbol from '../assets/brand/symbol.svg'
import { communityPhotos, facilityPhotos, heroPhoto, modalityPhotos } from '../data/images'
import type { Photo } from '../data/images'

const colors = [
  {
    name: 'ink',
    hex: '#0E1311',
    use: 'Texto principal, blocos escuros',
    contrast: '18.8:1 sobre branco',
    dark: true,
  },
  {
    name: 'ink-soft',
    hex: '#1A211E',
    use: 'Cards sobre fundo escuro',
    contrast: 'branco 16.4:1',
    dark: true,
  },
  {
    name: 'moss',
    hex: '#56605B',
    use: 'Texto secundário sobre claro',
    contrast: '6.5:1 sobre branco',
    dark: true,
  },
  {
    name: 'stone',
    hex: '#8A948F',
    use: 'Bordas de inputs, ícones discretos',
    contrast: '3.1:1 (UI)',
    dark: true,
  },
  {
    name: 'fog',
    hex: '#A9B3AE',
    use: 'Texto secundário sobre escuro',
    contrast: '8.7:1 sobre ink',
    dark: false,
  },
  {
    name: 'line',
    hex: '#E3E7E4',
    use: 'Divisórias e bordas decorativas',
    contrast: 'decorativo',
    dark: false,
  },
  {
    name: 'mist',
    hex: '#F3F5F2',
    use: 'Fundo alternativo de seções',
    contrast: 'ink 17.1:1',
    dark: false,
  },
  { name: 'white', hex: '#FFFFFF', use: 'Fundo principal', contrast: '—', dark: false },
  {
    name: 'lime',
    hex: '#C8F031',
    use: 'Destaque: fundos e texto só sobre ink',
    contrast: '14.3:1 com ink',
    dark: false,
  },
  {
    name: 'lime-strong',
    hex: '#B5DB22',
    use: 'Hover do destaque',
    contrast: '11.7:1 com ink',
    dark: false,
  },
  {
    name: 'lime-deep',
    hex: '#3F6B00',
    use: 'Texto verde sobre claro',
    contrast: '6.3:1 sobre branco',
    dark: true,
  },
  {
    name: 'error',
    hex: '#C0261A',
    use: 'Erros sobre claro',
    contrast: '5.9:1 sobre branco',
    dark: true,
  },
]

const typeScale = [
  {
    token: 'text-display',
    label: 'Display · hero',
    sample: 'Mais forte quando é junto.',
    className: 'text-display font-display font-extrabold',
  },
  {
    token: 'text-h1',
    label: 'H1',
    sample: 'Ninguém fica pra trás',
    className: 'text-h1 font-display font-extrabold',
  },
  {
    token: 'text-h2',
    label: 'H2 · títulos de seção',
    sample: 'Uma comunidade que treina junto',
    className: 'text-h2 font-display font-extrabold',
  },
  {
    token: 'text-h3',
    label: 'H3 · cards',
    sample: 'Treino funcional em grupo',
    className: 'text-h3 font-display font-bold',
  },
  {
    token: 'text-lead',
    label: 'Lead · subtítulos',
    sample: 'Gente que te chama pelo nome e um time inteiro torcendo pela sua próxima repetição.',
    className: 'text-lead text-moss',
  },
  {
    token: 'text-base',
    label: 'Corpo',
    sample:
      'Na +Fit, cada treino é um compromisso coletivo. Você chega pelo resultado e fica pelas pessoas.',
    className: 'text-base text-moss',
  },
  {
    token: 'text-eyebrow',
    label: 'Eyebrow · rótulos',
    sample: 'Comunidade +Fit',
    className: 'text-eyebrow font-semibold uppercase text-lime-deep',
  },
]

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-line border-t py-16">
      <h2 className="text-eyebrow text-moss mb-8 font-semibold uppercase">{title}</h2>
      {children}
    </section>
  )
}

function Figure({ photo, sizes, label }: { photo: Photo; sizes: string; label: string }) {
  return (
    <figure>
      <img
        src={photo.src}
        srcSet={photo.srcSet}
        sizes={sizes}
        width={photo.width}
        height={photo.height}
        alt={photo.alt}
        loading="lazy"
        decoding="async"
        className="bg-mist h-auto w-full rounded-xl object-cover"
      />
      <figcaption className="text-moss mt-2 text-xs">
        <strong className="text-ink">{label}</strong> · foto de{' '}
        <a href={photo.credit.url} className="underline" target="_blank" rel="noreferrer">
          {photo.credit.author}
        </a>{' '}
        no Unsplash
      </figcaption>
    </figure>
  )
}

export default function StyleGuide() {
  return (
    <div className="max-w-content px-gutter mx-auto pb-24">
      <header className="flex flex-wrap items-end justify-between gap-6 py-12">
        <div>
          <img src={logo} alt="+Fit" className="h-10 w-auto" />
          <h1 className="text-h1 mt-6">Design system</h1>
          <p className="text-lead text-moss mt-3 max-w-prose">
            Direção B · Juntos. Página temporária para aprovar cores, tipografia e componentes
            visuais antes de montar a landing page.
          </p>
        </div>
        <span className="bg-mist text-moss rounded-full px-4 py-2 text-sm">Etapa 1 · v1</span>
      </header>

      <Block title="Logo">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="border-line grid h-48 place-items-center rounded-xl border bg-white">
            <img src={logo} alt="Logo +Fit para fundo claro" className="h-12 w-auto" />
          </div>
          <div className="bg-ink grid h-48 place-items-center rounded-xl">
            <img src={logoDark} alt="Logo +Fit para fundo escuro" className="h-12 w-auto" />
          </div>
          <div className="bg-mist grid h-48 place-items-center rounded-xl">
            <img src={symbol} alt="Símbolo +Fit" className="size-16" />
          </div>
        </div>
        <p className="text-moss mt-4 max-w-prose text-sm">
          O “+” é soma: cada pessoa que entra deixa o grupo mais forte. O círculo lima é o símbolo
          isolado (favicon, avatar de redes). Área de respiro mínima: metade da altura do círculo.
        </p>
      </Block>

      <Block title="Cores">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {colors.map((c) => (
            <li key={c.name} className="border-line overflow-hidden rounded-lg border">
              <div
                className={`flex h-24 items-end p-3 text-sm font-semibold ${c.dark ? 'text-white' : 'text-ink'}`}
                style={{ backgroundColor: c.hex }}
              >
                {c.name}
              </div>
              <div className="space-y-1 p-3 text-sm">
                <p className="text-moss font-mono text-xs">{c.hex}</p>
                <p>{c.use}</p>
                <p className="text-moss text-xs">Contraste: {c.contrast}</p>
              </div>
            </li>
          ))}
        </ul>
      </Block>

      <Block title="Tipografia">
        <p className="text-moss mb-8 text-sm">
          Títulos: <strong className="text-ink">Bricolage Grotesque</strong> (800) · Textos:{' '}
          <strong className="text-ink">Inter</strong> (400–600). Tamanhos fluidos — reduzem sozinhos
          no mobile.
        </p>
        <div className="space-y-10">
          {typeScale.map((t) => (
            <div key={t.token} className="grid gap-2 md:grid-cols-[12rem_1fr] md:gap-8">
              <div className="text-sm">
                <p className="font-semibold">{t.label}</p>
                <p className="text-moss font-mono text-xs">{t.token}</p>
              </div>
              <p className={t.className}>{t.sample}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Botões (referência visual — componente real na Etapa 4)">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="border-line flex flex-wrap items-center gap-3 rounded-xl border p-8">
            <a
              href="#top"
              className="bg-ink hover:bg-ink-soft inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition-colors duration-200"
            >
              Treine com a gente <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <a
              href="#top"
              className="border-ink text-ink hover:bg-mist inline-flex items-center rounded-full border px-6 py-3 font-semibold transition-colors duration-200"
            >
              Conheça a +Fit
            </a>
            <p className="text-moss w-full text-xs">
              Sobre fundo claro: primário grafite, secundário contorno.
            </p>
          </div>
          <div
            data-surface="dark"
            className="bg-ink flex flex-wrap items-center gap-3 rounded-xl p-8"
          >
            <a
              href="#top"
              className="bg-lime text-ink hover:bg-lime-strong inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors duration-200"
            >
              Treine com a gente <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <a
              href="#top"
              className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:border-white"
            >
              Conheça a +Fit
            </a>
            <p className="text-fog w-full text-xs">
              Sobre fundo escuro: primário lima, secundário contorno claro.
            </p>
          </div>
        </div>
      </Block>

      <Block title="Raios, sombras e espaçamento">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['rounded-sm', '8px · inputs pequenos', 'rounded-sm'],
            ['rounded-md', '14px · inputs, tags', 'rounded-md'],
            ['rounded-lg', '20px · cards', 'rounded-lg'],
            ['rounded-xl', '28px · fotos e blocos', 'rounded-xl'],
          ].map(([token, desc, cls]) => (
            <div key={token} className={`${cls} border-line bg-mist border p-5`}>
              <p className="font-mono text-xs">{token}</p>
              <p className="text-moss mt-1 text-sm">{desc}</p>
            </div>
          ))}
          <div className="shadow-soft rounded-lg bg-white p-5">
            <p className="font-mono text-xs">shadow-soft</p>
            <p className="text-moss mt-1 text-sm">Cards em repouso</p>
          </div>
          <div className="shadow-lift rounded-lg bg-white p-5">
            <p className="font-mono text-xs">shadow-lift</p>
            <p className="text-moss mt-1 text-sm">Hover e destaque</p>
          </div>
          <div className="border-line rounded-lg border p-5">
            <p className="font-mono text-xs">py-section</p>
            <p className="text-moss mt-1 text-sm">80px → 144px entre seções</p>
          </div>
          <div className="border-line rounded-lg border p-5">
            <p className="font-mono text-xs">max-w-content · px-gutter</p>
            <p className="text-moss mt-1 text-sm">1216px de largura · 16px → 32px de margem</p>
          </div>
        </div>
      </Block>

      <Block title="Composição de exemplo">
        <div data-surface="dark" className="bg-ink overflow-hidden rounded-xl text-white">
          <div className="grid gap-10 p-8 md:grid-cols-2 md:p-14">
            <div className="flex flex-col justify-center">
              <p className="text-eyebrow text-lime font-semibold uppercase">Comunidade +Fit</p>
              <p className="font-display text-h1 mt-5 font-extrabold">
                Mais forte quando é <span className="text-lime">junto.</span>
              </p>
              <p className="text-lead text-fog mt-5 max-w-prose">
                Treinos em grupo, gente que te chama pelo nome e um time inteiro torcendo pela sua
                próxima repetição.
              </p>
              <div className="text-fog mt-8 flex items-center gap-3 text-sm">
                <Users aria-hidden="true" className="text-lime size-5" />
                +1.200 pessoas treinando juntas
              </div>
            </div>
            <div
              aria-hidden="true"
              className="bg-ink-soft min-h-64 rounded-lg bg-[repeating-linear-gradient(45deg,transparent_0_20px,rgb(255_255_255/0.03)_20px_40px)]"
            />
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {['Funcional em grupo', 'Musculação guiada', 'Corrida +Fit'].map((t) => (
            <article
              key={t}
              className="bg-mist ease-out-expo hover:shadow-lift rounded-lg p-6 transition-shadow duration-300"
            >
              <h3 className="text-h3">{t}</h3>
              <p className="text-moss mt-2">Exemplo de card sobre fundo mist.</p>
            </article>
          ))}
        </div>
      </Block>
      <Block title="Fotografia (Etapa 3)">
        <p className="text-moss mb-8 max-w-prose text-sm">
          Fotos otimizadas em WebP, com várias larguras (<code>srcSet</code>) e dimensões fixas para
          não saltar o layout. Dados em <code>src/data/images.ts</code>.
        </p>
        <div className="space-y-10">
          <Figure photo={heroPhoto} sizes="(min-width: 1216px) 1216px, 100vw" label="Hero · 3:2" />
          <div>
            <h3 className="text-h3 mb-4">Comunidade</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {communityPhotos.map((p, i) => (
                <Figure
                  key={p.credit.url}
                  photo={p}
                  sizes="(min-width: 768px) 33vw, 50vw"
                  label={`Comunidade ${i + 1}`}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-h3 mb-4">Modalidades · 4:5</h3>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {Object.entries(modalityPhotos).map(([key, p]) => (
                <Figure key={key} photo={p} sizes="(min-width: 1024px) 25vw, 50vw" label={key} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-h3 mb-4">Estrutura · 16:10</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {facilityPhotos.map((p, i) => (
                <Figure
                  key={p.credit.url}
                  photo={p}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  label={`Estrutura ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Block>
    </div>
  )
}
