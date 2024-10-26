import { z } from 'zod';

export const vNewTask = z.object({
  text: z
    .string()
    .min(3, 'Please provide a lengthier name')
    .max(70, 'Perhaps not that lengthy (< 70)'),
});

export const vUpdateTask = vNewTask.extend({
  isCompleted: z.boolean().optional(),
  description: z.string().optional().nullable(),
});

export const vTask = vUpdateTask.extend({
  id: z.string(),
  createdAt: z.number(),
});

export const vTaskResponse = z.object({
  tasks: vTask.array().optional(),
});
