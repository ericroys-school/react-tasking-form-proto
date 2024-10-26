import { zodResolver } from '@hookform/resolvers/zod';
import { NewTask } from '../../../types/tasks';
import { vNewTask } from '../../../validators/tasks';
import { RegisteredInput } from '../../RegisteredInput';
import { useForm } from 'react-hook-form';
import { ButtonFactory } from '../../buttonFactory';
import { errclass, inputclass } from '../../../styling/styles';
import { createTask } from '../../../api/tasks/createTask';

export type Props = {
  refresh?: () => void;
};
export const AddTask = ({ refresh }: Props) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<NewTask>({ resolver: zodResolver(vNewTask) });

  const onSubmit = async () => {
    //TODO: wrap in try/catch and have component reflect error
    // call the api to create a task by passing in our collected values
    // from form handler
    await createTask({ ...getValues() });
    //call refresh so the parent knows we added something
    if (refresh) refresh();
  };

  return (
    <>
      <div className='flex justify-center w-2/4'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex w-full justify-evenly'>
          <div className='flex w-4/5 flex-grow'>
            {/* Use an input that is registered with the form handler */}
            <RegisteredInput
              register={register('text')}
              className={inputclass + ' flex-grow'}
            />
            {errors.text && (
              <p className={errclass}>{`${errors.text.message}`}</p>
            )}
          </div>
          {/* use button factory to add an add button for submit ops */}
          {ButtonFactory({ type: 'add', btnType: 'submit' })}
        </form>
      </div>
    </>
  );
};
