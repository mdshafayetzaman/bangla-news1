import Image from 'next/image'

interface ICategoryNews {
  id: string
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  source: string
}

const CateGoryId = async ({
  params,
}: {
  params: Promise<{ categoryid: string }>
}) => {
  const { categoryid } = await params

  const response = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryid}`,
  )

  const data = await response.json()
  const categoryNews: ICategoryNews[] = data.data

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8 border-b border-gray-200 pb-5">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          {data.title}
        </h1>
        <p className="mt-2 text-sm text-gray-500">সর্বশেষ খবর ও আপডেট</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categoryNews.map((news) => (
          <article
            key={news.id}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={news.imageUrl}
                alt={news.imageAlt || news.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            <div className="p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-blue-600">
                {news.source}
              </p>

              <h2 className="mb-3 line-clamp-2 text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-blue-600">
                {news.title}
              </h2>

              <p className="line-clamp-3 text-sm leading-6 text-gray-600">
                {news.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CateGoryId
