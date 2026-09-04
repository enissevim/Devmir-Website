interface ProofBandProps {
  image: string
  alt: string
  caption?: string
  className?: string
  variant?: 'default' | 'prominent'
  imageWidth?: number
  imageHeight?: number
}

export function ProofBand({
  image,
  alt,
  caption,
  className = '',
  variant = 'default',
  imageWidth = 1693,
  imageHeight = 929,
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
          width={imageWidth}
          height={imageHeight}
          className={`mx-auto h-auto w-full ${isProminent ? 'max-w-5xl' : ''} object-contain`}
          loading="lazy"
          decoding="async"
        />
      </div>
      {caption && (
        <figcaption className="mt-5 text-center text-sm text-muted">{caption}</figcaption>
      )}
    </figure>
  )
}
