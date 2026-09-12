// ============================================================
// DADOS DOS ROTEIROS — edite aqui para atualizar o conteúdo
// ============================================================

export interface RouteImage {
  src: string
  alt: string
}

export interface Route {
  id: string
  title: string
  subtitle: string
  description: string
  stops: string[]
  image: string
  images: RouteImage[]
  imageAlt: string
  note?: string
  whatsappKey: 'routeMain' | 'routeRio' | 'routeIslands' | 'routeBeaches'
}

export const routes: Route[] = [
  {
    id: 'niteroirio',
    title: 'Roteiro principal',
    subtitle: 'Jurujuba, Praia Vermelha ou Urca',
    description:
      'O roteiro mais clássico para viver o Rio pelo mar, saindo de Jurujuba e navegando por cartões-postais como Praia Vermelha ou Urca até a Ponta do Morcego.',
    stops: ['Jurujuba', 'Praia Vermelha', 'Urca', 'Ponta do Morcego'],
    image:
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1400&q=80',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1400&q=80',
        alt: 'Baía de Guanabara com o Pão de Açúcar ao fundo',
      },
      {
        src: 'https://images.unsplash.com/photo-1583123483628-cdb29790ead8?auto=format&fit=crop&w=1400&q=80',
        alt: 'Pão de Açúcar e Morro da Urca vistos da Baía de Guanabara',
      },
      {
        src: 'https://images.unsplash.com/photo-1749086876868-f0e82fec562e?auto=format&fit=crop&w=1400&q=80',
        alt: 'Barcos na Baía de Guanabara ao pôr do sol',
      },
    ],
    imageAlt: 'Vista da Baía de Guanabara com o Pão de Açúcar ao fundo',
    whatsappKey: 'routeMain',
  },
  {
    id: 'rio',
    title: 'Rio visto da água',
    subtitle: 'Praia Vermelha e Urca',
    description:
      'Uma navegação curta, bonita e cheia de cenário para quem quer sentir o Rio de outro ângulo, com a cidade acompanhando o passeio o tempo todo.',
    stops: ['Praia Vermelha', 'Urca', 'Pão de Açúcar', 'Baía de Guanabara'],
    image:
      'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=1400&q=80',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=1400&q=80',
        alt: 'Rio de Janeiro com montanhas e praia vistos do alto',
      },
      {
        src: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1400&q=80',
        alt: 'Pão de Açúcar e Baía de Guanabara',
      },
      {
        src: 'https://images.unsplash.com/photo-1583123483628-cdb29790ead8?auto=format&fit=crop&w=1400&q=80',
        alt: 'Barcos próximos ao Pão de Açúcar',
      },
    ],
    imageAlt: 'Urca e Praia Vermelha vistas do mar',
    whatsappKey: 'routeRio',
  },
  {
    id: 'ilhas',
    title: 'Ilhas e mar aberto',
    subtitle: 'Pacotes a combinar',
    description:
      'Para quem quer um passeio com clima de exploração: ilhas, horizonte aberto e paradas combinadas de acordo com o pacote, o mar e o melhor horário do dia.',
    stops: [
      'Ilhas Tijucas',
      'Ilhas Cagarras',
      'Ilha Rasa',
      'Ilha Redonda',
      'Ilhas Maricás',
      'Itaipu',
    ],
    image:
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1400&q=80',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1400&q=80',
        alt: 'Ilhas e mar aberto com águas claras',
      },
      {
        src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80',
        alt: 'Mar azul com ondas e horizonte aberto',
      },
      {
        src: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1400&q=80',
        alt: 'Vista aérea de água azul e faixa de areia',
      },
    ],
    imageAlt: 'Ilhas e mar aberto com águas cristalinas',
    note: 'Pacotes a combinar. Destinos sujeitos às condições do mar e ao pacote contratado.',
    whatsappKey: 'routeIslands',
  },
  {
    id: 'praias',
    title: 'Praias de Niterói',
    subtitle: 'Pacotes a combinar',
    description:
      'Um roteiro para curtir as praias de Niterói com tempo para contemplar, mergulhar e combinar paradas conforme a proposta do passeio.',
    stops: ['Itaipu', 'Piratininga', 'Forte do Rio Branco', 'Imbuí'],
    image:
      'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1400&q=80',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1400&q=80',
        alt: 'Praia com mar azul vista de cima',
      },
      {
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80',
        alt: 'Litoral com montanhas e água clara',
      },
      {
        src: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1400&q=80',
        alt: 'Costa com mar e vegetação',
      },
    ],
    imageAlt: 'Praias da Região Oceânica de Niterói',
    note: 'Pacotes a combinar. Destinos sujeitos às condições do mar e ao pacote contratado.',
    whatsappKey: 'routeBeaches',
  },
]

export const routesGlobalNote =
  'Roteiros, pontos de parada e pacotes podem variar de acordo com as condições do mar, do clima e com a combinação realizada no momento da reserva.'
