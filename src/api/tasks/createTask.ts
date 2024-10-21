import { NewTask } from '../../types/tasks';
import { vTask } from '../../validators/tasks';

export const createTask = async (newTask: NewTask) => {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newTask),
  };
  try {
    let response = await fetch('/api/tasks', options);
    const res: unknown = await response.json();
    if (response.ok) {
      const validated = vTask.safeParse(res);
      if (validated.success) return validated.data;
      throw validated.error;
    } else {
      console.log('response not ok');
      throw 'response not ok';
    }
  } catch (error) {
    throw error;
  }
};
