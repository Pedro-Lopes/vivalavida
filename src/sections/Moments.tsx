import { motion } from 'framer-motion'
import { FadeIn } from '../components/ui/FadeIn'
import { moments } from '../data/moments'

export function Moments() {
  // Layout: separa o primeiro "large" como hero e os demais em grid
  const [hero, ...rest] = moments

  return (
    <section
      className="bg-[--color-navy] py-24 lg:py-36 overflow-hidden"
      aria-label="Momentos para viver"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Cabeçalho */}
        <div className="max-w-xl mb-16">
          <FadeIn>
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-[--color-gold] block mb-4">
              Ocasiões
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05]">
              Momentos para
              <br />
              <em className="not-italic">viver no mar.</em>
            </h2>
          </FadeIn>
        </div>

        {/* Hero moment */}
        {hero && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
            className="relative mb-6 overflow-hidden group"
          >
            <div className="aspect-[16/7] overflow-hidden">
              <img
                src={hero.image}
                alt={hero.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[--color-navy]/80 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-8 left-8">
              <h3 className="font-display text-3xl md:text-4xl text-white mb-2">{hero.title}</h3>
              <p className="font-body text-sm text-white/60">{hero.description}</p>
            </div>
          </motion.div>
        )}

        {/* Grid dos demais momentos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {rest.map((moment, i) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={`relative overflow-hidden group ${
                moment.size === 'large' ? 'col-span-2' : ''
              }`}
            >
              <div
                className={`overflow-hidden ${
                  moment.size === 'large'
                    ? 'aspect-[2/1]'
                    : (moment.size as string) === 'tall'
                    ? 'aspect-[3/4]'
                    : 'aspect-square'
                }`}
              >
                <img
                  src={moment.image}
                  alt={moment.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[--color-navy]/70 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-display text-xl md:text-2xl text-white leading-tight">
                  {moment.title}
                </h3>
                <p className="font-body text-xs text-white/60 mt-1 hidden md:block">
                  {moment.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
