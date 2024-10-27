import { memo, useEffect, useState } from 'react';
import { TaskService } from '../../../services/tasks/tasksvc';
import { AddTask } from './addTask';
import { TaskItem } from './taskItem';
import { Task, TaskStatus } from '../../../types/tasks';
import EditContainer from '../editContainer/index';
import { useAppDispatch, useAppSelector } from '../../../store/storeHooks';
import {
  fetchTasks,
  selectAll,
  selectStatus,
} from '../../../reducers/tasks/taskList';
import { useSelector } from 'react-redux';
import { ErrorPage } from '../../../pages/error';
import { TaskList } from './taskList';

// export type Props = {
//   taskService: TaskService;
// };
// { taskService }: Props
export const TaskContainer = memo(() => {
  // const [tasks, setTasks] = useState<Task[] | undefined>();
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [error, setError] = useState<Error | string | undefined>();
  // const [showEdit, setShowEdit] = useState<boolean>(false);
  // const [selectedId, setSelectedId] = useState<string>();

  // const getTasks = () => {
  //   setIsLoading(true);
  //   taskService
  //     .getTasks()
  //     .then((tasks) => {
  //       setTasks(tasks);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => setError(error))
  //     .finally(() => setIsLoading(false));
  // };

  // const refresh = () => {
  //   dispatch(fetchTasks());
  // };

  // const onEditSelect = (id: string) => {
  //   setSelectedId(id);
  //   selectedId !== id ? setShowEdit(true) : setShowEdit(!showEdit);
  // };

  // const onCancel = () => {
  //   setSelectedId(undefined);
  //   setShowEdit(false);
  // };

  // const onSave = () => {
  //   onCancel();
  //   refresh();
  // };

  // const changeComplete = async (id: string, isCompleted: boolean) => {
  //   // console.log('**********', id, isCompleted);
  //   await taskService.updateTask(id, { isCompleted: isCompleted });
  // };

  return (
    <>
      <AddTask />
      <TaskList />

      {/* {showEdit && selectedId ? (
        <EditContainer id={selectedId} onCancel={onCancel} onSave={onSave} />
      ) : null} */}
    </>
  );
});
