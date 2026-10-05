import { Coffee, Flame, Sun } from 'lucide-react'
import type { IconItem, SectionIntro } from './types'

/** Números fictícios. `value` numérico permite animar o contador (Etapa 6). */
export interface Stat {
  value: number
  prefix?: string
  suffix?: string
  label: string
}

export const community: SectionIntro & {
  stats: Stat[]
  rituals: IconItem[]
  galleryCaption: string
} = {
  id: 'comunidade',
  eyebrow: 'Comunidade +Fit',
  title: { text: 'Aqui, a gente se conhece', highlight: 'pelo nome.' },
  description:
    'Mais do que alunos, uma turma. Tem gente que veio pelo treino e ficou pelos amigos, pelo café depois da aula e pelos desafios que só fazem sentido quando são em grupo.',
  stats: [
    { value: 1200, suffix: '+', label: 'pessoas na comunidade' },
    { value: 70, label: 'aulas em grupo por semana' },
    { value: 18, label: 'professores acompanhando de perto' },
    { value: 6, suffix: ' anos', label: 'somando gente em BH' },
  ],
  rituals: [
    {
      icon: Sun,
      title: 'Treinão de sábado',
      description:
        'Uma aula aberta, todo sábado de manhã, para todos os níveis. Pode trazer quem você quiser.',
    },
    {
      icon: Flame,
      title: 'Desafio do mês',
      description: 'Uma meta coletiva por mês. A academia inteira soma junto no placar.',
    },
    {
      icon: Coffee,
      title: 'Café pós-treino',
      description:
        'Toda sexta, depois da última aula da manhã. O treino acaba, a conversa continua.',
    },
  ],
  galleryCaption: 'Momentos de quem treina junto.',
}
