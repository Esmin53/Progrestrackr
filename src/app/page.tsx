import MiniCreateNewTask from '@/components/MiniCreateNewTask'
import Overview from '@/components/Overview'
import TaskFeed from '@/components/TaskFeed'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth/next'

export default async function Home() {
  
  const session = await getServerSession(authOptions)

  return (
    <main className="w-full h-full">
        <h1 className='text-4xl w-full text-center font-bold mb-6 border-b pb-2 border-slate-800 border-b-2'>Progrestrackr.
        <span className='text-emerald-500'>io</span>
        </h1>
        <div className='flex gap-6 w-full'>
            <MiniCreateNewTask />
            <Overview />
        </div>
        <h2 className='text-3xl font-semibold'>Almost There!</h2>
        <p className='text-lg'>Keep it going, these tasks are almost completed:</p>
        <div className='py-2'>
          <TaskFeed id={session?.user.id || undefined} />
        </div>
    </main>
  )
}
