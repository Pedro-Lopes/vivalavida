// ============================================================
// DADOS DOS ROTEIROS — edite aqui para atualizar o conteúdo
// ============================================================

export interface Route {
  id: string
  title: string
  subtitle: string
  description: string
  stops: string[]
  image: string
  imageAlt: string
  note?: string
  whatsappKey: 'routeMain' | 'routeRio' | 'routeIslands' | 'routeBeaches'
}

export const routes: Route[] = [
  {
    id: 'niteroirio',
    title: 'Entre Niterói e o Rio',
    subtitle: 'Roteiro Principal',
    description:
      'Um percurso que reúne paisagens de Niterói, a entrada da Baía de Guanabara e alguns dos cenários mais conhecidos do Rio de Janeiro — vistos de onde poucos chegam: o mar.',
    stops: ['Jurujuba', 'Praia Vermelha', 'Urca', 'Ponta do Morcego'],
    // TODO: Substituir pela foto do roteiro em src/assets/images/destinations/route-niteroirio.jpg
    image:
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Vista da Baía de Guanabara com o Pão de Açúcar ao fundo',
    whatsappKey: 'routeMain',
  },
  {
    id: 'rio',
    title: 'Para quem embarca no Rio',
    subtitle: 'A partir da Urca',
    description:
      'Uma experiência que conecta o Rio de Janeiro e Niterói pelo mar, passando por paisagens emblemáticas da Baía de Guanabara e chegando às praias tranquilas de Jurujuba.',
    stops: ['Urca', 'Praia Vermelha', 'Jurujuba', 'Retorno pela Baía'],
    // TODO: Substituir pela foto do roteiro em src/assets/images/destinations/route-rio.jpg
    image:
      'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Urca e Praia Vermelha vistas do mar',
    whatsappKey: 'routeRio',
  },
  {
    id: 'ilhas',
    title: 'Ilhas e Mar Aberto',
    subtitle: 'Roteiro de Exploração',
    description:
      'Para quem deseja explorar águas mais abertas, ilhas e paisagens naturais. O roteiro é definido conforme o pacote contratado e as condições de navegação do dia.',
    stops: [
      'Ilhas Tijucas',
      'Ilhas Cagarras',
      'Ilha Rasa',
      'Ilha Redonda',
      'Ilhas Maricás',
      'Itaipu',
    ],
    // TODO: Substituir pela foto do roteiro em src/assets/images/destinations/route-islands.jpg
    image:
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Ilhas e mar aberto com águas cristalinas',
    note: 'Destinos sujeitos às condições do mar e ao pacote contratado.',
    whatsappKey: 'routeIslands',
  },
  {
    id: 'praias',
    title: 'Praias de Niterói',
    subtitle: 'Região Oceânica',
    description:
      'Um passeio pelas praias e paisagens da Região Oceânica de Niterói. Pacotes e paradas definidos de acordo com a experiência escolhida e as condições do dia.',
    stops: ['Itaipu', 'Piratininga', 'Forte do Rio Branco', 'Imbuí'],
    // TODO: Substituir pela foto do roteiro em src/assets/images/destinations/route-beaches.jpg
    image:
      'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Praias da Região Oceânica de Niterói',
    note: 'Destinos sujeitos às condições do mar e ao pacote contratado.',
    whatsappKey: 'routeBeaches',
  },
]

export const routesGlobalNote =
  'Roteiros, pontos de parada e pacotes podem variar de acordo com as condições do mar, do clima e com a combinação realizada no momento da reserva.'
