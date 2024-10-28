import { zodResolver } from '@hookform/resolvers/zod';
import { vUpdateTask } from '../../../validators/tasks';
import { useForm } from 'react-hook-form';
import { Task, TaskUpdate } from '../../../types/tasks';
import { RegisteredCheckBox } from '../../RegisteredCheckBox';
import { RegisteredInput } from '../../RegisteredInput';
import { TaskService } from '../../../services/tasks/tasksvc';
import { RegisteredTextArea } from '../../RegisteredTextArea';
import { ButtonFactory } from '../../buttonFactory';
import { useEffect, useState } from 'react';
import { errclass } from '../../../styling/styles';
import { useAppDispatch, useAppSelector } from '../../../store/storeHooks';
import { selectCurrentTask, setTask } from '../../../reducers/tasks/task';
import { updateTask } from '../../../reducers/tasks/taskList';

export type Props = {
  taskService: TaskService;
};
export const EditTask = ({ taskService }: Props) => {
  const task = useAppSelector(selectCurrentTask);
  const dispatch = useAppDispatch();
  if (!task.id || !task.show) return null;
  const id: string = task.id;

  const [data, setData] = useState<Task | undefined>();
  const [submitError, setSubmitError] = useState<string | undefined>();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<TaskUpdate>({
    values: data,
    resolver: zodResolver(vUpdateTask),
  });

  const onSubmit = async () => {
    try {
      dispatch(updateTask({ id: id, task: { ...getValues() } }));
      dispatch(setTask({ id: id, show: false }));
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
              onClick: () => dispatch(setTask({ id: undefined, show: false })),
            })}
            {ButtonFactory({ type: 'save', btnType: 'submit' })}
          </div>
        </form>
      </div>
    </>
  );
};
