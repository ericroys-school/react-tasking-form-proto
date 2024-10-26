import { useEffect, useState } from 'react';
import { TaskService } from '../../../services/tasks/tasksvc';
import { AddTask } from './addTask';
import { TaskItem } from './taskItem';
import { Task } from '../../../types/tasks';
import EditContainer from '../editContainer/index';

export type Props = {
  taskService: TaskService;
};

export const TaskContainer = ({ taskService }: Props) => {
  const [tasks, setTasks] = useState<Task[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | string | undefined>();
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>();

  const getTasks = () => {
    setIsLoading(true);
    taskService
      .getTasks()
      .then((tasks) => {
        setTasks(tasks);
        setIsLoading(false);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getTasks();
  }, []);

  const refresh = () => {
    getTasks();
  };

  const onEditSelect = (id: string) => {
    setSelectedId(id);
    selectedId !== id ? setShowEdit(true) : setShowEdit(!showEdit);
  };

  const onCancel = () => {
    setSelectedId(undefined);
    setShowEdit(false);
  };

  const onSave = () => {
    onCancel();
    refresh();
  };

  const changeComplete = async (id: string, isCompleted: boolean) => {
    // console.log('**********', id, isCompleted);
    await taskService.updateTask(id, { isCompleted: isCompleted });
  };

  return isLoading ? (
    <p>... loading ... </p>
  ) : error ? (
    <p>{JSON.stringify(error)}</p>
  ) : !tasks ? (
    <p>none</p>
  ) : (
    <>
      <AddTask refresh={refresh} />
      {tasks.map((t) => (
        <TaskItem
          key={t.id}
          task={{ ...t }}
          refresh={refresh}
          onEditSelect={onEditSelect}
          onChangeComplete={changeComplete}
        />
      ))}
      {showEdit && selectedId ? (
        <EditContainer id={selectedId} onCancel={onCancel} onSave={onSave} />
      ) : null}
    </>
  );
};
