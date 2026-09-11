import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '../components/ui/Button'

// Hero principal — troque a URL da imagem de fundo pela foto oficial da lancha/mar
// TODO: Substituir HERO_BG_URL pela foto oficial em src/assets/images/hero.jpg
const HERO_BG_URL =
  'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1920&q=80'

export function Hero() {
  const scrollToExperience = () => {
    document.querySelector('#experiencia')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToRoutes = () => {
    document.querySelector('#roteiros')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Apresentação Viva La Vida"
    >
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG_URL}
          alt="Vista aérea da Baía de Guanabara — Rio de Janeiro"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-[--color-navy]/70 via-[--color-navy]/40 to-[--color-navy]/80" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Tag da marca */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="font-body text-[10px] tracking-[0.5em] uppercase text-[--color-gold] block mb-2">
            Rio de Janeiro · Niterói
          </span>
          <span className="font-display text-white/40 text-sm tracking-[0.3em] uppercase">
            Viva La Vida
          </span>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight mb-8"
        >
          Viva o Rio
          <br />
          <em className="not-italic text-[--color-gold]">por outro ângulo.</em>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Passeios de lancha entre o Rio de Janeiro e Niterói para transformar
          encontros, comemorações e dias de descanso em experiências inesquecíveis.
        </motion.p>

        {/* Botões */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="gold"
            size="lg"
            onClick={scrollToRoutes}
          >
            Conhecer os Roteiros
          </Button>
          <Button
            whatsapp="reserve"
            variant="outline"
            size="lg"
          >
            Reservar pelo WhatsApp
          </Button>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.button
        onClick={scrollToExperience}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors cursor-pointer"
        aria-label="Rolar para baixo"
      >
        <span className="font-body text-[9px] tracking-[0.4em] uppercase">Explorar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  )
}
