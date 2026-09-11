// ============================================================
// PERGUNTAS FREQUENTES — edite as respostas conforme necessário
// ============================================================

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    id: 'duracao',
    question: 'Quanto tempo dura o passeio?',
    answer:
      'A duração prevista é de aproximadamente 5 horas. O horário exato de início e término deve ser confirmado com a equipe no momento da reserva.',
  },
  {
    id: 'incluido',
    question: 'O que está incluído no passeio?',
    answer:
      'O passeio inclui capitão, marinheiro, gelo e carvão. Os itens podem variar conforme o plano contratado. Consulte pelo WhatsApp para detalhes do seu pacote.',
  },
  {
    id: 'alimentos',
    question: 'Posso levar alimentos e bebidas?',
    answer:
      'Consulte as regras pelo WhatsApp, pois podem variar conforme o plano contratado. Estamos prontos para esclarecer todos os detalhes.',
  },
  {
    id: 'roteiros',
    question: 'Os roteiros são fixos?',
    answer:
      'Os roteiros apresentados são referências. As paradas e percursos podem variar de acordo com as condições do mar, do clima e com o pacote escolhido. Também oferecemos a opção de passeio personalizado.',
  },
  {
    id: 'clima',
    question: 'O passeio pode ser cancelado por causa do clima?',
    answer:
      'Sim. A segurança da tripulação e dos passageiros é sempre a prioridade. Em caso de condições adversas do mar ou do clima, o passeio pode ser reagendado ou cancelado. Os detalhes da política de cancelamento devem ser consultados pelo WhatsApp.',
  },
  {
    id: 'reserva',
    question: 'Como funciona a reserva?',
    answer:
      'Entre em contato pelo WhatsApp para consultar disponibilidade, definir o roteiro e os detalhes da experiência. Os processos de reserva e pagamento serão informados diretamente pela equipe.',
  },
  {
    id: 'embarque',
    question: 'De onde a lancha sai?',
    answer:
      'O local de embarque será informado no momento da reserva, conforme o roteiro escolhido. Atendemos tanto o Rio de Janeiro quanto Niterói.',
  },
  {
    id: 'personalizado',
    question: 'Posso montar um passeio personalizado?',
    answer:
      'Sim. Oferecemos a opção de passeio personalizado, com roteiro, duração, paradas e adicionais definidos diretamente com a nossa equipe. Entre em contato pelo WhatsApp para conversarmos.',
  },
]
