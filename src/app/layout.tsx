import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
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
        <div className='flex-1 p-4'>
          {children}
        </div>
        <Sidebar />
        </body>
    </html>
  )
}
