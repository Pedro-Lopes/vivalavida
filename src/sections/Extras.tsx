import { FadeIn } from '../components/ui/FadeIn'
import { PlaceholderImage } from '../components/ui/PlaceholderImage'
import { Button } from '../components/ui/Button'
import { extras, extrasNote } from '../data/extras'

export function Extras() {
  return (
    <section
      className="bg-[--color-cream] py-24 lg:py-32"
      aria-label="Opcionais e adicionais"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Cabeçalho */}
        <div className="max-w-xl mb-14">
          <FadeIn>
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-[--color-gold] block mb-4">
              Adicionais
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl text-[--color-navy] leading-[1.1]">
              Componha a sua
              <br />
              <em className="not-italic">experiência ideal.</em>
            </h2>
          </FadeIn>
        </div>

        {/* Grid de adicionais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {extras.map((extra, i) => (
            <FadeIn key={extra.id} delay={i * 0.08}>
              <div className="flex flex-col gap-5">
                {/* Imagem */}
                {extra.image ? (
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={extra.image}
                      alt={extra.imageAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  /* TODO: Substituir pelos placeholders quando tiver as fotos dos adicionais */
                  <PlaceholderImage
                    label={extra.name}
                    note={`src/assets/images/extras/${extra.id}.jpg`}
                    aspectRatio="aspect-square"
                    className="w-full"
                  />
                )}

                {/* Texto */}
                <div>
                  <h3 className="font-display text-xl text-[--color-navy] mb-2">{extra.name}</h3>
                  <p className="font-body text-xs text-[--color-text-light] leading-relaxed">
                    {extra.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Nota e CTA */}
        <FadeIn delay={0.3}>
          <div className="mt-14 pt-10 border-t border-[--color-navy]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="font-body text-xs text-[--color-text-light]/60 italic max-w-md">
              * {extrasNote}
            </p>
            <Button whatsapp="general" variant="primary" size="md">
              Consultar opcionais
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
