import { z } from "zod";

export const ProgressValidator = z.object({
    taskId: z.string(),
    progress: z.number().optional(),
    stepId: z.string().optional(),
    progressPercentage: z.number()
})

export type ProgressValidatorRequest = z.infer<typeof ProgressValidator>