import { Step } from '@prisma/client'
import { FC } from 'react'

interface UpdateStepsProps {
  props: {
    taskId: string,
    steps: Step[]
  }
}

const UpdateSteps: FC<UpdateStepsProps> = ({props}) => {
  return <div className='w-full mt-4 flex flex-col gap-2 bg-slate-600 p-2'>
    {props.steps.map((item) => {
        return <div key={item.id} className='w-full display flex items-center justify-between p-2 bg-slate-800'>
            <p>{item.title}</p>
            {item.completed === true ? (
                <button className='h-10 bg-red-500 rounded-md text-xs px-2'>Unmark as completed</button>
            ) : (
                <button className='h-10 bg-emerald-500 rounded-md text-sm px-2'>Mark as completed</button>
            )}
        </div>
    })}
  </div>
}

export default UpdateSteps