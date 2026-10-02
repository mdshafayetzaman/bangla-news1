import Link from 'next/link'

export default function Navbar() {
  const date = new Date()

  const formattedDate = date.toLocaleDateString('bn-BD', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <div></div>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0d1020]">
            <span className="text-2xl font-black text-red-500">B</span>
          </div>

          <div className="flex flex-col">
            <h1 className="font-serif text-2xl font-bold leading-7 text-red-600">
              Bangla News 24
            </h1>
            <p className="mt-1 text-xs text-gray-500">{formattedDate}</p>
          </div>
        </Link>

        <div className="flex-1"></div>

        <div className="flex shrink-0 items-center gap-5">
          <Link
            href="/sign-in"
            className="text-sm font-medium text-gray-700 transition hover:text-red-600"
          >
            Sign In
          </Link>

          <Link
            href="/sign-up"
            className="rounded-md bg-red-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-800"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  )
}
