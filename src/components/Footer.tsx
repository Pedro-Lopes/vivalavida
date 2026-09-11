import { MessageCircle } from 'lucide-react'
import { siteConfig } from '../config/site'
import { getWhatsAppUrl } from '../utils/whatsapp'

const footerLinks = [
  { label: 'A Experiência', href: '#experiencia' },
  { label: 'A Lancha', href: '#lancha' },
  { label: 'Roteiros', href: '#roteiros' },
  { label: 'O que está incluído', href: '#incluido' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Perguntas Frequentes', href: '#faq' },
]

const handleNav = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contato" className="bg-[--color-navy] text-white">
      {/* Corpo do rodapé */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
        {/* Marca */}
        <div>
          <h2 className="font-display text-2xl tracking-[0.15em] uppercase font-light mb-3">
            Viva La Vida
          </h2>
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/40 mb-5">
            Passeios de Lancha
          </p>
          <p className="font-body text-sm text-white/55 leading-relaxed max-w-xs">
            Passeios de lancha entre o Rio de Janeiro e Niterói. Experiências para reunir, celebrar
            e criar memórias inesquecíveis.
          </p>
          <p className="font-body text-xs text-white/35 mt-4">
            {siteConfig.location}
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-body text-[10px] tracking-[0.3em] uppercase text-white/40 mb-6">
            Navegação
          </h3>
          <nav aria-label="Links do rodapé">
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contato */}
        <div>
          <h3 className="font-body text-[10px] tracking-[0.3em] uppercase text-white/40 mb-6">
            Fale Conosco
          </h3>
          <div className="flex flex-col gap-4">
            <a
              href={getWhatsAppUrl('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-body text-sm text-white/70 hover:text-white transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            {/* TODO: Substituir pelo link real do Instagram */}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-body text-sm text-white/70 hover:text-white transition-colors"
            >
              {/* Ícone SVG do Instagram */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              {siteConfig.instagram}
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="font-body text-[10px] text-white/30 tracking-wider">
              Política de Privacidade
            </p>
            <p className="font-body text-[10px] text-white/20 mt-2">
              Ao solicitar um orçamento, você concorda que seus dados serão usados exclusivamente
              para contato relacionado aos nossos serviços.
            </p>
          </div>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-[10px] text-white/30 tracking-wider uppercase">
            © {year} Viva La Vida. Todos os direitos reservados.
          </p>
          <p className="font-body text-[10px] text-white/20">
            Rio de Janeiro · Niterói
          </p>
        </div>
      </div>
    </footer>
  )
}
