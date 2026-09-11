import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn } from '../components/ui/FadeIn'
import { faqItems } from '../data/faq'

function FaqItem({ item, isOpen, onToggle }: {
  item: (typeof faqItems)[0]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-[--color-navy]/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg text-[--color-navy] leading-snug">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={18} className="text-[--color-navy]/40" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="font-body text-sm text-[--color-text-light] leading-relaxed pb-6 max-w-2xl">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section
      id="faq"
      className="bg-white py-24 lg:py-36"
      aria-label="Perguntas frequentes"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        {/* Cabeçalho */}
        <div className="mb-12">
          <FadeIn>
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-[--color-gold] block mb-4">
              Dúvidas
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl text-[--color-navy] leading-[1.1]">
              Perguntas frequentes.
            </h2>
          </FadeIn>
        </div>

        {/* Lista de perguntas */}
        <FadeIn delay={0.15}>
          <div>
            {faqItems.map((item) => (
              <FaqItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
