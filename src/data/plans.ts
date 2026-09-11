// ============================================================
// DADOS DOS PLANOS — edite aqui para atualizar os planos
// ============================================================

import type { WhatsAppMessageKey } from '../utils/whatsapp'

export interface Plan {
  id: string
  name: string
  tagline: string
  description: string
  highlights: string[]
  whatsappKey: WhatsAppMessageKey
  featured?: boolean
}

export const plans: Plan[] = [
  {
    id: 'essencial',
    name: 'Essencial',
    tagline: 'A experiência no mar, do seu jeito',
    description:
      'Para quem deseja aproveitar o passeio com total liberdade, levando seus próprios alimentos e bebidas a bordo.',
    highlights: [
      'Capitão e marinheiro',
      'Gelo incluso',
      'Carvão incluso',
      'Liberdade para levar seus itens',
    ],
    whatsappKey: 'planEssential',
  },
  {
    id: 'churrasco',
    name: 'Churrasco a Bordo',
    tagline: 'O mar e a brasa, juntos',
    description:
      'Uma experiência com toda a estrutura voltada para um momento de churrasco durante o passeio. Reúna quem você gosta e aproveite.',
    highlights: [
      'Kit churrasco a bordo',
      'Capitão e marinheiro',
      'Gelo e carvão',
      'Estrutura para churrasco',
    ],
    whatsappKey: 'planBBQ',
    featured: true,
  },
  {
    id: 'celebracao',
    name: 'Celebração',
    tagline: 'Momentos que merecem ser lembrados',
    description:
      'Para aniversários, despedidas, pedidos especiais e comemorações que merecem um cenário à altura. O mar como palco.',
    highlights: [
      'Estrutura para comemoração',
      'Capitão e marinheiro',
      'Decoração sob consulta',
      'Personalização disponível',
    ],
    whatsappKey: 'planCelebration',
  },
  {
    id: 'personalizado',
    name: 'Personalizado',
    tagline: 'Criado especialmente para você',
    description:
      'Roteiro, duração, paradas e adicionais definidos diretamente com a nossa equipe. A experiência do seu jeito.',
    highlights: [
      'Roteiro personalizado',
      'Duração flexível',
      'Adicionais sob medida',
      'Atendimento dedicado',
    ],
    whatsappKey: 'planCustom',
  },
]
