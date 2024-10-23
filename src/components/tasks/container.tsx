import { useEffect, useState } from 'react';
import { TaskService } from '../../services/tasks/tasksvc';
import { AddTask } from './addTask';
import { TaskItem } from './taskItem';
import { Task } from '../../types/tasks';

export type Props = {
  taskService: TaskService;
};

export const TaskContainer = ({ taskService }: Props) => {
  const [tasks, setTasks] = useState<Task[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | string | undefined>();

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
  // useFetchTasks();

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
        <TaskItem key={t.id} task={{ ...t }} refresh={refresh} />
      ))}
    </>
  );
};
