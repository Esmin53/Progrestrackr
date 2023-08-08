import { db } from '@/lib/db'
import { FC } from 'react'
import Task from './Task'

interface TaskFeedProps {
  id: string | undefined
}


const TaskFeed = async ({id}: TaskFeedProps) => {
    
    const tasks = await db.task.findMany({
        where: {
          authorId: id
        }
      }) 
  
  return (
    <div className='grid grid-cols-3 gap-2 h-fit'>
        {tasks.map((item) => {
            return <Task task={item} />
        })}
    </div>
  )
}

export default TaskFeed