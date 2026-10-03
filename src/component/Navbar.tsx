import Link from 'next/link'
import NabLinks from './NabLinks'

export default function Navbar() {
  const date = new Date()

  const formattedDate = date.toLocaleDateString('bn-BD', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-700 shadow-md shadow-red-200">
            <span className="text-3xl font-black text-white">B</span>
          </div>

          <div className="flex flex-col">
            <h1 className="font-serif text-xl font-extrabold leading-6 text-gray-900 sm:text-2xl">
              Bangla <span className="text-red-700">News 24</span>
            </h1>
            <p className="mt-1 text-xs font-medium text-gray-500">
              {formattedDate}
            </p>
          </div>
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <Link
            href="/sign-in"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-red-50 hover:text-red-700 sm:px-4"
          >
            Sign In
          </Link>

          <Link
            href="/sign-up"
            className="rounded-lg bg-red-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-red-800 hover:shadow-md sm:px-5"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      <div className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-12 items-center justify-center gap-7 whitespace-nowrap">
            <NabLinks />
          </div>
        </div>
      </div>
    </header>
  )
}
