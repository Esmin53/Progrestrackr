import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Progrestrackr.io',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-slate-700 text-zinc-50 flex`}>
          <Providers>
            <div className='flex-1 px-2'>
              <Navbar />
              <div className='flex-1 sm:p-4 p-1'>
                {children}
              </div>
            </div>
            <Sidebar />
          </Providers>
        </body>
    </html>
  )
}
