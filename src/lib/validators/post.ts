import { z } from "zod"

const taskType = z.enum(['steps', 'goal'])

export const TaskValidator = z.object({
    title: z.string().min(3, {
        message: 'Title must contain atleast 3 characters.'
    }).max(128, {
        message: 'Title can not be longer than 128 characters.'
    }),
    description: z.string().min(7, {
        message: 'Description must contain atleast 3 characters.'
    }).max(1000, {
        message: 'Description can not be longer than 1000 characters.'
    }),
    type: taskType,
    steps: z.array(z.string()).optional(),
    goal: z.number().optional(),
    goalProgress: z.number().optional()
})

export type TaskCreationRequest = z.infer<typeof TaskValidator>
export type taskTypeEnum = z.infer<typeof taskType>