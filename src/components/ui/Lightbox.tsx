import { useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface LightboxProps {
  images: Array<{ src: string; alt: string; caption?: string }>
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const current = images[currentIndex]

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  if (!current?.src) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Visualizador de imagem"
      >
        {/* Fechar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X size={28} />
        </button>

        {/* Anterior */}
        {images.length > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={36} />
          </button>
        )}

        {/* Imagem */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="max-w-5xl max-h-[85vh] mx-16 flex flex-col items-center gap-4"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[75vh] w-auto object-contain"
            loading="lazy"
          />
          {current.caption && (
            <p className="text-white/60 font-body text-sm tracking-wider uppercase">
              {current.caption}
            </p>
          )}
          <p className="text-white/30 font-body text-xs">
            {currentIndex + 1} / {images.length}
          </p>
        </motion.div>

        {/* Próxima */}
        {images.length > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={36} />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
