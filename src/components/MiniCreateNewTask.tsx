import Link from 'next/link'
import { FC } from 'react'
import {RiArrowDropDownLine} from "react-icons/ri"

interface MiniCreateNewTaskProps {
  
}

const MiniCreateNewTask: FC<MiniCreateNewTaskProps> = ({}) => {
  return (
    <div className='w-2/3 h-fit rounded-xl cursor-pointer p-2 py-4'>
        <h1 className='text-3xl font-bold'>Create a new task</h1>
        <hr className='w-full h-[1px] border-emerald-500 my-4'/>
        <p className='text-md'>Start of a new journey with Progrestrackr, create a task and track your daily progress every step of the way.
        </p>
        <div className='w-full h-12 bg-zinc-900 my-4 rounded-lg'>
            <Link href='/task/create' className='w-full h-full flex items-center justify-center'>New Task</Link>
        </div >
    </div>
  )
}

export default MiniCreateNewTask