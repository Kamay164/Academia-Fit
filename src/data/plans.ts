import type { Link, SectionIntro } from './types'

export interface Plan {
  id: string
  name: string
  /** Preço mensal em reais (fictício). */
  price: number
  audience: string
  features: string[]
  cta: Link
  featured?: boolean
  badge?: string
}

export const plans: SectionIntro & { items: Plan[]; perMonth: string; note: string } = {
  id: 'planos',
  eyebrow: 'Planos',
  title: { text: 'Escolha seu plano.', highlight: 'A comunidade vem junto.' },
  description: 'Sem taxa de matrícula e com a primeira aula experimental por nossa conta.',
  items: [
    {
      id: 'essencial',
      name: 'Essencial',
      price: 129.9,
      audience: 'Para começar no seu ritmo.',
      features: [
        'Musculação guiada',
        'Avaliação física inicial',
        'Treino no app',
        'Acesso em todos os horários',
        'Treinão de sábado',
      ],
      cta: { label: 'Começar no Essencial', href: '#contato' },
    },
    {
      id: 'comunidade',
      name: 'Comunidade',
      price: 189.9,
      audience: 'Para treinar com a turma toda.',
      features: [
        'Tudo do Essencial',
        'Funcional & Cross ilimitado',
        'Aulas coletivas ilimitadas',
        '1 convidado por mês',
      ],
      cta: { label: 'Quero treinar junto', href: '#contato' },
      featured: true,
      badge: 'Mais escolhido',
    },
    {
      id: 'total',
      name: 'Total',
      price: 249.9,
      audience: 'Para quem quer viver a +Fit inteira.',
      features: [
        'Tudo do Comunidade',
        'Boxe & Lutas ilimitado',
        'Reavaliação física a cada 3 meses',
        'Convidado toda semana',
      ],
      cta: { label: 'Quero o Total', href: '#contato' },
    },
  ],
  perMonth: '/mês',
  note: 'Planos mensais, sem fidelidade. No plano anual, 15% de desconto.',
}

export const formatPrice = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
