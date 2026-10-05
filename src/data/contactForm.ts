import type { SectionIntro } from './types'

/** Formulário só front-end: valida no navegador e NÃO envia dados para lugar nenhum. */
export const contactSection: SectionIntro = {
  id: 'contato',
  eyebrow: 'Contato',
  title: { text: 'Bora treinar', highlight: 'junto?' },
  description: 'Deixe seus dados e a gente te chama para agendar sua aula experimental.',
}

export const contactForm = {
  fields: {
    name: { label: 'Nome', placeholder: 'Como você gosta de ser chamado', required: true },
    whatsapp: { label: 'WhatsApp', placeholder: '(31) 90000-0000', required: true },
    email: { label: 'E-mail', placeholder: 'voce@email.com', required: false },
    modality: {
      label: 'Modalidade de interesse',
      placeholder: 'Selecione',
      required: true,
      options: [
        'Musculação guiada',
        'Funcional & Cross',
        'Aulas coletivas',
        'Boxe & Lutas',
        'Ainda não sei',
      ],
    },
    period: {
      label: 'Melhor período',
      placeholder: 'Selecione',
      required: false,
      options: ['Manhã', 'Tarde', 'Noite'],
    },
    message: {
      label: 'Mensagem',
      placeholder: 'Quer contar algo pra gente?',
      required: false,
    },
  },
  /** Aviso no topo do formulário quando há erros (anunciado por leitores de tela). */
  errorSummary: 'Revise os campos destacados para continuar.',
  errors: {
    name: 'Conta pra gente como você se chama.',
    whatsapp: 'Digite um WhatsApp válido, com DDD.',
    email: 'Esse e-mail parece incompleto.',
    modality: 'Escolha uma modalidade (ou "Ainda não sei").',
  },
  optionalLabel: '(opcional)',
  submit: { idle: 'Quero minha aula experimental', loading: 'Enviando…' },
  success: {
    title: 'Pronto, você está na lista!',
    message:
      'Como este é um projeto de portfólio, nenhuma mensagem foi enviada de verdade — mas, se fosse, a gente te chamaria no WhatsApp ainda hoje.',
  },
  mapAlt: 'Ilustração do mapa da região da Savassi com a localização da +Fit',
}
