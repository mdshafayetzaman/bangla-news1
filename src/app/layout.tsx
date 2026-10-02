import type { Metadata } from 'next'
import { Geist, Geist_Mono, Noto_Sans_Bengali } from 'next/font/google'
import './globals.css'
import Navbar from '@/component/Navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const notoSansBengali = Noto_Sans_Bengali({
  variable: '--font-noto-bengali',
  subsets: ['bengali'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'বাংলা নিউজ | Bangla News',
  description: 'বাংলাদেশ ও বিশ্বের সর্বশেষ সংবাদ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="bn" data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansBengali.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased font-bengali">
        <div>
          <Navbar></Navbar>
        </div>
        <main>{children}</main>
      </body>
    </html>
  )
}
