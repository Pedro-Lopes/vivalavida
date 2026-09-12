import { siteConfig } from '../config/site'

// Mensagens prontas — edite os textos conforme necessário
export const whatsappMessages = {
  general:
    'Olá! Conheci a Viva La Vida pelo portfólio e gostaria de receber mais informações sobre os passeios de lancha.',
  routeMain:
    'Olá! Gostaria de consultar disponibilidade para o Roteiro principal — Jurujuba, Praia Vermelha ou Urca — Viva La Vida.',
  routeRio:
    'Olá! Gostaria de consultar disponibilidade para o roteiro Rio visto da água — Viva La Vida.',
  routeIslands:
    'Olá! Gostaria de consultar disponibilidade para o roteiro Ilhas e mar aberto — pacotes a combinar — Viva La Vida.',
  routeBeaches:
    'Olá! Gostaria de consultar disponibilidade para o roteiro Praias de Niterói — pacotes a combinar — Viva La Vida.',
  planEssential:
    'Olá! Gostaria de consultar disponibilidade para o passeio Viva La Vida, na opção Essencial.',
  planBBQ:
    'Olá! Gostaria de consultar disponibilidade para o passeio Viva La Vida, na opção Churrasco a Bordo.',
  planCelebration:
    'Olá! Gostaria de consultar disponibilidade para o passeio Viva La Vida, na opção Celebração.',
  planCustom:
    'Olá! Gostaria de consultar disponibilidade para o passeio Viva La Vida, na opção Personalizado.',
  reserve:
    'Olá! Gostaria de reservar um passeio pela Viva La Vida. Poderia me informar a disponibilidade?',
} as const

export type WhatsAppMessageKey = keyof typeof whatsappMessages

export function getWhatsAppUrl(messageKey: WhatsAppMessageKey = 'general'): string {
  const message = whatsappMessages[messageKey]
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`
}

export function getWhatsAppUrlWithText(customMessage: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(customMessage)}`
}
