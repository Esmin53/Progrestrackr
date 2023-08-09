import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { ProgressValidator } from "@/lib/validators/updateprogress";
import { getServerSession } from "next-auth/next";

export async function PATCH(req: Request) {
    try {
        const session = await getServerSession(authOptions)
        
        const body = await req.json()

        const {taskId, progress, stepId, progressPercentage} = ProgressValidator.parse(body)

        if(!session?.user) {
            return new Response("Unauthorized", { status: 401 } );
        }
        if(!progress && !stepId) {
            return new Response("Bad request", { status: 400 });
        }

        if(progress) {
            await db.task.update({
                where: {
                    id: taskId
                }, 
                data: {
                    goalProgress: progress,
                    progresPercentage: progressPercentage
                }
            })
        }

        return new Response("OK")
    } catch (error) {
        console.log(error)
    }
}