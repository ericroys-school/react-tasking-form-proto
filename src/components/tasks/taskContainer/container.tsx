import { AddTask } from './addTask';
import EditContainer from '../editContainer/index';
import { useAppSelector } from '../../../store/storeHooks';
import { TaskList } from './taskList';
import { selectCurrentTask } from '../../../reducers/tasks/task';

export const TaskContainer = () => {
  const task = useAppSelector(selectCurrentTask);
  return (
    <>
      <AddTask />
      <TaskList />
      {task.id && task.show && <EditContainer />}
    </>
  );
};
