import { useForm } from 'react-hook-form';
import { UpdateTask } from '../types/tasks';
import { zodResolver } from '@hookform/resolvers/zod';
import { vUpdateTask } from '../validators/tasks';
import { RegisteredInput } from './RegisteredInput';
import { errclass } from '../styling/styles';
import { ButtonFactory } from './buttonFactory';

export const MyFormContainer = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateTask>({ resolver: zodResolver(vUpdateTask) });

  return (
    <form
      onSubmit={handleSubmit(() => {
        console.log('KJDLKFJSKLJFLSJD:KLS');
      })}>
      <RegisteredInput register={register('text')} value={'this is a test'} />
      {errors.text && <p className={errclass}>{`${errors.text?.message}`}</p>}
      <div className='flex'>
        {ButtonFactory({ type: 'save', btnType: 'submit' })}
      </div>
    </form>
  );
};
