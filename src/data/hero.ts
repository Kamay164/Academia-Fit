import type { Heading, Link } from './types'

export const hero: {
  eyebrow: string
  title: Heading
  description: string
  primaryCta: Link
  secondaryCta: Link
  socialProof: string
} = {
  eyebrow: 'Academia em Belo Horizonte',
  title: { text: 'Mais forte quando é', highlight: 'junto.' },
  description:
    'Na +Fit, ninguém treina sozinho. Turmas que se conhecem pelo nome, professores que acompanham de perto e uma comunidade inteira torcendo pela sua próxima repetição.',
  primaryCta: { label: 'Agende sua aula experimental', href: '#contato' },
  secondaryCta: { label: 'Conheça a comunidade', href: '#comunidade' },
  socialProof: '+1.200 pessoas treinando juntas na Savassi',
}
