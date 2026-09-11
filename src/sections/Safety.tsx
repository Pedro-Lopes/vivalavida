import { AlertCircle } from 'lucide-react'
import { FadeIn } from '../components/ui/FadeIn'

const safetyItems = [
  'Os passeios estão sujeitos às condições do mar e do clima.',
  'O roteiro pode ser adaptado ou cancelado por questões de segurança, sem aviso prévio.',
  'As orientações da tripulação devem ser seguidas durante toda a experiência.',
  'A disponibilidade deve ser confirmada previamente com a equipe.',
  'Os detalhes do local e horário de embarque serão informados durante a reserva.',
]

export function Safety() {
  return (
    <section
      className="bg-[--color-cream] py-16 lg:py-20"
      aria-label="Condições e segurança"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="flex items-start gap-4 mb-8">
            <AlertCircle
              size={20}
              strokeWidth={1.5}
              className="text-[--color-navy]/40 flex-shrink-0 mt-1"
            />
            <h2 className="font-body text-[10px] tracking-[0.4em] uppercase text-[--color-navy]/50">
              Condições e segurança
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {safetyItems.map((item, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <p className="font-body text-sm text-[--color-text-light] leading-relaxed border-l-2 border-[--color-navy]/15 pl-4">
                {item}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
