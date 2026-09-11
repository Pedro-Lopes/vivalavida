import { FadeIn } from '../components/ui/FadeIn'

// Seção de depoimentos — oculta até ter depoimentos reais
// Para ativar: defina showSection = true e adicione os depoimentos em src/data/testimonials.ts
const showSection = false

export function Testimonials() {
  if (!showSection) return null

  return (
    <section
      className="bg-white py-24 lg:py-36"
      aria-label="Depoimentos"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <FadeIn>
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-[--color-gold] block mb-4">
            Depoimentos
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[--color-navy] leading-[1.1]">
            O que dizem nossos clientes.
          </h2>
          <p className="font-body text-sm text-[--color-text-light] mt-4 italic">
            {/* TODO: Adicionar depoimentos reais em src/data/testimonials.ts e criar o componente */}
            Depoimentos reais em breve.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
