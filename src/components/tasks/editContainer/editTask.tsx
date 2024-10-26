import { zodResolver } from '@hookform/resolvers/zod';
import { vUpdateTask } from '../../../validators/tasks';
import { useForm } from 'react-hook-form';
import { Task, UpdateTask } from '../../../types/tasks';
import { RegisteredCheckBox } from '../../RegisteredCheckBox';
import { RegisteredInput } from '../../RegisteredInput';
import { ErrorPage } from '../../../pages/error';
import { TaskService } from '../../../services/tasks/tasksvc';
import { RegisteredTextArea } from '../../RegisteredTextArea';
import { ButtonFactory } from '../../buttonFactory';
import { useEffect, useState } from 'react';
import { errclass } from '../../../styling/styles';

export type Props = {
  taskService: TaskService;
  id: string;
  onSave: () => void;
  onCancel: () => void;
};
export const EditTask = ({ id, onSave, onCancel, taskService }: Props) => {
  if (!id) return <ErrorPage error='No id provided' />;
  const [data, setData] = useState<Task | undefined>();
  const [submitError, setSubmitError] = useState<string | undefined>();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<UpdateTask>({
    values: data,
    resolver: zodResolver(vUpdateTask),
  });

  const onSubmit = async () => {
    try {
      await taskService.updateTask(id, { ...getValues() });
      onSave();
    } catch (error) {
      console.log(typeof error);
      setSubmitError(typeof error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      let data = await taskService.getTask(id);
      setData(data);
    };
    getData();
  }, [setData, id]);

  return (
    <>
      <div className='flex justify-center w-full'>
        {submitError && <p className={errclass}>{submitError}</p>}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col w-full'>
          <div className='flex flex-col'>
            <RegisteredCheckBox
              register={register('isCompleted')}
              label='Completed'
              value={data?.isCompleted}
            />
            {errors.isCompleted && (
              <p className={errclass}>{`${errors.isCompleted?.message}`}</p>
            )}
            <RegisteredInput register={register('text')} label='Task Name' />
            {errors.text && (
              <p className={errclass}>{`${errors.text?.message}`}</p>
            )}
            <RegisteredTextArea
              register={register('description')}
              label='Description'
              value={data && data.description ? data.description : undefined}
            />
            {errors.description && (
              <p className={errclass}>{`${errors.description?.message}`}</p>
            )}
          </div>
          <div className='flex'>
            {ButtonFactory({
              type: 'cancel',
              btnType: 'button',
              onClick: () => onCancel(),
            })}
            {ButtonFactory({ type: 'save', btnType: 'submit' })}
          </div>
        </form>
      </div>
    </>
  );
};
