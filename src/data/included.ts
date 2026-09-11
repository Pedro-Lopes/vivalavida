// ============================================================
// ITENS INCLUÍDOS — edite conforme os itens confirmados
// ============================================================

export interface IncludedItem {
  id: string
  icon: string          // nome do ícone Lucide
  label: string
  description: string
}

export const includedItems: IncludedItem[] = [
  {
    id: 'captain',
    icon: 'Anchor',
    label: 'Capitão',
    description: 'Profissional experiente responsável pela navegação durante todo o passeio.',
  },
  {
    id: 'crew',
    icon: 'Users',
    label: 'Marinheiro',
    description: 'Tripulação para garantir conforto e segurança a bordo.',
  },
  {
    id: 'ice',
    icon: 'Snowflake',
    label: 'Gelo',
    description: 'Gelo incluso para manter suas bebidas sempre geladas.',
  },
  {
    id: 'charcoal',
    icon: 'Flame',
    label: 'Carvão',
    description: 'Carvão incluso para quem deseja fazer churrasco a bordo.',
  },
]

export const includedNote =
  'Os itens incluídos podem variar conforme o plano contratado. Consulte-nos para mais detalhes.'

export const durationText = 'Aproximadamente 5 horas de experiência'
