import { inputclass } from '../../styling/styles';
import { Task } from '../../types/tasks';
import { ButtonFactory } from '../buttonFactory';

export type ItemProps = {
  task: Task;
};
export const TaskItem = ({ task }: ItemProps) => {
  return (
    <div className='flex items-baseline justify-between w-2/4 bg-gray rounded-lg pl-3 drop-shadow-custom-sm-blue mb-2'>
      <div className='flex w-full items-baseline'>
        <div className='flex w-3/4 items-baseline'>
          <input type='checkbox' className={inputclass + ' mr-2'} />
          {task.text}
        </div>
        <div className='flex justify-end w-1/4'>
          {ButtonFactory({ type: 'edit' })}
          {ButtonFactory({ type: 'delete' })}
        </div>
      </div>
    </div>
  );
};
