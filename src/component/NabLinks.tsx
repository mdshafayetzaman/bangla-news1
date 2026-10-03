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



  const navs = data.data

  const filterNavs = navs.filter((n: { scrapable: boolean }) => n.scrapable)

  return (
    <div className="flex items-center justify-center gap-7 whitespace-nowrap">
      <Link href={'/'}>হোম</Link>
      {filterNavs.map((n: { slug: string; title: string }, i: number) => (
        <Link key={i} href={n.slug}>
          {n.title}
        </Link>
      ))}
    </div>
  )
}

export default NabLinks
