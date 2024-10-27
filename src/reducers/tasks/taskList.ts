import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../store/store.js';
import { NewTask, Task, TaskListState, TaskStatus } from '../../types/tasks.js';
import { TaskService } from '../../services/tasks/tasksvc.js';
import { HttpAdapter } from '../../api/adapters/httpAdapter.js';

const initialState: TaskListState = {
  status: TaskStatus.IDLE,
  data: [],
  error: null,
};

export const taskListReducer = createSlice({
  name: 'taskList',
  initialState: initialState,
  reducers: {
    getTasksSuccess: (state, action: PayloadAction<Task[]>) => {
      return action.payload
        ? {
            ...state,
            payload: state.data.concat(action.payload),
          }
        : state;
    },
    getTasksFail: (state) => {
      return { ...state, isTaskLoading: false };
    },
    getTasksLoading: (state) => {
      return { ...state, isTaskLoading: true };
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        data: state.data.filter((task) => task.id !== action.payload),
      };
    },
    addTask: (state, action: PayloadAction<Task>) => {
      return {
        ...state,
        data: state.data.concat(action.payload),
      };
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      return {
        ...state,
        data: state.data.map((task) =>
          task.id === action.payload.id ? { ...task, ...action.payload } : task
        ),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = TaskStatus.LOADING;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = TaskStatus.DONE;
        if (action.payload) state.data = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.status = TaskStatus.FAILED;
      })
      .addCase(deleteTask.fulfilled, (state) => {
        state.status = TaskStatus.IDLE;
      })
      .addCase(addTask.fulfilled, (state) => {
        state.status = TaskStatus.IDLE;
      });
  },
});

export const { getTasksSuccess, getTasksFail, getTasksLoading } =
  taskListReducer.actions;

export const fetchTasks = createAsyncThunk(
  'taskList/fetchTaskData',
  async () => {
    try {
      return new TaskService(new HttpAdapter()).getTasks();
    } catch (err) {
      console.log(err);
      return Promise.reject({ reason: err });
    }
  }
);
export const deleteTask = createAsyncThunk(
  'taskList/deleteTask',
  async (id: string) => {
    try {
      return new TaskService(new HttpAdapter()).deleteTask(id);
    } catch (err) {
      console.log(err);
      return Promise.reject({ reason: err });
    }
  }
);

export const addTask = createAsyncThunk(
  'taskList/addTask',
  async (task: NewTask) => {
    try {
      return new TaskService(new HttpAdapter()).addTask(task);
    } catch (err) {
      console.log(err);
      return Promise.reject({ reason: err });
    }
  }
);

export const selectAll = (state: RootState) => state.reducer.taskList.data;
export const selectStatus = (state: RootState) => state.reducer.taskList.status;
