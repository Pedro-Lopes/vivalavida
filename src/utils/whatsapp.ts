import { siteConfig } from '../config/site'

// Mensagens prontas — edite os textos conforme necessário
export const whatsappMessages = {
  general:
    'Olá! Conheci a Viva La Vida pelo portfólio e gostaria de receber mais informações sobre os passeios de lancha.',
  routeMain:
    'Olá! Gostaria de consultar disponibilidade para o Roteiro Entre Niterói e o Rio — Viva La Vida.',
  routeRio:
    'Olá! Gostaria de consultar disponibilidade para o Roteiro a partir do Rio de Janeiro — Viva La Vida.',
  routeIslands:
    'Olá! Gostaria de consultar disponibilidade para o Roteiro Ilhas e Mar Aberto — Viva La Vida.',
  routeBeaches:
    'Olá! Gostaria de consultar disponibilidade para o Roteiro Praias de Niterói — Viva La Vida.',
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
