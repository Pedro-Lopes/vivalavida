import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { FadeIn } from '../components/ui/FadeIn'
import { Button } from '../components/ui/Button'
import { routes, routesGlobalNote } from '../data/routes'

export function Routes() {
  return (
    <section
      id="roteiros"
      className="bg-[--color-navy] py-24 lg:py-36 overflow-hidden"
      aria-label="Roteiros disponíveis"
    >
      {/* Cabeçalho */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-16 lg:mb-24">
        <FadeIn>
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-[--color-gold] block mb-4">
            Destinos
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display text-4xl md:text-6xl text-white leading-[1.05]">
            Os roteiros.
          </h2>
        </FadeIn>
      </div>

      {/* Roteiros alternados */}
      <div className="space-y-0">
        {routes.map((route, i) => (
          <RouteItem key={route.id} route={route} index={i} />
        ))}
      </div>

      {/* Nota global */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-16 lg:mt-24">
        <FadeIn>
          <div className="border-t border-white/10 pt-8">
            <p className="font-body text-sm text-white/40 leading-relaxed max-w-2xl">
              <span className="text-[--color-gold]">*</span> {routesGlobalNote}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function RouteItem({ route, index }: { route: (typeof routes)[0]; index: number }) {
  const isEven = index % 2 === 0

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center ${
          isEven ? '' : 'lg:grid-flow-dense'
        }`}
      >
        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className={isEven ? '' : 'lg:col-start-2'}
        >
          <div className="aspect-[4/3] overflow-hidden group">
            {route.image ? (
              <img
                src={route.image}
                alt={route.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-white/5 flex items-center justify-center border border-white/10">
                <span className="font-body text-[10px] tracking-widest uppercase text-white/30">
                  Imagem do destino
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Texto */}
        <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
          <FadeIn delay={0.1}>
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-[--color-gold] block mb-3">
              {route.subtitle}
            </span>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] mb-6">
              {route.title}
            </h3>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-white/60 text-base leading-relaxed mb-8">
              {route.description}
            </p>
          </FadeIn>

          {/* Paradas */}
          <FadeIn delay={0.25}>
            <div className="mb-8">
              <p className="font-body text-[9px] tracking-[0.35em] uppercase text-white/30 mb-4">
                Possíveis paradas
              </p>
              <ul className="flex flex-wrap gap-2">
                {route.stops.map((stop) => (
                  <li
                    key={stop}
                    className="flex items-center gap-1.5 font-body text-xs text-white/60 border border-white/15 px-3 py-1.5"
                  >
                    <MapPin size={10} className="text-[--color-gold] flex-shrink-0" />
                    {stop}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {route.note && (
            <FadeIn delay={0.3}>
              <p className="font-body text-[10px] text-white/30 italic mb-6">{route.note}</p>
            </FadeIn>
          )}

          <FadeIn delay={0.35}>
            <Button whatsapp={route.whatsappKey} variant="outline" size="md">
              Consultar disponibilidade
            </Button>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
