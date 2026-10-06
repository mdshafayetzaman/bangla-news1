
'use client'

import { authClient } from '@/app/lib/client'
import Link from 'next/link'

const UserInFo = () => {
  const { data: session } = authClient.useSession()
  const user = session?.user

  const handleSignOut = async () => {
    await authClient.signOut()
  }

  return (
    <div className="flex shrink-0 items-center gap-2 sm:gap-3">
      {user ? (
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="avatar">
            <div className="w-9 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
              {user?.image ? (
                <img
                  src={user?.image as string}
                  alt={user.name || 'User'}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-primary text-sm font-bold text-primary-content">
                  {user.name?.charAt(0).toUpperCase() || 'U'}
                </div>
              )}
            </div>
          </div>

          <span className="hidden text-sm font-semibold text-gray-700 sm:block">
            {user.name}
          </span>

          <button
            onClick={handleSignOut}
            className="rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Link
            href="/sign-in"
            className="rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
          >
            Sign In
          </Link>

          <Link
            href="/sign-up"
            className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-content transition hover:opacity-90"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  )
}

export default UserInFo

