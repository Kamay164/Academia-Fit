import { Bike, Dumbbell, Flame, Swords } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { SectionIntro } from './types'

export interface Modality {
  id: string
  icon: LucideIcon
  name: string
  tag: string
  description: string
  highlights: string[]
}

export const modalities: SectionIntro & { items: Modality[] } = {
  id: 'modalidades',
  eyebrow: 'Modalidades',
  title: { text: 'Escolha como suar.', highlight: 'A gente vai junto.' },
  description: 'Quatro formas de treinar, um mesmo espírito: ninguém fica sozinho no treino.',
  items: [
    {
      id: 'musculacao',
      icon: Dumbbell,
      name: 'Musculação guiada',
      tag: 'Todos os níveis',
      description:
        'Treino de força com professor na sala o tempo todo. Seu plano é montado com você e revisado a cada mês.',
      highlights: ['Avaliação inicial', 'Treino no app', 'Ajuste mensal'],
    },
    {
      id: 'funcional',
      icon: Flame,
      name: 'Funcional & Cross',
      tag: 'Turmas de até 14',
      description:
        'Treinos intensos, curtos e diferentes a cada dia. A turma pequena faz o grupo puxar o ritmo — e o professor corrigir de perto.',
      highlights: ['50 minutos', 'Escalas por nível', 'Muito suor'],
    },
    {
      id: 'coletivas',
      icon: Bike,
      name: 'Aulas coletivas',
      tag: '+40 por semana',
      description:
        'Bike indoor, HIIT, dança e mobilidade. Música alta, energia lá em cima e gente cantando junto no último minuto.',
      highlights: ['Bike indoor', 'HIIT', 'Dança', 'Mobilidade'],
    },
    {
      id: 'lutas',
      icon: Swords,
      name: 'Boxe & Lutas',
      tag: 'Iniciante ao avançado',
      description:
        'Técnica, condicionamento e respeito. Boxe e muay thai com treino em dupla — porque luta se aprende com parceiro.',
      highlights: ['Boxe', 'Muay thai', 'Treino em dupla'],
    },
  ],
}
