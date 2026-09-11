import { useState } from 'react'
import { FadeIn } from '../components/ui/FadeIn'
import { Lightbox } from '../components/ui/Lightbox'
import { galleryImages } from '../data/gallery'
import { PlaceholderImage } from '../components/ui/PlaceholderImage'

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Apenas imagens com src para o lightbox
  const lightboxImages = galleryImages
    .filter((img) => !!img.src)
    .map((img) => ({ src: img.src, alt: img.alt, caption: img.caption }))

  const getLightboxIndex = (galleryImg: (typeof galleryImages)[0]) => {
    if (!galleryImg.src) return null
    return lightboxImages.findIndex((li) => li.src === galleryImg.src)
  }

  return (
    <section
      id="galeria"
      className="bg-white py-24 lg:py-36"
      aria-label="Galeria"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <FadeIn>
              <span className="font-body text-[10px] tracking-[0.4em] uppercase text-[--color-gold] block mb-3">
                Galeria
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl text-[--color-navy] leading-[1.1]">
                O mar em imagens.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <p className="font-body text-xs text-[--color-text-light] max-w-xs leading-relaxed md:text-right">
              Imagens ilustrativas dos destinos. As fotos reais dos passeios serão adicionadas em
              breve.
            </p>
          </FadeIn>
        </div>

        {/* Grid assimétrico */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] lg:auto-rows-[240px] gap-3">
          {galleryImages.map((img, i) => {
            const lbIdx = getLightboxIndex(img)
            const spanClass =
              img.span === 'wide'
                ? 'col-span-2'
                : img.span === 'tall'
                ? 'row-span-2'
                : ''

            return (
              <FadeIn key={img.id} delay={i * 0.04} className={`${spanClass} overflow-hidden`}>
                {img.src ? (
                  <button
                    onClick={() => lbIdx !== null && setLightboxIndex(lbIdx)}
                    className="w-full h-full group block relative overflow-hidden cursor-zoom-in"
                    aria-label={`Ampliar: ${img.alt}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Overlay de categoria */}
                    <div className="absolute inset-0 bg-[--color-navy]/0 group-hover:bg-[--color-navy]/20 transition-colors duration-300" />
                    {img.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[--color-navy]/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="font-body text-[10px] tracking-widest uppercase text-white">
                          {img.caption}
                        </p>
                      </div>
                    )}
                  </button>
                ) : (
                  <PlaceholderImage
                    label={img.alt}
                    note={img.category === 'lancha' ? 'Foto da lancha — adicionar' : 'Foto do passeio — adicionar'}
                    className="w-full h-full"
                    aspectRatio=""
                  />
                )}
              </FadeIn>
            )
          })}
        </div>

        {/* Legenda de categorias */}
        <FadeIn delay={0.3}>
          <div className="mt-8 flex flex-wrap gap-6">
            {[
              { label: 'Destinos', note: 'Imagens ilustrativas' },
              { label: 'A Lancha', note: 'Fotos reais em breve' },
              { label: 'Passeios', note: 'Fotos reais em breve' },
            ].map((cat) => (
              <div key={cat.label} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[--color-navy]/30" />
                <span className="font-body text-[10px] tracking-wider uppercase text-[--color-text-light]">
                  {cat.label}
                </span>
                <span className="font-body text-[10px] text-[--color-text-light]/40 italic">
                  — {cat.note}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => (i! - 1 + lightboxImages.length) % lightboxImages.length)}
          onNext={() => setLightboxIndex((i) => (i! + 1) % lightboxImages.length)}
        />
      )}
    </section>
  )
}
