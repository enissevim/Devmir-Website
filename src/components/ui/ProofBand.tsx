interface ProofBandProps {
  image: string
  alt: string
  caption?: string
  className?: string
  variant?: 'default' | 'prominent'
}

export function ProofBand({
  image,
  alt,
  caption,
  className = '',
  variant = 'default',
}: ProofBandProps) {
  const isProminent = variant === 'prominent'

  return (
    <figure className={`w-full ${className}`}>
      <div
        className={`overflow-hidden bg-white ${
          isProminent ? 'border border-border px-4 py-6 sm:px-8 sm:py-10' : 'bg-surface'
        }`}
      >
        <img
          src={image}
          alt={alt}
          className={`mx-auto h-auto w-full ${isProminent ? 'max-w-5xl' : ''} object-contain`}
          loading="lazy"
          decoding="async"
        />
      </div>
      {caption && (
        <figcaption
          className={`mt-5 text-sm text-muted ${isProminent ? 'text-center' : 'text-center'}`}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
