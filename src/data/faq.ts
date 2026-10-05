import type { SectionIntro } from './types'

/** Perguntas frequentes (seção proposta na Etapa 2 e aprovada na Etapa 9). */
export const faq: SectionIntro & { items: { question: string; answer: string }[] } = {
  id: 'faq',
  eyebrow: 'Perguntas frequentes',
  title: { text: 'Ficou alguma', highlight: 'dúvida?' },
  items: [
    {
      question: 'Nunca treinei. Vou conseguir acompanhar?',
      answer:
        'Vai, sim. Todo treino tem versões por nível e o professor ajusta para você. A maioria da nossa turma começou do zero.',
    },
    {
      question: 'Como funciona a aula experimental?',
      answer:
        'Você agenda pelo formulário, escolhe a modalidade e treina com a turma, sem custo. Só precisa trazer roupa de treino e água.',
    },
    {
      question: 'Preciso reservar as aulas em grupo?',
      answer:
        'Sim, pelo app, com até 48 horas de antecedência. Assim a turma fica do tamanho certo e ninguém treina apertado.',
    },
    {
      question: 'Posso cancelar quando quiser?',
      answer: 'Pode. Os planos mensais não têm fidelidade nem multa.',
    },
    {
      question: 'Posso levar um amigo?',
      answer:
        'Deve! O treinão de sábado é aberto, e os planos Comunidade e Total incluem convidados.',
    },
  ],
}
