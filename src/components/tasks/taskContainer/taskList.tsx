import { useEffect } from 'react';
import { Task, TaskStatus } from '../../../types/tasks';
import {
  fetchTasks,
  selectAll,
  selectStatus,
} from '../../../reducers/tasks/taskList';
import { useAppDispatch, useAppSelector } from '../../../store/storeHooks';
import { useSelector } from 'react-redux';
import { TaskItem } from './taskItem';

export const TaskList = () => {
  const dispatch = useAppDispatch();
  const tasks: Task[] | undefined = useAppSelector(selectAll);
  const status = useSelector(selectStatus);
  useEffect(() => {
    console.log(`isLoad: ${status}`);
    //if state is idle, load the available tasjs
    if (status === TaskStatus.IDLE) {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  const refresh = () => {
    console.log('refresh');
    dispatch(fetchTasks);
    console.log('done');
  };

  return (
    <>
      {tasks.map((t) => (
        <TaskItem
          key={t.id}
          task={{ ...t }}
          refresh={refresh}
          onEditSelect={() => {}}
          onChangeComplete={() => {}}
          // onEditSelect={onEditSelect}
          // onChangeComplete={changeComplete}
        />
      ))}
    </>
  );
};
