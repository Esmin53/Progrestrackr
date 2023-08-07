import Link from 'next/link'
import { FC } from 'react'

interface OverviewProps {
  
}

const Overview: FC<OverviewProps> = ({}) => {
  return <div className='h-fit w-1/3 bg-slate-600 rounded-lg p-2 relative shadow'>
    <div className='flex justify-between px-2'>
        <p>Tasks completed:</p>
        <p>0</p>
    </div>
    <div className='w-full h-[1px] bg-zinc-400 my-2' />
    <div className='flex justify-between px-2'>
        <p>Tasks in progress:</p>
        <p>0</p>
    </div>
    <div className='w-full h-[1px] bg-zinc-400 my-2' />
    <div className='flex justify-between px-2'>
        <p>Close to completion:</p>
        <p>0</p>
    </div>
    <div className='w-full h-[1px] bg-zinc-400 my-2' />
    <div className='flex justify-between px-2'>
        <p>Just started:</p>
        <p>0</p>
    </div>
    <div className='w-full h-12 bg-zinc-900 rounded-lg mt-20'>
        <Link href='/' className='w-full h-full flex items-center justify-center'>See more</Link>
    </div>
  </div>
}

export default Overview