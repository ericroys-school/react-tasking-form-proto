import IconWithText from '../lib/styledIconText';
import { btnclass, errclass, inputclass, lblClass } from '../styling/styles';
import { SiMinutemailer } from 'react-icons/si';
import { NewTask } from '../types/tasks';
import { vNewTask } from '../validators/tasks';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const MyForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<NewTask>({ resolver: zodResolver(vNewTask) });

  return (
    <div className='flex justify-center w-full'>
      <form onSubmit={() => {}} className='flex w-2/4'>
        <input
          id='company'
          {...register('text')}
          placeholder='Enter a task name'
          className={inputclass}
        />
        {errors.text && <p className={errclass}>{`${errors.text.message}`}</p>}

        <button disabled={isSubmitting} className={btnclass} type='submit'>
          <IconWithText
            icon={SiMinutemailer}
            iconClass={
              'fill-redish mb-1 ml-1 mr-2 translate-y-1 drop-shadow-custom-sm-blue'
            }
            text={'Save'}
            txtClass={
              'font-extrabold text-black mr-2 drop-shadow-custom-m-gray hover:text-white'
            }
          />
        </button>
      </form>
    </div>
  );
};