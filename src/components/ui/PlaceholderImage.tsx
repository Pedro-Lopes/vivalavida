interface PlaceholderImageProps {
  label: string
  note?: string
  className?: string
  aspectRatio?: string
}

// Componente de placeholder para imagens ainda não disponíveis
export function PlaceholderImage({
  label,
  note,
  className = '',
  aspectRatio = 'aspect-video',
}: PlaceholderImageProps) {
  return (
    <div
      className={`${aspectRatio} ${className} flex flex-col items-center justify-center gap-3 bg-[--color-navy]/5 border-2 border-dashed border-[--color-navy]/20`}
      aria-label={label}
    >
      <div className="w-10 h-10 rounded-full border-2 border-[--color-navy]/20 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-[--color-navy]/30"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>
      <span className="font-body text-[11px] tracking-widest uppercase text-[--color-navy]/40 text-center px-4">
        {label}
      </span>
      {note && (
        <span className="font-body text-[10px] text-[--color-navy]/30 text-center px-6">{note}</span>
      )}
    </div>
  )
}
