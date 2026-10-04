import Image from 'next/image'

interface INews {
  id: string
  title: string
  description: string
  link: string
  imageUrl: string
  imageAlt: string
  category: string
  type: string
  isLive: boolean
  firstPublished: string
  lastPublished: string
  source: string
}

const MainNews = ({ news }: { news: INews[] }) => {
  const [fristNews, ...otherNews] = news

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="group overflow-hidden rounded-2xl bg-base-100 shadow-md transition hover:shadow-xl">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={fristNews.imageUrl}
            alt={fristNews.imageAlt}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-5 pb-5 pt-20">
            <span className="text-sm font-medium text-primary">
              {fristNews.category}
            </span>

            <h2 className="mt-2 text-2xl font-bold leading-tight text-white">
              {fristNews.title}
            </h2>
          </div>
        </div>

        <div className="p-5">
          <p className="line-clamp-3 text-sm leading-6 text-base-content/70">
            {fristNews.description}
          </p>

          <div className="mt-4 text-xs text-base-content/50">
            {fristNews.source}
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {otherNews.slice(0, 5).map((item) => (
          <div
            key={item.id}
            className="group flex gap-4 overflow-hidden rounded-2xl bg-base-100 p-3 shadow-sm transition hover:shadow-lg"
          >
            <div className="flex min-w-0 flex-col justify-center">
              <span className="text-xs font-medium text-primary">
                {item.category}
              </span>

              <h3 className="mt-1 line-clamp-2 text-base font-bold leading-6">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainNews
