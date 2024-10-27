import { z } from 'zod';
import {
  vNewTask,
  vTask,
  vTaskResponse,
  vUpdateTask,
} from '../validators/tasks';
import { TaskActionType } from '../actions/tasks/tasks';
export type NewTask = z.infer<typeof vNewTask>;
export type UpdateTask = z.infer<typeof vUpdateTask>;
export type Task = z.infer<typeof vTask>;
export type Tasks = z.infer<typeof vTaskResponse>;

type TaskListState = {
  status: TaskStatus;
  data: Task[];
  error: string | undefined | null;
};

type TaskState = {
  taskId: string;
};

export const enum TaskStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed',
  DONE = 'done',
}

type TaskListAction = {
  type: TaskActionType;
  data?: Task[];
};

type DispatchType = (args: TaskListAction) => TaskListAction;
export type { TaskListState, TaskListAction, DispatchType };
