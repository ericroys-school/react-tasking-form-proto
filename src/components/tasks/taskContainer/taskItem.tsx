import { inputclass } from '../../../styling/styles';
import { Task } from '../../../types/tasks';
import { ButtonFactory } from '../../buttonFactory';
import { useAppDispatch } from '../../../store/storeHooks';
import { deleteTask, updateTask } from '../../../reducers/tasks/taskList';
import { setTask } from '../../../reducers/tasks/task';

export type ItemProps = {
  task: Task;
};

export const TaskItem = ({ task }: ItemProps) => {
  const dispatch = useAppDispatch();

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
              dispatch(
                updateTask({
                  id: task.id,
                  task: { isCompleted: event.target.checked },
                })
              )
            }
          />
          <span
            className={
              'text-white' + task.isCompleted && ' line-through'
            }>{`${task.text}`}</span>
        </div>
        <div className='flex justify-end w-1/4'>
          {ButtonFactory({
            type: 'edit',
            onClick: () =>
              task.id && dispatch(setTask({ id: task.id, show: true })),
          })}
          {ButtonFactory({
            type: 'delete',
            onClick: () => task.id && dispatch(deleteTask(task.id)),
          })}
        </div>
      </div>
    </div>
  );
};
