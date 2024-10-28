import { z } from 'zod';
import {
  vNewTask,
  vTask,
  vTaskResponse,
  vUpdateTask,
} from '../validators/tasks';
import {
  TaskActionType,
  TaskListActionType as TaskListActionType,
} from '../actions/tasks/tasks';
export type NewTask = z.infer<typeof vNewTask>;
export type TaskUpdate = z.infer<typeof vUpdateTask>;
export type Task = z.infer<typeof vTask>;
export type Tasks = z.infer<typeof vTaskResponse>;

type TaskListState = {
  status: TaskStatus;
  data: Task[];
  error: string | undefined | null;
};

export type TaskPayload = {
  id: string | undefined;
  show: boolean;
};

type TaskState = {
  status: TaskStatus;
  data: TaskPayload;
  error: string | undefined | null;
};

export const enum TaskStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed',
  DONE = 'done',
}

type TaskListAction = {
  type: TaskListActionType;
  data?: Task[];
};

type TaskAction = {
  type: TaskActionType;
  data: string;
};

type DispatchTaskListType = (args: TaskListAction) => TaskListAction;
type DispatchTaskType = (args: TaskAction) => TaskAction;
export type {
  TaskListState,
  TaskListAction,
  DispatchTaskListType,
  DispatchTaskType,
  TaskAction,
  TaskState,
};
