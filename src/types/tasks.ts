import { z } from 'zod';
import {
  vNewTask,
  vTask,
  vTaskResponse,
  vUpdateTask,
} from '../validators/tasks';
export type NewTask = z.infer<typeof vNewTask>;
export type UpdateTask = z.infer<typeof vUpdateTask>;
export type Task = z.infer<typeof vTask>;
export type Tasks = z.infer<typeof vTaskResponse>;
