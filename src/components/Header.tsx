import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/Button'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'A Experiência', href: '#experiencia' },
  { label: 'A Lancha', href: '#lancha' },
  { label: 'Roteiros', href: '#roteiros' },
  { label: 'Incluído', href: '#incluido' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fechar menu ao redimensionar para desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[--color-navy]/95 backdrop-blur-md py-3 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={() => handleNavClick('#inicio')}
            className="flex flex-col leading-none"
            aria-label="Viva La Vida — início"
          >
            <span className="font-display text-white text-xl tracking-[0.15em] uppercase font-light">
              Viva La Vida
            </span>
            <span className="font-body text-white/50 text-[9px] tracking-[0.3em] uppercase mt-0.5">
              Passeios de Lancha
            </span>
          </a>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="font-body text-[10px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden lg:flex">
            <Button whatsapp="reserve" variant="outline" size="sm">
              Reservar Passeio
            </Button>
          </div>

          {/* Botão menu mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-1"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[--color-navy] flex flex-col pt-24 px-8 pb-10"
          >
            <nav className="flex flex-col gap-6" aria-label="Menu mobile">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="font-display text-3xl text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto">
              <Button whatsapp="reserve" variant="outline" size="lg" className="w-full">
                Reservar Passeio
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
