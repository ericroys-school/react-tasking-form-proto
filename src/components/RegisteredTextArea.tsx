import { UseFormRegisterReturn } from 'react-hook-form';
import { inputclass, lblClassDark } from '../styling/styles';

export type Props = {
  register: UseFormRegisterReturn;
  label?: string;
  className?: string;
  labelClassName?: string;
  value?: string | number | readonly string[] | undefined;
};
export const RegisteredTextArea = ({
  register,
  className,
  label,
  labelClassName,
  value,
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
      <textarea
        id={register.name}
        className={className ? className : inputclass}
        defaultValue={value}
        {...register}
      />
    </>
  );
};
