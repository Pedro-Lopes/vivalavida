// ============================================================
// MOMENTOS / OCASIÕES — edite os textos e imagens
// ============================================================

export interface Moment {
  id: string
  title: string
  description: string
  // TODO: Substituir pelas fotos em src/assets/images/moments/{id}.jpg
  image: string
  imageAlt: string
  size: 'large' | 'medium' | 'small'
}

export const moments: Moment[] = [
  {
    id: 'aniversario',
    title: 'Aniversários',
    description: 'Celebre mais um ano com o mar como cenário.',
    image:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Comemoração de aniversário',
    size: 'large',
  },
  {
    id: 'amigos',
    title: 'Encontros entre amigos',
    description: 'O tipo de dia que todo mundo vai querer repetir.',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Grupo de amigos aproveitando',
    size: 'medium',
  },
  {
    id: 'familia',
    title: 'Passeios em família',
    description: 'Memórias que atravessam gerações.',
    image:
      'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Família em passeio',
    size: 'medium',
  },
  {
    id: 'romantico',
    title: 'Passeio romântico',
    description: 'Dois, o mar e o pôr do sol.',
    image:
      'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Casal em passeio romântico',
    size: 'large',
  },
  {
    id: 'pedido',
    title: 'Pedido de casamento',
    description: 'O sim mais bonito com o horizonte ao fundo.',
    image:
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Pedido de casamento',
    size: 'small',
  },
  {
    id: 'despedida',
    title: 'Despedidas',
    description: 'A melhor forma de marcar uma nova fase.',
    image:
      'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Grupo celebrando',
    size: 'small',
  },
  {
    id: 'descanso',
    title: 'Dia de descanso',
    description: 'Às vezes o que a gente precisa é de mar e silêncio.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Dia relaxante no mar',
    size: 'medium',
  },
  {
    id: 'comemoracao',
    title: 'Comemorações especiais',
    description: 'Todo motivo de festa merece um cenário à altura.',
    image:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Comemoração especial',
    size: 'medium',
  },
]
