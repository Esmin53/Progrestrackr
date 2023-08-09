"use client"

import { ProgressValidatorRequest } from "@/lib/validators/updateprogress"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface UpdateGoalProps {
  props: {
    goal: number | null,
    currentProgress: number | null
    taskId: string
  }
}

type Payload = {
    progress: number
    taskId: string
}

const UpdateGoal = ({props}: UpdateGoalProps) => {

    const [input, setInput] = useState<string>(`${props.currentProgress}`)
    const router = useRouter()

    const { mutate: updateProgress, isLoading} = useMutation({
        mutationFn: async () => {
            
            let updatedPercentage = Math.floor(Number(input) / props.goal! * 100)
            const payload: ProgressValidatorRequest = {
                progress: Number(input),
                taskId: props.taskId,
                progressPercentage: updatedPercentage
            }
            try {
                const { data } = await axios.patch('/api/task/update/progress', payload)   
            } catch (error) {
                console.log(error)
            }
        },
        onSuccess: async () => {
            router.refresh()
        },
        onError: () => {
            //Uraditi logiku za error-e
        }
    })


  return <div className="px-4">
  <div className='grid grid-cols-1 sm:grid-cols-3 py-4 w-2/3 gap-4'>
    <div className='w-full flex flex-col '>
        <p className='text-sm mb-1'>Current progress</p>
        <div className='w-full h-12 border-2 border-white rounded-md flex items-center px-2 text-zinc-400 font-semibold'>{props.currentProgress}</div>
    </div>
    <div className='w-full flex flex-col'>
        <p className='text-sm mb-1'>Update progress</p>
        <input type="string" value={input} onChange={(e) => setInput(e.target.value)} 
        className='w-full h-12 border-2 border-white rounded-md bg-transparent focus:outline-none px-2 text-lg'
        />
    </div>
    <div className='w-full flex flex-col'>
        <p className='text-sm mb-1'>Current goal</p>
        <div className='w-full h-12 border-2 border-white rounded-md flex items-center px-2 text-zinc-400 font-semibold'>{props.goal}</div>
    </div>
  </div>
  <button className={`w-2/3 h-12 rounded-md font-semibold ${isLoading ? 'bg-emerald-600' : 'bg-emerald-500'}`}
  onClick={() => updateProgress()}>Update</button>
  </div>
}

export default UpdateGoal