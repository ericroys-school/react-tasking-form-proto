import { TaskService } from '../../../services/tasks/tasksvc';
import { EditTask } from './editTask';

export type Props = {
  id: string;
  onCancel: () => void;
  onSave: () => void;
  taskService: TaskService;
};

export const EditContainer = ({ id, onSave, onCancel, taskService }: Props) => {
  return (
    <div className='absolute top-0 right-0 bg-white bottom-0 p-4 drop-shadow-custom-m-black w-2/5 z-30'>
      <h2>Edit Task</h2>
      <div className='flex'>
        <EditTask
          taskService={taskService}
          id={id}
          onCancel={onCancel}
          onSave={onSave}
        />
      </div>
    </div>
  );
};
