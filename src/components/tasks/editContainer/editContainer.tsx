import { TaskService } from '../../../services/tasks/tasksvc';
import { EditTask } from './editTask';

export type Props = {
  taskService: TaskService;
};

export const EditContainer = ({ taskService }: Props) => {
  return (
    <div className='absolute top-0 right-0 bg-white bottom-0 p-4 drop-shadow-custom-m-black w-2/5 z-30'>
      <h2>Edit Task</h2>
      <div className='flex'>
        <EditTask taskService={taskService} />
      </div>
    </div>
  );
};
