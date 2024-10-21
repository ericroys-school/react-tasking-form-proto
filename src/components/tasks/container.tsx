import { useFetchTasks } from '../../api/tasks/gettasks';
import { AddTask } from './addTask';
import { TaskItem } from './taskItem';

export const TaskContainer = () => {
  const { error, isLoading, refresh, tasks } = useFetchTasks();

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
        <TaskItem key={t.id} task={{ ...t }} />
      ))}
    </>
  );
};
