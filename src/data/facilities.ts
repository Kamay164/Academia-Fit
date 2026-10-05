import { Coffee, Dumbbell, LayoutGrid, Music, ShowerHead, Swords } from 'lucide-react'
import type { IconItem, SectionIntro } from './types'

export const facilities: SectionIntro & { items: IconItem[] } = {
  id: 'estrutura',
  eyebrow: 'Estrutura',
  title: { text: 'Um espaço feito para', highlight: 'treinar junto.' },
  description: '1.800 m² na Savassi, pensados para o treino fluir e a convivência acontecer.',
  items: [
    {
      icon: Dumbbell,
      title: 'Sala de musculação',
      description: 'Equipamentos novos e espaço de sobra para treinar sem fila.',
    },
    {
      icon: LayoutGrid,
      title: 'Box de funcional',
      description: 'Área livre de 300 m² com piso emborrachado e estrutura completa.',
    },
    {
      icon: Music,
      title: 'Estúdios de aulas',
      description: 'Dois estúdios climatizados, com som e iluminação para a aula pegar fogo.',
    },
    {
      icon: Swords,
      title: 'Ringue e área de lutas',
      description: 'Ringue oficial, sacos e tatames para boxe e muay thai.',
    },
    {
      icon: ShowerHead,
      title: 'Vestiários completos',
      description: 'Chuveiros quentes, armários com senha e secadores.',
    },
    {
      icon: Coffee,
      title: 'Espaço de convivência',
      description: 'Café, mesas e Wi-Fi para o depois do treino.',
    },
  ],
}
