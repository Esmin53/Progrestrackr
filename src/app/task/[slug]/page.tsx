import ProgresBar from "@/components/ProgresBar"
import UpdateGoal from "@/components/UpdateGoal"
import UpdateSteps from "@/components/UpdateSteps"
import { db } from "@/lib/db"
import { Step } from "@prisma/client"

interface pageProps {
  params: {
    slug: string
  },
  steps: Step[]
}

const page = async ({params}: pageProps) => {
    const task = await db.task.findFirst({
        where: {
            id: params.slug
        }
    })


    let steps;
    let completedSteps;
    
    if(task?.type === 'steps') {
        steps = await db.step.findMany({
        where: {
            taskId: params.slug
        }
    })
        completedSteps = steps.reduce((accumulator, currentValue) => {
            if(currentValue.completed === true) return accumulator + 1
            if(currentValue.completed === false && accumulator !== 0) return accumulator - 1
            return accumulator
        }, 0) 
    }


  return (
    <div className="w-full">
        <div className="flex gap-4 w-full">
            <div className="w-2/3 p-2">
                <h1 className="text-4xl font-semibold pb-6 border-b border-slate-800 border-b-2">{task?.title}</h1>
                <p className="text-2xl mt-4">{task?.description}</p>
                <h1 className="text-5xl font-bold ml-2 my-6">{task?.progresPercentage}% Completed</h1>
                <div className="w-full h-12">
                    <ProgresBar props={{currentProgress: task?.progresPercentage!}} />
                </div>
                {task?.type === 'steps' && (
                <p className="mt-2 text-md font-semibold">You have completed {completedSteps} out of {steps && steps?.length} steps</p>)} 
            
                {task?.type === 'goal' && 
                (<p className="mt-2 text-md font-semibold">{task?.goalProgress} completed out of {task?.goal}. Keep going.</p>)}
            </div>
            <div className="w-1/3 bg-slate-800 py-4 px-2 sm:mt-5">
                <h1 className="text-xl pb-2 border-b border-b-emerald-500 mb-2">{task?.type === 'steps' ? 'Steps' : 'My goal'}</h1>
                {steps ? <div>
                        {steps.map((item, index) => {
                            return <p key={item.id} className={`${item.completed === true && 'text-emerald-500'}`}>
                                <span>{index + 1}{'. '}</span>
                                {item.title}
                                </p>
                        })}
                    </div> : <p className="mt-2 text-md font-semibold">{task?.goalProgress} completed out of {task?.goal}. Keep going.</p>
                    }
            </div>  
        </div>
        <div className='w-full h-[1px] bg-emerald-500 my-4'/>
         {task?.type === 'goal' && <UpdateGoal 
         props={{goal: task?.goal, 
                currentProgress: task?.goalProgress,
                taskId: task.id }} />} 
        {task?.type === 'steps' && <UpdateSteps props={{
            taskId: task.id,
            steps: steps!
        }}/>}          
    </div>
    )
}

export default page