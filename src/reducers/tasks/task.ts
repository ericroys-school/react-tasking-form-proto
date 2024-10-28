import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store.js';
import { TaskPayload, TaskState, TaskStatus } from '../../types/tasks.js';

const initialState: TaskState = {
  status: TaskStatus.IDLE,
  data: { id: undefined, show: false },
  error: null,
};

export const taskReducer = createSlice({
  name: 'task',
  initialState: initialState,
  reducers: {
    setTask: (state, action: PayloadAction<TaskPayload>) => {
      return {
        ...state,
        data: { ...state.data, ...action.payload },
      };
    },
  },
});

export const { setTask } = taskReducer.actions;
export const selectCurrentTask = (state: RootState) => state.reducer.task.data;
export const selectStatus = (state: RootState) => state.reducer.task.status;
