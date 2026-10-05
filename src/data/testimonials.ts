import type { SectionIntro } from './types'

export interface Testimonial {
  name: string
  detail: string
  quote: string
}

/** Depoimentos FICTÍCIOS — o aviso `disclaimer` deve aparecer na página. */
export const testimonials: SectionIntro & { items: Testimonial[]; disclaimer: string } = {
  id: 'depoimentos',
  eyebrow: 'Depoimentos',
  title: { text: 'Quem treina com a gente,', highlight: 'conta.' },
  items: [
    {
      name: 'Camila R.',
      detail: 'Funcional · treina há 2 anos',
      quote:
        'Eu sempre desistia da academia no segundo mês. Na +Fit, se eu falto, alguém da turma manda mensagem perguntando onde eu tô. Não tem como não voltar.',
    },
    {
      name: 'Diego M.',
      detail: 'Boxe · treina há 8 meses',
      quote:
        'Entrei sem saber dar um jab. Hoje treino com gente que virou amigo de verdade. O suor é individual; a evolução é coletiva.',
    },
    {
      name: 'Lúcia A., 62 anos',
      detail: 'Musculação guiada · treina há 3 anos',
      quote:
        'Achei que academia não era lugar pra mim. Fui recebida pelo nome no primeiro dia e nunca mais me senti deslocada.',
    },
    {
      name: 'Rafael S.',
      detail: 'Aulas coletivas · treina há 1 ano',
      quote:
        'O treinão de sábado virou o melhor compromisso da minha semana. Chego cansado de tudo e saio com energia pra dividir.',
    },
  ],
  disclaimer: 'Depoimentos fictícios, criados para este projeto de portfólio.',
}
