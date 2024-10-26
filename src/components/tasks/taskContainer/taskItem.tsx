import { deleteTask } from '../../../api/tasks/deleteTask';
import { inputclass } from '../../../styling/styles';
import { Task } from '../../../types/tasks';
import { ButtonFactory } from '../../buttonFactory';

export type ItemProps = {
  task: Task;
  refresh?: () => void;
  onEditSelect: (id: string) => void;
  onChangeComplete?: (id: string, isComplete: boolean) => void;
};

export const TaskItem = ({
  task,
  refresh,
  onEditSelect,
  onChangeComplete,
}: ItemProps) => {
  const itemDelete = async (id: string) => {
    if (id) {
      //delete the task
      await deleteTask(id);
      //tell parent a refresh is needed
      if (refresh) refresh();
    }
  };

  return (
    <div className='flex items-baseline justify-between w-2/4 bg-gray rounded-lg pl-3 drop-shadow-custom-sm-blue mb-2'>
      <div className='flex w-full items-baseline'>
        <div className='flex w-3/4 items-baseline'>
          <input
            type='checkbox'
            className={inputclass + ' mr-2'}
            defaultChecked={task.isCompleted}
            readOnly={true}
            onChange={(event) =>
              onChangeComplete &&
              onChangeComplete(task.id, event.target.checked)
            }

            // checked={task.completed}
          />
          <span
            className={
              'text-white' + task.isCompleted && ' line-through'
            }>{`${task.text}`}</span>
        </div>
        <div className='flex justify-end w-1/4'>
          {ButtonFactory({
            type: 'edit',
            onClick: () => onEditSelect(task.id),
          })}
          {ButtonFactory({
            type: 'delete',
            onClick: () => itemDelete(task.id),
          })}
        </div>
      </div>
    </div>
  );
};
