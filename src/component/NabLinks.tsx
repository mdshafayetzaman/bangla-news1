import Link from 'next/link'

interface IData {
  slug: string
  title: string
  topicId: string | null
  url: string
  scrapable: boolean
}

const NabLinks = async () => {
  const response = await fetch('https://news-api-v2.vercel.app/api/categories')

  const data = await response.json()

  const navs: IData[] = data.data

  const filterNavs = navs.filter((n) => n.scrapable)

  return (
    <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-7 whitespace-nowrap">
      <Link href="/">হোম</Link>

      {filterNavs.map((n) => (
        <Link key={n.slug} href={`/category/${n.slug}`}>
          {n.title}
        </Link>
      ))}
    </div>
  )
}

export default NabLinks
