import { useEffect, useState } from 'react';
import { Task } from '../../types/tasks';
import { vTaskResponse } from '../../validators/tasks';

export const useFetchTasks = () => {
  const [tasks, setTasks] = useState<Task[] | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | string | undefined>();
  const [refreshIdx, setRefreshIdx] = useState(0);

  const refresh = () => setRefreshIdx((prevRefreshIdx) => prevRefreshIdx + 1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let response = await fetch('/api/tasks');
        const res: unknown = await response.json();
        if (response.ok) {
          const validated = vTaskResponse.safeParse(res);
          if (validated.success) {
            setTasks(validated.data.tasks);
          }
          setError(validated.error);
        }
      } catch (error) {
        switch (typeof error) {
          case 'string': {
            setError(error as string);
            break;
          }
          case typeof Error: {
            setError((error as Error).message);
            break;
          }
          default:
            console.log(error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [refreshIdx]);
  return { tasks, isLoading, error, refresh };
};
