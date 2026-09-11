import { Check } from 'lucide-react'
import { FadeIn } from '../components/ui/FadeIn'
import { Button } from '../components/ui/Button'
import { plans } from '../data/plans'

export function Plans() {
  return (
    <section
      className="bg-white py-24 lg:py-36"
      aria-label="Planos e experiências"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Cabeçalho */}
        <div className="max-w-xl mb-16">
          <FadeIn>
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-[--color-gold] block mb-4">
              Experiências
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl text-[--color-navy] leading-[1.1]">
              Escolha como quer
              <br />
              <em className="not-italic">viver o passeio.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-[--color-text-light] text-sm leading-relaxed mt-5">
              Cada experiência tem sua própria personalidade. Os valores serão informados
              diretamente pela nossa equipe no momento da consulta.
            </p>
          </FadeIn>
        </div>

        {/* Grid de planos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <FadeIn key={plan.id} delay={i * 0.08}>
              <div
                className={`relative flex flex-col h-full border transition-all duration-300 hover:-translate-y-1 ${
                  plan.featured
                    ? 'border-[--color-navy] bg-[--color-navy] text-white'
                    : 'border-[--color-navy]/15 bg-white text-[--color-navy] hover:border-[--color-navy]/40'
                }`}
              >
                {plan.featured && (
                  <div className="bg-[--color-gold] text-[--color-navy] text-center py-1.5">
                    <span className="font-body text-[9px] tracking-[0.4em] uppercase font-medium">
                      Mais popular
                    </span>
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1 gap-6">
                  {/* Nome e tagline */}
                  <div>
                    <h3
                      className={`font-display text-2xl mb-1 ${
                        plan.featured ? 'text-white' : 'text-[--color-navy]'
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`font-body text-[11px] tracking-wide italic ${
                        plan.featured ? 'text-white/60' : 'text-[--color-text-light]'
                      }`}
                    >
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Descrição */}
                  <p
                    className={`font-body text-sm leading-relaxed ${
                      plan.featured ? 'text-white/70' : 'text-[--color-text-light]'
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-2.5 flex-1">
                    {plan.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5">
                        <Check
                          size={13}
                          strokeWidth={2.5}
                          className={`mt-0.5 flex-shrink-0 ${
                            plan.featured ? 'text-[--color-gold]' : 'text-[--color-navy]'
                          }`}
                        />
                        <span
                          className={`font-body text-xs leading-snug ${
                            plan.featured ? 'text-white/70' : 'text-[--color-text-light]'
                          }`}
                        >
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Preço placeholder */}
                  <div
                    className={`border-t pt-4 ${
                      plan.featured ? 'border-white/15' : 'border-[--color-navy]/10'
                    }`}
                  >
                    <p
                      className={`font-body text-[10px] tracking-[0.25em] uppercase mb-4 ${
                        plan.featured ? 'text-white/40' : 'text-[--color-text-light]/50'
                      }`}
                    >
                      Valor sob consulta
                    </p>
                    <Button
                      whatsapp={plan.whatsappKey}
                      variant={plan.featured ? 'gold' : 'outline'}
                      size="sm"
                      className="w-full"
                    >
                      Consultar disponibilidade
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
