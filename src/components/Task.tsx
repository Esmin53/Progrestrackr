import { Task } from '@prisma/client'
import { FC } from 'react'
import ProgresBar from './ProgresBar'
import { db } from '@/lib/db'
import Link from 'next/link'

interface TaskProps {
  task: Task
}

const Task: FC<TaskProps> = async ({task}) => {    

    const steps = await db.step.findMany({
        where: {
            taskId: task.id
        }
    })

    const stepsCount = steps && steps.reduce((accumulator, currentValue) => {
        if(currentValue.completed === true) return accumulator + 1
        if(currentValue.completed === false && accumulator !== 0) return accumulator - 1
        return accumulator
    }, 0) 
    

  return <div className='w-full h-fit bg-slate-600 rounded-lg p-2 shadow'>
    <h1 className='text-xl font-semibold'>{task.title}</h1>
    <p className='text-md'>{task.description}</p>
    <div className='w-full h-12'>
        <ProgresBar props={{currentProgress: task.progresPercentage!}} />
    </div>
    <h1 className='text-8xl flex justify-center mt-2'>{task.progresPercentage}%</h1>
    <div className='w-full h-12 mt-4 bg-zinc-900 rounded-md'>
    <Link href={`/task/${task.id}`} className='w-full h-full flex items-center justify-center'>See more</Link>
    </div>
  </div>
}

export default Task