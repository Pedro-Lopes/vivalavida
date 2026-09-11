import { Anchor, Users, Snowflake, Flame } from 'lucide-react'
import { FadeIn } from '../components/ui/FadeIn'
import { includedItems, includedNote, durationText } from '../data/included'
import type { LucideProps } from 'lucide-react'
import type { ComponentType } from 'react'

// Mapa de ícones — adicione novos ícones aqui conforme necessário
const iconMap: Record<string, ComponentType<LucideProps>> = {
  Anchor,
  Users,
  Snowflake,
  Flame,
}

export function Included() {
  return (
    <section
      id="incluido"
      className="bg-[--color-cream] py-24 lg:py-36"
      aria-label="O que está incluído"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Destaque de duração */}
        <FadeIn>
          <div className="text-center mb-16 lg:mb-24">
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-[--color-gold] block mb-6">
              O que está incluído
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-[--color-navy] leading-none">
              {durationText.split(' ')[0]}{' '}
              <em className="not-italic">{durationText.split(' ')[1]}</em>
              <br />
              <span className="text-[--color-navy]/50 text-3xl md:text-5xl lg:text-6xl font-light">
                {durationText.split(' ').slice(2).join(' ')}
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Grid de itens */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {includedItems.map((item, i) => {
            const Icon = iconMap[item.icon]
            return (
              <FadeIn key={item.id} delay={i * 0.08}>
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-full border border-[--color-navy]/20 flex items-center justify-center mx-auto mb-5 group-hover:border-[--color-gold] group-hover:bg-[--color-navy] transition-all duration-300">
                    {Icon && (
                      <Icon
                        size={22}
                        strokeWidth={1.5}
                        className="text-[--color-navy] group-hover:text-[--color-gold] transition-colors duration-300"
                      />
                    )}
                  </div>
                  <h3 className="font-display text-xl text-[--color-navy] mb-2">{item.label}</h3>
                  <p className="font-body text-xs text-[--color-text-light] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            )
          })}
        </div>

        {/* Nota */}
        <FadeIn delay={0.3}>
          <p className="text-center font-body text-xs text-[--color-text-light]/60 italic max-w-lg mx-auto">
            * {includedNote}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
