import { FadeIn } from '../components/ui/FadeIn'

// TODO: Substituir pela foto oficial em src/assets/images/manifesto.jpg
const MANIFESTO_IMG =
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80'

export function Manifesto() {
  return (
    <section
      id="experiencia"
      className="bg-[--color-cream] py-24 lg:py-36 overflow-hidden"
      aria-label="Sobre a experiência"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Texto */}
          <div className="lg:order-1">
            <FadeIn>
              <span className="font-body text-[10px] tracking-[0.4em] uppercase text-[--color-gold] block mb-6">
                A Experiência
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[--color-navy] leading-[1.1] mb-8">
                Mais do que
                <br />
                <em className="not-italic">um passeio</em>
                <br />
                de lancha.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="font-body text-[--color-text-light] text-base leading-relaxed mb-6 max-w-md">
                Entre o mar, as montanhas e alguns dos cenários mais bonitos do Rio de Janeiro e de
                Niterói, cada passeio é uma oportunidade de desacelerar, celebrar e viver momentos
                especiais.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="font-body text-[--color-text-light] text-base leading-relaxed max-w-md">
                Na Viva La Vida, você escolhe o roteiro e nós cuidamos da navegação para que seu
                único compromisso seja aproveitar o dia.
              </p>
            </FadeIn>

            {/* Dados visuais */}
            <FadeIn delay={0.4}>
              <div className="mt-12 flex gap-12">
                <div>
                  <span className="font-display text-4xl text-[--color-navy]">~5h</span>
                  <p className="font-body text-[10px] tracking-[0.25em] uppercase text-[--color-text-light] mt-1">
                    de experiência
                  </p>
                </div>
                <div className="border-l border-[--color-navy]/15 pl-12">
                  <span className="font-display text-4xl text-[--color-navy]">360°</span>
                  <p className="font-body text-[10px] tracking-[0.25em] uppercase text-[--color-text-light] mt-1">
                    de paisagem
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Imagem */}
          <FadeIn delay={0.15} className="lg:order-2">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={MANIFESTO_IMG}
                  alt="Vista do mar com praia e natureza ao redor — imagem ilustrativa"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Detalhe decorativo */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border border-[--color-navy]/10 -z-10" />
              {/* Label flutuante */}
              <div className="absolute bottom-6 left-6 bg-[--color-navy]/90 backdrop-blur-sm px-5 py-3">
                <p className="font-body text-[9px] tracking-[0.4em] uppercase text-[--color-gold]">
                  Rio de Janeiro & Niterói
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
