import { zodResolver } from '@hookform/resolvers/zod';
import { NewTask } from '../../../types/tasks';
import { vNewTask } from '../../../validators/tasks';
import { RegisteredInput } from '../../RegisteredInput';
import { useForm } from 'react-hook-form';
import { ButtonFactory } from '../../buttonFactory';
import { errclass, inputclass } from '../../../styling/styles';
import { useAppDispatch } from '../../../store/storeHooks';
import { addTask } from '../../../reducers/tasks/taskList';

export const AddTask = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<NewTask>({ resolver: zodResolver(vNewTask) });

  const onSubmit = () => {
    dispatch(addTask({ ...getValues() }));
    reset();
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
