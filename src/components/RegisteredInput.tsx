import { UseFormRegisterReturn } from 'react-hook-form';
import { inputclass, lblClassDark } from '../styling/styles';

export type Props = {
  register: UseFormRegisterReturn;
  label?: string;
  className?: string;
  labelClassName?: string;
  value?: string | number | readonly string[] | undefined;
};
export const RegisteredInput = ({
  register,
  className,
  label,
  labelClassName,
}: Props) => {
  return (
    <>
      {label ? (
        <label
          className={labelClassName ? labelClassName : lblClassDark}
          htmlFor={register.name}>
          {label}
        </label>
      ) : null}
      <input
        {...register}
        id={register.name}
        className={className ? className : inputclass}
      />
    </>
  );
};
