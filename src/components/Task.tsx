import { Task } from '@prisma/client'
import { FC } from 'react'
import ProgresBar from './ProgresBar'
import { db } from '@/lib/db'

interface TaskProps {
  task: Task
}

const Task: FC<TaskProps> = async ({task}) => {

    let progresColor: string;

    if( task.progresPercentage! >= 0 && task.progresPercentage! < 20) {
        progresColor = '-red-500'
    } else if( task.progresPercentage! >= 20 && task.progresPercentage! < 41) {
        progresColor = '-orange-500'
    } else if(task.progresPercentage! >= 41 && task.progresPercentage! < 61) {
        progresColor = '-amber-500'
    } else if( task.progresPercentage! >= 61 && task.progresPercentage! < 80) {
        progresColor = '-lime-400'
    } else {
        progresColor = '-emerald-500'
    }

    const steps = await db.step.findMany({
        where: {
            taskId: task.id
        }
    })

    const stepsCount = steps && steps.reduce((accumulator, currentValue) => {
        if(currentValue.completed === true) return accumulator + 1
        if(currentValue.completed === false) return accumulator - 1
        return accumulator
    }, 0) 

    console.log(stepsCount)
    

  return <div className='w-full h-64 bg-slate-600 rounded-lg p-2 shadow'>
    <h1 className='text-xl font-semibold'>{task.title}</h1>
    <p className='text-md'>{task.description}</p>
    <div className='w-full h-12'>
        <ProgresBar progresColor={progresColor}/>
    </div>
    <button className='w-full mt-auto h-12 bg-zinc-900 rounded-md'>See more</button>
  </div>
}

export default Task