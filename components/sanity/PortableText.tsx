import { PortableText } from "next-sanity";
import { Image } from "next-sanity/image";

const widthClasses = {
  full: 'w-full',
  medium: 'w-full md:w-2/3',
  small: 'w-full md:w-1/2'
}

type SanityPortableTextProps = {
  body: Parameters<typeof PortableText>[0]['value'];
}

const SanityPortableText = ({ body }: SanityPortableTextProps) => {
  return (
    <PortableText
      value={body}
      components={{
        block: {
          h1: ({ children }) => <h1 className="text-4xl font-bold my-4 py-4">{children}</h1>,
          h2: ({ children }) => <h2 className="text-3xl font-semibold my-3 py-4">{children}</h2>,
          h3: ({ children }) => <h3 className="text-2xl font-medium my-2 py-4">{children}</h3>,
          normal: ({ children }) => <p className="mb-4">{children}</p>,
          blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>,
        },
        list: {
          bullet: ({ children }) => <ul className="list-disc list-inside mb-4">{children}</ul>,
          number: ({ children }) => <ol className="list-decimal list-inside mb-4">{children}</ol>,
        },
        listItem: {
          bullet: ({ children }) => <li className="mb-1">{children}</li>,
          number: ({ children }) => <li className="mb-1">{children}</li>,
        },
        marks: {
          strong: ({ children }) => <strong className="font-bold">{children}</strong>,
          em: ({ children }) => <em className="italic">{children}</em>,
          link: ({ value, children }) => {
            const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
            return (
              <a href={value?.href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className="text-blue-500 hover:underline">
                {children}
              </a>
            )
          },
        },
        types: {
          image: ({ value }: { value: { url: string, alt?: string, width: keyof typeof widthClasses, caption?: string } }) => (
            <div className="my-8 flex justify-center">
              <div className={`relative ${widthClasses[value.width] || 'w-full'}`}>
                <div className="relative aspect-video">
                  <Image
                    src={value.url}
                    alt={value.alt || ''}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 1200px"
                    className="object-cover rounded-lg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                {value.alt && (
                  <p className="text-center text-sm text-gray-500 mt-2">
                    {value.alt}
                  </p>
                )}
              </div>
            </div>
          ),
          youtube: ({ value }) => {
            const embedId = value.url?.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&?/]+)/)?.[1]
            if (!embedId) return null
            return (
              <div className="my-8 relative h-0 overflow-hidden pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${embedId}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            )
          }
        },
      }}
    />
  )
}

export default SanityPortableText;
