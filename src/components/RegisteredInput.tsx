import { UseFormRegisterReturn } from 'react-hook-form';
import { inputclass } from '../styling/styles';

export type Props = {
  register: UseFormRegisterReturn;
  className?: string;
};
export const RegisteredInput = ({ register, className }: Props) => {
  return (
    <input
      id={register.name}
      className={className ? className : inputclass}
      {...register}
    />
  );
};
