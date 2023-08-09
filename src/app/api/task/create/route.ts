import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { TaskValidator } from "@/lib/validators/post"
import { getServerSession } from "next-auth/next"


export async function POST(req: Request){
    try {
        const session = await getServerSession(authOptions)
        const body = await req.json()

        const {title, description, type, steps, goal, goalProgress} = TaskValidator.parse(body)

        if(type === 'goal' && !goal) {
            return new Response("Bad request", { status: 400 })
        }
        
        if(type === 'steps') {
            if(!steps || steps.length <= 0) {
                return new Response("Bad request", { status: 400 })
            }
        }

        if(!session?.user) {
            return new Response("Unauthorized", { status: 401 })
        }
        
        if(type === 'goal' && goalProgress && goal) {
            let percentage
            
            if(goalProgress !== 0) {
                percentage = Math.floor(goalProgress / goal * 100)
            }

            await db.task.create({
                data: {
                    authorId: session.user.id,
                    title: title,
                    description: description,
                    goal: goal,
                    goalProgress: goalProgress || 0,
                    progresPercentage: percentage,
                    type: type
                }
            })
        }

        if(type === 'steps') {

            const task = await db.task.create({
                data: {
                    authorId: session.user.id,
                    title: title,
                    description: description,
                    progresPercentage: 0,
                    type: type
                }
            })

            steps?.forEach(async (item) =>  {
                await db.step.create({
                    data: {
                        taskId: task.id,
                        title: item,
                        completed: false
                    }
                })
            })
        }


        return new Response("OK")
    } catch (error) {
        console.log("ERORCINA: ",error)
        return new Response("Error neki")
    }
}