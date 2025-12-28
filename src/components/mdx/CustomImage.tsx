import Image from 'next/image';

interface CustomImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function CustomImage({ src, alt, caption }: CustomImageProps) {
  return (
    <figure className="my-8 w-full">
      <div className="relative overflow-hidden rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm">
        {src.startsWith('http') ? (
            // CAMBIO: w-full h-auto es CRUCIAL para responsividad
            <img 
              src={src} 
              alt={alt} 
              className="w-full h-auto object-cover max-h-[500px]" // max-h evita imágenes verticales gigantes
            />
        ) : (
            <Image 
              src={src} 
              alt={alt} 
              width={800} 
              height={500} 
              className="w-full h-auto"
            />
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 text-center font-mono text-xs text-gruvbox-gray italic">
          ▲ {caption}
        </figcaption>
      )}
    </figure>
  );
}