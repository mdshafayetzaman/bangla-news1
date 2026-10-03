import MarqueeText from 'react-marquee-text'
import 'react-marquee-text/dist/styles.css'
import Link from 'next/link'

interface Headline  {
  id: string | number
  title: string
}

const Marquyee = async () => {
  const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10', {
    cache: 'no-store',
  })

  const data = await res.json()
  const headlines: Headline[] = data.data

  return (
    <div className="mx-auto max-w-7xl overflow-hidden rounded-xl border border-red-100 bg-white shadow-sm">
      <div className="flex min-h-14 items-center">
        <div className="z-10 flex shrink-0 items-center gap-2 self-stretch bg-red-600 px-4 text-white sm:px-6">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
          </span>
          <span className="whitespace-nowrap text-xs font-extrabold tracking-wider sm:text-sm">
            সর্বশেষ
          </span>
        </div>

        <div className="min-w-0 flex-1 overflow-hidden py-3">
          <MarqueeText direction="right" duration={35}>
            {headlines.map((headline) => (
              <Link
                key={headline.id}
                href={`/news/${headline.id}`}
                className="mx-5 inline-flex items-center gap-5 text-sm font-semibold text-slate-700 transition-colors hover:text-red-600 sm:text-base"
              >
                {headline.title}
                <span className="text-red-500">●</span>
              </Link>
            ))}
          </MarqueeText>
        </div>
      </div>
    </div>
  )
}

export default Marquyee
