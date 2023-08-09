"use client"

interface UpdateGoalProps {
  props: {
    goal: number | null,
    currentProgress: number | null
  }
}

const UpdateGoal = ({props}: UpdateGoalProps) => {



  return <div className="px-4">
  <div className='grid grid-cols-1 sm:grid-cols-3 py-4 w-2/3 gap-4'>
    <div className='w-full flex flex-col '>
        <p className='text-sm mb-1'>Current progress</p>
        <div className='w-full h-12 border-2 border-white rounded-md flex items-center px-2 text-zinc-400 font-semibold'>{props.currentProgress}</div>
    </div>
    <div className='w-full flex flex-col'>
        <p className='text-sm mb-1'>Update progress</p>
        <input className='w-full h-12 border-2 border-white rounded-md bg-transparent focus:outline-none px-2 text-lg'
        />
    </div>
    <div className='w-full flex flex-col'>
        <p className='text-sm mb-1'>Current goal</p>
        <div className='w-full h-12 border-2 border-white rounded-md flex items-center px-2 text-zinc-400 font-semibold'>{props.goal}</div>
    </div>
  </div>
  <button className="w-2/3 h-12 bg-emerald-500 rounded-md font-semibold">Update</button>
  </div>
}

export default UpdateGoal