// ============================================================
// ADICIONAIS E OPCIONAIS — edite conforme disponibilidade
// ============================================================

export interface Extra {
  id: string
  name: string
  description: string
  // TODO: Substituir pelo caminho da foto real em src/assets/images/extras/{id}.jpg
  image: string
  imageAlt: string
  available: boolean
}

export const extras: Extra[] = [
  {
    id: 'kit-churrasco',
    name: 'Kit Churrasco',
    description:
      'Tudo o que você precisa para uma experiência completa de churrasco no mar. Itens e composição a confirmar com a equipe.',
    // TODO: Substituir pela foto do kit em src/assets/images/extras/kit-churrasco.jpg
    image: '',
    imageAlt: 'Kit churrasco a bordo',
    available: true,
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    description:
      'Seleção de bebidas para complementar sua experiência. Consulte as opções disponíveis no momento da reserva.',
    // TODO: Substituir pela foto em src/assets/images/extras/bebidas.jpg
    image: '',
    imageAlt: 'Bebidas a bordo',
    available: true,
  },
  {
    id: 'decoracao',
    name: 'Decoração',
    description:
      'Decoração especial para aniversários, comemorações e momentos especiais. Disponível mediante contratação.',
    // TODO: Substituir pela foto em src/assets/images/extras/decoracao.jpg
    image: '',
    imageAlt: 'Decoração para comemoração a bordo',
    available: true,
  },
  {
    id: 'outros',
    name: 'Outros Adicionais',
    description:
      'Converse com nossa equipe sobre outras possibilidades para personalizar ainda mais a sua experiência.',
    // TODO: Substituir pela foto em src/assets/images/extras/outros.jpg
    image: '',
    imageAlt: 'Adicionais personalizados',
    available: true,
  },
]

export const extrasNote =
  'Todos os adicionais dependem de contratação prévia e estão sujeitos à disponibilidade. Consulte pelo WhatsApp.'
