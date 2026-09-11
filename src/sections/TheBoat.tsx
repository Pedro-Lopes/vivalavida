import { FadeIn } from '../components/ui/FadeIn'
import { PlaceholderImage } from '../components/ui/PlaceholderImage'

// =============================================================
// SEÇÃO A LANCHA
// As imagens abaixo são PLACEHOLDERS.
// Substitua quando tiver as fotos oficiais da lancha:
//   - Foto principal: src/assets/images/boat/boat-main.jpg
//   - Detalhe 1: src/assets/images/boat/boat-detail-1.jpg
//   - Detalhe 2: src/assets/images/boat/boat-detail-2.jpg
//   - Detalhe 3: src/assets/images/boat/boat-detail-3.jpg
// =============================================================

const specs = [
  { label: 'Capacidade', value: 'A confirmar' },
  { label: 'Modelo', value: 'A confirmar' },
  { label: 'Embarque', value: 'A confirmar' },
  { label: 'Comodidades', value: 'Em breve' },
]

export function TheBoat() {
  return (
    <section
      id="lancha"
      className="bg-white py-24 lg:py-36"
      aria-label="A lancha"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Cabeçalho da seção */}
        <div className="max-w-xl mb-16 lg:mb-20">
          <FadeIn>
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-[--color-gold] block mb-4">
              A Embarcação
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl text-[--color-navy] leading-[1.1] mb-6">
              Seu espaço particular
              <br />
              <em className="not-italic">sobre o mar.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-[--color-text-light] text-base leading-relaxed">
              Uma embarcação preparada para proporcionar conforto, segurança e bons momentos
              durante toda a experiência no mar.
            </p>
          </FadeIn>
        </div>

        {/* Grid de imagens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-16">
          {/* Imagem principal */}
          <FadeIn className="lg:col-span-2">
            {/* TODO: Substituir pelo <img> quando tiver a foto: src/assets/images/boat/boat-main.jpg */}
            <PlaceholderImage
              label="Foto principal da lancha"
              note="Substituir por: src/assets/images/boat/boat-main.jpg"
              aspectRatio="aspect-[4/3]"
              className="w-full"
            />
          </FadeIn>

          {/* Detalhes */}
          <div className="grid grid-rows-2 gap-4">
            <FadeIn delay={0.1}>
              {/* TODO: Substituir por src/assets/images/boat/boat-detail-1.jpg */}
              <PlaceholderImage
                label="Detalhe da lancha"
                note="boat-detail-1.jpg"
                aspectRatio="aspect-square"
                className="w-full"
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              {/* TODO: Substituir por src/assets/images/boat/boat-detail-2.jpg */}
              <PlaceholderImage
                label="Interior da lancha"
                note="boat-detail-2.jpg"
                aspectRatio="aspect-square"
                className="w-full"
              />
            </FadeIn>
          </div>
        </div>

        {/* Especificações + detalhe extra */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Specs */}
          <FadeIn>
            <div className="grid grid-cols-2 gap-8">
              {specs.map((spec) => (
                <div key={spec.label} className="border-t border-[--color-navy]/10 pt-5">
                  <p className="font-body text-[9px] tracking-[0.35em] uppercase text-[--color-text-light] mb-2">
                    {spec.label}
                  </p>
                  <p className="font-display text-xl text-[--color-navy]">{spec.value}</p>
                </div>
              ))}
            </div>
            <p className="font-body text-[10px] text-[--color-text-light]/60 mt-8 italic">
              * Informações serão confirmadas pelo proprietário.
            </p>
          </FadeIn>

          {/* Foto adicional */}
          <FadeIn delay={0.15}>
            {/* TODO: Substituir por src/assets/images/boat/boat-detail-3.jpg */}
            <PlaceholderImage
              label="Vista da popa / detalhe da lancha"
              note="boat-detail-3.jpg"
              aspectRatio="aspect-[16/9]"
              className="w-full"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
