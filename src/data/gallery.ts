// ============================================================
// GALERIA — edite para adicionar as fotos reais
// ============================================================
// ATENÇÃO: As imagens abaixo são ILUSTRATIVAS.
// Substitua por fotos reais da lancha e dos passeios Viva La Vida.
// Organize as fotos em: src/assets/images/gallery/
// ============================================================

export type GalleryCategory = 'destinos' | 'lancha' | 'passeios'

export interface GalleryImage {
  id: string
  src: string
  // TODO: Substituir pelo caminho local após ter as fotos reais
  srcLocal?: string
  alt: string
  caption?: string
  category: GalleryCategory
  // Proporção da imagem no grid assimétrico
  span: 'normal' | 'wide' | 'tall'
}

// TODO: Substituir todas as imagens por fotos reais da Viva La Vida
// Imagens de destinos são ilustrativas (créditos em IMAGE_CREDITS.md)
// Imagens de lancha e passeios DEVEM ser fotos reais
export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80',
    alt: 'Vista da Baía de Guanabara — Imagem ilustrativa',
    caption: 'Baía de Guanabara',
    category: 'destinos',
    span: 'wide',
  },
  {
    id: 'g2',
    // TODO: Substituir por src/assets/images/gallery/lancha-01.jpg
    src: '',
    alt: 'Foto externa da lancha — [PLACEHOLDER — adicionar foto real]',
    category: 'lancha',
    span: 'normal',
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80',
    alt: 'Águas cristalinas — Imagem ilustrativa',
    caption: 'Mar aberto',
    category: 'destinos',
    span: 'tall',
  },
  {
    id: 'g4',
    // TODO: Substituir por src/assets/images/gallery/passeio-01.jpg
    src: '',
    alt: 'Foto de passeio real — [PLACEHOLDER — adicionar foto real]',
    category: 'passeios',
    span: 'normal',
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Praia de Niterói — Imagem ilustrativa',
    caption: 'Praias de Niterói',
    category: 'destinos',
    span: 'wide',
  },
  {
    id: 'g6',
    // TODO: Substituir por src/assets/images/gallery/lancha-02.jpg
    src: '',
    alt: 'Foto interior da lancha — [PLACEHOLDER — adicionar foto real]',
    category: 'lancha',
    span: 'normal',
  },
  {
    id: 'g7',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    alt: 'Paisagem costeira — Imagem ilustrativa',
    caption: 'Costa do Rio de Janeiro',
    category: 'destinos',
    span: 'tall',
  },
  {
    id: 'g8',
    // TODO: Substituir por src/assets/images/gallery/passeio-02.jpg
    src: '',
    alt: 'Foto de passeio real — [PLACEHOLDER — adicionar foto real]',
    category: 'passeios',
    span: 'normal',
  },
  {
    id: 'g9',
    src: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80',
    alt: 'Vista costeira — Imagem ilustrativa',
    caption: 'Jurujuba, Niterói',
    category: 'destinos',
    span: 'normal',
  },
]
