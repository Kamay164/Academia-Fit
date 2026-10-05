import type { Link } from './types.ts'

/** Dados gerais da marca. TODOS FICTÍCIOS — projeto de portfólio. */
export const site = {
  name: '+Fit',
  tagline: 'Mais forte quando é junto.',
  seo: {
    title: '+Fit — Academia em Belo Horizonte | Mais forte quando é junto',
    description:
      'Musculação guiada, funcional, aulas coletivas e boxe na Savassi. Na +Fit, ninguém treina sozinho: agende sua aula experimental grátis.',
  },
}

export const nav: Link[] = [
  { label: 'Comunidade', href: '#comunidade' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Planos', href: '#planos' },
  { label: 'Contato', href: '#contato' },
]

export const navCta: Link = { label: 'Aula experimental grátis', href: '#contato' }

/** Textos só para leitores de tela e teclado. */
export const a11y = {
  skipLink: 'Pular para o conteúdo',
  menuOpen: 'Abrir menu',
  menuClose: 'Fechar menu',
  newTab: '(abre em nova aba)',
}

export const contact = {
  address: {
    street: 'Rua do Movimento, 1000',
    district: 'Savassi',
    city: 'Belo Horizonte – MG',
  },
  hours: [
    { days: 'Seg a sex', time: '5h30 às 23h' },
    { days: 'Sábado', time: '8h às 18h' },
    { days: 'Domingo e feriados', time: '8h às 13h' },
  ],
  whatsapp: { name: 'WhatsApp', label: '(31) 90000-0000', href: '#contato' },
  email: { label: 'ola@maisfit.example', href: 'mailto:ola@maisfit.example' },
}

export type SocialNetwork = 'instagram' | 'youtube' | 'tiktok'

/** Perfis não existem: links apontam para "#". */
export const social: { network: SocialNetwork; label: string; href: string }[] = [
  { network: 'instagram', label: 'Instagram da +Fit', href: '#' },
  { network: 'youtube', label: 'YouTube da +Fit', href: '#' },
  { network: 'tiktok', label: 'TikTok da +Fit', href: '#' },
]

export const footer = {
  navTitle: 'Navegue',
  contactTitle: 'Fale com a gente',
  legal: '© 2026 +Fit. Academia fictícia — projeto de portfólio desenvolvido por Vinicius.',
  /** "Fotografias de fotógrafos do [Unsplash]. Depoimentos…" — o link fica no meio da frase. */
  credits: {
    before: 'Fotografias de fotógrafos do',
    link: { label: 'Unsplash', href: 'https://unsplash.com' },
    after: '. Depoimentos, números e contatos são fictícios.',
  },
  portfolio: { label: 'Ver portfólio', href: 'https://github.com/Kamay164' },
  backToTop: { label: 'Voltar ao topo', href: '#inicio' },
}
