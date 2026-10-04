import MainNews from '@/component/MainNews'
import Marquyee from '@/component/Marquyee'
import MostRead from '@/component/MostRead'
import NewsCard from '@/component/NewsCard'

export default async function Home() {
  type Section = {
    title: string
    articles: Parameters<typeof MainNews>[0]['news']
    [key: string]: unknown
  }

  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections')
  const data = await res.json()

  const section: Section[] = data.data
  const mainnews = section[0]?.articles ?? []
  const othersections = section.slice(1)

  return (
    <div>
      <Marquyee />

      <div className="mx-auto mt-6 grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="lg:col-span-2">
          <MainNews news={mainnews} />

          <div className="mt-10 space-y-10">
            {othersections.map((section) => (
              <section key={section.title}>
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-7 w-1 rounded-full bg-blue-500" />

                  <h2 className="text-xl font-extrabold tracking-tight text-gray-900">
                    {section.title}
                  </h2>

                  <div className="h-px flex-1 bg-gray-200" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2 font-bold p-5 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm">
                  {section.articles.map((article) => (
                    <div key={article.id} className="scale-[0.97]">
                      <NewsCard news={article} />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <aside className="min-h-100 rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm lg:col-span-1">
          <h2 className="text-lg font-bold text-gray-800">

            <MostRead/>
          </h2>
        </aside>
      </div>
    </div>
  )
}
