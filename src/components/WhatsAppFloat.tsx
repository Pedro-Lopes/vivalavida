import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '../utils/whatsapp'

// Botão flutuante de WhatsApp — discreto, no canto inferior direito
export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl('general')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200"
    >
      <MessageCircle size={26} strokeWidth={1.8} />
    </a>
  )
}
