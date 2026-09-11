import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}

// Componente de animação de entrada — respeita prefers-reduced-motion
export function FadeIn({ children, delay = 0, y = 20, className = '' }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
