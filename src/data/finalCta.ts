import type { Heading, Link } from './types'

export const finalCta: { id: string; title: Heading; description: string; cta: Link } = {
  id: 'cta',
  title: { text: 'Seu lugar na turma', highlight: 'já está guardado.' },
  description: 'Agende uma aula experimental grátis e venha sentir na pele como é treinar junto.',
  cta: { label: 'Agendar minha aula', href: '#contato' },
}
