import React from 'react'

interface MostReadNews {
  id: string | number
  title: string
}

interface MostReadResponse {
  data: MostReadNews[]
}

const MostRead = async () => {
  const response = await fetch(
    'https://news-api-v2.vercel.app/api/news/most-read',
  )
  const data: MostReadResponse = await response.json()
  const mostRead = data.data

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center gap-3 border-b border-gray-200 pb-3">
        <div className="h-7 w-1 rounded-full bg-lime-500" />
        <h1 className="text-xl font-extrabold tracking-tight text-gray-900">
          সর্বাধিক পঠিত
        </h1>
      </div>

      <div className="space-y-4">
        {mostRead.map((h, index) => (
          <div
            key={h.id}
            className="group flex items-start gap-3 border-b border-gray-100 pb-4 last:border-0 last:pb-0"
          >
            <span className="text-2xl font-extrabold leading-none text-gray-300 transition-colors group-hover:text-lime-500">
              {String(index + 1).padStart(2, '0')}
            </span>

            <h2 className="text-sm font-semibold leading-6 text-gray-700 transition-colors group-hover:text-gray-950">
              {h.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MostRead
