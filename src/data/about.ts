import { HeartHandshake, Trophy, Users } from 'lucide-react'
import type { IconItem, SectionIntro } from './types'

export const about: SectionIntro & { pillars: IconItem[] } = {
  id: 'sobre',
  eyebrow: 'Nosso jeito de treinar',
  title: { text: 'Você chega pelo resultado.', highlight: 'Fica pelas pessoas.' },
  description:
    'A gente acredita que o treino mais difícil fica mais leve quando tem alguém do lado. Por isso a +Fit foi pensada para juntar gente: turmas pequenas, professores presentes e um espaço onde o seu esforço é visto — e comemorado.',
  pillars: [
    {
      icon: Users,
      title: 'Suor compartilhado',
      description: 'Treinar em grupo puxa o seu melhor. Quando a turma vai, você vai junto.',
    },
    {
      icon: HeartHandshake,
      title: 'Ninguém fica pra trás',
      description:
        'Do primeiro dia ao décimo ano, cada treino é ajustado para o seu momento. Iniciante aqui é bem-vindo, não intruso.',
    },
    {
      icon: Trophy,
      title: 'Cada conquista é de todo mundo',
      description:
        'Primeira barra, primeiro 5 km, primeiro mês sem faltar. A gente comemora tudo — e em voz alta.',
    },
  ],
}
