import { FadeIn } from '../components/ui/FadeIn'
import { Button } from '../components/ui/Button'

// TODO: Substituir pela foto oficial em src/assets/images/cta-background.jpg
const CTA_BG =
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80'

export function CallToAction() {
  const scrollToRoutes = () => {
    document.querySelector('#roteiros')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative py-32 lg:py-48 overflow-hidden"
      aria-label="Chamada para ação final"
    >
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <img
          src={CTA_BG}
          alt="Vista panorâmica da costa — imagem ilustrativa"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[--color-navy]/75" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <FadeIn>
          <span className="font-body text-[10px] tracking-[0.5em] uppercase text-[--color-gold] block mb-8">
            Sua próxima experiência
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-8">
            O próximo dia
            <br />
            inesquecível pode
            <br />
            <em className="not-italic text-[--color-gold]">começar no mar.</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="font-body text-white/65 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-12">
            Escolha seu roteiro, reúna quem você gosta e converse com a nossa equipe para montar a
            sua experiência.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button whatsapp="reserve" variant="gold" size="lg">
              Reservar pelo WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToRoutes}
            >
              Ver roteiros novamente
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
