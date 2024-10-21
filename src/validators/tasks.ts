import { z } from 'zod';

export const vNewTask = z.object({
  text: z
    .string()
    .min(3, 'Please provide a lengthier name')
    .max(70, 'Perhaps not that lengthy (< 70)'),
});

export const vUpdateTask = vNewTask.extend({
  completed: z.boolean().optional(),
});

export const vTask = vNewTask.extend({
  id: z.string(),
  createdAt: z.number(),
  completed: z.boolean(),
});

export const vTaskResponse = z.object({
  tasks: vTask.array().optional(),
});
